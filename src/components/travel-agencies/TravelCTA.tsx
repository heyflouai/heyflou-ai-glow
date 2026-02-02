import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/section';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { useTranslation } from '@/i18n';

export function TravelCTA() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;

  return (
    <Section background="muted" padding="default" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-hf-teal/5 via-hf-purple/5 to-hf-sky/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <h2 className="text-h2 text-foreground">
          {travel.ctaTitle}
        </h2>
        <p className="text-body text-muted-foreground">
          {travel.ctaSubtitle}
        </p>
        
        {/* Prominent CTA with animated arrow */}
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Animated arrow pointing down to button */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary"
          >
            <ChevronRight className="w-8 h-8 rotate-90" />
          </motion.div>
          
          <Link to="/services/custom">
            <ShimmerButton 
              className="text-lg font-semibold px-8 py-4"
              shimmerColor="hsl(var(--hf-purple))"
              shimmerSize="0.1em"
            >
              <span className="flex items-center gap-2">
                Need Automation Now? Build Custom Solution
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </ShimmerButton>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
