import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { useTranslation } from '@/i18n';

export function CustomCTA() {
  const t = useTranslation();
  const caT = t.customAutomation as Record<string, string>;

  return (
    <Section background="glow" padding="large">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
          {caT.ctaTitle}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {caT.ctaSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton variant="hero" size="xl" asChild>
            <a href="#contact-form">
              {caT.startProject}
            </a>
          </GradientButton>
          <GradientButton variant="secondary" size="xl" asChild>
            <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
              {caT.scheduleConsultation}
            </a>
          </GradientButton>
        </div>
      </motion.div>
    </Section>
  );
}
