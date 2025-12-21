import { Wand2, Sparkles } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n';

export function CustomSolutionsCTA() {
  const t = useTranslation();

  return (
    <div className="mt-12 md:mt-16">
      <div className="max-w-3xl mx-auto">
        {/* Container with subtle styling */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/5 dark:bg-white/[0.03] border border-border/20 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Primary CTA - Build Custom Workflow */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start flex-1">
              <GradientButton 
                variant="hero" 
                size="lg" 
                asChild
                className="group w-full sm:w-auto"
              >
                <Link to="/contact">
                  <Wand2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  {t.customCta?.buildCustom || 'Build a Custom Workflow'}
                </Link>
              </GradientButton>
              <p className="text-xs text-muted-foreground mt-2 max-w-[280px]">
                {t.customCta?.buildCustomSub || "Tell us your process — we'll design an automation plan."}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-border/30" />
            <div className="sm:hidden w-full h-px bg-border/30" />

            {/* Secondary - More Coming Soon (text only) */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start flex-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-hf-teal" />
                <span className="text-base font-semibold text-foreground">
                  {t.customCta?.moreComingSoon || 'More Coming Soon'}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 max-w-[280px]">
                {t.customCta?.exploreComingSoonSub || 'More automations are launching soon.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
