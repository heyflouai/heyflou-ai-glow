export interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
  source: string;
}

export interface IndustryUseCase {
  industry: string;
  automations: {
    name: string;
    description: string;
    expectedOutcome: string;
  }[];
}

export const keyMetrics: Metric[] = [
  {
    id: "revenue_increase",
    value: "91%",
    label: "Revenue Increase",
    description: "of AI-using SMBs report revenue increase",
    source: "HeyFlou SMB AI Analysis (2024–2025)"
  },
  {
    id: "profit_margins",
    value: "86%",
    label: "Improved Margins",
    description: "improved profit margins with AI adoption",
    source: "HeyFlou SMB AI Analysis (2024–2025)"
  },
  {
    id: "scale_operations",
    value: "87%",
    label: "Scale Operations",
    description: "scale operations more effectively",
    source: "HeyFlou SMB AI Analysis (2024–2025)"
  },
  {
    id: "ai_usage_growth",
    value: "55%",
    label: "U.S. SMB AI Usage",
    description: "in 2025 (up from 39% in 2024)",
    source: "HeyFlou SMB AI Analysis (2024–2025)"
  },
  {
    id: "time_savings",
    value: "20+",
    label: "Hours Saved",
    description: "hours saved per employee per month",
    source: "HeyFlou SMB AI Analysis (2024–2025)"
  },
  {
    id: "cost_savings",
    value: "$2K",
    label: "Monthly Savings",
    description: "average monthly cost savings per business",
    source: "HeyFlou SMB AI Analysis (2024–2025)"
  }
];

export const additionalMetrics = {
  productivityLift: "~40% average productivity lift after AI adoption",
  chatbotResolution: "AI chatbots resolve up to 80% of FAQ-type queries",
  supportCostReduction: "cutting support costs ~50%",
  marketGrowth: "Global SMB AI market projected ~14% CAGR through 2032",
  competitiveness: "82% of leaders say AI is critical to competitiveness",
  futureCompetitiveness: "≈98% agree it will define competitiveness in 3–5 years",
  marketingConversion: "Targeted AI marketing can raise conversion ~30%"
};

export const industryUseCases: IndustryUseCase[] = [
  {
    industry: "Retail",
    automations: [
      {
        name: "Inventory Management",
        description: "Automated stock monitoring and reorder alerts",
        expectedOutcome: "reduce stockouts by 60%"
      },
      {
        name: "Customer Support Chatbot",
        description: "AI-powered FAQ handling and order tracking",
        expectedOutcome: "resolve 80% of inquiries instantly"
      },
      {
        name: "Personalized Marketing",
        description: "Dynamic email campaigns based on purchase history",
        expectedOutcome: "+30% conversion rates"
      }
    ]
  },
  {
    industry: "Services",
    automations: [
      {
        name: "Lead Qualification",
        description: "Automated lead scoring and follow-up sequences",
        expectedOutcome: "+40% qualified leads"
      },
      {
        name: "Appointment Scheduling",
        description: "AI calendar management and client communications",
        expectedOutcome: "reduce no-shows by 50%"
      },
      {
        name: "Proposal Generation",
        description: "Template-based proposal creation with client data",
        expectedOutcome: "70% faster proposal delivery"
      }
    ]
  },
  {
    industry: "Manufacturing",
    automations: [
      {
        name: "Predictive Maintenance",
        description: "Equipment monitoring and failure prediction",
        expectedOutcome: "−30% downtime"
      },
      {
        name: "Quality Control",
        description: "Automated defect detection and reporting",
        expectedOutcome: "95% accuracy improvement"
      },
      {
        name: "Supply Chain Optimization",
        description: "Automated vendor communications and logistics",
        expectedOutcome: "95% on-time delivery"
      }
    ]
  },
  {
    industry: "Hospitality",
    automations: [
      {
        name: "Guest Communication",
        description: "Automated check-in, requests, and feedback collection",
        expectedOutcome: "+25% guest satisfaction"
      },
      {
        name: "Revenue Management",
        description: "Dynamic pricing based on demand patterns",
        expectedOutcome: "+15% revenue per room"
      },
      {
        name: "Staff Scheduling",
        description: "AI-optimized shift planning and coverage",
        expectedOutcome: "20% reduction in labor costs"
      }
    ]
  },
  {
    industry: "Logistics",
    automations: [
      {
        name: "Route Optimization",
        description: "AI-powered delivery route planning",
        expectedOutcome: "25% fuel cost reduction"
      },
      {
        name: "Shipment Tracking",
        description: "Automated status updates and exception handling",
        expectedOutcome: "90% on-time deliveries"
      },
      {
        name: "Warehouse Management",
        description: "Inventory placement and picking optimization",
        expectedOutcome: "+35% operational efficiency"
      }
    ]
  },
  {
    industry: "Healthcare",
    automations: [
      {
        name: "Patient Scheduling",
        description: "Automated appointment booking and reminders",
        expectedOutcome: "reduce no-shows by 40%"
      },
      {
        name: "Medical Record Processing",
        description: "Automated data entry and documentation",
        expectedOutcome: "75% faster record processing"
      },
      {
        name: "Insurance Verification",
        description: "Automated eligibility checks and pre-authorizations",
        expectedOutcome: "reduce claim denials by 60%"
      }
    ]
  }
];