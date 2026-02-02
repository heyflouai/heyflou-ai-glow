import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n';

export function ConsultingCTA() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="gradient" padding="large">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
          {consulting.ctaTitle}
        </h2>
        <p className="text-lg text-white/80">
          {consulting.ctaSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <GradientButton 
            variant="secondary" 
            size="lg" 
            onClick={scrollToForm}
            className="bg-white text-primary hover:bg-white/90"
          >
            {consulting.startStrategy}
          </GradientButton>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-white text-white hover:bg-white/10"
          >
            <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
              {consulting.scheduleCall}
            </a>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
