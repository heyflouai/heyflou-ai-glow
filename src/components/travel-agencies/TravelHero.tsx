import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { FlipWords } from '@/components/ui/flip-words';
import { useTranslation } from '@/i18n';

export function TravelHero() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;

  return (
    <Section background="glow" padding="large">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge variant="secondary" className="text-sm px-4 py-1">
            🚀 {travel.comingSoonBadge}
          </Badge>
        </motion.div>

        {/* Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 rounded-2xl hf-gradient flex items-center justify-center">
            <Plane className="w-10 h-10 text-white" />
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
            <span>HeyFlou for </span>
            <FlipWords words={["Travel Agencies"]} />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {travel.heroSubtitle}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
