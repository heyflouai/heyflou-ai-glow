import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactPayload {
  email: string;
  first_name: string;
  last_name: string;
  company: string;
  website: string | null;
  industry: string;
  team_size: string;
  message: string | null;
  source_page: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  referrer: string | null;
  consent: boolean;
  created_at: string;
}

const N8N_WEBHOOK_URL = "https://aidirected.n8n.cloud/webhook/heyflou-contact";

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contact: ContactPayload = await req.json();

    if (!contact.email) {
      console.error("Missing required field: email");
      return new Response(
        JSON.stringify({ error: "Missing required field: email" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`Sending contact data to n8n webhook: ${contact.email}`);

    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: contact.email,
        first_name: contact.first_name,
        last_name: contact.last_name,
        company: contact.company,
        website: contact.website,
        industry: contact.industry,
        team_size: contact.team_size,
        message: contact.message,
        source_page: contact.source_page,
        utm_source: contact.utm_source,
        utm_medium: contact.utm_medium,
        utm_campaign: contact.utm_campaign,
        referrer: contact.referrer,
        consent: contact.consent,
        created_at: contact.created_at,
      }),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error(`n8n webhook error (${webhookResponse.status}):`, errorText?.slice(0, 200));
      return new Response(
        JSON.stringify({ error: "Failed to send to webhook", status: webhookResponse.status }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Successfully sent contact data to n8n webhook");

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in sync-contact-webhook function:", error?.message);
    return new Response(
      JSON.stringify({ error: "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
