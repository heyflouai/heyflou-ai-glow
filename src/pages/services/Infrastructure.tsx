import { Link } from 'react-router-dom';
import { Database, ShieldCheck, CalendarClock, BarChart3, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { getCanonicalUrl } from '@/lib/seo-config';
import { useTranslation } from '@/i18n';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { CursorSpotlight } from '@/components/ui/cursor-spotlight';
import { GradientMovingButton } from '@/components/ui/gradient-moving-button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { WobbleCard } from '@/components/ui/wobble-card';
import { PinContainer } from '@/components/ui/3d-pin';
import theraflouMark from '@/assets/theraflou-mark.svg';

const JAKARTA = '"Plus Jakarta Sans", sans-serif';
const INTER = 'Inter, sans-serif';
const GRADIENT = 'linear-gradient(135deg, #1FA6C1, #A15BF1)';

export default function Infrastructure() {
  const t = useTranslation();
  const s = t.servicesInfrastructure as Record<string, string>;

  const builds = [
    { icon: Database, title: s.build1Title, desc: s.build1Desc },
    { icon: ShieldCheck, title: s.build2Title, desc: s.build2Desc },
    { icon: CalendarClock, title: s.build3Title, desc: s.build3Desc },
    { icon: BarChart3, title: s.build4Title, desc: s.build4Desc },
  ];

  const steps = [
    { title: s.step1Title, desc: s.step1Desc },
    { title: s.step2Title, desc: s.step2Desc },
    { title: s.step3Title, desc: s.step3Desc },
    { title: s.step4Title, desc: s.step4Desc },
  ];

  const bullets = [s.caseBullet1, s.caseBullet2, s.caseBullet3];

  return (
    <>
      <SEOHead
        title="Custom AI Infrastructure for Your Industry | HeyFlou"
        description="We design and build vertical platforms — CRMs, compliance layers, scheduling engines, and AI-powered reporting — for industries underserved by generic software."
        canonical={getCanonicalUrl('/services/infrastructure')}
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
              className="mt-6 text-[18px] md:text-[20px] leading-[1.55] text-[#2B3650] max-w-[660px] mx-auto"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.heroSubtitle}
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-[28px] md:text-[36px] leading-[1.2] text-[#0F1729] max-w-[720px]"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.problemTitle}
            </h2>
            <p
              className="mt-6 text-[17px] leading-[1.7] text-[#2B3650] max-w-[720px]"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.problemBody}
            </p>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-center text-[28px] md:text-[36px] leading-[1.2] text-[#0F1729]"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.buildTitle}
            </h2>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
              {builds.map(({ icon: Icon, title, desc }) => (
                <WobbleCard
                  key={title}
                  containerClassName="bg-white border border-[#E2E8F0] hover:border-[#1FA6C1]/40 hover:shadow-xl hover:shadow-[#1FA6C1]/5 transition-all"
                  className="flex flex-col p-7"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-md"
                    style={{ border: '2px solid #1FA6C1' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: '#1FA6C1' }} />
                  </div>
                  <h3
                    className="mt-5 text-[20px] text-[#0F1729]"
                    style={{ fontFamily: JAKARTA, fontWeight: 700 }}
                  >
                    {title}
                  </h3>
                  <p
                    className="mt-2 text-[15px] leading-[1.6] text-[#2B3650]"
                    style={{ fontFamily: INTER, fontWeight: 400 }}
                  >
                    {desc}
                  </p>
                </WobbleCard>
              ))}
            </div>
          </div>
        </section>

        {/* THERAFLOU CASE */}
        <AuroraBackground className="py-20 bg-[#0F1729]">
          <div className="relative max-w-[1100px] mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center z-10">
          <div>
            <div
              className="text-[12px] uppercase"
              style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1', letterSpacing: '2px' }}
            >
              {s.caseEyebrow}
            </div>
            <h2
              className="mt-4 text-[28px] md:text-[36px] leading-[1.2] text-white"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.caseTitle}
            </h2>
            <p
              className="mt-6 text-[17px] leading-[1.7] text-[#B8C5D6]"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.caseBody}
            </p>

            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-[16px] leading-[1.6] text-[#B8C5D6]"
                  style={{ fontFamily: INTER, fontWeight: 400 }}
                >
                  <span style={{ color: '#1FA6C1' }}>✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/#theraflou"
                className="inline-flex items-center text-[16px]"
                style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1' }}
              >
                {s.caseLink}
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <PinContainer title="TheraFlou — Case Study">
              <div className="flex flex-col p-4 tracking-tight text-slate-100/90 w-[18rem] h-[18rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base" style={{ fontFamily: JAKARTA }}>
                  TheraFlou
                </h3>
                <div className="text-xs !m-0 !p-0 font-normal" style={{ fontFamily: INTER }}>
                  <span className="text-slate-300">{s.caseEyebrow}</span>
                </div>
                <div className="flex flex-1 w-full items-center justify-center rounded-lg mt-4 bg-gradient-to-br from-[#0F1729] via-[#1a2440] to-[#0F1729]">
                  <img
                    src={theraflouMark}
                    alt="TheraFlou"
                    className="h-40 w-auto drop-shadow-[0_0_20px_rgba(161,91,241,0.35)]"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
          </div>
        </AuroraBackground>

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