import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { useTranslation } from '@/i18n';
import logo from '@/assets/heyflou-logo-new.png';

export function HealthcareHero() {
  const t = useTranslation();
  const hcT = t.healthcare as Record<string, string>;

  return (
    <Section background="glow" padding="large" className="pt-24">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            {t.nav.home}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-primary transition-colors">
            {t.nav.services}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{t.nav.healthcare}</span>
        </nav>

        {/* Logo + Healthcare Icon */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <img src={logo} alt="HeyFlou" className="h-12 w-auto" />
          <div className="w-12 h-12 rounded-xl hf-gradient flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 text-center leading-tight">
          {hcT.heroTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-center">
          {hcT.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton variant="hero" size="xl" asChild>
            <a href="#contact-form">
              {hcT.getStarted}
            </a>
          </GradientButton>
          <GradientButton variant="secondary" size="xl" asChild>
            <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
              {hcT.bookStrategyCall}
            </a>
          </GradientButton>
        </div>
      </motion.div>
    </Section>
  );
}
