import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { FlipWords } from '@/components/ui/flip-words';
import { useTranslation } from '@/i18n';

export function ConsultingHero() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  return (
    <Section background="glow" padding="hero">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 rounded-2xl hf-gradient flex items-center justify-center">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Heading with FlipWords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground">
            <span>HeyFlou </span>
            <FlipWords words={["AI Strategy & Consulting"]} />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {consulting.heroSubtitle}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact-form" className="w-full sm:w-auto">
            <ShimmerButton
              shimmerColor="hsl(var(--hf-purple))"
              shimmerDuration="2.5s"
              background="hsl(var(--primary))"
              className="px-8 py-4 text-base font-semibold text-primary-foreground w-full sm:w-auto"
            >
              {consulting.getStrategicGuidance}
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
            {consulting.bookConsultation}
          </MovingBorderButton>
        </motion.div>
      </div>
    </Section>
  );
}
