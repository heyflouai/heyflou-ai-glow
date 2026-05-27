import { Link } from 'react-router-dom';
import { ClipboardCheck, Map, Route, Wrench, FileText, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { getCanonicalUrl } from '@/lib/seo-config';
import { useTranslation } from '@/i18n';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { CursorSpotlight } from '@/components/ui/cursor-spotlight';
import { GradientMovingButton } from '@/components/ui/gradient-moving-button';
import { Spotlight } from '@/components/ui/spotlight';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { Timeline } from '@/components/ui/timeline';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const JAKARTA = '"Plus Jakarta Sans", sans-serif';
const INTER = 'Inter, sans-serif';
const GRADIENT = 'linear-gradient(135deg, #1FA6C1, #A15BF1)';

export default function Consulting() {
  const t = useTranslation();
  const s = t.servicesConsulting as Record<string, string>;

  const deliverables = [
    { icon: ClipboardCheck, title: s.get1Title, desc: s.get1Desc },
    { icon: Map, title: s.get2Title, desc: s.get2Desc },
    { icon: Route, title: s.get3Title, desc: s.get3Desc },
    { icon: Wrench, title: s.get4Title, desc: s.get4Desc },
    { icon: FileText, title: s.get5Title, desc: s.get5Desc },
  ];

  const steps = [
    { title: s.formatStep1Title, desc: s.formatStep1Desc },
    { title: s.formatStep2Title, desc: s.formatStep2Desc },
    { title: s.formatStep3Title, desc: s.formatStep3Desc },
  ];

  const paths = [
    { label: s.pathALabel, title: s.pathATitle },
    { label: s.pathBLabel, title: s.pathBTitle },
    { label: s.pathCLabel, title: s.pathCTitle },
  ];

  return (
    <>
      <SEOHead
        title="AI Strategy & Consulting | HeyFlou"
        description="A structured 3-week paid consulting engagement that maps where AI fits in your business — readiness assessment, process map, AI roadmap, vendor selection, and implementation brief."
        canonical={getCanonicalUrl('/services/consulting')}
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

        {/* WHO THIS IS FOR */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-[28px] md:text-[36px] leading-[1.2] text-[#0F1729] max-w-[720px]"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.whoTitle}
            </h2>
            <p
              className="mt-6 text-[17px] leading-[1.7] text-[#2B3650] max-w-[720px]"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.whoBody1}
            </p>
            <p
              className="mt-4 text-[17px] leading-[1.7] text-[#2B3650] max-w-[720px]"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.whoBody2}
            </p>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-center text-[28px] md:text-[36px] leading-[1.2] text-[#0F1729]"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.getTitle}
            </h2>

            <div className="mt-8">
              <StickyScroll
                content={deliverables.map(({ icon: Icon, title, desc }) => ({
                  title,
                  description: desc,
                  icon: <Icon className="h-16 w-16 text-white" />,
                }))}
              />
            </div>
          </div>
        </section>

        {/* FORMAT */}
        <section className="relative overflow-hidden py-20 bg-[#0F1729]">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
          <CursorSpotlight color="rgba(161,91,241,0.22)" size={520} />
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-center text-[28px] md:text-[36px] leading-[1.2] text-white"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.formatTitle}
            </h2>

            <div className="mt-6">
              <Timeline
                titleClassName="!text-white"
                data={steps.map((step) => ({
                  title: step.title,
                  content: (
                    <p
                      className="text-[16px] leading-[1.7] text-[#B8C5D6] max-w-xl"
                      style={{ fontFamily: INTER, fontWeight: 400 }}
                    >
                      {step.desc}
                    </p>
                  ),
                }))}
              />
            </div>

            <div
              className="mt-14 mx-auto max-w-[480px] text-center rounded-lg px-8 py-5"
              style={{ border: '1px solid rgba(31,166,193,0.4)' }}
            >
              <p
                className="text-[16px] text-white"
                style={{ fontFamily: INTER, fontWeight: 600 }}
              >
                {s.formatCallout}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2
              className="text-center text-[28px] md:text-[36px] leading-[1.2] text-[#0F1729] max-w-[820px] mx-auto"
              style={{ fontFamily: JAKARTA, fontWeight: 700 }}
            >
              {s.nextTitle}
            </h2>
            <p
              className="mt-6 text-center text-[17px] leading-[1.7] text-[#2B3650] max-w-[720px] mx-auto"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {s.nextBody}
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {paths.map((p) => (
                <div
                  key={p.label}
                  className="relative rounded-xl border border-[#E2E8F0] bg-white p-7 text-center transition-all duration-200 hover:-translate-y-1"
                >
                  <GlowingEffect
                    spread={40}
                    glow
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div
                    className="relative text-[13px] uppercase"
                    style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1', letterSpacing: '1.5px' }}
                  >
                    {p.label}
                  </div>
                  <h3
                    className="relative mt-3 text-[17px] leading-[1.4] text-[#0F1729]"
                    style={{ fontFamily: JAKARTA, fontWeight: 700 }}
                  >
                    {p.title}
                  </h3>
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