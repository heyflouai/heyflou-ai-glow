import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/ui/seo-head';
import { PAGE_SEO, SERVICE_SCHEMA, getCanonicalUrl } from '@/lib/seo-config';
import { useTranslation } from '@/i18n';

interface CardProps {
  eyebrow: string;
  title: string;
  description: string;
  whoLabel: string;
  who: string;
  cta: string;
  href: string;
  featured?: boolean;
}

function ServiceCard({ eyebrow, title, description, whoLabel, who, cta, href, featured }: CardProps) {
  return (
    <div
      className="group relative flex flex-col h-full rounded-2xl bg-white border border-[#E2E8F0] p-8 md:p-10 shadow-[0_1px_2px_rgba(15,23,41,0.04),0_8px_24px_rgba(15,23,41,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#1FA6C1] hover:shadow-[0_12px_32px_rgba(31,166,193,0.12)]"
    >
      <span
        className="inline-flex self-start items-center px-3 py-1 text-[12px] font-semibold text-white rounded-full mb-5"
        style={{
          background: 'linear-gradient(135deg, #1FA6C1, #A15BF1)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {eyebrow}
      </span>

      <h3
        className="text-[24px] leading-[1.25] font-bold text-[#0F1729] mb-4"
        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
      >
        {title}
      </h3>

      <p
        className="text-[16px] leading-[1.6] text-[#2B3650] mb-8"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>

      <div className="mt-auto">
        <div
          className="text-[13px] font-semibold text-[#1FA6C1] uppercase tracking-wider mb-2"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {whoLabel}
        </div>
        <p
          className="text-[15px] leading-[1.55] text-[#2B3650] mb-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {who}
        </p>

        <Link
          to={href}
          className="block w-full text-center text-white font-semibold text-[15px] rounded-lg py-3.5 px-6 transition-transform duration-200 hover:scale-[1.02] min-h-[48px]"
          style={{
            background: 'linear-gradient(135deg, #1FA6C1, #A15BF1)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {cta} →
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  const t = useTranslation();
  const s = t.servicesPage as Record<string, string>;

  const cards: CardProps[] = [
    {
      eyebrow: s.v2Card1Eyebrow,
      title: s.v2Card1Title,
      description: s.v2Card1Desc,
      whoLabel: s.v2WhoLabel,
      who: s.v2Card1Who,
      cta: s.v2Card1Cta,
      href: '/services/agents',
      featured: true,
    },
    {
      eyebrow: s.v2Card2Eyebrow,
      title: s.v2Card2Title,
      description: s.v2Card2Desc,
      whoLabel: s.v2WhoLabel,
      who: s.v2Card2Who,
      cta: s.v2Card2Cta,
      href: '/services/infrastructure',
    },
    {
      eyebrow: s.v2Card3Eyebrow,
      title: s.v2Card3Title,
      description: s.v2Card3Desc,
      whoLabel: s.v2WhoLabel,
      who: s.v2Card3Who,
      cta: s.v2Card3Cta,
      href: '/services/consulting',
    },
  ];

  return (
    <>
      <SEOHead
        title={PAGE_SEO.services.title}
        description={PAGE_SEO.services.description}
        canonical={getCanonicalUrl(PAGE_SEO.services.path)}
        jsonLd={SERVICE_SCHEMA}
      />

      <main className="bg-white">
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1
              className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight text-[#0F1729]"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 }}
            >
              {s.v2HeroTitle}
            </h1>
            <p
              className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-[#2B3650] max-w-[680px] mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
            >
              {s.v2HeroSubtitle}
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="pb-20 md:pb-24 lg:pb-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {cards.map((c) => (
                <ServiceCard key={c.href} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-[#F8FAFC] py-5">
          <div className="max-w-[1200px] mx-auto px-6">
            <p
              className="text-center text-[15px] text-[#2B3650]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              {s.v2TrustStrip}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
