import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MessageSquare, Calendar, Send, Receipt, Database, BarChart3, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { getCanonicalUrl } from '@/lib/seo-config';
import { useTranslation } from '@/i18n';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { CursorSpotlight } from '@/components/ui/cursor-spotlight';
import { GradientMovingButton } from '@/components/ui/gradient-moving-button';
import { Spotlight } from '@/components/ui/spotlight';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-collision';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';

const JAKARTA = '"Plus Jakarta Sans", sans-serif';
const INTER = 'Inter, sans-serif';
const GRADIENT = 'linear-gradient(135deg, #1FA6C1, #A15BF1)';

export default function Agents() {
  const t = useTranslation();
  const s = t.servicesAgents as Record<string, string>;

  // Bento: 1 large hero + 2 medium + 3 small (Reply Agent is the hero)
  const agents = [
    { icon: MessageSquare, name: s.agent1Name, desc: s.agent1Desc, size: 'large' as const },
    { icon: Calendar, name: s.agent2Name, desc: s.agent2Desc, size: 'medium' as const },
    { icon: Send, name: s.agent3Name, desc: s.agent3Desc, size: 'medium' as const },
    { icon: Receipt, name: s.agent4Name, desc: s.agent4Desc, size: 'small' as const },
    { icon: Database, name: s.agent5Name, desc: s.agent5Desc, size: 'small' as const },
    { icon: BarChart3, name: s.agent6Name, desc: s.agent6Desc, size: 'small' as const },
  ];

  const steps = [
    { title: s.step1Title, desc: s.step1Desc },
    { title: s.step2Title, desc: s.step2Desc },
    { title: s.step3Title, desc: s.step3Desc },
    { title: s.step4Title, desc: s.step4Desc },
  ];

  const results = [
    { stat: s.result1Stat, label: s.result1Label, source: s.result1Source },
    { stat: s.result2Stat, label: s.result2Label, source: s.result2Source },
    { stat: s.result3Stat, label: s.result3Label, source: s.result3Source },
  ];

  return (
    <>
      <SEOHead
        title="AI Agents for Your Business | HeyFlou"
        description="Deploy a team of AI agents trained on your specific workflows. Reply, scheduling, follow-up, billing, data, and reporting agents — running 24/7."
        canonical={getCanonicalUrl('/services/agents')}
      />

      <main className="bg-white">
        <TracingBeam>
        {/* HERO */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-28 lg:pt-32">
          <CursorSpotlight color="rgba(31,166,193,0.18)" size={520} />
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <TextGenerateEffect
              as="h1"
              words={s.heroTitle}
              className="text-[36px] md:text-[52px] leading-[1.1] tracking-tight text-[#0F1729]"
              style={{ fontFamily: JAKARTA, fontWeight: 800 }}
            />
            <p
              className="mt-6 text-[18px] md:text-[20px] leading-[1.55] text-[#2B3650] max-w-[620px] mx-auto"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.heroSubtitle}
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <BackgroundBeamsWithCollision className="bg-[#0F1729] py-20">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
          <CursorSpotlight color="rgba(161,91,241,0.22)" size={520} />
          <div className="relative z-20 max-w-[800px] mx-auto px-6 text-center">
            <h2
              className="text-[28px] md:text-[36px] leading-[1.2] text-white"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.problemTitle}
            </h2>
            <p
              className="mt-6 text-[17px] leading-[1.7] text-[#B8C5D6]"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.problemBody}
            </p>

            <div className="mt-12">
              <div
                className="text-[64px] md:text-[80px] leading-none bg-clip-text text-transparent"
                style={{
                  fontFamily: JAKARTA,
                  fontWeight: 800,
                  backgroundImage: GRADIENT,
                  WebkitBackgroundClip: 'text',
                }}
              >
                {s.statPercent}
              </div>
              <div
                className="mt-3 text-[20px] text-white"
                style={{ fontFamily: INTER, fontWeight: 600 }}
              >
                {s.statLabel}
              </div>
              <div
                className="mt-1 text-[16px] text-[#B8C5D6]"
                style={{ fontFamily: INTER, fontWeight: 400 }}
              >
                {s.statSubLabel}
              </div>
              <div
                className="mt-3 text-[13px] italic text-[#B8C5D6]"
                style={{ fontFamily: INTER, fontWeight: 400 }}
              >
                {s.statSource}
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>

        {/* AGENT BENTO GRID */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-center text-[28px] md:text-[36px] leading-[1.2] text-[#0F1729]"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.gridTitle}
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 gap-5 md:auto-rows-[140px]">
              {agents.map(({ icon: Icon, name, desc, size }, i) => {
                const span =
                  size === 'large'
                    ? 'md:col-span-3 md:row-span-2'
                    : size === 'medium'
                    ? 'md:col-span-3 md:row-span-1'
                    : 'md:col-span-2 md:row-span-1';
                const isLarge = size === 'large';
                return (
                  <div
                    key={name}
                    className={`${span} group relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-6 md:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#1FA6C1] hover:shadow-[0_12px_32px_rgba(31,166,193,0.10)] ${isLarge ? 'flex flex-col justify-between' : ''}`}
                  >
                    {isLarge && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-[0.05]"
                        style={{ background: GRADIENT }}
                      />
                    )}
                    <div className="relative z-10">
                      <div
                        className={`flex items-center justify-center rounded-full ${isLarge ? 'h-14 w-14' : 'h-10 w-10'}`}
                        style={{ background: GRADIENT }}
                      >
                        <Icon className={`${isLarge ? 'h-7 w-7' : 'h-5 w-5'} text-white`} />
                      </div>
                      <h3
                        className={`mt-5 text-[#0F1729] ${isLarge ? 'text-[24px] md:text-[28px]' : 'text-[18px]'}`}
                        style={{ fontFamily: JAKARTA, fontWeight: 700 }}
                      >
                        {name}
                      </h3>
                      <p
                        className={`mt-2 leading-[1.6] text-[#2B3650] ${isLarge ? 'text-[16px] md:text-[17px]' : 'text-[14px] md:text-[15px]'}`}
                        style={{ fontFamily: INTER, fontWeight: 400 }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              className="mt-10 text-center text-[16px] text-[#2B3650]"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.gridFooter}
            </p>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-center text-[28px] md:text-[36px] leading-[1.2] text-[#0F1729]"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.processTitle}
            </h2>

            <div className="relative mt-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {/* connector */}
              <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-[#E2E8F0]" aria-hidden />
              {steps.map((step, i) => (
                <div key={step.title} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <div
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-white text-[18px]"
                    style={{ backgroundColor: '#1FA6C1', fontFamily: JAKARTA, fontWeight: 700 }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="mt-5 text-[18px] text-[#0F1729]"
                    style={{ fontFamily: JAKARTA, fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-[15px] leading-[1.6] text-[#2B3650]"
                    style={{ fontFamily: INTER, fontWeight: 400 }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-14 mx-auto max-w-[520px] rounded-lg bg-white px-6 py-5"
              style={{ borderLeft: '4px solid #1FA6C1' }}
            >
              <p className="text-[15px] text-[#2B3650]" style={{ fontFamily: INTER, fontWeight: 400 }}>
                {s.calloutText}{' '}
                <Link to="/contact" className="text-[#1FA6C1] font-semibold inline-flex items-center gap-1">
                  → {s.calloutLink}
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-center text-[28px] md:text-[36px] leading-[1.2] text-[#0F1729]"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.resultsTitle}
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((r) => (
                <ResultCard key={r.label} stat={r.stat} label={r.label} source={r.source} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: GRADIENT }}>
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2
              className="text-[30px] md:text-[40px] leading-[1.15] text-white"
              style={{ fontFamily: JAKARTA, fontWeight: 800 }}
            >
              {s.ctaTitle}
            </h2>
            <p
              className="mt-5 mx-auto max-w-[560px] text-[18px] leading-[1.55] text-white/90"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.ctaSubtext}
            </p>
            <div className="mt-8">
              <GradientMovingButton
                to="/contact"
                background="#ffffff"
                color="#1FA6C1"
              >
                {s.ctaButton} <ArrowRight className="h-5 w-5" />
              </GradientMovingButton>
            </div>
          </div>
        </section>
        </TracingBeam>
      </main>
    </>
  );
}