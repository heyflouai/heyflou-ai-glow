import { Link } from 'react-router-dom';
import { Bot, Server, Compass, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';
import { useTranslation } from '@/i18n';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { WorldMap } from '@/components/ui/world-map';
import { Sparkles } from '@/components/ui/sparkles';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-collision';
import { GradientMovingButton } from '@/components/ui/gradient-moving-button';
import theraflouMark from '@/assets/theraflou-mark.svg';

const JAKARTA = '"Plus Jakarta Sans", sans-serif';
const INTER = 'Inter, sans-serif';
const GRADIENT = 'linear-gradient(135deg, #1FA6C1, #A15BF1)';

export default function About() {
  const t = useTranslation();
  const a = t.aboutV2 as Record<string, string>;

  const storyContent = [
    { title: a.story1Title, description: a.story1Desc },
    { title: a.story2Title, description: a.story2Desc },
    { title: a.story3Title, description: a.story3Desc },
    { title: a.story4Title, description: a.story4Desc },
  ];

  const team = [
    { name: a.team1Name, role: a.team1Role, bio: a.team1Bio, initials: 'SN' },
    { name: a.team2Name, role: a.team2Role, bio: a.team2Bio, initials: 'SZ' },
  ];

  const stats = [
    { number: a.stat1Number, label: a.stat1Label, sub: a.stat1Sub },
    { number: a.stat2Number, label: a.stat2Label, sub: a.stat2Sub },
    { number: a.stat3Number, label: a.stat3Label, sub: a.stat3Sub },
    { number: a.stat4Number, label: a.stat4Label, sub: a.stat4Sub },
  ];

  const services = [
    { title: a.svc1Title, description: a.svc1Desc, link: '/services/agents', icon: <Bot className="w-6 h-6 text-primary" /> },
    { title: a.svc2Title, description: a.svc2Desc, link: '/services/infrastructure', icon: <Server className="w-6 h-6 text-primary" /> },
    { title: a.svc3Title, description: a.svc3Desc, link: '/services/consulting', icon: <Compass className="w-6 h-6 text-primary" /> },
  ];

  return (
    <>
      <SEOHead
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        canonical={getCanonicalUrl(PAGE_SEO.about.path)}
      />

      <main className="bg-white">
        {/* HERO */}
        <AuroraBackground className="min-h-[78vh] flex items-center">
          <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 pt-32 md:pt-36 pb-20 md:pb-24 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#1FA6C1]/20 text-[12px] uppercase mb-6"
              style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1', letterSpacing: '1.5px' }}
            >
              About HeyFlou
            </div>
            <TextGenerateEffect
              as="h1"
              words={a.heroTitle}
              className="text-[36px] md:text-[58px] leading-[1.05] tracking-tight text-[#0F1729]"
              style={{ fontFamily: JAKARTA, fontWeight: 800 }}
            />
            <p
              className="mt-8 mx-auto max-w-[720px] text-[18px] md:text-[20px] leading-[1.55] text-[#2B3650]"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {a.heroSubtitle}
            </p>

            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-[720px] mx-auto">
              {stats.slice(0, 3).map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl px-4 py-5 bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm"
                >
                  <div
                    className="text-[28px] md:text-[36px] leading-none bg-clip-text text-transparent"
                    style={{ fontFamily: JAKARTA, fontWeight: 800, backgroundImage: GRADIENT }}
                  >
                    {s.number}
                  </div>
                  <div
                    className="mt-2 text-[12px] md:text-[13px] text-[#0F1729]"
                    style={{ fontFamily: JAKARTA, fontWeight: 700 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AuroraBackground>

        {/* STORY — sticky scroll */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <div
                className="text-[13px] uppercase"
                style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1', letterSpacing: '1.5px' }}
              >
                {a.storyEyebrow}
              </div>
              <h2
                className="mt-4 text-[28px] md:text-[40px] leading-[1.2] text-[#0F1729] max-w-[760px] mx-auto"
                style={{ fontFamily: JAKARTA, fontWeight: 700 }}
              >
                {a.storyTitle}
              </h2>
            </div>

            <StickyScroll
              content={storyContent.map((s, i) => ({
                title: s.title,
                description: s.description,
                icon: (
                  <span className="text-5xl font-bold text-white" style={{ fontFamily: JAKARTA }}>
                    0{i + 1}
                  </span>
                ),
              }))}
            />
          </div>
        </section>

        {/* WORLD MAP */}
        <section className="py-24 bg-[#F8FAFC] overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-[28px] md:text-[40px] leading-[1.2] text-[#0F1729] max-w-[760px] mx-auto"
                style={{ fontFamily: JAKARTA, fontWeight: 700 }}
              >
                {a.mapTitle}
              </h2>
              <p
                className="mt-5 mx-auto max-w-[640px] text-[17px] leading-[1.6] text-[#2B3650]"
                style={{ fontFamily: INTER, fontWeight: 400 }}
              >
                {a.mapSubtitle}
              </p>
            </div>

            <WorldMap
              points={[
                { lat: 32.08, lng: 34.78, label: a.mapTelAviv },
                { lat: 19.43, lng: -99.13, label: a.mapMexico },
              ]}
              arcs={[[0, 1]]}
            />
          </div>
        </section>

        {/* TEAM — focus cards */}
        <section className="py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2
                className="text-[28px] md:text-[40px] leading-[1.2] text-[#0F1729]"
                style={{ fontFamily: JAKARTA, fontWeight: 700 }}
              >
                {a.teamTitle}
              </h2>
              <p
                className="mt-5 mx-auto max-w-[640px] text-[17px] leading-[1.6] text-[#2B3650]"
                style={{ fontFamily: INTER, fontWeight: 400 }}
              >
                {a.teamSubtitle}
              </p>
            </div>

            <TeamFocusCards members={team} />
          </div>
        </section>

        {/* IMPACT — sparkles bg */}
        <section className="relative py-24 overflow-hidden bg-[#0F1729]">
          <Sparkles color="#5CB3E8" density={120} />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2
                className="text-[28px] md:text-[40px] leading-[1.2] text-white"
                style={{ fontFamily: JAKARTA, fontWeight: 700 }}
              >
                {a.impactTitle}
              </h2>
              <p
                className="mt-5 mx-auto max-w-[640px] text-[17px] leading-[1.6] text-[#B8C5D6]"
                style={{ fontFamily: INTER, fontWeight: 400 }}
              >
                {a.impactSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-7 text-center bg-white/[0.04] backdrop-blur-sm border border-white/10"
                >
                  <div
                    className="text-[44px] md:text-[56px] leading-none bg-clip-text text-transparent"
                    style={{ fontFamily: JAKARTA, fontWeight: 800, backgroundImage: GRADIENT }}
                  >
                    {s.number}
                  </div>
                  <div
                    className="mt-3 text-[15px] text-white"
                    style={{ fontFamily: JAKARTA, fontWeight: 700 }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="mt-1 text-[13px] text-[#94A3B8]"
                    style={{ fontFamily: INTER, fontWeight: 400 }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 SERVICES — hover effect cards */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-6">
              <h2
                className="text-[28px] md:text-[40px] leading-[1.2] text-[#0F1729]"
                style={{ fontFamily: JAKARTA, fontWeight: 700 }}
              >
                {a.servicesTitle}
              </h2>
              <p
                className="mt-5 mx-auto max-w-[640px] text-[17px] leading-[1.6] text-[#2B3650]"
                style={{ fontFamily: INTER, fontWeight: 400 }}
              >
                {a.servicesSubtitle}
              </p>
            </div>

            <HoverEffect items={services} />
          </div>
        </section>

        {/* THERAFLOU — 3D card */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-[1100px] mx-auto px-6">
            <CardContainer containerClassName="py-0 w-full" className="w-full">
              <CardBody className="relative group/card w-full h-auto rounded-3xl overflow-hidden border border-white/10 bg-[#0F1729]">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      'radial-gradient(circle at 20% 30%, rgba(31,166,193,0.35), transparent 55%), radial-gradient(circle at 80% 70%, rgba(161,91,241,0.35), transparent 55%)',
                  }}
                />
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                  {/* Left: visual */}
                  <CardItem translateZ={60} className="w-full flex justify-center">
                    <div className="relative w-full max-w-[360px] aspect-square rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                      <div
                        className="absolute -inset-2 rounded-3xl blur-2xl opacity-60"
                        style={{ background: GRADIENT }}
                      />
                      <img
                        src={theraflouMark}
                        alt="TheraFlou"
                        className="relative h-44 w-auto drop-shadow-[0_0_30px_rgba(161,91,241,0.55)]"
                      />
                    </div>
                  </CardItem>

                  {/* Right: copy */}
                  <div>
                    <CardItem
                      translateZ={20}
                      className="text-[12px] uppercase"
                      style={{ fontFamily: INTER, fontWeight: 600, color: '#5CB3E8', letterSpacing: '1.5px' }}
                    >
                      {a.theraflouEyebrow}
                    </CardItem>
                    <CardItem
                      translateZ={50}
                      as="h3"
                      className="mt-3 text-[28px] md:text-[40px] leading-[1.1] text-white"
                      style={{ fontFamily: JAKARTA, fontWeight: 800 }}
                    >
                      {a.theraflouTitle}
                    </CardItem>
                    <CardItem
                      translateZ={40}
                      className="mt-3 text-[16px] md:text-[17px] text-[#B8C5D6]"
                      style={{ fontFamily: INTER, fontWeight: 600 }}
                    >
                      {a.theraflouTagline}
                    </CardItem>
                    <CardItem
                      translateZ={30}
                      as="p"
                      className="mt-5 text-[15px] leading-[1.7] text-[#94A3B8]"
                      style={{ fontFamily: INTER, fontWeight: 400 }}
                    >
                      {a.theraflouDesc}
                    </CardItem>
                    <CardItem translateZ={40} as="div" className="mt-8">
                      <Link
                        to="/services/agents#theraflou"
                        className="inline-flex items-center gap-2 text-[15px] text-[#5CB3E8] hover:text-white transition-colors"
                        style={{ fontFamily: INTER, fontWeight: 600 }}
                      >
                        {a.theraflouCta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </section>

        {/* CTA — background beams collision */}
        <BackgroundBeamsWithCollision className="bg-[#0F1729] min-h-0 h-auto">
          <div className="relative z-10 max-w-[900px] mx-auto px-6 py-20 md:py-24 text-center">
            <h2
              className="text-[32px] md:text-[48px] leading-[1.1] text-white"
              style={{ fontFamily: JAKARTA, fontWeight: 800 }}
            >
              {a.ctaTitle}
            </h2>
            <p
              className="mt-6 mx-auto max-w-[600px] text-[18px] leading-[1.55] text-[#B8C5D6]"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {a.ctaSubtitle}
            </p>
            <div className="mt-10 flex justify-center">
              <GradientMovingButton to="/contact">
                {a.ctaButton} <ArrowRight className="h-5 w-5" />
              </GradientMovingButton>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </main>
    </>
  );
}

/** Two-card focus layout: blurs the non-hovered card. */
function TeamFocusCards({
  members,
}: {
  members: { name: string; role: string; bio: string; initials: string }[];
}) {
  return (
    <div className="group/team grid grid-cols-1 md:grid-cols-2 gap-6">
      {members.map((m) => (
        <div
          key={m.name}
          className="rounded-2xl border border-[#E2E8F0] bg-white p-8 transition-all duration-300 hover:!blur-0 hover:!opacity-100 hover:-translate-y-1 hover:shadow-xl hover:border-[#1FA6C1]/40 group-hover/team:opacity-50 group-hover/team:blur-[2px]"
        >
          <div
            className="h-16 w-16 rounded-2xl flex items-center justify-center text-white text-[20px]"
            style={{ background: GRADIENT, fontFamily: JAKARTA, fontWeight: 800 }}
          >
            {m.initials}
          </div>
          <h3
            className="mt-5 text-[22px] leading-tight text-[#0F1729]"
            style={{ fontFamily: JAKARTA, fontWeight: 700 }}
          >
            {m.name}
          </h3>
          <div
            className="mt-1 text-[14px] text-[#1FA6C1]"
            style={{ fontFamily: INTER, fontWeight: 600 }}
          >
            {m.role}
          </div>
          <p
            className="mt-4 text-[15px] leading-[1.65] text-[#2B3650]"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            {m.bio}
          </p>
        </div>
      ))}
    </div>
  );
}