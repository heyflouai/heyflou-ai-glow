import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { useTranslation } from '@/i18n';

export function TravelComingSoon() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;

  const scrollToForm = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="default" padding="small" className="relative">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-foreground"
        >
          {travel.comingSoonTitle}
        </motion.h2>
      </div>
      
      <TextRevealByWord text={travel.comingSoonText} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-4 mt-8"
      >
        <p className="text-lg text-muted-foreground">
          {travel.expectedLaunch}
        </p>
        <MovingBorderButton
          onClick={scrollToForm}
          containerClassName="h-14 w-auto"
          className="px-8 font-semibold"
          duration={3000}
        >
          {travel.getEarlyAccess}
        </MovingBorderButton>
      </motion.div>
    </Section>
  );
}
