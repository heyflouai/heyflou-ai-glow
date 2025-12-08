export type Dept = {
  id: string
  name: string
  problem: string
  solutions: string[]        // 2–4 bullets max
  kpis: string[]             // short outcome chips
  integrations?: string[]    // optional badges
}

export const departments: Dept[] = [
  {
    id: "marketing",
    name: "Marketing (Travel Agencies)",
    problem: "Travel agencies struggle with inconsistent bookings because their marketing is manual, slow, and hard to track.",
    solutions: [
      "Automated WhatsApp & email follow-ups",
      "AI chatbot promoting packages 24/7",
      "High-conversion landing pages for deals"
    ],
    kpis: ["Higher conversion rate", "More engaged leads", "Lower cost per booking"],
    integrations: ["WhatsApp", "Meta Ads", "Google Ads", "Mailchimp"]
  },
  {
    id: "sales",
    name: "Sales (Travel Agencies)",
    problem: "Leads go cold quickly due to slow responses and manual follow-ups.",
    solutions: [
      "Instant AI responses to inquiries",
      "Automated reminders for quotes & price drops",
      "CRM pipeline built for travel agencies"
    ],
    kpis: ["Faster response time", "More closed bookings", "Higher quote-to-sale conversion"],
    integrations: ["HubSpot", "Pipedrive", "Calendly", "WhatsApp"]
  },
  {
    id: "customer-experience",
    name: "Customer Experience (Travel)",
    problem: "Travelers expect fast, personalized service — but agencies can't answer everything manually.",
    solutions: [
      "24/7 AI travel assistant",
      "Automated pre-trip messages",
      "Personalized package suggestions"
    ],
    kpis: ["Higher satisfaction", "Fewer repetitive questions", "Lower cancellation rate"],
    integrations: ["WhatsApp", "Email", "Booking Systems"]
  },
  {
    id: "operations",
    name: "Operations (Travel Agencies)",
    problem: "Managing documents, payments, and itinerary prep manually causes delays and mistakes.",
    solutions: [
      "Automated reminders for payments & documents",
      "Centralized traveler info in CRM",
      "Smart workflows for trip preparation"
    ],
    kpis: ["Fewer operational errors", "Faster processing", "More on-time payments"],
    integrations: ["Stripe", "Google Sheets", "Notion", "Zapier"]
  },
  {
    id: "therapists",
    name: "Physiotherapists & Therapists",
    problem: "Therapists lose clients due to slow responses, manual intake, and inconsistent follow-ups.",
    solutions: [
      "AI intake chatbot",
      "Appointment automation",
      "CRM for patient tracking",
      "Automated retention messages"
    ],
    kpis: ["Lower no-shows", "More weekly appointments", "Higher long-term retention"],
    integrations: ["Google Calendar", "WhatsApp", "Email", "CRM"]
  }
]
