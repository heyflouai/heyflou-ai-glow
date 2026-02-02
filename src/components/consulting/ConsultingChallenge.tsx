import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Map, 
  ShieldAlert
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';
import { useTranslation } from '@/i18n';

export function ConsultingChallenge() {
  const t = useTranslation();

  const challenges: FocusCard[] = [
    {
      title: t.consulting.challengeUncertain,
      description: t.consulting.challengeUncertainDesc,
      icon: Compass,
    },
    {
      title: t.consulting.challengeOverwhelmed,
      description: t.consulting.challengeOverwhelmedDesc,
      icon: Layers,
    },
    {
      title: t.consulting.challengeRoadmap,
      description: t.consulting.challengeRoadmapDesc,
      icon: Map,
    },
    {
      title: t.consulting.challengeRisk,
      description: t.consulting.challengeRiskDesc,
      icon: ShieldAlert,
    },
  ];

  return (
    <Section background="default" padding="default">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h2 text-foreground mb-4">
          {t.consulting.challengeTitle}
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          {t.consulting.challengeSubtitle}
        </p>
      </motion.div>

      <FocusCards cards={challenges} className="lg:grid-cols-2" />
    </Section>
  );
}