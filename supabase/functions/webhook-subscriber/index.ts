import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const N8N_WEBHOOK_URL = "https://aidirected.app.n8n.cloud/webhook/new-subscriber";

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check if already subscribed
    const { data: existing } = await supabase
      .from("subscribers")
      .select("id")
      .eq("email", email.trim().toLowerCase())
      .maybeSingle();

    if (existing) {
      return new Response(
        JSON.stringify({ code: "ALREADY_SUBSCRIBED", message: "You're already subscribed!" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert new subscriber
    const { data: newSubscriber, error: insertError } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase() })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      throw new Error("Failed to save subscriber");
    }

    // Forward to n8n webhook
    try {
      const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: newSubscriber.email,
          subscribed_at: newSubscriber.created_at,
          source: "heyflou-website"
        }),
      });

      if (!webhookResponse.ok) {
        console.error("n8n webhook failed:", await webhookResponse.text());
      }
    } catch (webhookError) {
      // Log but don't fail the subscription if webhook fails
      console.error("n8n webhook error:", webhookError);
    }

    return new Response(
      JSON.stringify({ code: "SUCCESS", message: "Successfully subscribed!" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
