import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { CompactForm } from '@/components/forms/CompactForm';
import { BeforeAfterFeatures } from '@/components/home/BeforeAfterFeatures';
import { IndustryCards } from '@/components/home/IndustryCards';
import { IntegrationBeams } from '@/components/home/IntegrationBeams';
import { HeroWorkflow } from '@/components/home/HeroWorkflow';
import { ValuePropositionTimeline } from '@/components/home/ValuePropositionTimeline';
import { FinalCTA } from '@/components/home/FinalCTA';
import { ToolsVsAgents } from '@/components/home/ToolsVsAgents';

import { useTranslation } from '@/i18n';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { motion } from 'framer-motion';
import awsLogo from '@/assets/aws-logo.svg';

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
  }];

  const statsData = [
    { number: t.home.stat1Number, label: t.home.stat1Label, source: t.home.stat1Source },
    { number: t.home.stat2Number, label: t.home.stat2Label, source: t.home.stat2Source },
    { number: t.home.stat3Number, label: t.home.stat3Label, source: t.home.stat3Source },
    { number: t.home.stat4Number, label: t.home.stat4Label, source: t.home.stat4Source },
    { number: t.home.stat5Number, label: t.home.stat5Label, source: t.home.stat5Source },
    { number: t.home.stat6Number, label: t.home.stat6Label, source: t.home.stat6Source },
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
        
        <div className="max-w-7xl mx-auto relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-12 items-center text-center lg:text-left">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base md:text-lg font-semibold uppercase tracking-wide text-hf-teal mb-3"
              >
                {t.homepage.heroHook}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] drop-shadow-sm mb-6 lg:whitespace-nowrap"
              >
                {(() => {
                  const parts = t.homepage.heroTitle.split(/\.\s+/);
                  const first = parts[0] + '.';
                  const second = parts.slice(1).join('. ');
                  return (
                    <>
                      <span className="block">{first}</span>
                      <span className="block">{second}</span>
                    </>
                  );
                })()}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {t.homepage.heroSubtitle}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-8 md:mt-10"
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
                  to="/case-studies" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-foreground bg-transparent border border-hf-teal/50 rounded-full transition-all duration-300 hover:border-hf-teal hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
                >
                  {t.homepage.heroSecondaryCta}
                </Link>
              </motion.div>

              {/* AWS Startup Club Trust Badge */}
              <motion.a
                href="https://aws.amazon.com/startups/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="group mt-10 mx-4 lg:mx-0 px-4 py-5 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3 text-center sm:text-left border-t border-[#e0e0e0] dark:border-[#333] sm:border-t-0 cursor-pointer"
                aria-label="AWS Startup Club - Backed by AWS"
              >
                <img
                  src={awsLogo}
                  alt="Amazon Web Services"
                  className="h-7 sm:h-8 w-auto shrink-0 transition-transform duration-200 group-hover:scale-105 dark:invert dark:brightness-110"
                />
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-[15px] sm:text-[16px] font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] leading-tight">
                    Backed by AWS
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-normal text-[#666] dark:text-[#999] leading-snug mt-0.5">
                    Part of the AWS Startup Club in Tel Aviv
                    <br />
                    Trusted by Amazon Web Services for innovation and scale
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Right column - Animated Workflow Diagram */}
            <div className="w-full">
              <HeroWorkflow />
            </div>
          </div>
        </div>
      </section>


      {/* Tools vs Agents — handles the "I already use AI" objection */}
      <ToolsVsAgents />

      {/* Why AI Now - Stats Grid */}
      <Section>
        <div className="text-center mb-10 md:mb-14 px-5 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground mb-3 md:mb-4">
            {t.home.statsTitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t.home.statsSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-5 md:px-0">
          {statsData.map((stat, index) => {
            // Split number into main part and accent suffix
            const accentParts = ['%', '→', 'B'];
            let mainNum = stat.number;
            let accentText = '';
            for (const part of accentParts) {
              if (stat.number.includes(part)) {
                const idx = stat.number.indexOf(part);
                // For "4% → 88%", keep the whole thing as main and accent the last %
                if (part === '%' && stat.number.includes('→')) {
                  mainNum = stat.number.slice(0, stat.number.lastIndexOf('%'));
                  accentText = '%';
                  break;
                }
                mainNum = stat.number.slice(0, idx);
                accentText = stat.number.slice(idx);
                break;
              }
            }
            // For $294B, accent the B
            if (stat.number.startsWith('$') && stat.number.endsWith('B')) {
              mainNum = stat.number.slice(0, -1);
              accentText = 'B';
            }
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight">
                  {mainNum}
                  {accentText && <span className="text-hf-teal">{accentText}</span>}
                </div>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-muted-foreground/60">
                  {stat.source}
                </p>
              </motion.div>
            );
          })}
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
        <div className="max-w-6xl mx-auto px-5 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card rounded-xl border border-border/60 p-5 md:p-6 hf-shadow hover:border-hf-teal/30 transition-colors duration-200"
              >
                <h3 className="font-semibold text-foreground text-base md:text-lg leading-snug mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
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
