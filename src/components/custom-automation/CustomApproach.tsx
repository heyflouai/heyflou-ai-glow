import { motion } from 'framer-motion';
import { 
  Search, 
  Puzzle, 
  Layers, 
  Workflow
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';
import { useTranslation } from '@/i18n';

export function CustomApproach() {
  const t = useTranslation();
  const caT = t.customAutomation as Record<string, string>;

  const approachCards: FocusCard[] = [
    {
      title: caT.approachDiscovery || "Deep Discovery",
      description: caT.approachDiscoveryDesc || "We start by understanding your specific challenges, workflows, and goals. No assumptions, just listening.",
      icon: Search,
    },
    {
      title: caT.approachTailored || "Tailored Design",
      description: caT.approachTailoredDesc || "We don't offer cookie-cutter solutions. Every workflow is designed to fit your exact needs and processes.",
      icon: Puzzle,
    },
    {
      title: caT.approachFlexible || "Flexible Integrations",
      description: caT.approachFlexibleDesc || "Connect your existing tools seamlessly. We work with the software you already use and love.",
      icon: Layers,
    },
    {
      title: caT.approachSuccess || "Your Success, Our Measure",
      description: caT.approachSuccessDesc || "We measure our work by your outcomes. If it doesn't save you time or money, we haven't done our job.",
      icon: Workflow,
    },
  ];

  return (
    <Section background="muted" padding="large">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          {caT.approachTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {caT.approachSubtitle || "Every business is unique. That's why we build solutions that fit you, not the other way around."}
        </p>
      </motion.div>

      <FocusCards cards={approachCards} className="lg:grid-cols-2" />
    </Section>
  );
}
