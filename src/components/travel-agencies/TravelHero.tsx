import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { FlipWords } from '@/components/ui/flip-words';
import { Meteors } from '@/components/ui/meteors';
import { useTranslation } from '@/i18n';

export function TravelHero() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;

  return (
    <Section background="glow" padding="hero" className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hf-teal/10 via-transparent to-hf-purple/10 animate-pulse" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-hf-sky/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hf-purple/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Meteors effect */}
      <Meteors number={15} />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Pulsing Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge 
            variant="secondary" 
            className="text-sm px-4 py-1.5 animate-pulse-glow border border-primary/30 bg-primary/10 text-primary font-semibold"
          >
            🚀 {travel.comingSoonBadge}
          </Badge>
        </motion.div>

        {/* Logo Icon with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 w-20 h-20 rounded-2xl hf-gradient blur-lg opacity-50 animate-pulse" />
            <div className="relative w-20 h-20 rounded-2xl hf-gradient flex items-center justify-center shadow-lg">
              <Plane className="w-10 h-10 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Heading with FlipWords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-h1 text-foreground">
            <span>HeyFlou for </span>
            <FlipWords words={["Travel Agencies", "Tour Operators", "Travel Pros"]} />
          </h1>
          <p className="text-subtitle-lg text-muted-foreground max-w-3xl mx-auto">
            {travel.heroSubtitle}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
