import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  Cog, 
  Database, 
  Layers 
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { useTranslation } from '@/i18n';

export function CustomCapabilities() {
  const t = useTranslation();
  const caT = t.customAutomation as Record<string, string>;

  const capabilities = [
    {
      icon: <MessageSquare className="h-6 w-6 text-hf-teal" />,
      titleKey: 'capCommunicationTitle',
      descKey: 'capCommunicationDesc',
      className: "md:col-span-2",
    },
    {
      icon: <Users className="h-6 w-6 text-hf-purple" />,
      titleKey: 'capLeadTitle',
      descKey: 'capLeadDesc',
      className: "md:col-span-1",
    },
    {
      icon: <Calendar className="h-6 w-6 text-hf-sky" />,
      titleKey: 'capAppointmentTitle',
      descKey: 'capAppointmentDesc',
      className: "md:col-span-1",
    },
    {
      icon: <Cog className="h-6 w-6 text-hf-teal" />,
      titleKey: 'capOperationsTitle',
      descKey: 'capOperationsDesc',
      className: "md:col-span-2",
    },
    {
      icon: <Database className="h-6 w-6 text-hf-purple" />,
      titleKey: 'capDataTitle',
      descKey: 'capDataDesc',
      className: "md:col-span-1",
    },
    {
      icon: <Layers className="h-6 w-6 text-hf-sky" />,
      titleKey: 'capIntegrationTitle',
      descKey: 'capIntegrationDesc',
      className: "md:col-span-2",
    },
  ];

  return (
    <Section background="default" padding="large">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          {caT.capabilitiesTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {caT.capabilitiesIntro}
        </p>
      </motion.div>

      <BentoGrid>
        {capabilities.map((cap, index) => (
          <BentoGridItem
            key={index}
            index={index}
            title={caT[cap.titleKey]}
            description={caT[cap.descKey]}
            icon={cap.icon}
            className={cap.className}
            header={
              <div className="flex items-center justify-center h-24 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shadow-sm">
                  {cap.icon}
                </div>
              </div>
            }
          />
        ))}
      </BentoGrid>
    </Section>
  );
}
