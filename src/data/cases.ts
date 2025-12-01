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
    id: "therapy-practice",
    title: "Private Therapy Practice",
    industry: "Healthcare",
    useCase: "Client Communication",
    challenge: "The therapist was spending hours each day replying to messages and manually scheduling appointments, often missing new inquiries.",
    solution: "HeyFlou implemented an AI chatbot that handled all first conversations, filtered new clients, and synced appointments directly with the calendar and CRM.",
    outcome: "65% reduction in administrative workload, 40% faster response time, and 30% increase in booked sessions within 60 days.",
    metrics: {
      primary: "65% less admin work",
      secondary: "30% more sessions"
    },
    tags: ["AI Chatbot", "Therapy", "Automation"],
    featured: true
  },
  {
    id: "coaching-business",
    title: "Online Coaching Business",
    industry: "Services",
    useCase: "Lead Generation",
    challenge: "Many leads were arriving from ads, but most were never followed up at the right time.",
    solution: "We built a full CRM automation system with lead scoring, instant follow-ups, and real-time pipeline tracking.",
    outcome: "2.3× growth in qualified leads, 50% increase in lead-to-client conversion, and zero missed follow-ups after automation.",
    metrics: {
      primary: "2.3× qualified leads",
      secondary: "50% conversion boost"
    },
    tags: ["CRM", "Lead Generation", "Automation"],
    featured: true
  },
  {
    id: "wellness-startup",
    title: "Wellness & Mental Health Startup",
    industry: "Healthcare",
    useCase: "Lead Conversion",
    challenge: "High website traffic, but very low conversion into consultations.",
    solution: "We created a complete lead capture, chatbot qualification, and automated nurturing system connected to the CRM.",
    outcome: "3× increase in consultation requests, consistent weekly growth in new clients, and fully automated client onboarding.",
    metrics: {
      primary: "3× consultations",
      secondary: "Fully automated"
    },
    tags: ["Lead Nurturing", "Chatbot", "CRM"],
    featured: true
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