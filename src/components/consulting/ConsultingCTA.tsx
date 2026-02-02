import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { useTranslation } from '@/i18n';

export function ConsultingCTA() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  return (
    <Section background="gradient" padding="default">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h2 className="text-h2 text-white">
          {consulting.ctaTitle}
        </h2>
        <p className="text-body text-white/80">
          {consulting.ctaSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact-form" className="w-full sm:w-auto">
            <ShimmerButton
              shimmerColor="hsl(var(--hf-teal))"
              shimmerDuration="2.5s"
              background="hsl(0 0% 100%)"
              className="px-8 py-4 text-button text-primary w-full"
            >
              {consulting.startStrategy}
            </ShimmerButton>
          </a>
          <MovingBorderButton
            as="a"
            href="https://calendly.com/heyflou-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            containerClassName="h-14 w-full sm:w-auto"
            className="px-6 py-3 text-button text-white border-white/30"
            borderClassName="bg-[radial-gradient(hsl(0_0%_100%)_40%,transparent_60%)]"
            duration={3000}
          >
            {consulting.scheduleCall}
          </MovingBorderButton>
        </div>
      </motion.div>
    </Section>
  );
}
