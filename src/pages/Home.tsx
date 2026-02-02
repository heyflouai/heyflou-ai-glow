import { Bot, TrendingUp, Users, Zap, Shield, ChartBar } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { KpiStat } from '@/components/ui/kpi-stat';
import { Link } from 'react-router-dom';
import { CompactForm } from '@/components/forms/CompactForm';
import { BeforeAfterFeatures } from '@/components/home/BeforeAfterFeatures';
import { IndustryCards } from '@/components/home/IndustryCards';
import { IntegrationBeams } from '@/components/home/IntegrationBeams';
import { HeroWorkflow } from '@/components/home/HeroWorkflow';
import { ValuePropositionTimeline } from '@/components/home/ValuePropositionTimeline';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useTranslation } from '@/i18n';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { motion } from 'framer-motion';

export default function Home() {
  const t = useTranslation();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": t.home.faq1Q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t.home.faq1A
      }
    }, {
      "@type": "Question",
      "name": t.home.faq2Q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t.home.faq2A
      }
    }, {
      "@type": "Question",
      "name": t.home.faq3Q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t.home.faq3A
      }
    }]
  };

  const processSteps = [{
    step: "01",
    title: t.home.step1Title,
    description: t.home.step1Desc
  }, {
    step: "02",
    title: t.home.step2Title,
    description: t.home.step2Desc
  }, {
    step: "03",
    title: t.home.step3Title,
    description: t.home.step3Desc
  }, {
    step: "04",
    title: t.home.step4Title,
    description: t.home.step4Desc
  }];

  const faqItems = [{
    question: t.home.faq1Q,
    answer: t.home.faq1A
  }, {
    question: t.home.faq2Q,
    answer: t.home.faq2A
  }, {
    question: t.home.faq3Q,
    answer: t.home.faq3A
  }, {
    question: t.home.faq4Q,
    answer: t.home.faq4A
  }, {
    question: t.home.faq5Q,
    answer: t.home.faq5A
  }, {
    question: t.home.faq6Q,
    answer: t.home.faq6A
  }, {
    question: t.home.faq7Q,
    answer: t.home.faq7A
  }];

  const keyMetrics = [
    { id: "revenue_increase", value: "91%", label: t.metrics.revenueIncrease, description: t.metrics.revenueIncreaseDesc },
    { id: "profit_margins", value: "86%", label: t.metrics.improvedMargins, description: t.metrics.improvedMarginsDesc },
    { id: "scale_operations", value: "87%", label: t.metrics.scaleOperations, description: t.metrics.scaleOperationsDesc },
    { id: "ai_usage_growth", value: "55%", label: t.metrics.usSmbAiUsage, description: t.metrics.usSmbAiUsageDesc },
    { id: "time_savings", value: "20+", label: t.metrics.hoursSaved, description: t.metrics.hoursSavedDesc },
    { id: "cost_savings", value: "$2K", label: t.metrics.monthlySavings, description: t.metrics.monthlySavingsDesc }
  ];

  return <>
    <SEOHead 
      title={PAGE_SEO.home.title} 
      description={PAGE_SEO.home.description} 
      canonical={getCanonicalUrl(PAGE_SEO.home.path)} 
      jsonLd={faqJsonLd} 
    />
  
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-28 text-center overflow-visible px-5 md:px-6">
        {/* SOFT AURA BACKGROUND - Light Mode */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-visible dark:hidden">
          <div className="absolute left-1/2 -top-28 md:-top-36 -translate-x-1/2 w-[120vw] md:w-[90vw] h-[60vh] md:h-[66vh] rounded-[9999px]" style={{
            background: "radial-gradient(70% 55% at 50% 0%, hsl(var(--hf-teal)/0.16) 0%, hsl(var(--hf-sky)/0.12) 35%, hsl(var(--hf-purple)/0.16) 55%, transparent 80%)",
            filter: "blur(72px) saturate(110%)",
            opacity: 0.18
          }} />
          <div className="absolute inset-0" style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,.85) 40%, rgba(0,0,0,0) 85%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,.85) 40%, rgba(0,0,0,0) 85%)",
            background: "radial-gradient(100% 60% at 50% -10%, hsl(var(--hf-ink)/0.06) 0%, transparent 70%)"
          }} />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')"
          }} />
        </div>
        
        {/* PREMIUM HERO GLOW - Dark Mode Only */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-visible hidden dark:block">
          <div 
            className="absolute left-1/2 -top-20 md:-top-32 -translate-x-1/2 w-[140vw] md:w-[100vw] h-[70vh] md:h-[80vh] rounded-[9999px]"
            style={{
              background: "radial-gradient(50% 45% at 50% 20%, hsl(206 83% 60% / 0.15) 0%, hsl(268 84% 65% / 0.12) 40%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div 
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[50vh] rounded-[9999px]"
            style={{
              background: "radial-gradient(60% 50% at 50% 0%, hsl(268 84% 65% / 0.08) 0%, transparent 60%)",
              filter: "blur(60px)",
            }}
          />
          <div 
            className="absolute left-[20%] top-[10%] w-[30vw] h-[40vh] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(190 72% 44% / 0.06) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')"
          }} />
        </div>
        
        <div className="text-center max-w-4xl mx-auto relative">
          <div className="relative z-10">
            {/* Hook Line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base md:text-lg font-semibold uppercase tracking-wide text-hf-teal mb-3"
            >
              {t.homepage.heroHook}
            </motion.p>
            
            {/* H1 - Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] drop-shadow-sm"
            >
              {t.homepage.heroTitle}
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {t.homepage.heroSubtitle}
            </motion.p>
              
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-10"
            >
              {/* Primary CTA - Shimmer Button */}
              <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <ShimmerButton
                  shimmerColor="hsl(var(--hf-teal))"
                  shimmerDuration="2.5s"
                  background="hsl(var(--primary))"
                  className="px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold text-primary-foreground w-full"
                >
                  {t.homepage.heroPrimaryCta}
                </ShimmerButton>
              </a>
              
              {/* Secondary CTA */}
              <Link 
                to="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-foreground bg-transparent border border-hf-teal/50 rounded-full transition-all duration-300 hover:border-hf-teal hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
              >
                {t.homepage.heroSecondaryCta}
              </Link>
            </motion.div>
              
            {/* Hero badges / Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm mt-8"
            >
              <div className="flex items-center px-2.5 md:px-3 py-1.5 md:py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                <span className="text-foreground font-medium">{t.home.badge1}</span>
              </div>
              <div className="flex items-center px-2.5 md:px-3 py-1.5 md:py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                <span className="text-foreground font-medium">{t.home.badge2}</span>
              </div>
              <div className="flex items-center px-2.5 md:px-3 py-1.5 md:py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                <span className="text-foreground font-medium">{t.home.badge3}</span>
              </div>
            </motion.div>
            
            {/* Animated Workflow Diagram */}
            <HeroWorkflow />
          </div>
        </div>
      </section>


      {/* Why AI Now - Stats Grid */}
      <Section>
        <div className="text-center mb-8 md:mb-12 px-5 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground mb-3 md:mb-4">
            {t.home.statsTitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t.home.statsSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-5 md:px-0">
          {keyMetrics.map((metric, index) => <KpiStat key={metric.id} value={metric.value} label={metric.label} description={metric.description} icon={index === 0 ? <TrendingUp size={24} /> : index === 1 ? <ChartBar size={24} /> : index === 2 ? <Users size={24} /> : index === 3 ? <Bot size={24} /> : index === 4 ? <Zap size={24} /> : <Shield size={24} />} />)}
        </div>
      </Section>

      {/* Before/After Features - Problem to Solution */}
      <BeforeAfterFeatures />

      {/* Industry Cards - Service Pages */}
      <IndustryCards />

      {/* Integration Beams - Above How It Works */}
      <IntegrationBeams />

      {/* Value Proposition Timeline - 4 Week Process */}
      <ValuePropositionTimeline />


      {/* FAQ */}
      <Section background="muted">
        <div className="text-center mb-8 md:mb-12 px-5 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground mb-3 md:mb-4">
            {t.home.faqTitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t.home.faqSubtitle}
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3 md:space-y-4 px-5 md:px-0">
          {faqItems.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="bg-card rounded-lg hf-shadow border-none"
            >
              <AccordionTrigger className="px-4 md:px-6 py-4 md:py-6 hover:bg-muted/50 transition-colors hover:no-underline [&>svg]:text-hf-teal min-h-[48px]">
                <span className="font-semibold text-foreground text-left text-sm md:text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6 text-muted-foreground text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Compact Form */}
      <Section id="get-started">
        <CompactForm sourcePage="home" />
      </Section>

      {/* Final CTA with Multiple Options */}
      <FinalCTA />
    </main>
  </>;
}
