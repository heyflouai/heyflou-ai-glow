import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { FlipWords } from '@/components/ui/flip-words';
import { useTranslation } from '@/i18n';
import logo from '@/assets/heyflou-logo-new.png';

export function HealthcareHero() {
  const t = useTranslation();
  const hcT = t.healthcare as Record<string, string>;

  return (
    <Section background="glow" padding="hero">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo + Healthcare Icon */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <img src={logo} alt="HeyFlou" className="h-12 w-auto" />
          <div className="w-12 h-12 rounded-xl hf-gradient flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title with FlipWords */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 text-center leading-tight">
          <span>HeyFlou for </span>
          <FlipWords words={["Healthcare"]} />
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-center">
          {hcT.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact-form" className="w-full sm:w-auto">
            <ShimmerButton
              shimmerColor="hsl(var(--hf-teal))"
              shimmerDuration="2.5s"
              background="hsl(var(--primary))"
              className="px-8 py-4 text-base font-semibold text-primary-foreground w-full sm:w-auto"
            >
              {hcT.getStarted}
            </ShimmerButton>
          </a>
          <MovingBorderButton
            as="a"
            href="https://calendly.com/heyflou-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            containerClassName="h-14 w-full sm:w-auto"
            className="px-6 py-3 font-medium"
            duration={3000}
          >
            {hcT.bookStrategyCall}
          </MovingBorderButton>
        </div>
      </motion.div>
    </Section>
  );
}
