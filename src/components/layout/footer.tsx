import { Link } from 'react-router-dom';
import logo from '@/assets/heyflou-logo-new.png';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useTranslation } from '@/i18n';

type FooterLinkItem = { name: string; href: string; external?: boolean };

export const Footer = () => {
  const t = useTranslation();

  const pages: FooterLinkItem[] = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.caseStudies, href: '/case-studies' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
    { name: t.footer.blog, href: '/blog/agentic-ai-implementation-guide' },
  ];

  const services: FooterLinkItem[] = [
    { name: t.nav.aiConsulting, href: '/services/consulting' },
    { name: 'AI Agents', href: '/services/agents' },
    { name: 'AI Infrastructure', href: '/services/infrastructure' },
    { name: t.nav.customAutomations, href: '/services/custom' },
  ];

  const socials: FooterLinkItem[] = [
    { name: 'Instagram', href: 'https://instagram.com/heyflou_ai', external: true },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/heyflou', external: true },
  ];

  const legal: FooterLinkItem[] = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: t.footer.refundPolicy, href: '/refund' },
  ];

  const linkClass =
    'text-[14px] leading-[2.2] text-white/60 hover:text-white transition-colors duration-150';

  const renderLink = (link: FooterLinkItem) =>
    link.external ? (
      <a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {link.name}
      </a>
    ) : (
      <Link key={link.name} to={link.href} className={linkClass}>
        {link.name}
      </Link>
    );

  const Column = ({ title, links }: { title: string; links: FooterLinkItem[] }) => (
    <div>
      <h3 className="text-[12px] font-semibold uppercase tracking-[1.5px] text-white/70 mb-5">
        {title}
      </h3>
      <ul className="flex flex-col">
        {links.map((l) => (
          <li key={l.name}>{renderLink(l)}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer
      className="relative overflow-hidden border-t border-white/[0.06] safe-bottom"
      style={{ backgroundColor: '#080E1C', padding: '64px 0 0 0' }}
    >
      <div className="relative z-10 mx-auto" style={{ maxWidth: 1200, padding: '0 40px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="HeyFlou"
              style={{ width: 120, height: 'auto', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
              {t.footer.tagline}
            </p>
            <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
              {t.footer.copyright}
            </p>
            <a
              href="mailto:hello@heyflou.com"
              className="text-[14px] leading-[2.2] text-white/60 hover:text-white transition-colors duration-150 block mt-1"
            >
              hello@heyflou.com
            </a>
            <div className="mt-5 inline-flex">
              <LanguageToggle />
            </div>
          </div>

          <Column title={t.footer.pages} links={pages} />
          <Column title={t.footer.services} links={services} />
          <Column title={t.footer.socials} links={socials} />
          <Column title={t.footer.legal} links={legal} />
        </div>

        <div className="h-40 md:h-56 lg:h-64" />
      </div>

      {/* Oversized watermark */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 hidden min-[480px]:flex justify-center"
        style={{
          bottom: 16,
          zIndex: 0,
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          padding: '0 4vw',
        }}
      >
        <span
          className="font-display"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(80px, 15vw, 220px)',
            color: 'rgba(255,255,255,0.05)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            display: 'inline-block',
            padding: '0 0.08em',
          }}
        >
          HeyFlou
        </span>
      </div>
    </footer>
  );
};
