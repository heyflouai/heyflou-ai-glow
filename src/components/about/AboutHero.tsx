import logoNew from '@/assets/heyflou-logo-new.png';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative py-20 md:py-28 text-center overflow-visible">
      {/* Subtle glow background, not a watermark */}
      <div className="pointer-events-none absolute inset-0 -z-10 hf-glow" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H1 first */}
        <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-4 md:mb-6">
          About HeyFlou
        </h1>
        
        {/* Large logo below H1 */}
        <div className="flex justify-center mt-4 md:mt-6">
          <img 
            src={logoNew} 
            alt="HeyFlou AI Consulting logo" 
            className="h-[128px] md:h-[176px] lg:h-[224px] w-auto drop-shadow-sm"
            loading="eager"
          />
        </div>
        
        {/* Subline */}
        <p className="mt-6 text-xl text-hf-navy/90 max-w-2xl mx-auto mb-8">
          We help therapists and service professionals save time and get more clients through proven AI automation.
        </p>
        
        {/* CTA group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <GradientButton 
            variant="primary" 
            size="lg"
            asChild
          >
            <a 
              href="#contact"
              className="inline-flex items-center gap-2"
            >
              Book a Strategy Call
            </a>
          </GradientButton>
          
          <Button 
            variant="ghost" 
            size="lg"
            asChild
          >
            <a 
              href="/case-studies"
              className="inline-flex items-center gap-2"
            >
              See Case Studies
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}