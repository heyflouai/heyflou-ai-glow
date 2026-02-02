import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { MovingBorderButton } from '@/components/ui/moving-border';
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
          {caT.ctaTitle}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {caT.ctaSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact-form" className="w-full sm:w-auto">
            <ShimmerButton
              shimmerColor="hsl(var(--hf-sky))"
              shimmerDuration="2.5s"
              background="hsl(var(--primary))"
              className="px-8 py-4 text-base font-semibold text-primary-foreground w-full"
            >
              {caT.startProject}
            </ShimmerButton>
          </a>
          <MovingBorderButton
            as="a"
            href="https://calendly.com/heyflou-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            containerClassName="h-14 w-full sm:w-auto"
            className="px-6 py-3 font-medium"
            duration={3000}
          >
            {caT.scheduleConsultation}
          </MovingBorderButton>
        </div>
      </motion.div>
    </Section>
  );
}
