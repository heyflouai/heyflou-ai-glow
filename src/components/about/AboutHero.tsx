import logoNew from '@/assets/heyflou-logo-new.png';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '@/i18n';

export function AboutHero() {
  const t = useTranslation();
  
  return (
    <section className="relative py-20 md:py-28 text-center overflow-visible bg-background transition-colors duration-300">
      {/* Subtle glow background - Light Mode */}
      <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, hsl(var(--hf-purple)/0.08) 0%, hsl(var(--hf-sky)/0.04) 50%, transparent 80%)",
            filter: "blur(60px)",
          }}
        />
      </div>
      
      {/* Dark mode radial glow from top center */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, hsl(var(--hf-purple)/0.15) 0%, hsl(var(--hf-sky)/0.08) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H1 first */}
        <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4 md:mb-6">
          {t.about.heroTitle}
        </h1>
        
        {/* Large logo below H1 */}
        <div className="flex justify-center mt-4 md:mt-6">
          <img 
            src={logoNew} 
            alt="HeyFlou AI Consulting logo" 
            className="h-[128px] md:h-[176px] lg:h-[224px] w-auto drop-shadow-sm dark:drop-shadow-[0_0_40px_hsl(var(--hf-purple)/0.3)]" 
            loading="eager" 
          />
        </div>
        
        {/* Subline */}
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.about.heroSubtitle}
        </p>
        
        {/* CTA group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
      </div>
    </section>
  );
}