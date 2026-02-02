import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import { useTranslation } from '@/i18n';

export function ConsultingHero() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="glow" padding="large">
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
          <GradientButton variant="hero" size="lg" onClick={scrollToForm}>
            {consulting.getStrategicGuidance}
          </GradientButton>
          <Button variant="outline" size="lg" asChild>
            <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
              {consulting.bookConsultation}
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
