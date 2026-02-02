import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { ServiceCard } from './ServiceCard';
import { useTranslation } from '@/i18n';
import type { IndustrySectionData } from '@/data/servicesData';

interface IndustrySectionProps {
  section: IndustrySectionData;
  background?: 'default' | 'muted';
}

export function IndustrySection({ section, background = 'default' }: IndustrySectionProps) {
  const t = useTranslation();
  const servicesT = t.servicesPage as Record<string, string>;

  return (
    <Section background={background} id={section.id}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl" role="img" aria-hidden="true">
              {section.icon}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              {servicesT[section.titleKey] || section.titleKey}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {servicesT[section.introKey] || section.introKey}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {section.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Section CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <GradientButton variant="hero" size="lg" asChild>
            <a href="mailto:hello@heyflou.com">
              {servicesT[section.ctaKey] || section.ctaKey}
            </a>
          </GradientButton>
        </motion.div>
      </div>
    </Section>
  );
}
