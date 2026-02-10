import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Spanish word detection
const SPANISH_WORDS = [
  "hola", "buenos", "días", "tardes", "noches", "gracias", "por favor",
  "necesito", "quiero", "tengo", "estoy", "somos", "empresa", "negocio",
  "automatización", "citas", "clientes", "tiempo", "trabajo", "ayuda",
  "información", "consulta", "interesado", "servicio", "problema",
  "solución", "equipo", "reservas", "pacientes", "agenda", "horario",
  "también", "porque", "como", "para", "desde", "sobre", "entre",
  "puede", "pueden", "nuestra", "nuestro", "nosotros", "ustedes",
  "quisiera", "podría", "gustaría", "sería", "está", "están",
];

function detectLanguage(text: string): "es" | "en" {
  if (!text) return "en";
  const lower = text.toLowerCase();
  let spanishHits = 0;
  for (const word of SPANISH_WORDS) {
    if (lower.includes(word)) spanishHits++;
  }
  return spanishHits >= 2 ? "es" : "en";
}

function buildUserConfirmationHtml(name: string, lang: "es" | "en"): string {
  const isEs = lang === "es";
  return `
<!DOCTYPE html>
<html lang="${lang}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
  <tr><td style="background:linear-gradient(135deg,#14b8a6,#7c3aed);padding:32px 40px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;font-weight:700;">HeyFlou</h1>
    <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:8px 0 0;">AI Automation for Small Businesses</p>
  </td></tr>
  <tr><td style="padding:40px;">
    <h2 style="color:#1a1a2e;font-size:22px;margin:0 0 16px;font-weight:700;">
      ${isEs ? `¡Hola ${name}!` : `Hi ${name}!`}
    </h2>
    <p style="color:#4a4a5a;font-size:16px;line-height:1.6;margin:0 0 24px;">
      ${isEs
        ? "Recibimos tu mensaje y nuestro equipo lo está revisando. Te responderemos dentro de las próximas <strong>24 horas</strong>."
        : "We received your message and our team is reviewing it. We'll get back to you within <strong>24 hours</strong>."}
    </p>
    <p style="color:#4a4a5a;font-size:16px;line-height:1.6;margin:0 0 24px;">
      ${isEs
        ? "Mientras tanto, si deseas agendar una llamada estratégica gratuita:"
        : "In the meantime, if you'd like to book a free strategy call:"}
    </p>
    <table cellpadding="0" cellspacing="0" style="margin:0 auto 24px;"><tr><td>
      <a href="https://calendly.com/heyflou-ai/30min" style="display:inline-block;background:linear-gradient(135deg,#14b8a6,#7c3aed);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:16px;font-weight:600;">
        ${isEs ? "Agendar Llamada Gratuita" : "Book Free Strategy Call"}
      </a>
    </td></tr></table>
    <p style="color:#8a8a9a;font-size:14px;line-height:1.5;margin:0;">
      ${isEs ? "— El equipo de HeyFlou" : "— The HeyFlou Team"}
    </p>
  </td></tr>
  <tr><td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="color:#9ca3af;font-size:12px;margin:0;">
      © ${new Date().getFullYear()} HeyFlou. All rights reserved.<br>
      <a href="https://heyflou.com" style="color:#14b8a6;text-decoration:none;">heyflou.com</a>
    </p>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function buildAdminNotificationHtml(fields: Record<string, string>, formSource: string): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #f3f4f6;white-space:nowrap;vertical-align:top;">${k}</td><td style="padding:10px 16px;color:#4b5563;border-bottom:1px solid #f3f4f6;">${v}</td></tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
  <tr><td style="background:#1a1a2e;padding:24px 40px;">
    <h1 style="color:#ffffff;font-size:20px;margin:0;">🔔 New Lead from heyflou.com</h1>
    <p style="color:rgba(255,255,255,0.7);font-size:14px;margin:8px 0 0;">Source: ${formSource}</p>
  </td></tr>
  <tr><td style="padding:24px 40px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      ${rows}
    </table>
    <p style="color:#9ca3af;font-size:12px;margin:16px 0 0;">Received: ${new Date().toISOString()}</p>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL");
    if (!ADMIN_EMAIL) {
      throw new Error("ADMIN_EMAIL is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);

    const body = await req.json();
    const {
      name,
      email,
      formSource = "website",
      fields = {},
      message = "",
    } = body;

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Detect language from message and name
    const textToAnalyze = `${message} ${name || ""} ${Object.values(fields).join(" ")}`;
    const lang = detectLanguage(textToAnalyze);

    const displayName = name || email.split("@")[0];

    // Send both emails in parallel
    const [userEmailResult, adminEmailResult] = await Promise.allSettled([
      // User confirmation email
      resend.emails.send({
        from: "HeyFlou <noreply@heyflou.com>",
        to: [email],
        subject: lang === "es"
          ? "✅ Recibimos tu mensaje - HeyFlou"
          : "✅ We Received Your Message - HeyFlou",
        html: buildUserConfirmationHtml(displayName, lang),
      }),
      // Admin notification email
      resend.emails.send({
        from: "HeyFlou Leads <noreply@heyflou.com>",
        to: [ADMIN_EMAIL],
        subject: `🔔 New Lead from heyflou.com [${formSource}]`,
        html: buildAdminNotificationHtml(
          { Name: displayName, Email: email, ...fields },
          formSource
        ),
      }),
    ]);

    const errors: string[] = [];
    if (userEmailResult.status === "rejected") {
      console.error("User email failed:", userEmailResult.reason);
      errors.push("User confirmation email failed");
    }
    if (adminEmailResult.status === "rejected") {
      console.error("Admin email failed:", adminEmailResult.reason);
      errors.push("Admin notification email failed");
    }

    return new Response(
      JSON.stringify({
        success: true,
        lang,
        errors: errors.length > 0 ? errors : undefined,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error in send-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
