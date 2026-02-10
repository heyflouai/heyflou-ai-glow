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
  const year = new Date().getFullYear();
  return `
<!DOCTYPE html>
<html lang="${lang}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

  <!-- GRADIENT HEADER -->
  <tr><td style="background:linear-gradient(135deg,#3b82f6,#8b5cf6);padding:48px 40px 36px;text-align:center;">
    <h1 style="color:#ffffff;font-size:32px;margin:0;font-weight:800;">
      ${isEs ? `¡Hola ${name}! 👋` : `Hi ${name}! 👋`}
    </h1>
    <p style="color:rgba(255,255,255,0.85);font-size:15px;margin:12px 0 0;font-weight:400;">
      ${isEs ? "Automatización inteligente para tu negocio" : "Smart Automation for Your Business"}
    </p>
    <!-- Wave separator -->
    <div style="margin-top:24px;">
      <svg viewBox="0 0 600 40" width="100%" height="40" preserveAspectRatio="none" style="display:block;">
        <path d="M0,20 Q150,40 300,20 T600,20 L600,40 L0,40 Z" fill="#ffffff"/>
      </svg>
    </div>
  </td></tr>

  <!-- LOGO SECTION -->
  <tr><td style="background:#ffffff;padding:24px 40px 8px;text-align:center;">
    <img src="https://heyflou.com/favicon.png" alt="HeyFlou" width="56" height="56" style="display:inline-block;border-radius:12px;" />
    <p style="color:#6b7280;font-size:13px;margin:8px 0 0;font-weight:600;letter-spacing:0.5px;">HEYFLOU</p>
  </td></tr>

  <!-- MAIN CONTENT -->
  <tr><td style="background:#ffffff;padding:24px 40px 40px;">
    <p style="color:#374151;font-size:16px;line-height:1.7;margin:0 0 24px;text-align:center;">
      ${isEs
        ? `Recibimos tu mensaje y nuestro equipo lo está revisando. Te responderemos dentro de las próximas <strong style="color:#1f2937;">24 horas</strong>.`
        : `We received your message and our team is reviewing it. We'll get back to you within <strong style="color:#1f2937;">24 hours</strong>.`}
    </p>

    <!-- Highlight Box -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
      <tr><td style="background:linear-gradient(135deg,#eff6ff,#f5f3ff);border-radius:12px;padding:20px 24px;border-left:4px solid #8b5cf6;">
        <p style="margin:0;color:#4b5563;font-size:15px;line-height:1.6;">
          💡 <strong style="color:#1f2937;">${isEs ? "¿Quieres saber más?" : "Want to learn more?"}</strong><br/>
          ${isEs
            ? "Agenda una llamada estratégica gratuita y descubre cómo la automatización puede transformar tu negocio."
            : "Book a free strategy call and discover how automation can transform your business."}
        </p>
      </td></tr>
    </table>

    <!-- Primary CTA -->
    <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px;"><tr><td>
      <a href="https://calendly.com/heyflou-ai/30min" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:10px;font-size:16px;font-weight:700;letter-spacing:0.3px;">
        ${isEs ? "📅 Agendar Llamada Gratuita" : "📅 Book Free Strategy Call"}
      </a>
    </td></tr></table>

    <!-- Secondary CTAs -->
    <table cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr>
      <td style="padding:0 6px;">
        <a href="https://heyflou.com/services" style="display:inline-block;border:2px solid #e5e7eb;color:#4b5563;text-decoration:none;padding:10px 24px;border-radius:8px;font-size:14px;font-weight:600;">
          ${isEs ? "Ver Servicios" : "View Services"}
        </a>
      </td>
      <td style="padding:0 6px;">
        <a href="https://heyflou.com/about" style="display:inline-block;border:2px solid #e5e7eb;color:#4b5563;text-decoration:none;padding:10px 24px;border-radius:8px;font-size:14px;font-weight:600;">
          ${isEs ? "Sobre Nosotros" : "About Us"}
        </a>
      </td>
    </tr></table>
  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#f9fafb;padding:24px 40px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="color:#6b7280;font-size:14px;margin:0 0 12px;font-weight:500;">
      ${isEs ? "— El equipo de HeyFlou" : "— The HeyFlou Team"}
    </p>
    <table cellpadding="0" cellspacing="0" style="margin:0 auto 12px;"><tr>
      <td style="padding:0 8px;">
        <a href="https://www.linkedin.com/company/heyflou" style="color:#6b7280;text-decoration:none;font-size:13px;">LinkedIn</a>
      </td>
      <td style="color:#d1d5db;">|</td>
      <td style="padding:0 8px;">
        <a href="https://x.com/Heyflou_" style="color:#6b7280;text-decoration:none;font-size:13px;">X / Twitter</a>
      </td>
    </tr></table>
    <p style="color:#9ca3af;font-size:12px;margin:0;">
      © ${year} HeyFlou. All rights reserved. ·
      <a href="https://heyflou.com" style="color:#8b5cf6;text-decoration:none;">heyflou.com</a>
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
