import stackedLogo from '@/assets/heyflou_logo_lockup_stacked.png';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="pt-16 pb-20 md:py-28">
      {/* Faint watermark logo behind content */}
      <div className="absolute inset-0 flex items-center justify-center -z-5">
        <img 
          src={stackedLogo} 
          alt="" 
          className="w-96 h-96 opacity-5 object-contain"
          aria-hidden="true"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Logo-first layout */}
        <div className="hero-logo mb-8 inline-block rounded-2xl p-4">
          <img 
            src={stackedLogo} 
            alt="HeyFlou logo" 
            className="h-18 md:h-28 mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold font-display text-hf-ink mb-6">
          About HeyFlou
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          We help SMBs automate work with AI—safely, measurably, and fast.
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