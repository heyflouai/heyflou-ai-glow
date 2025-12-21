import { Bot, TrendingUp, Users, Zap, Shield, ChartBar } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { KpiStat } from '@/components/ui/kpi-stat';
import { Link } from 'react-router-dom';
import { CompactForm } from '@/components/forms/CompactForm';
import { ProblemSolution } from '@/components/home/ProblemSolution';
import { IndustrySystems } from '@/components/home/IndustrySystems';
import { IntegrationBeams } from '@/components/home/IntegrationBeams';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useTranslation } from '@/i18n';

export default function Home() {
  const t = useTranslation();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HeyFlou",
    "description": "AI Consulting for SMB Workflow Automation",
    "url": "https://heyflou.com",
    "logo": "https://heyflou.com/logo.png",
    "sameAs": ["https://linkedin.com/company/heyflou", "https://twitter.com/heyflou"]
  };

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
    <SEOHead title="HeyFlou | AI Consulting for SMB Workflow Automation" description="Save time and get more clients with AI chatbots, automated lead management, and CRM integration. Built for small and medium businesses." canonical="https://heyflou.com" jsonLd={[organizationJsonLd, faqJsonLd]} />
  
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 text-center overflow-visible">
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
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              {t.home.heroTitle}
            </h1>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground/80">
              {t.home.heroSubtitle}
            </h2>
              
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 mt-8">
              <GradientButton variant="hero" size="xl" asChild>
                <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                  {t.home.bookStrategyCall}
                </a>
              </GradientButton>
              <GradientButton variant="secondary" size="xl" asChild>
                <Link to="/contact">{t.home.getAiAudit}</Link>
              </GradientButton>
            </div>
              
            {/* Hero badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center px-3 py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                <span className="text-foreground font-medium">{t.home.badge1}</span>
              </div>
              <div className="flex items-center px-3 py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                <span className="text-foreground font-medium">{t.home.badge2}</span>
              </div>
              <div className="flex items-center px-3 py-1 bg-background/40 dark:bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
                <span className="text-foreground font-medium">{t.home.badge3}</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why AI Now - Stats Grid */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.home.statsTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.home.statsSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyMetrics.map((metric, index) => <KpiStat key={metric.id} value={metric.value} label={metric.label} description={metric.description} icon={index === 0 ? <TrendingUp size={24} /> : index === 1 ? <ChartBar size={24} /> : index === 2 ? <Users size={24} /> : index === 3 ? <Bot size={24} /> : index === 4 ? <Zap size={24} /> : <Shield size={24} />} />)}
        </div>
      </Section>

      {/* Problem → Solution → What We Do */}
      <Section id="problem-solution" background="muted">
        <ProblemSolution />
      </Section>

      {/* Industry Systems - Unified Section */}
      <IndustrySystems className="bg-background" />

      {/* Integration Beams - Above How It Works */}
      <IntegrationBeams />

      {/* Process */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.home.processTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.home.processSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-full hf-gradient flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform">
                {step.step}
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>)}
        </div>
      </Section>


      {/* FAQ */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {t.home.faqTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.home.faqSubtitle}
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="bg-card rounded-lg hf-shadow border-none"
            >
              <AccordionTrigger className="px-6 py-6 hover:bg-muted/50 transition-colors hover:no-underline [&>svg]:text-hf-teal">
                <span className="font-semibold text-foreground text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground">
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

      {/* Final CTA */}
      <Section background="glow" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
          {t.home.finalCtaTitle}
        </h2>
        <GradientButton variant="hero" size="xl" asChild>
          <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
            {t.home.finalCtaBtn}
          </a>
        </GradientButton>
      </Section>
    </main>
  </>;
}
