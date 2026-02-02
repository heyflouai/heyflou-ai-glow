import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { useTranslation } from '@/i18n';

export function FinalCTASection() {
  const t = useTranslation();
  const servicesT = t.servicesPage as Record<string, string>;

  return (
    <Section background="glow" padding="large">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
          {servicesT.finalCtaTitle}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {servicesT.finalCtaSubtitle}
        </p>
        <GradientButton variant="hero" size="xl" asChild>
          <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
            {servicesT.finalCtaButton}
          </a>
        </GradientButton>
      </motion.div>
    </Section>
  );
}
