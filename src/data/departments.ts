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
    name: "Marketing",
    problem: "Manual campaigns, slow A/B tests, and low lead quality.",
    solutions: [
      "AI segmentation & dynamic copy for each audience",
      "Website/chat capture → lead scoring & journeys",
      "Auto creative variants and experiment routing"
    ],
    kpis: ["+30% conversion", "−70% time-to-launch", "+20% MQL→SQL"],
    integrations: ["HubSpot","GA4","Meta","Google Ads"]
  },
  {
    id: "sales",
    name: "Sales",
    problem: "Slow follow-up and CRM busywork kill pipeline.",
    solutions: [
      "Auto-SDR agent: enrich, reply, and book meetings",
      "CRM hygiene: notes, next-steps, and task creation",
      "No-show reactivation and renewal nudges"
    ],
    kpis: ["+30% meetings booked", "−50% lead response time", "+15% win rate"],
    integrations: ["Salesforce","HubSpot","Gmail","Calendly"]
  },
  {
    id: "support",
    name: "Customer Support",
    problem: "Repetitive tickets and long queues raise costs.",
    solutions: [
      "AI deflection for FAQs, order status, policy lookups",
      "Agent-assist answers with sources; escalate edge cases",
      "Proactive alerts from order/system events"
    ],
    kpis: ["−50% support costs", "resolve 70–80% FAQs", "+CSAT"],
    integrations: ["Zendesk","Intercom","Shopify"]
  },
  {
    id: "operations",
    name: "Operations",
    problem: "Status tracking, task routing, and handoffs are manual.",
    solutions: [
      "Auto triage & routing across teams/apps",
      "Exception detection with alerting & summaries",
      "SOP bots to run repeatable workflows"
    ],
    kpis: ["−25% cycle time", "−30% errors", "on-time delivery ↑"],
    integrations: ["Asana","Notion","Slack","Odoo"]
  },
  {
    id: "finance",
    name: "Finance & Accounting",
    problem: "AP/AR, reconciliation, and close are spreadsheet heavy.",
    solutions: [
      "OCR invoices + 3-way match to PO/GRN",
      "Auto posting & approvals to accounting",
      "Cash-flow summaries and variance alerts"
    ],
    kpis: ["70–90% touchless AP", "faster month-end close", "fewer posting errors"],
    integrations: ["QuickBooks","Xero","NetSuite"]
  },
  {
    id: "hr",
    name: "HR & People",
    problem: "Onboarding and policy questions consume hours.",
    solutions: [
      "Automated onboarding checklists & account creation",
      "Policy Q&A bot (24/7) with sourced answers",
      "Training plans and compliance reminders"
    ],
    kpis: ["−50% time-to-onboard", "policy compliance ↑", "fewer tickets"],
    integrations: ["Google Workspace","Okta","BambooHR"]
  },
  {
    id: "it",
    name: "IT & Data",
    problem: "Silos and manual reporting block decisions.",
    solutions: [
      "Connect apps, centralize data (Sheets/DB/warehouse)",
      "Automated KPI dashboards & anomaly alerts",
      "Governance: permissions, logs, least-privilege"
    ],
    kpis: ["real-time visibility", "−80% manual reporting hours"],
    integrations: ["BigQuery","Looker","Power BI","Sheets"]
  },
  {
    id: "product",
    name: "Product / Ecommerce",
    problem: "Catalog QA and content updates don't scale.",
    solutions: [
      "Product data enrichment & spec checks",
      "PDP copy/FAQs/alt-text generation with guardrails",
      "Price/stock monitors with auto fixes or tickets"
    ],
    kpis: ["+10–20% PDP conversion", "−90% listing errors"],
    integrations: ["Shopify","Woo","Contentful"]
  }
]