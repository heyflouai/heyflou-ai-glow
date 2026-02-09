import logoNew from '@/assets/heyflou-logo-new.png';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { ExternalLink, HeartPulse, Dumbbell, Plane, Settings, Sparkles } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { motion } from 'framer-motion';

const serviceBubbles = [
  { key: 'healthcare', icon: HeartPulse, variant: 'filled' as const },
  { key: 'fitness', icon: Dumbbell, variant: 'outlined' as const },
  { key: 'travel', icon: Plane, variant: 'muted' as const, soon: true },
  { key: 'custom', icon: Settings, variant: 'outlined' as const },
  { key: 'consulting', icon: Sparkles, variant: 'outlined' as const },
];

export function AboutHero() {
  const t = useTranslation();
  
  return (
    <section className="relative py-20 md:py-28 text-center overflow-hidden bg-background transition-colors duration-300">
      {/* Animated gradient background - Light Mode */}
      <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, hsl(var(--hf-purple)/0.08) 0%, hsl(var(--hf-sky)/0.05) 50%, transparent 80%)",
            filter: "blur(60px)",
            animationDuration: '6s',
          }}
        />
        <div 
          className="absolute top-20 left-1/3 w-[500px] h-[400px] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, hsl(var(--hf-teal)/0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            animationDuration: '8s',
            animationDelay: '2s',
          }}
        />
      </div>
      
      {/* Dark mode animated gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, hsl(var(--hf-purple)/0.18) 0%, hsl(var(--hf-sky)/0.10) 40%, transparent 70%)",
            filter: "blur(80px)",
            animationDuration: '6s',
          }}
        />
        <div 
          className="absolute top-24 right-1/3 w-[600px] h-[500px] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, hsl(var(--hf-teal)/0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
            animationDuration: '8s',
            animationDelay: '2s',
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H1 - matching homepage typography */}
        <motion.h1 
          className="text-h1 font-bold font-display text-foreground mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.about.heroTitle}
        </motion.h1>
        
        {/* Service Bubbles */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2.5 md:gap-3 max-w-[700px] mx-auto mt-6 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {serviceBubbles.map((bubble) => {
            const Icon = bubble.icon;
            const label = (t.about.serviceBubbles as Record<string, string>)[bubble.key];
            const soonLabel = t.about.serviceBubbles?.soon;

            if (bubble.variant === 'filled') {
              return (
                <span
                  key={bubble.key}
                  className="relative inline-flex items-center gap-2 hf-gradient text-white rounded-full px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-[15px] font-semibold transition-transform duration-200 hover:scale-105"
                >
                  <Icon size={18} className="md:w-5 md:h-5 shrink-0" />
                  {label}
                </span>
              );
            }

            if (bubble.variant === 'muted') {
              return (
                <span
                  key={bubble.key}
                  className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-[15px] font-semibold border-2 border-border/30 text-muted-foreground/50 transition-transform duration-200 hover:scale-105"
                >
                  <Icon size={18} className="md:w-5 md:h-5 shrink-0 opacity-50" />
                  {label}
                  {bubble.soon && (
                    <span className="absolute -top-2 -right-2 hf-gradient text-white text-[11px] px-2 py-0.5 rounded-full font-semibold">
                      {soonLabel}
                    </span>
                  )}
                </span>
              );
            }

            return (
              <span
                key={bubble.key}
                className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-[15px] font-semibold border-2 border-transparent bg-clip-padding text-foreground transition-transform duration-200 hover:scale-105"
                style={{
                  backgroundImage: 'linear-gradient(hsl(var(--background)), hsl(var(--background))), linear-gradient(135deg, hsl(var(--hf-teal)), hsl(var(--hf-purple)))',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                <Icon size={18} className="md:w-5 md:h-5 shrink-0 text-[hsl(var(--hf-purple))]" />
                {label}
              </span>
            );
          })}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl font-bold text-center max-w-[600px] mx-auto mt-8 mb-8 tracking-wide leading-snug"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
        >
          <span className="bg-clip-text text-transparent hf-gradient">
            {t.about.heroTagline}
          </span>
        </motion.p>
        
        {/* Logo with pulse animation */}
        <motion.div 
          className="flex justify-center my-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.img 
            src={logoNew} 
            alt="HeyFlou AI Consulting logo" 
            className="h-[128px] md:h-[176px] lg:h-[224px] w-auto drop-shadow-sm dark:drop-shadow-[0_0_40px_hsl(var(--hf-purple)/0.3)]" 
            loading="eager"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* CTA group */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <GradientButton variant="primary" size="lg" asChild>
            <a href="#contact" className="inline-flex items-center gap-2">
              {t.about.bookStrategyCall}
            </a>
          </GradientButton>
          
          <Button 
            variant="ghost" 
            size="lg" 
            asChild 
            className="text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
          >
            <a href="/case-studies" className="inline-flex items-center gap-2">
              {t.about.seeCaseStudies}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
