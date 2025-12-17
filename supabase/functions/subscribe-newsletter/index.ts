import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
}

// Sanitize input to prevent injection attacks
function sanitizeInput(input: string, maxLength: number = 255): string {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/[<>]/g, ''); // Remove potential HTML/script injection chars
}

// Validate email with stricter regex and length limit
function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const rawEmail = body?.email;

    // Sanitize and validate email
    const email = sanitizeInput(rawEmail, 254);
    
    if (!isValidEmail(email)) {
      console.log("Invalid email format:", email?.slice(0, 50));
      return new Response(
        JSON.stringify({ error: "Invalid email format", code: "INVALID_EMAIL" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client with service role key
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const normalizedEmail = email.toLowerCase().trim();

    // Rate limiting: Check for recent subscriptions (max 5 attempts per hour from any source)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count: recentCount, error: countError } = await supabase
      .from("subscribers")
      .select("*", { count: "exact", head: true })
      .gte("created_at", oneHourAgo);

    if (countError) {
      console.error("Error checking rate limit:", countError);
    } else if (recentCount && recentCount > 50) {
      console.warn("Rate limit exceeded: too many subscriptions in the last hour");
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later.", code: "RATE_LIMITED" }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from("subscribers")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (checkError) {
      console.error("Error checking subscriber:", checkError);
      return new Response(
        JSON.stringify({ error: "Failed to check subscription status" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (existingSubscriber) {
      console.log("Duplicate subscription attempt");
      return new Response(
        JSON.stringify({ 
          message: "You're already subscribed.", 
          code: "ALREADY_SUBSCRIBED" 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Insert new subscriber
    const { data: newSubscriber, error: insertError } = await supabase
      .from("subscribers")
      .insert({ email: normalizedEmail })
      .select("email, created_at")
      .single();

    if (insertError) {
      console.error("Error inserting subscriber:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to subscribe" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("New subscriber added successfully");

    // Trigger n8n webhook in the background (fire-and-forget)
    const webhookUrl = `${supabaseUrl}/functions/v1/sync-subscriber-webhook`;
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseServiceKey}`,
      },
      body: JSON.stringify({
        email: newSubscriber.email,
        created_at: newSubscriber.created_at,
      }),
    }).then(() => {
      console.log("Successfully triggered sync-subscriber-webhook");
    }).catch((err) => {
      console.error("Failed to trigger sync-subscriber-webhook:", err?.message);
    });

    return new Response(
      JSON.stringify({ 
        message: "Thanks for subscribing. You'll start receiving AI insights soon.",
        code: "SUCCESS",
        subscriber: {
          email: newSubscriber.email,
          created_at: newSubscriber.created_at
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in subscribe-newsletter function:", error?.message);
    return new Response(
      JSON.stringify({ error: "An error occurred. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
