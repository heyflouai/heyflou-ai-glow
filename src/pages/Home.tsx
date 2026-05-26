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

            {/* AWS Founders Club Trust Badge */}
            <motion.a
              href="https://aws.amazon.com/startups/founders-club/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="group mt-10 mx-4 px-4 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3 text-center sm:text-left border-t border-[#e0e0e0] dark:border-[#333] sm:border-t-0 cursor-pointer"
              aria-label="AWS Founders Club - Trusted by AWS"
            >
              <svg
                viewBox="0 0 304 182"
                className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 transition-transform duration-200 group-hover:scale-105 fill-[#1a1a1a] dark:fill-[#f0f0f0]"
                aria-hidden="true"
              >
                <path d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5C50.1.7 55.3.1 60.8.1c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4h.1c0 .8.5 1.2 1 1.2z" />
                <path d="M75.5 79.8c2.9 0 5.9-.5 9-1.6 3.1-1.1 5.9-3 8.2-5.6 1.4-1.6 2.4-3.4 2.9-5.4.5-2 .8-4.4.8-7.2v-3.5c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.5 10.8 3.5z" />
                <path d="M165.4 95.6c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L139.3 25c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l14.4 56.7 13.4-56.7c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l13.6 57.4 14.8-57.4c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-20.7 65.7c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L189 30.4l-13.3 55.2c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-4.4z" />
                <path d="M275.4 98.3c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L267 55c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" />
                <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" fill="#FF9900" />
                <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" fill="#FF9900" />
              </svg>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[15px] sm:text-[16px] font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] leading-tight">
                  Trusted by AWS
                </span>
                <span className="text-[13px] sm:text-[14px] font-normal text-[#666] dark:text-[#999] leading-snug mt-0.5">
                  Part of the AWS Founders Club in Tel Aviv
                  <br />
                  Backed by Amazon Web Services for innovation and scale
                </span>
              </div>
            </motion.a>

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
