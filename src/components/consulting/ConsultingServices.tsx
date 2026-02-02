import { motion } from 'framer-motion';
import { ClipboardCheck, Compass, Search, FileText, GraduationCap, TrendingUp } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { useTranslation } from '@/i18n';

export function ConsultingServices() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  const services = [
    {
      titleKey: 'serviceAssessmentTitle',
      descKey: 'serviceAssessmentDesc',
      icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
      className: 'md:col-span-2',
    },
    {
      titleKey: 'serviceStrategyTitle',
      descKey: 'serviceStrategyDesc',
      icon: <Compass className="w-6 h-6 text-primary" />,
      className: 'md:col-span-1',
    },
    {
      titleKey: 'serviceVendorTitle',
      descKey: 'serviceVendorDesc',
      icon: <Search className="w-6 h-6 text-primary" />,
      className: 'md:col-span-1',
    },
    {
      titleKey: 'serviceImplementationTitle',
      descKey: 'serviceImplementationDesc',
      icon: <FileText className="w-6 h-6 text-primary" />,
      className: 'md:col-span-2',
    },
    {
      titleKey: 'serviceTrainingTitle',
      descKey: 'serviceTrainingDesc',
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      className: 'md:col-span-1',
    },
    {
      titleKey: 'serviceROITitle',
      descKey: 'serviceROIDesc',
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      className: 'md:col-span-2',
    },
  ];

  return (
    <Section background="muted" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {consulting.servicesTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {consulting.servicesIntro}
          </p>
        </motion.div>

        <BentoGrid className="md:auto-rows-[12rem]">
          {services.map((service, i) => (
            <BentoGridItem
              key={i}
              index={i}
              title={consulting[service.titleKey]}
              description={consulting[service.descKey]}
              icon={service.icon}
              className={service.className}
            />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
}
