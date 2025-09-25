export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  useCase: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: {
    primary: string;
    secondary?: string;
  };
  tags: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ecommerce-chatbot",
    title: "E-commerce Support Automation",
    industry: "Retail",
    useCase: "Customer Support",
    challenge: "High support ticket volume overwhelming small team, slow response times affecting customer satisfaction",
    solution: "Deployed AI chatbot for FAQ handling, order tracking, and tier-1 support with seamless human handoff",
    outcome: "70% of tickets deflected to chatbot, support costs reduced ~50%, customer satisfaction increased",
    metrics: {
      primary: "70% ticket deflection",
      secondary: "50% cost reduction"
    },
    tags: ["Customer Support", "Cost Reduction", "Automation"],
    featured: true
  },
  {
    id: "services-pipeline",
    title: "Professional Services Pipeline Boost",
    industry: "Services",
    useCase: "Lead Generation",
    challenge: "Manual lead qualification process, inconsistent follow-up, low conversion rates from marketing efforts",
    solution: "AI-powered lead scoring, automated nurturing sequences, and personalized content recommendations",
    outcome: "Pipeline lift achieved, +30% conversion rate improvement, faster lead-to-customer cycle",
    metrics: {
      primary: "+30% conversion",
      secondary: "40% faster pipeline"
    },
    tags: ["Lead Generation", "Marketing", "Sales Automation"],
    featured: true
  },
  {
    id: "manufacturing-maintenance",
    title: "Manufacturing Predictive Maintenance",
    industry: "Manufacturing",
    useCase: "Operations",
    challenge: "Unexpected equipment failures causing production delays, high maintenance costs, poor delivery reliability",
    solution: "IoT sensors + AI for predictive maintenance alerts, automated work order generation, vendor coordination",
    outcome: "−30% equipment downtime, 95% on-time delivery rate, significant maintenance cost savings",
    metrics: {
      primary: "95% on-time delivery",
      secondary: "30% less downtime"
    },
    tags: ["Predictive Maintenance", "Operations", "IoT"],
    featured: true
  },
  {
    id: "hospitality-guest",
    title: "Hotel Guest Experience Automation",
    industry: "Hospitality",
    useCase: "Customer Experience",
    challenge: "Manual guest communications, inconsistent service delivery, difficulty managing guest requests at scale",
    solution: "AI concierge for guest requests, automated check-in/out processes, personalized service recommendations",
    outcome: "Enhanced guest experience, +25% satisfaction scores, reduced front desk workload by 60%",
    metrics: {
      primary: "+25% guest satisfaction",
      secondary: "60% workload reduction"
    },
    tags: ["Guest Experience", "Automation", "Personalization"],
    featured: false
  },
  {
    id: "logistics-routing",
    title: "Logistics Route Optimization",
    industry: "Logistics",
    useCase: "Operations",
    challenge: "Inefficient delivery routes, high fuel costs, inconsistent delivery times affecting customer satisfaction",
    solution: "AI-powered route optimization, real-time traffic integration, automated dispatch and tracking systems",
    outcome: "25% fuel cost reduction, 90% on-time deliveries, improved driver productivity and customer satisfaction",
    metrics: {
      primary: "90% on-time delivery",
      secondary: "25% fuel savings"
    },
    tags: ["Route Optimization", "Cost Reduction", "Efficiency"],
    featured: false
  },
  {
    id: "healthcare-scheduling",
    title: "Medical Practice Scheduling System",
    industry: "Healthcare",
    useCase: "Operations",
    challenge: "High no-show rates, manual appointment management, staff spending too much time on scheduling calls",
    solution: "AI-powered appointment booking, automated reminders, intelligent scheduling based on patient patterns",
    outcome: "40% reduction in no-shows, 75% faster appointment processing, improved patient satisfaction",
    metrics: {
      primary: "40% fewer no-shows",
      secondary: "75% faster processing"
    },
    tags: ["Healthcare", "Scheduling", "Patient Experience"],
    featured: false
  }
];

export const getCasesByIndustry = (industry: string) => {
  return caseStudies.filter(cs => cs.industry === industry);
};

export const getCasesByUseCase = (useCase: string) => {
  return caseStudies.filter(cs => cs.useCase === useCase);
};

export const getFeaturedCases = () => {
  return caseStudies.filter(cs => cs.featured);
};