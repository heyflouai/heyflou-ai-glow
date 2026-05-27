import { Link } from 'react-router-dom';
import logo from '@/assets/heyflou-logo-new.png';
import { LanguageToggle } from '@/components/ui/language-toggle';

type FooterLinkItem = { name: string; href: string; external?: boolean };

export const Footer = () => {
  const pages: FooterLinkItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services: FooterLinkItem[] = [
    { name: 'AI Agents', href: '/services/agents' },
    { name: 'AI Infrastructure', href: '/services/infrastructure' },
    { name: 'AI Consulting', href: '/services/consulting' },
  ];

  const socials: FooterLinkItem[] = [
    { name: 'Instagram', href: 'https://instagram.com/heyflou_ai', external: true },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/heyflou', external: true },
  ];

  const legal: FooterLinkItem[] = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
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
      <h3 className="text-[12px] font-semibold uppercase tracking-[1.5px] text-white/50 mb-5">
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
      {/* Inner content */}
      <div className="relative z-10 mx-auto" style={{ maxWidth: 1200, padding: '0 40px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="HeyFlou"
              style={{ width: 120, height: 'auto', filter: 'brightness(0) invert(1)' }}
            />
            <p
              className="font-normal"
              style={{ marginTop: 12, color: 'rgba(255,255,255,0.4)', fontSize: 13 }}
            >
              Tecnología Israelí, Corazón Mexicano
            </p>
            <p
              className="font-normal"
              style={{ marginTop: 24, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}
            >
              © 2026 HeyFlou. All rights reserved.
            </p>
            <div className="mt-5">
              <LanguageToggle />
            </div>
          </div>

          <Column title="PAGES" links={pages} />
          <Column title="SERVICES" links={services} />
          <Column title="SOCIALS" links={socials} />
          <Column title="LEGAL" links={legal} />
        </div>

        {/* Spacer above watermark */}
        <div className="h-16 md:h-20" />
      </div>

      {/* Oversized watermark */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 hidden min-[480px]:block"
        style={{
          bottom: -20,
          zIndex: 0,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <span
          className="font-display"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(100px, 18vw, 260px)',
            color: 'rgba(255,255,255,0.04)',
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          HeyFlou
        </span>
      </div>
    </footer>
  );
};
      {/* Main Footer Content */}
      <div className="container mx-auto px-5 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          
          {/* Brand Column - Takes 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLockup size="lg" />
            
            <p className="text-hf-teal font-medium text-sm">
              {t.footer.tagline}
            </p>
            
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      "bg-foreground/5 border border-border/50 text-muted-foreground",
                      "hover:bg-hf-teal hover:border-hf-teal hover:text-white hover:scale-110",
                      "transition-all duration-200"
                    )}
                    aria-label={`Follow us on ${link.name}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
              <a 
                href="mailto:Hello@HeyFlou.com" 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "bg-foreground/5 border border-border/50 text-muted-foreground",
                  "hover:bg-hf-teal hover:border-hf-teal hover:text-white hover:scale-110",
                  "transition-all duration-200"
                )}
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <FooterColumn title={t.footer.solutions} links={solutionsLinks} />

          {/* Company Column */}
          <FooterColumn title={t.footer.company} links={companyLinks} />

          {/* Resources Column */}
          <FooterColumn title={t.footer.resources} links={resourcesLinks} />

          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              {t.footer.getProductUpdates}
            </h3>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-emerald-400 py-3"
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{t.footer.successMessage}</span>
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-2"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-2 text-red-400 py-2">
                      <XCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{t.footer.errorMessage}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={resetForm}
                      className="text-muted-foreground border-border hover:bg-foreground/10 hover:text-foreground"
                    >
                      {t.footer.tryAgain}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe} 
                    className="space-y-3"
                  >
                    <div>
                      <Input 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange}
                        onBlur={() => email && validateEmail(email)}
                        placeholder={t.footer.enterEmail}
                        disabled={status === 'loading'}
                        className={cn(
                          "bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground",
                          "focus:border-hf-teal focus:ring-hf-teal/30",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          emailError && "border-red-500 focus:border-red-500"
                        )}
                        aria-label="Email address for newsletter"
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? "email-error" : undefined}
                      />
                      {emailError && (
                        <p id="email-error" className="text-red-400 text-xs mt-1.5">
                          {emailError}
                        </p>
                      )}
                    </div>
                    <Button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full bg-hf-teal hover:bg-hf-teal/90 text-white font-medium min-h-[48px]"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {t.footer.subscribing}
                        </span>
                      ) : (
                        t.footer.subscribe
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground/70">
                      {t.footer.privacyNote}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border dark:border-white/10">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground/70 text-sm order-2 md:order-1">
              {t.footer.allRightsReserved}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-1 md:order-2">
              {legalLinks.map((link, index) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-muted-foreground/70 hover:text-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="order-3">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
