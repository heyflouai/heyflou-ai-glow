import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { useTranslation } from '@/i18n';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';
import { NumberTicker, parseMetricValue } from '@/components/ui/number-ticker';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import theraflouMark from '@/assets/theraflou-mark.svg';

const JAKARTA = '"Plus Jakarta Sans", sans-serif';
const INTER = 'Inter, sans-serif';
const DIRECTED_LOGO =
  'https://cloud-1de12d.becdn.net/media/original/0475dc58613950ec680c4b6dfacf516a/directed-empresas-negro-1-1.png';

interface FeaturedStat {
  value: string;
  label: string;
  desc: string;
}

const StatBlock = ({ stat, dark }: { stat: FeaturedStat; dark?: boolean }) => {
  const { numericValue, prefix, suffix } = parseMetricValue(stat.value);
  return (
    <div
      className={`rounded-xl p-5 border ${
        dark
          ? 'bg-white/5 border-white/10'
          : 'bg-white border-[#E2E8F0]'
      }`}
    >
      <div
        className="text-[36px] md:text-[40px] leading-none bg-clip-text text-transparent"
        style={{
          fontFamily: JAKARTA,
          fontWeight: 800,
          backgroundImage: 'linear-gradient(135deg, #1FA6C1, #A15BF1)',
        }}
      >
        <NumberTicker value={numericValue} prefix={prefix} suffix={suffix} />
      </div>
      <div
        className="mt-2 text-[14px]"
        style={{
          fontFamily: INTER,
          fontWeight: 600,
          color: dark ? '#FFFFFF' : '#0F1729',
        }}
      >
        {stat.label}
      </div>
      <div
        className="mt-1 text-[13px] leading-[1.6]"
        style={{ fontFamily: INTER, color: dark ? '#B8C5D6' : '#2B3650' }}
      >
        {stat.desc}
      </div>
    </div>
  );
};


export default function CaseStudies() {
  const t = useTranslation();

  const customSolutionCards = [
    {
      accent: '#1FA6C1',
      typeBadge: t.caseStudies.case1Tag1,
      industry: t.caseStudies.case1Tag2,
      headline: t.caseStudies.case1Title,
      problemLabel: t.caseStudies.case1ChallengeTitle,
      problemText: [
        t.caseStudies.case1Challenge1,
        t.caseStudies.case1Challenge2,
        t.caseStudies.case1Challenge3,
      ].join('. ') + '.',
      solutionLabel: t.caseStudies.case1SolutionTitle,
      solutionText: t.caseStudies.case1Description,
      impactLabel: t.caseStudies.case1ResultsTitle,
      impactPills: [
        t.caseStudies.case1Result1,
        t.caseStudies.case1Result2,
        t.caseStudies.case1Result3,
        t.caseStudies.case1Result4,
      ],
    },
    {
      accent: '#A15BF1',
      typeBadge: t.caseStudies.case2Tag1,
      industry: `${t.caseStudies.case2Tag2} · ${t.caseStudies.case2Tag3}`,
      headline: t.caseStudies.case2Title,
      problemLabel: t.caseStudies.case2ChallengeTitle,
      problemText: [
        t.caseStudies.case2Challenge1,
        t.caseStudies.case2Challenge2,
        t.caseStudies.case2Challenge3,
        t.caseStudies.case2Challenge4,
      ].join('. ') + '.',
      solutionLabel: t.caseStudies.case2SolutionTitle,
      solutionText: t.caseStudies.case2Description,
      impactLabel: t.caseStudies.case2ResultsTitle,
      impactPills: [
        t.caseStudies.case2Result1,
        t.caseStudies.case2Result2,
        t.caseStudies.case2Result3,
        t.caseStudies.case2Result4,
        t.caseStudies.case2Result5,
      ],
    },
  ];

  return (
    <>
      <SEOHead 
        title={PAGE_SEO.caseStudies.title}
        description={PAGE_SEO.caseStudies.description}
        canonical={getCanonicalUrl(PAGE_SEO.caseStudies.path)}
      />
      
      <main className="pt-16">
        {/* CLIENT RESULTS — featured cases */}
        <section className="bg-white py-20 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto">
              <p
                className="uppercase"
                style={{
                  fontFamily: INTER,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '2px',
                  color: '#1FA6C1',
                }}
              >
                CLIENT RESULTS
              </p>
              <h2
                className="mt-4 text-[32px] md:text-[44px] leading-[1.1]"
                style={{ fontFamily: JAKARTA, fontWeight: 800, color: '#0F1729' }}
              >
                Real businesses. Measurable outcomes.
              </h2>
              <p
                className="mt-5 mx-auto max-w-[560px] text-[18px] leading-[1.6]"
                style={{ fontFamily: INTER, color: '#2B3650' }}
              >
                Two different problems. Two different solutions. The same commitment to results that actually show up in operations.
              </p>
            </div>

            {/* TheraFlou — visual LEFT, text RIGHT */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className="order-1 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F1729] via-[#16213e] to-[#0F1729] p-10 min-h-[360px] flex items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      'radial-gradient(60% 60% at 50% 50%, rgba(31,166,193,0.25), transparent 70%)',
                  }}
                />
                <img
                  src={theraflouMark}
                  alt="TheraFlou"
                  className="relative h-56 w-auto drop-shadow-[0_0_30px_rgba(161,91,241,0.45)]"
                />
              </div>
              <div className="order-2">
                <p
                  className="uppercase"
                  style={{
                    fontFamily: INTER,
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: '2px',
                    color: '#1FA6C1',
                  }}
                >
                  PATIENT CRM · HEALTHCARE
                </p>
                <h3
                  className="mt-3 text-[22px] md:text-[28px] leading-[1.2]"
                  style={{ fontFamily: JAKARTA, fontWeight: 700, color: '#0F1729' }}
                >
                  TheraFlou: a purpose-built patient CRM that replaces 4 disconnected tools for psychology clinics.
                </h3>
                <p
                  className="mt-5 text-[16px] leading-[1.7]"
                  style={{ fontFamily: INTER, color: '#2B3650' }}
                >
                  Mexican psychology clinics were stitching together calendars, spreadsheets, WhatsApp and billing tools — losing hours every week to admin and risking patient data along the way. HeyFlou designed and shipped TheraFlou: one CRM that handles scheduling, clinical notes, billing and reporting with AI agents in the loop.
                </p>
                <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatBlock stat={{ value: '4', label: 'tools replaced', desc: 'with one unified workflow' }} />
                  <StatBlock stat={{ value: '10+', label: 'hours saved / week', desc: 'per clinician on admin' }} />
                  <StatBlock stat={{ value: '100%', label: 'patient data', desc: 'in one secure system' }} />
                </div>
                <a
                  href="https://theraflou.heyflou.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-[16px]"
                  style={{ fontFamily: INTER, fontWeight: 600, color: '#1FA6C1' }}
                >
                  Visit TheraFlou <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>

            {/* Directed Empresas — text+stats LEFT, quote RIGHT */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start"
            >
              <div className="order-2 lg:order-1">
                <p
                  className="uppercase"
                  style={{
                    fontFamily: INTER,
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: '2px',
                    color: '#1FA6C1',
                  }}
                >
                  AI INFRASTRUCTURE
                </p>
                <h3
                  className="mt-3 text-[22px] md:text-[28px] leading-[1.2]"
                  style={{ fontFamily: JAKARTA, fontWeight: 700, color: '#0F1729' }}
                >
                  HeyFlou AgenticOS: one CEO running 5 companies — without the operational overhead.
                </h3>
                <p
                  className="mt-5 text-[16px] leading-[1.7]"
                  style={{ fontFamily: INTER, color: '#2B3650' }}
                >
                  Directed Empresas is a multi-line operation with 5 sub-companies under one leadership structure. The CEO was managing coordination, reporting, and operational decisions across all five — spending most of his time on work that didn't require his judgment. HeyFlou designed and deployed AgenticOS: a custom infrastructure of AI agents that automates the repetitive layer of every company, grounding each process in practical operations — not theory.
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatBlock stat={{ value: '20+', label: 'hours / week, per user', desc: 'recovered from repetitive work' }} />
                  <StatBlock stat={{ value: '5', label: 'sub-companies', desc: 'coordinated through one agent infrastructure' }} />
                  <StatBlock stat={{ value: '0', label: 'headcount increase', desc: 'to scale operations' }} />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <figure
                  className="bg-white rounded-r-xl"
                  style={{
                    borderLeft: '4px solid #1FA6C1',
                    padding: '28px 32px',
                    boxShadow: '0 4px 24px rgba(15,23,41,0.06)',
                  }}
                >
                  <blockquote
                    className="italic"
                    style={{
                      fontFamily: INTER,
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: '#2B3650',
                    }}
                  >
                    "HeyFlou's Agentic OS solution unlocked 20+ hours per week per user by automating repetitive work and grounding processes in practical operations — not theory. This freed our team to focus on strategy while revealing the path to scale without proportional headcount growth. Their hands-on support made enterprise-grade AI accessible and practical for a multi-line operation like ours. Highly recommended."
                  </blockquote>
                  <figcaption
                    className="mt-5"
                    style={{ fontFamily: INTER, fontWeight: 600, fontSize: 15, color: '#0F1729' }}
                  >
                    Mateo — CEO, Directed Empresas
                  </figcaption>
                  <img
                    src={DIRECTED_LOGO}
                    alt="Directed Empresas"
                    className="mt-6"
                    style={{ width: 240, height: 'auto' }}
                  />
                </figure>
              </div>
            </motion.article>
          </div>
        </section>

        {/* MORE WORK — compact anonymous case cards */}
        <section style={{ backgroundColor: '#F8FAFC' }} className="py-20 md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto">
              <p
                className="uppercase"
                style={{
                  fontFamily: INTER,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '2px',
                  color: '#1FA6C1',
                }}
              >
                {t.caseStudies.compactSectionEyebrow}
              </p>
              <h2
                className="mt-4 text-[28px] md:text-[36px] leading-[1.1]"
                style={{ fontFamily: JAKARTA, fontWeight: 700, color: '#0F1729' }}
              >
                {t.caseStudies.compactSectionHeadline}
              </h2>
              <p
                className="mt-4 mx-auto max-w-[500px] text-[17px] leading-[1.6]"
                style={{ fontFamily: INTER, fontWeight: 400, color: '#2B3650' }}
              >
                {t.caseStudies.compactSectionSubheadline}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ...customSolutionCards,
                {
                  accent: '#1FA6C1',
                  typeBadge: t.caseStudies.compactCard1TypeBadge,
                  industry: t.caseStudies.compactCard1Industry,
                  headline: t.caseStudies.compactCard1Headline,
                  problemLabel: t.caseStudies.compactCard1ProblemLabel,
                  problemText: t.caseStudies.compactCard1ProblemText,
                  solutionLabel: t.caseStudies.compactCard1SolutionLabel,
                  solutionText: t.caseStudies.compactCard1SolutionText,
                  impactLabel: t.caseStudies.compactCard1ImpactLabel,
                  impactPills: [
                    t.caseStudies.compactCard1ImpactPill1,
                    t.caseStudies.compactCard1ImpactPill2,
                  ],
                },
                {
                  accent: '#A15BF1',
                  typeBadge: t.caseStudies.compactCard2TypeBadge,
                  industry: t.caseStudies.compactCard2Industry,
                  headline: t.caseStudies.compactCard2Headline,
                  problemLabel: t.caseStudies.compactCard2ProblemLabel,
                  problemText: t.caseStudies.compactCard2ProblemText,
                  solutionLabel: t.caseStudies.compactCard2SolutionLabel,
                  solutionText: t.caseStudies.compactCard2SolutionText,
                  impactLabel: t.caseStudies.compactCard2ImpactLabel,
                  impactPills: [
                    t.caseStudies.compactCard2ImpactPill1,
                    t.caseStudies.compactCard2ImpactPill2,
                    t.caseStudies.compactCard2ImpactPill3,
                  ],
                },
              ].map((card, idx) => {
                const isTeal = card.accent === '#1FA6C1';
                return (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-[16px] flex flex-col"
                    style={{
                      border: '1px solid #E2E8F0',
                      padding: '32px 28px',
                    }}
                  >
                    {/* Top row */}
                    <div className="flex items-center gap-3">
                      <span
                        className="uppercase"
                        style={{
                          fontFamily: INTER,
                          fontWeight: 600,
                          fontSize: 11,
                          letterSpacing: '0.5px',
                          color: card.accent,
                          background: isTeal
                            ? 'rgba(31,166,193,0.08)'
                            : 'rgba(161,91,241,0.08)',
                          border: `1px solid ${
                            isTeal ? 'rgba(31,166,193,0.2)' : 'rgba(161,91,241,0.2)'
                          }`,
                          borderRadius: 100,
                          padding: '4px 12px',
                        }}
                      >
                        {card.typeBadge}
                      </span>
                    </div>

                    {/* Industry */}
                    <p
                      className="uppercase"
                      style={{
                        fontFamily: INTER,
                        fontWeight: 600,
                        fontSize: 13,
                        letterSpacing: '1px',
                        color: '#2B3650',
                        marginTop: 20,
                      }}
                    >
                      {card.industry}
                    </p>

                    {/* Headline */}
                    <h3
                      style={{
                        fontFamily: JAKARTA,
                        fontWeight: 700,
                        fontSize: 20,
                        lineHeight: 1.3,
                        color: '#0F1729',
                        marginTop: 8,
                      }}
                    >
                      {card.headline}
                    </h3>

                    {/* Problem */}
                    <div style={{ marginTop: 16 }}>
                      <p
                        className="uppercase"
                        style={{
                          fontFamily: INTER,
                          fontWeight: 600,
                          fontSize: 12,
                          color: '#1FA6C1',
                          letterSpacing: '1px',
                        }}
                      >
                        {card.problemLabel}
                      </p>
                      <p
                        style={{
                          fontFamily: INTER,
                          fontWeight: 400,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: '#2B3650',
                          marginTop: 6,
                        }}
                      >
                        {card.problemText}
                      </p>
                    </div>

                    {/* Solution */}
                    <div style={{ marginTop: 16 }}>
                      <p
                        className="uppercase"
                        style={{
                          fontFamily: INTER,
                          fontWeight: 600,
                          fontSize: 12,
                          color: '#A15BF1',
                          letterSpacing: '1px',
                        }}
                      >
                        {card.solutionLabel}
                      </p>
                      <p
                        style={{
                          fontFamily: INTER,
                          fontWeight: 400,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: '#2B3650',
                          marginTop: 6,
                        }}
                      >
                        {card.solutionText}
                      </p>
                    </div>

                    {/* Impact */}
                    <div
                      className="mt-auto"
                      style={{
                        marginTop: 20,
                        paddingTop: 20,
                        borderTop: '1px solid #E2E8F0',
                      }}
                    >
                      <p
                        className="uppercase"
                        style={{
                          fontFamily: INTER,
                          fontWeight: 600,
                          fontSize: 12,
                          color: '#0F1729',
                          letterSpacing: '1px',
                        }}
                      >
                        {card.impactLabel}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {card.impactPills.map((pill, pIdx) => (
                          <span
                            key={pIdx}
                            style={{
                              fontFamily: INTER,
                              fontWeight: 600,
                              fontSize: 13,
                              color: '#0F1729',
                              background: '#F8FAFC',
                              border: '1px solid #E2E8F0',
                              borderRadius: 100,
                              padding: '6px 14px',
                            }}
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <Section background="default" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-[#0F1729] mb-4 md:mb-6"
            >
              {t.caseStudies.ctaTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-[#2B3650] mb-8"
            >
              {t.caseStudies.ctaSubtitle}
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <ShimmerButton
                  className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8"
                  background="#ffffff"
                  shimmerColor="#1FA6C1"
                >
                  <span className="flex items-center gap-2 text-[#0F1729] font-semibold">
                    {t.caseStudies.ctaPrimary}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </ShimmerButton>
              </Link>
              <Link to="/services/custom" className="w-full sm:w-auto">
                <MovingBorderButton
                  containerClassName="w-full sm:w-auto"
                  className="h-12 md:h-14 px-6 md:px-8 bg-white text-[#0F1729]"
                >
                  {t.caseStudies.ctaSecondary}
                </MovingBorderButton>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
