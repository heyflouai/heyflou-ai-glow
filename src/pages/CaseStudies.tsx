import { SEOHead } from '@/components/ui/seo-head';
import { Section } from '@/components/ui/section';
import { useTranslation } from '@/i18n';
import { PAGE_SEO, getCanonicalUrl } from '@/lib/seo-config';
import { Spotlight } from '@/components/ui/spotlight';
import { NumberTicker, parseMetricValue } from '@/components/ui/number-ticker';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, Target, ArrowRight, Check, AlertCircle, Clock, Percent, Zap } from 'lucide-react';
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

interface CaseStudyCardProps {
  icon: React.ReactNode;
  title: string;
  clientType: string;
  description: string;
  challengeTitle: string;
  challenges: string[];
  solutionTitle: string;
  solutions: string[];
  resultsTitle: string;
  results: { emoji: string; text: string }[];
  tags: string[];
  viewDetails: string;
}

const CaseStudyCard = ({
  icon,
  title,
  clientType,
  description,
  challengeTitle,
  challenges,
  solutionTitle,
  solutions,
  resultsTitle,
  results,
  tags,
  viewDetails,
}: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full bg-gradient-to-b from-card to-card/80 border border-primary/20 rounded-2xl p-6 md:p-8 lg:p-10 overflow-hidden hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex justify-center mb-5">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-hf-teal to-hf-purple flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-2">
        <h3 className="text-xl md:text-2xl font-bold font-display text-foreground break-words">
          {title}
        </h3>
      </div>

      {/* Client Type */}
      <div className="text-center mb-4">
        <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
          {clientType}
        </span>
      </div>

      {/* Description */}
      <div className="text-center mb-6">
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed break-words">
          {description}
        </p>
      </div>

      {/* Challenge Section */}
      <div className="mb-5">
        <h4 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-3">
          {challengeTitle}
        </h4>
        <ul className="space-y-2">
          {challenges.map((challenge, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
              <AlertCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-destructive shrink-0 mt-0.5" />
              <span className="break-words">{challenge}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Solution Section */}
      <div className="mb-5">
        <h4 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-3">
          {solutionTitle}
        </h4>
        <ul className="space-y-2">
          {solutions.map((solution, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0 mt-0.5" />
              <span className="break-words">{solution}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Results Section */}
      <div className="mb-6">
        <h4 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-3">
          {resultsTitle}
        </h4>
        <ul className="space-y-2.5">
          {results.map((result, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base font-semibold text-foreground">
              <span className="shrink-0">{result.emoji}</span>
              <span className="break-words">{result.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags - pushed to bottom with mt-auto */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const MetricCard = ({ value, label, description, icon, delay = 0 }: MetricCardProps) => {
  const { numericValue, prefix, suffix } = parseMetricValue(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary/30 transition-colors"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-hf-teal/10 to-hf-purple/10 flex items-center justify-center mx-auto mb-4 text-primary">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-hf-teal to-hf-purple bg-clip-text text-transparent mb-2">
        <NumberTicker
          value={numericValue}
          prefix={prefix}
          suffix={suffix}
          delay={0.3 + delay}
        />
      </div>
      <div className="text-base md:text-lg font-semibold text-foreground mb-1">
        {label}
      </div>
      <div className="text-sm text-muted-foreground">
        {description}
      </div>
    </motion.div>
  );
};

export default function CaseStudies() {
  const t = useTranslation();

  const caseStudy1 = {
    icon: <Wallet className="w-6 h-6 md:w-8 md:h-8" />,
    title: t.caseStudies.case1Title,
    clientType: t.caseStudies.case1ClientType,
    description: t.caseStudies.case1Description,
    challengeTitle: t.caseStudies.case1ChallengeTitle,
    challenges: [
      t.caseStudies.case1Challenge1,
      t.caseStudies.case1Challenge2,
      t.caseStudies.case1Challenge3,
    ],
    solutionTitle: t.caseStudies.case1SolutionTitle,
    solutions: [
      t.caseStudies.case1Solution1,
      t.caseStudies.case1Solution2,
      t.caseStudies.case1Solution3,
      t.caseStudies.case1Solution4,
      t.caseStudies.case1Solution5,
    ],
    resultsTitle: t.caseStudies.case1ResultsTitle,
    results: [
      { emoji: '📊', text: t.caseStudies.case1Result1 },
      { emoji: '⏰', text: t.caseStudies.case1Result2 },
      { emoji: '✅', text: t.caseStudies.case1Result3 },
      { emoji: '💡', text: t.caseStudies.case1Result4 },
    ],
    tags: [t.caseStudies.case1Tag1, t.caseStudies.case1Tag2],
    viewDetails: t.caseStudies.viewDetails,
  };

  const caseStudy2 = {
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    title: t.caseStudies.case2Title,
    clientType: t.caseStudies.case2ClientType,
    description: t.caseStudies.case2Description,
    challengeTitle: t.caseStudies.case2ChallengeTitle,
    challenges: [
      t.caseStudies.case2Challenge1,
      t.caseStudies.case2Challenge2,
      t.caseStudies.case2Challenge3,
      t.caseStudies.case2Challenge4,
    ],
    solutionTitle: t.caseStudies.case2SolutionTitle,
    solutions: [
      t.caseStudies.case2Solution1,
      t.caseStudies.case2Solution2,
      t.caseStudies.case2Solution3,
      t.caseStudies.case2Solution4,
      t.caseStudies.case2Solution5,
    ],
    resultsTitle: t.caseStudies.case2ResultsTitle,
    results: [
      { emoji: '📊', text: t.caseStudies.case2Result1 },
      { emoji: '⏰', text: t.caseStudies.case2Result2 },
      { emoji: '⭐', text: t.caseStudies.case2Result3 },
      { emoji: '📈', text: t.caseStudies.case2Result4 },
      { emoji: '🚀', text: t.caseStudies.case2Result5 },
    ],
    tags: [t.caseStudies.case2Tag1, t.caseStudies.case2Tag2, t.caseStudies.case2Tag3],
    viewDetails: t.caseStudies.viewDetails,
  };

  return (
    <>
      <SEOHead 
        title={PAGE_SEO.caseStudies.title}
        description={PAGE_SEO.caseStudies.description}
        canonical={getCanonicalUrl(PAGE_SEO.caseStudies.path)}
      />
      
      <main className="pt-16">
        {/* Hero Section with Spotlight */}
        <section className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden bg-background">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(var(--primary))"
          />
          <div className="relative z-10 text-center px-5 py-16 md:py-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 md:mb-6"
            >
              {t.caseStudies.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {t.caseStudies.heroSubtitle}
            </motion.p>
          </div>
        </section>

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

            {/* Directed Empresas — text LEFT, dark panel RIGHT */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
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

                {/* Quote */}
                <figure
                  className="mt-8 bg-white rounded-r-xl"
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
                    className="mt-4"
                    style={{ width: 120, height: 'auto' }}
                  />
                </figure>
              </div>

              <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden bg-[#0F1729] p-10 min-h-[360px] flex flex-col justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      'radial-gradient(60% 60% at 50% 30%, rgba(161,91,241,0.25), transparent 70%), radial-gradient(60% 60% at 50% 80%, rgba(31,166,193,0.18), transparent 70%)',
                  }}
                />
                <div className="relative flex items-center justify-center mb-8">
                  <img
                    src={DIRECTED_LOGO}
                    alt="Directed Empresas"
                    style={{ width: 200, filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatBlock dark stat={{ value: '20+', label: 'hrs / week', desc: 'per user recovered' }} />
                  <StatBlock dark stat={{ value: '5', label: 'companies', desc: 'one infrastructure' }} />
                  <StatBlock dark stat={{ value: '0', label: 'new headcount', desc: 'to scale ops' }} />
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Case Studies Section */}
        <Section background="muted">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground"
            >
              {t.caseStudies.sectionTitle}
            </motion.h2>
          </div>

          {/* Fixed Grid - no overlap, proper gaps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
            <CaseStudyCard {...caseStudy1} />
            <CaseStudyCard {...caseStudy2} />
          </div>
        </Section>

        {/* Impact Metrics Section */}
        <Section>
          <div className="text-center mb-8 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground"
            >
              {t.caseStudies.impactTitle}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <MetricCard
              value={t.caseStudies.metric1Value}
              label={t.caseStudies.metric1Label}
              description={t.caseStudies.metric1Desc}
              icon={<Clock className="w-6 h-6" />}
              delay={0}
            />
            <MetricCard
              value={t.caseStudies.metric2Value}
              label={t.caseStudies.metric2Label}
              description={t.caseStudies.metric2Desc}
              icon={<Percent className="w-6 h-6" />}
              delay={0.1}
            />
            <MetricCard
              value={t.caseStudies.metric3Value}
              label={t.caseStudies.metric3Label}
              description={t.caseStudies.metric3Desc}
              icon={<Zap className="w-6 h-6" />}
              delay={0.2}
            />
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient" padding="large">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground mb-4 md:mb-6"
            >
              {t.caseStudies.ctaTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-foreground/90 mb-8"
            >
              {t.caseStudies.ctaSubtitle}
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <ShimmerButton className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8">
                  <span className="flex items-center gap-2">
                    {t.caseStudies.ctaPrimary}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </ShimmerButton>
              </Link>
              <Link to="/services/custom" className="w-full sm:w-auto">
                <MovingBorderButton
                  containerClassName="w-full sm:w-auto"
                  className="h-12 md:h-14 px-6 md:px-8"
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
