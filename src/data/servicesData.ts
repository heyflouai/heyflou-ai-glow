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

