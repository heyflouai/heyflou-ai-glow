import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { useTranslation } from '@/i18n';

export function HeroSection() {
  const t = useTranslation();
  const servicesT = t.servicesPage as Record<string, string>;

  return (
    <Section background="glow" padding="large" className="pt-24">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
          {servicesT.heroTitle}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {servicesT.heroSubtitle}
        </p>
        <GradientButton variant="hero" size="xl" asChild>
          <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
            {servicesT.heroCta}
          </a>
        </GradientButton>
      </motion.div>
    </Section>
  );
}
