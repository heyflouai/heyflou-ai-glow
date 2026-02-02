import { motion } from 'framer-motion';
import { Heart, Dumbbell, Plane, Cog, Lightbulb, Search, Hammer, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { Spotlight } from '@/components/ui/spotlight';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Steps } from '@/components/ui/steps';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Button } from '@/components/ui/button';
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
      
      <main>
        {/* Hero Section with Spotlight */}
        <Section background="default" padding="large" className="relative overflow-hidden">
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
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                {servicesT.heroSubtitle}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Industry Cards Section */}
        <Section background="muted" id="industries">
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

        {/* Process Section */}
        <Section background="default" id="process">
          <div className="max-w-3xl mx-auto">
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

        {/* CTA Section */}
        <Section background="muted" padding="large">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              {servicesT.notSureTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {servicesT.notSureSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services/custom" className="w-full sm:w-auto">
                <ShimmerButton className="text-base font-semibold w-full min-h-[48px]">
                  {servicesT.exploreCustom}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ShimmerButton>
              </Link>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto min-h-[48px]">
                <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                  {servicesT.bookStrategyCall}
                </a>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
    </>
  );
}
