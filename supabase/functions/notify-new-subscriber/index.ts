import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotifyRequest {
  email: string;
  created_at: string;
}

// Sanitize input to prevent email header injection and template injection
function sanitizeForEmail(input: string, maxLength: number = 255): string {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/[\r\n]/g, ' ') // Replace newlines to prevent header injection
    .replace(/[<>]/g, ''); // Remove potential HTML injection chars
}

// Validate email format
function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

// Validate ISO date string
function isValidISODate(dateStr: string): boolean {
  if (!dateStr || dateStr.length > 50) return false;
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const rawEmail = body?.email;
    const rawCreatedAt = body?.created_at;

    // Validate and sanitize inputs
    if (!rawEmail || !rawCreatedAt) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const email = sanitizeForEmail(rawEmail, 254);
    const created_at = sanitizeForEmail(rawCreatedAt, 50);

    if (!isValidEmail(email)) {
      console.error("Invalid email format");
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!isValidISODate(created_at)) {
      console.error("Invalid date format");
      return new Response(
        JSON.stringify({ error: "Invalid date format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Format the timestamp for display (sanitized input)
    const subscribedAt = new Date(created_at).toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    });

    // Build email body with sanitized inputs
    const emailBody = `Email: ${email}
Subscribed at: ${subscribedAt}
Source: HeyFlou Website – Get AI Insights`;

    console.log("Sending notification email for new subscriber");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HeyFlou <onboarding@resend.dev>",
        to: ["heyflou.ai@gmail.com"],
        subject: "New AI Insights Subscriber",
        text: emailBody,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Resend API error:", errorText?.slice(0, 200));
      return new Response(
        JSON.stringify({ error: "Failed to send notification email" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const emailResult = await emailResponse.json();
    console.log("Notification email sent successfully");

    return new Response(
      JSON.stringify({ success: true, messageId: emailResult.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in notify-new-subscriber function:", error?.message);
    return new Response(
      JSON.stringify({ error: "An error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
