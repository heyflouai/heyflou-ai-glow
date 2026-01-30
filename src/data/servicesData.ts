/**
 * Services page data - structured content for all service sections
 */

export interface ServiceBenefit {
  key: string;
}

export interface ServiceData {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  benefits: ServiceBenefit[];
}

export interface IndustrySectionData {
  id: string;
  icon: string;
  titleKey: string;
  introKey: string;
  services: ServiceData[];
  ctaKey: string;
}

// Travel Agency Services
export const travelAgencyServices: ServiceData[] = [
  {
    id: 'travel-chatbot',
    icon: '🤖',
    titleKey: 'travelChatbotTitle',
    descriptionKey: 'travelChatbotDesc',
    benefits: [
      { key: 'travelChatbotBenefit1' },
      { key: 'travelChatbotBenefit2' },
      { key: 'travelChatbotBenefit3' },
      { key: 'travelChatbotBenefit4' },
    ],
  },
  {
    id: 'travel-scheduler',
    icon: '📅',
    titleKey: 'travelSchedulerTitle',
    descriptionKey: 'travelSchedulerDesc',
    benefits: [
      { key: 'travelSchedulerBenefit1' },
      { key: 'travelSchedulerBenefit2' },
      { key: 'travelSchedulerBenefit3' },
      { key: 'travelSchedulerBenefit4' },
    ],
  },
  {
    id: 'travel-crm',
    icon: '🔄',
    titleKey: 'travelCrmTitle',
    descriptionKey: 'travelCrmDesc',
    benefits: [
      { key: 'travelCrmBenefit1' },
      { key: 'travelCrmBenefit2' },
      { key: 'travelCrmBenefit3' },
      { key: 'travelCrmBenefit4' },
    ],
  },
];

// Healthcare Services
export const healthcareServices: ServiceData[] = [
  {
    id: 'health-chatbot',
    icon: '🤖',
    titleKey: 'healthChatbotTitle',
    descriptionKey: 'healthChatbotDesc',
    benefits: [
      { key: 'healthChatbotBenefit1' },
      { key: 'healthChatbotBenefit2' },
      { key: 'healthChatbotBenefit3' },
      { key: 'healthChatbotBenefit4' },
    ],
  },
  {
    id: 'health-scheduler',
    icon: '📅',
    titleKey: 'healthSchedulerTitle',
    descriptionKey: 'healthSchedulerDesc',
    benefits: [
      { key: 'healthSchedulerBenefit1' },
      { key: 'healthSchedulerBenefit2' },
      { key: 'healthSchedulerBenefit3' },
      { key: 'healthSchedulerBenefit4' },
    ],
  },
  {
    id: 'health-integration',
    icon: '🔄',
    titleKey: 'healthIntegrationTitle',
    descriptionKey: 'healthIntegrationDesc',
    benefits: [
      { key: 'healthIntegrationBenefit1' },
      { key: 'healthIntegrationBenefit2' },
      { key: 'healthIntegrationBenefit3' },
      { key: 'healthIntegrationBenefit4' },
    ],
  },
];

// Fitness & Education Services
export const fitnessEducationServices: ServiceData[] = [
  {
    id: 'fitness-chatbot',
    icon: '🤖',
    titleKey: 'fitnessChatbotTitle',
    descriptionKey: 'fitnessChatbotDesc',
    benefits: [
      { key: 'fitnessChatbotBenefit1' },
      { key: 'fitnessChatbotBenefit2' },
      { key: 'fitnessChatbotBenefit3' },
      { key: 'fitnessChatbotBenefit4' },
    ],
  },
  {
    id: 'fitness-scheduler',
    icon: '📅',
    titleKey: 'fitnessSchedulerTitle',
    descriptionKey: 'fitnessSchedulerDesc',
    benefits: [
      { key: 'fitnessSchedulerBenefit1' },
      { key: 'fitnessSchedulerBenefit2' },
      { key: 'fitnessSchedulerBenefit3' },
      { key: 'fitnessSchedulerBenefit4' },
    ],
  },
  {
    id: 'fitness-management',
    icon: '🔄',
    titleKey: 'fitnessManagementTitle',
    descriptionKey: 'fitnessManagementDesc',
    benefits: [
      { key: 'fitnessManagementBenefit1' },
      { key: 'fitnessManagementBenefit2' },
      { key: 'fitnessManagementBenefit3' },
      { key: 'fitnessManagementBenefit4' },
    ],
  },
];

// Custom Automation Services
export const customAutomationServices: ServiceData[] = [
  {
    id: 'custom-chatbot',
    icon: '🤖',
    titleKey: 'customChatbotTitle',
    descriptionKey: 'customChatbotDesc',
    benefits: [
      { key: 'customChatbotBenefit1' },
      { key: 'customChatbotBenefit2' },
      { key: 'customChatbotBenefit3' },
      { key: 'customChatbotBenefit4' },
    ],
  },
  {
    id: 'custom-workflow',
    icon: '⚡',
    titleKey: 'customWorkflowTitle',
    descriptionKey: 'customWorkflowDesc',
    benefits: [
      { key: 'customWorkflowBenefit1' },
      { key: 'customWorkflowBenefit2' },
      { key: 'customWorkflowBenefit3' },
      { key: 'customWorkflowBenefit4' },
    ],
  },
  {
    id: 'custom-integration',
    icon: '🔄',
    titleKey: 'customIntegrationTitle',
    descriptionKey: 'customIntegrationDesc',
    benefits: [
      { key: 'customIntegrationBenefit1' },
      { key: 'customIntegrationBenefit2' },
      { key: 'customIntegrationBenefit3' },
      { key: 'customIntegrationBenefit4' },
    ],
  },
  {
    id: 'custom-document',
    icon: '📝',
    titleKey: 'customDocumentTitle',
    descriptionKey: 'customDocumentDesc',
    benefits: [
      { key: 'customDocumentBenefit1' },
      { key: 'customDocumentBenefit2' },
      { key: 'customDocumentBenefit3' },
      { key: 'customDocumentBenefit4' },
    ],
  },
];

// Industry sections configuration
export const industrySections: IndustrySectionData[] = [
  {
    id: 'travel',
    icon: '✈️',
    titleKey: 'travelSectionTitle',
    introKey: 'travelSectionIntro',
    services: travelAgencyServices,
    ctaKey: 'travelCta',
  },
  {
    id: 'healthcare',
    icon: '🏥',
    titleKey: 'healthcareSectionTitle',
    introKey: 'healthcareSectionIntro',
    services: healthcareServices,
    ctaKey: 'healthcareCta',
  },
  {
    id: 'fitness',
    icon: '💪',
    titleKey: 'fitnessSectionTitle',
    introKey: 'fitnessSectionIntro',
    services: fitnessEducationServices,
    ctaKey: 'fitnessCta',
  },
];
