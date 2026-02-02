import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { ServiceCard } from './ServiceCard';
import { customAutomationServices } from '@/data/servicesData';
import { useTranslation } from '@/i18n';

export function CustomAutomationSection() {
  const t = useTranslation();
  const servicesT = t.servicesPage as Record<string, string>;

  return (
    <Section background="default" id="custom-automation">
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
              🚀
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              {servicesT.customSectionTitle}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {servicesT.customSectionIntro}
          </p>
        </motion.div>

        {/* Service Cards Grid - 2x2 for custom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {customAutomationServices.map((service, index) => (
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
            <a href="https://calendly.com/salo-zayat/new-meeting" target="_blank" rel="noopener noreferrer">
              {servicesT.customCta}
            </a>
          </GradientButton>
        </motion.div>
      </div>
    </Section>
  );
}
