import { Wand2, Sparkles, ArrowRight } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n';
import { motion } from 'framer-motion';

export function CustomSolutionsCTA() {
  const t = useTranslation();

  return (
    <div className="mt-16 md:mt-20">
      {/* Two-tile grid: 70/30 on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 lg:gap-8 max-w-5xl mx-auto">
        
        {/* Tile 1 — Custom Workflow (Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="group relative bg-gradient-to-b from-card to-card/80 rounded-2xl border border-border/30 p-7 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-hf-teal/5 hover:border-border/50"
        >
          {/* Tag */}
          <div className="mb-5">
            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-hf-teal/10 text-hf-teal border border-hf-teal/20">
              {t.industrySystems?.card1Tag || 'All Industries'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Left: Icon + Text */}
            <div className="flex-1">
              {/* Icon + Title Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl hf-gradient flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-hf-teal/20">
                  <Wand2 className="text-white" size={22} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground leading-tight">
                  {t.customCta?.buildCustom || 'Build a Custom Workflow'}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                {t.customCta?.buildCustomDesc || 'AI can adapt to your exact process. We design tailored workflows that fit your tools, your team, and your clients.'}
              </p>

              {/* Examples line */}
              <p className="text-xs text-muted-foreground/70 italic mb-6 md:mb-0">
                {t.customCta?.buildCustomExamples || 'Examples: intake • follow-ups • scheduling • CRM updates'}
              </p>
            </div>

            {/* Right: CTA Button */}
            <div className="flex items-center md:self-center shrink-0">
              <GradientButton 
                variant="hero" 
                size="lg" 
                asChild
                className="group/btn w-full md:w-auto"
              >
                <Link to="/contact">
                  {t.customCta?.buildCustom || 'Build a Custom Workflow'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </GradientButton>
            </div>
          </div>
        </motion.div>

        {/* Tile 2 — More Coming Soon (Not Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="relative bg-gradient-to-b from-card to-card/80 rounded-2xl border border-border/30 p-7 md:p-8"
        >
          {/* Badge */}
          <div className="mb-5">
            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/30">
              {t.customCta?.moreComingSoon || 'Coming Soon'}
            </span>
          </div>

          {/* Icon + Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-muted/30 dark:bg-muted/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-hf-teal" />
            </div>
            <h4 className="text-lg font-semibold font-display text-foreground">
              {t.customCta?.moreComingSoon || 'Coming Soon'}
            </h4>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.customCta?.exploreComingSoonSub || 'More automations are launching soon.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
