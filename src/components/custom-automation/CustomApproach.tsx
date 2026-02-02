import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Target, 
  CalendarCheck, 
  Settings,
  Database,
  Network
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';
import { useTranslation } from '@/i18n';

export function CustomApproach() {
  const t = useTranslation();

  const capabilities: FocusCard[] = [
    {
      title: t.customAutomation.capCommunication,
      description: t.customAutomation.capCommunicationDesc,
      icon: MessageSquare,
    },
    {
      title: t.customAutomation.capLead,
      description: t.customAutomation.capLeadDesc,
      icon: Target,
    },
    {
      title: t.customAutomation.capAppointment,
      description: t.customAutomation.capAppointmentDesc,
      icon: CalendarCheck,
    },
    {
      title: t.customAutomation.capOperations,
      description: t.customAutomation.capOperationsDesc,
      icon: Settings,
    },
    {
      title: t.customAutomation.capData,
      description: t.customAutomation.capDataDesc,
      icon: Database,
    },
    {
      title: t.customAutomation.capIntegration,
      description: t.customAutomation.capIntegrationDesc,
      icon: Network,
    },
  ];

  return (
    <Section background="muted" padding="default">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h2 text-foreground mb-4">
          {t.customAutomation.approachTitle}
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          {t.customAutomation.approachSubtitle}
        </p>
      </motion.div>

      <FocusCards cards={capabilities} />
    </Section>
  );
}