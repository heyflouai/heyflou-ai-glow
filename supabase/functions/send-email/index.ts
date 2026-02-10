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
    <img src="https://heyflou.com/assets/heyflou-logo-new-9MAiMHaw.png" alt="HeyFlou" width="180" style="display:inline-block;" />
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

function isNewsletterSource(source: string): boolean {
  const s = source.toLowerCase();
  return s.includes("newsletter") || s.includes("subscribe");
}

function buildNewsletterWelcomeHtml(name: string, lang: "es" | "en"): string {
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
      ${isEs ? `🎉 ¡Bienvenido/a, ${name}!` : `🎉 Welcome, ${name}!`}
    </h1>
    <p style="color:rgba(255,255,255,0.85);font-size:15px;margin:12px 0 0;font-weight:400;">
      ${isEs ? "¡Ya eres parte de la comunidad HeyFlou!" : "You're now part of the HeyFlou community!"}
    </p>
    <div style="margin-top:24px;">
      <svg viewBox="0 0 600 40" width="100%" height="40" preserveAspectRatio="none" style="display:block;">
        <path d="M0,20 Q150,40 300,20 T600,20 L600,40 L0,40 Z" fill="#ffffff"/>
      </svg>
    </div>
  </td></tr>

  <!-- LOGO -->
  <tr><td style="background:#ffffff;padding:24px 40px 8px;text-align:center;">
    <img src="https://heyflou.com/assets/heyflou-logo-new-9MAiMHaw.png" alt="HeyFlou" width="180" style="display:inline-block;" />
  </td></tr>

  <!-- CONTENT -->
  <tr><td style="background:#ffffff;padding:24px 40px 40px;">
    <p style="color:#374151;font-size:16px;line-height:1.7;margin:0 0 24px;text-align:center;">
      ${isEs
        ? "Gracias por suscribirte. Recibirás tips de automatización, casos de éxito y novedades directamente en tu bandeja."
        : "Thanks for subscribing. You'll receive automation tips, success stories, and updates straight to your inbox."}
    </p>

    <!-- Services Box -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
      <tr><td style="background:linear-gradient(135deg,#eff6ff,#f5f3ff);border-radius:12px;padding:20px 24px;border-left:4px solid #8b5cf6;">
        <p style="margin:0 0 12px;color:#1f2937;font-size:15px;font-weight:700;">
          ${isEs ? "🚀 Lo que hacemos por tu negocio:" : "🚀 What we do for your business:"}
        </p>
        <p style="margin:0;color:#4b5563;font-size:14px;line-height:2;">
          ✈️ ${isEs ? "Automatización para Agencias de Viaje" : "Travel Agency Automation"}<br/>
          🏥 ${isEs ? "Automatización para Salud" : "Healthcare Automation"}<br/>
          💪 ${isEs ? "Automatización para Fitness y Educación" : "Fitness & Education Automation"}<br/>
          ⚡ ${isEs ? "Automatización Personalizada" : "Custom Automation"}<br/>
          🧠 ${isEs ? "Consultoría en IA" : "AI Consulting"}
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

// ── HubSpot helpers ──────────────────────────────────────────────────────────

async function sendToHubSpot(
  email: string,
  name: string,
  formSource: string,
  message: string,
  isNewsletter: boolean,
  apiKey: string,
): Promise<{ success: boolean; action: string }> {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ") || "";

  // Only standard HubSpot properties (custom ones need manual setup in HubSpot)
  const properties: Record<string, string> = {
    email,
    firstname: firstName,
    lastname: lastName,
    lifecyclestage: isNewsletter ? "subscriber" : "lead",
    hs_lead_status: "NEW",
  };

  // Try create
  const createRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties }),
  });

  if (createRes.ok) {
    return { success: true, action: "created" };
  }

  // 409 = duplicate → update
  if (createRes.status === 409) {
    console.log("HubSpot: Contact exists, updating…");
    return await updateHubSpotContact(email, properties, apiKey);
  }

  const errBody = await createRes.text();
  throw new Error(`HubSpot create failed [${createRes.status}]: ${errBody}`);
}

async function updateHubSpotContact(
  email: string,
  properties: Record<string, string>,
  apiKey: string,
): Promise<{ success: boolean; action: string }> {
  // Search for existing contact by email
  const searchRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filterGroups: [{
        filters: [{ propertyName: "email", operator: "EQ", value: email }],
      }],
    }),
  });

  if (!searchRes.ok) {
    const errBody = await searchRes.text();
    throw new Error(`HubSpot search failed [${searchRes.status}]: ${errBody}`);
  }

  const searchData = await searchRes.json();
  if (!searchData.results?.length) {
    throw new Error("HubSpot: contact not found after 409");
  }

  const contactId = searchData.results[0].id;
  // Remove lifecyclestage from update (HubSpot doesn't allow downgrade)
  const { lifecyclestage: _, ...updateProps } = properties;

  const updateRes = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties: updateProps }),
  });

  if (!updateRes.ok) {
    const errBody = await updateRes.text();
    throw new Error(`HubSpot update failed [${updateRes.status}]: ${errBody}`);
  }

  return { success: true, action: "updated" };
}

// ── Main handler ─────────────────────────────────────────────────────────────

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    console.log("RESEND_API_KEY loaded:", RESEND_API_KEY ? "YES" : "NO");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL");
    console.log("ADMIN_EMAIL loaded:", ADMIN_EMAIL ? "YES" : "NO");
    if (!ADMIN_EMAIL) {
      throw new Error("ADMIN_EMAIL is not configured");
    }

    const HUBSPOT_API_KEY = Deno.env.get("HUBSPOT_API_KEY");
    console.log("HUBSPOT_API_KEY loaded:", HUBSPOT_API_KEY ? "YES" : "NO");

    const resend = new Resend(RESEND_API_KEY);

    const body = await req.json();
    console.log("Received request body:", JSON.stringify(body));
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
    console.log("Detected language:", lang);

    const displayName = name || email.split("@")[0];

    // Detect newsletter vs regular form
    const isNewsletter = isNewsletterSource(formSource);
    const userHtml = isNewsletter
      ? buildNewsletterWelcomeHtml(displayName, lang)
      : buildUserConfirmationHtml(displayName, lang);
    const userSubject = isNewsletter
      ? (lang === "es" ? "🎉 ¡Bienvenido/a a HeyFlou!" : "🎉 Welcome to HeyFlou!")
      : (lang === "es" ? "✅ Recibimos tu mensaje - HeyFlou" : "✅ We Received Your Message - HeyFlou");

    // Build all promises: user email, admin email, HubSpot
    const promises: Promise<unknown>[] = [
      // User email
      resend.emails.send({
        from: "HeyFlou <noreply@support.heyflou.com>",
        to: email,
        subject: userSubject,
        html: userHtml,
      }),
      // Admin notification
      resend.emails.send({
        from: "HeyFlou Leads <leads@support.heyflou.com>",
        to: ADMIN_EMAIL,
        subject: `🔔 New Lead from heyflou.com [${formSource}]`,
        html: buildAdminNotificationHtml(
          { Name: displayName, Email: email, ...fields },
          formSource
        ),
      }),
    ];

    // Add HubSpot if key is present (non-blocking)
    if (HUBSPOT_API_KEY) {
      promises.push(
        sendToHubSpot(email, displayName, formSource, message, isNewsletter, HUBSPOT_API_KEY)
      );
    } else {
      console.warn("HUBSPOT_API_KEY not set – skipping HubSpot sync");
    }

    console.log("Sending user email to:", email, "| newsletter:", isNewsletter);
    console.log("Sending admin notification to:", ADMIN_EMAIL);
    if (HUBSPOT_API_KEY) console.log("Syncing to HubSpot…");

    const results = await Promise.allSettled(promises);

    const labels = ["User email", "Admin email", "HubSpot"];
    const errors: string[] = [];
    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.error(`${labels[i]} FAILED:`, r.reason);
        errors.push(`${labels[i]} failed`);
      } else {
        console.log(`${labels[i]} SUCCESS:`, JSON.stringify(r.value));
      }
    });

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
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack");
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
