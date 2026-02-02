import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLockup } from '@/components/BrandLockup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Linkedin, Loader2, CheckCircle2, XCircle, Mail, Github, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageToggle } from '@/components/ui/language-toggle';

// X (formerly Twitter) logo component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

type SubscriptionStatus = 'idle' | 'loading' | 'success' | 'error';

export const Footer = () => {
  const t = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscriptionStatus>('idle');
  const [emailError, setEmailError] = useState('');

  // Solutions column links
  const solutionsLinks = [
    { name: t.footer.healthcareAutomation, href: '/services/healthcare' },
    { name: t.footer.fitnessEducation, href: '/services/fitness-education' },
    { name: t.footer.customAutomations, href: '/services/custom' },
    { name: t.footer.aiConsulting, href: '/services/consulting' },
    { name: `${t.footer.travelAgencies}`, href: '/services/travel-agencies', badge: t.footer.comingSoon },
  ];

  // Company column links
  const companyLinks = [
    { name: t.footer.aboutUs, href: '/about' },
    { name: t.footer.caseStudies, href: '/case-studies' },
    { name: t.footer.contactUs, href: '/contact' },
  ];

  // Resources column links
  const resourcesLinks = [
    { name: t.footer.helpCenter, href: '/contact' },
    { name: t.footer.bookACall, href: 'https://calendly.com/heyflou-ai/30min', external: true },
  ];

  // Legal column links
  const legalLinks = [
    { name: t.footer.privacyPolicy, href: '#' },
    { name: t.footer.termsOfService, href: '#' },
    { name: t.footer.cookiePolicy, href: '#' },
  ];

  // Social links
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/heyflou', 
      icon: Linkedin 
    },
    { 
      name: 'X', 
      href: 'https://x.com/Heyflou_', 
      icon: XIcon 
    },
  ];

  const validateEmail = (email: string): boolean => {
    if (!email.trim()) {
      setEmailError(t.forms.emailRequired);
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(t.forms.invalidEmail);
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) return;
    
    setStatus('loading');
    
    try {
      const { data, error } = await supabase.functions.invoke('webhook-subscriber', {
        body: { email: email.trim() }
      });

      if (error) throw error;

      if (data.code === 'ALREADY_SUBSCRIBED') {
        toast({
          title: t.forms.alreadySubscribed,
          description: data.message
        });
        setStatus('success');
      } else if (data.code === 'SUCCESS') {
        toast({
          title: t.forms.subscribed,
          description: data.message
        });
        setStatus('success');
        setEmail('');
      } else if (data.error) {
        throw new Error(data.error);
      }
    } catch (error: any) {
      console.error('Subscription error:', error);
      setStatus('error');
      toast({
        title: t.forms.submissionFailed,
        description: t.forms.submissionFailedDesc,
        variant: "destructive"
      });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
    if (status !== 'idle') setStatus('idle');
  };

  const resetForm = () => {
    setStatus('idle');
    setEmail('');
    setEmailError('');
  };

  const FooterLink = ({ 
    href, 
    children, 
    external = false,
    badge
  }: { 
    href: string; 
    children: React.ReactNode; 
    external?: boolean;
    badge?: string;
  }) => {
    const className = cn(
      "text-muted-foreground hover:text-hf-teal transition-colors duration-200 text-sm",
      "py-1.5 inline-flex items-center gap-2 group min-h-[44px] md:min-h-0"
    );

    if (external) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={className}
        >
          {children}
          <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
        </a>
      );
    }

    return (
      <Link to={href} className={className}>
        {children}
        {badge && (
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-hf-teal/20 text-hf-teal font-medium">
            {badge}
          </span>
        )}
      </Link>
    );
  };

  const FooterColumn = ({ 
    title, 
    links 
  }: { 
    title: string; 
    links: Array<{ name: string; href: string; external?: boolean; badge?: string }>;
  }) => (
    <div>
      <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
        {title}
      </h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.name}>
            <FooterLink href={link.href} external={link.external} badge={link.badge}>
              {link.name}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-muted dark:bg-bg-dark border-t border-border dark:border-white/10 safe-bottom">
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
