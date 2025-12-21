import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLockup } from '@/components/BrandLockup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Linkedin, Loader2, CheckCircle2, XCircle, Mail } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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

  const companyLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.caseStudies, href: '/case-studies' },
    { name: t.nav.about, href: '/about' },
  ];

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

  return (
    <footer className="bg-bg-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <BrandLockup className="text-white [&_span]:text-white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <p className="text-gray-500 text-xs">
              {t.footer.trustLine}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm link-interactive"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              {t.footer.connect}
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:Hello@HeyFlou.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-hf-teal transition-colors text-sm link-interactive"
              >
                <Mail className="h-4 w-4" />
                Hello@HeyFlou.com
              </a>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a 
                      key={link.name}
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-hf-teal hover:text-white transition-all duration-200 btn-interactive"
                      aria-label={`Follow us on ${link.name}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
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
                      className="text-gray-300 border-gray-600 hover:bg-white/10 hover:text-white"
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
                          "bg-white/5 border-gray-700 text-white placeholder:text-gray-500",
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
                      className="w-full bg-hf-teal hover:bg-hf-teal/90 text-white font-medium"
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
                    <p className="text-xs text-gray-500">
                      {t.footer.privacyNote}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              {t.footer.allRightsReserved}
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-6">
              <Link 
                to="/contact" 
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors link-interactive"
              >
                {t.footer.contactUs}
              </Link>
              <a 
                href="https://calendly.com/heyflou-ai/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors link-interactive"
              >
                {t.footer.bookStrategyCall}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
