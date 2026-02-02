import { motion } from 'framer-motion';
import { Heart, Dumbbell, Plane, Cog, Lightbulb, Search, Hammer, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { Spotlight } from '@/components/ui/spotlight';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Steps } from '@/components/ui/steps';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { PAGE_SEO, SERVICE_SCHEMA, getCanonicalUrl } from '@/lib/seo-config';
import { useTranslation } from '@/i18n';

export default function Services() {
  const t = useTranslation();
  const servicesT = t.servicesPage as Record<string, string>;

  const industryCards = [
    {
      title: servicesT.cardHealthcareTitle,
      description: servicesT.cardHealthcareDesc,
      link: '/services/healthcare',
      icon: <Heart className="w-6 h-6 text-primary" />,
    },
    {
      title: servicesT.cardFitnessTitle,
      description: servicesT.cardFitnessDesc,
      link: '/services/fitness-education',
      icon: <Dumbbell className="w-6 h-6 text-primary" />,
    },
    {
      title: servicesT.cardTravelTitle,
      description: servicesT.cardTravelDesc,
      link: '/services/travel-agencies',
      icon: <Plane className="w-6 h-6 text-primary" />,
      badge: servicesT.cardTravelBadge,
    },
    {
      title: servicesT.cardCustomTitle,
      description: servicesT.cardCustomDesc,
      link: '/services/custom',
      icon: <Cog className="w-6 h-6 text-primary" />,
    },
    {
      title: servicesT.cardConsultingTitle,
      description: servicesT.cardConsultingDesc,
      link: '/services/consulting',
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
    },
  ];

  const steps = [
    {
      title: servicesT.step1Title,
      description: servicesT.step1Desc,
      icon: <Search className="w-5 h-5" />,
    },
    {
      title: servicesT.step2Title,
      description: servicesT.step2Desc,
      icon: <Hammer className="w-5 h-5" />,
    },
    {
      title: servicesT.step3Title,
      description: servicesT.step3Desc,
      icon: <HeartHandshake className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <SEOHead 
        title={PAGE_SEO.services.title}
        description={PAGE_SEO.services.description}
        canonical={getCanonicalUrl(PAGE_SEO.services.path)}
        jsonLd={SERVICE_SCHEMA}
      />
      
      <main className="services-page">
        {/* Hero Section with Spotlight & Animated Background */}
        <Section background="default" padding="large" className="relative overflow-hidden pt-24 md:pt-32">
          {/* Animated gradient background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-hf-teal/5 via-transparent to-hf-purple/5" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-hf-teal/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-hf-purple/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hf-sky/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(var(--primary))"
          />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground">
                {servicesT.heroTitle}
              </h1>
              {/* Gradient text subtitle */}
              <p className="text-xl md:text-2xl max-w-2xl mx-auto bg-gradient-to-r from-hf-teal via-primary to-hf-purple bg-clip-text text-transparent font-medium">
                {servicesT.heroSubtitle}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Industry Cards Section - Consistent spacing */}
        <Section background="muted" id="industries" className="py-20 md:py-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              {servicesT.industryCardsTitle}
            </h2>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <HoverEffect items={industryCards} />
          </div>
        </Section>

        {/* Process Section - With background pattern */}
        <Section background="default" id="process" className="py-20 md:py-[120px] relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.03)_1px,_transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                {servicesT.processTitle}
              </h2>
              <p className="text-lg text-muted-foreground">
                {servicesT.processSubtitle}
              </p>
            </motion.div>

            <Steps steps={steps} />
          </div>
        </Section>

        {/* CTA Section - Gradient background with visual element */}
        <Section background="muted" padding="large" className="py-20 md:py-[120px] relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-hf-teal/5 via-transparent to-hf-purple/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-8 relative z-10"
          >
            {/* Visual element */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-hf-teal via-primary to-hf-purple flex items-center justify-center mb-6"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              {servicesT.notSureTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {servicesT.notSureSubtitle}
            </p>

            {/* Animated buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/services/custom" className="w-full sm:w-auto">
                <ShimmerButton 
                  className="text-base font-semibold w-full min-h-[52px] px-8"
                  shimmerColor="hsl(var(--hf-teal))"
                >
                  <span className="flex items-center gap-2">
                    {servicesT.exploreCustom}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                </ShimmerButton>
              </Link>
              <MovingBorderButton
                as="a"
                href="https://calendly.com/heyflou-ai/30min"
                target="_blank"
                rel="noopener noreferrer"
                containerClassName="w-full sm:w-auto h-[52px]"
                className="px-6 font-semibold"
                duration={3000}
              >
                {servicesT.bookStrategyCall}
              </MovingBorderButton>
            </div>
          </motion.div>
        </Section>
      </main>

      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}
