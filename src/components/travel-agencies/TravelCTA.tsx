import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/section';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { useTranslation } from '@/i18n';

export function TravelCTA() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;

  return (
    <Section background="muted" padding="large">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          {travel.ctaTitle}
        </h2>
        <p className="text-lg text-muted-foreground">
          {travel.ctaSubtitle}
        </p>
        <div className="flex justify-center">
          <Link to="/services/custom">
            <ShimmerButton className="text-base font-semibold">
              {travel.ctaButton}
              <ArrowRight className="w-4 h-4 ml-2" />
            </ShimmerButton>
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
