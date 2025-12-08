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
    id: "travel-agency-funnel",
    title: "Travel Agency Booking Boost",
    industry: "Travel",
    useCase: "Marketing Automation",
    challenge: "The agency was struggling to convert website visitors into bookings, with leads dropping off before completing inquiries.",
    solution: "HeyFlou implemented a full automated marketing funnel with landing pages, email sequences, and WhatsApp follow-ups to capture and nurture leads.",
    outcome: "62% increase in bookings within 90 days, with a fully automated lead nurturing system running 24/7.",
    metrics: {
      primary: "62% more bookings",
      secondary: "Fully automated funnel"
    },
    tags: ["Marketing Funnel", "Travel", "Automation"],
    featured: true
  },
  {
    id: "tour-operator-chatbot",
    title: "Tour Operator Lead Generation",
    industry: "Travel",
    useCase: "AI Chatbot",
    challenge: "Many website visitors had questions but weren't converting into leads, and the team couldn't respond fast enough.",
    solution: "We deployed an AI travel chatbot that promoted packages, answered questions instantly, and qualified leads with WhatsApp promo follow-ups.",
    outcome: "3× growth in qualified leads and 45% faster response time to traveler inquiries.",
    metrics: {
      primary: "3× more leads",
      secondary: "AI + WhatsApp promos"
    },
    tags: ["AI Chatbot", "WhatsApp", "Lead Gen"],
    featured: true
  },
  {
    id: "physio-clinic-growth",
    title: "Physiotherapy Clinic Growth",
    industry: "Healthcare",
    useCase: "Patient Acquisition",
    challenge: "The clinic had low visibility and relied heavily on referrals, missing out on digital marketing opportunities.",
    solution: "HeyFlou built a complete digital marketing system with landing pages, automated intake, and patient nurturing sequences.",
    outcome: "95% growth in monthly clients with consistent weekly booking increases.",
    metrics: {
      primary: "95% more clients",
      secondary: "Consistent growth"
    },
    tags: ["Healthcare", "Marketing", "Automation"],
    featured: true
  },
  {
    id: "luxury-travel-sales",
    title: "Luxury Travel Agency Sales",
    industry: "Travel",
    useCase: "High-Ticket Sales",
    challenge: "High-ticket travel packages required extensive nurturing, but the sales process was manual and time-consuming.",
    solution: "We created automated qualification funnels with personalized follow-ups specifically designed for premium travel experiences.",
    outcome: "53% increase in high-ticket sales with reduced sales team workload.",
    metrics: {
      primary: "53% more high-ticket sales",
      secondary: "Automated nurturing"
    },
    tags: ["Luxury Travel", "Sales", "Automation"],
    featured: true
  },
  {
    id: "student-travel-marketing",
    title: "Student Travel Marketing Efficiency",
    industry: "Travel",
    useCase: "Cost Reduction",
    challenge: "Marketing spend was high but conversions were low, with no clear visibility into which campaigns performed best.",
    solution: "HeyFlou implemented a marketing CRM with analytics dashboard, optimizing campaigns and cutting waste from underperforming channels.",
    outcome: "37% reduction in marketing costs while maintaining the same booking volume.",
    metrics: {
      primary: "37% lower costs",
      secondary: "Same bookings"
    },
    tags: ["Student Travel", "Analytics", "Optimization"],
    featured: false
  },
  {
    id: "cruise-agency-revival",
    title: "Cruise Agency Lead Revival",
    industry: "Travel",
    useCase: "Lead Re-engagement",
    challenge: "Thousands of cold leads from past inquiries were sitting untouched in the CRM, representing missed revenue.",
    solution: "We created automated WhatsApp and email re-engagement campaigns targeting cold leads with seasonal cruise promotions.",
    outcome: "31% increase in sales from previously cold leads, turning dormant contacts into paying customers.",
    metrics: {
      primary: "31% more sales",
      secondary: "Cold leads revived"
    },
    tags: ["Cruise", "Re-engagement", "WhatsApp"],
    featured: false
  },
  {
    id: "physio-marketing-roi",
    title: "Physiotherapy Marketing ROI",
    industry: "Healthcare",
    useCase: "Marketing ROI",
    challenge: "Marketing efforts weren't tracked properly, making it impossible to know which channels drove patient bookings.",
    solution: "HeyFlou implemented a complete marketing analytics system with attribution tracking and automated campaign optimization.",
    outcome: "Tripled marketing ROI by focusing budget on highest-performing channels.",
    metrics: {
      primary: "3× marketing ROI",
      secondary: "Clear attribution"
    },
    tags: ["Healthcare", "Analytics", "ROI"],
    featured: false
  },
  {
    id: "therapist-content-funnel",
    title: "Therapist Inquiry Growth",
    industry: "Healthcare",
    useCase: "Content Marketing",
    challenge: "Great content was being created but wasn't converting into patient inquiries or appointments.",
    solution: "We built content-to-booking funnels with AI chatbot qualification and automated follow-up sequences.",
    outcome: "Doubled inquiries with content + chatbot funnel integration.",
    metrics: {
      primary: "2× more inquiries",
      secondary: "Content + chatbot"
    },
    tags: ["Therapist", "Content", "Chatbot"],
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
