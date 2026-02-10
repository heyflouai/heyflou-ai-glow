import { useState } from 'react';
import { Wand2, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { sendConfirmationEmail } from '@/lib/send-confirmation-email';

export function CustomSolutionsCTA() {
  const t = useTranslation();
  
  // Newsletter state
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email.trim()) {
      setEmailError(t.forms?.invalidEmail || 'Invalid email');
      return;
    }

    if (!validateEmail(email.trim())) {
      setEmailError(t.forms?.invalidEmail || 'Invalid email');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('webhook-subscriber', {
        body: { email: email.trim() }
      });
      
      if (error) throw error;
      
      setSubmitState('success');
      sendConfirmationEmail({
        name: email.split('@')[0],
        email: email.trim(),
        formSource: 'newsletter-cta',
        message: '',
        fields: { 'Signup Type': 'Coming Soon Newsletter' },
      });
      setEmail('');
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-16 md:mt-20">
      {/* Two-tile grid: 70/30 on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 lg:gap-8 max-w-5xl mx-auto">
        
        {/* Tile 1 — Custom Workflow (Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="group relative bg-gradient-to-b from-card to-card/80 rounded-2xl border border-border/30 p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-hf-teal/5 hover:border-border/50"
        >
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-hf-teal/10 text-hf-teal border border-hf-teal/20">
              {t.customCta?.badge || 'Tailored Automation'}
            </span>
          </div>

          {/* Desktop: 3-part horizontal row | Mobile: stacked */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-6">
            
            {/* Icon container */}
            <div className="w-12 h-12 rounded-xl hf-gradient flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-hf-teal/20">
              <Wand2 className="text-white" size={24} />
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-bold font-display text-foreground leading-tight mb-2">
                {t.customCta?.buildCustom || 'Build a Custom Workflow'}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                {t.customCta?.buildCustomDesc || 'AI can adapt to your exact process. We design tailored workflows that fit your tools, your team, and your clients.'}
              </p>
              <p className="text-xs text-muted-foreground/70 italic">
                {t.customCta?.buildCustomExamples || 'Examples: financial processes • social media campaigns • lead generators'}
              </p>
            </div>

            {/* Button (right aligned on desktop) */}
            <div className="shrink-0 lg:self-center">
              <GradientButton 
                variant="hero" 
                size="lg" 
                asChild
                className="group/btn w-full lg:w-auto"
              >
                <Link to="/contact">
                  {t.customCta?.buildCustom || 'Build a Custom Workflow'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </GradientButton>
            </div>
          </div>
        </motion.div>

        {/* Tile 2 — More Coming Soon (with Newsletter) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="relative bg-gradient-to-b from-card to-card/80 rounded-2xl border border-border/30 p-6 md:p-8 flex flex-col"
        >
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/30">
              {t.customCta?.moreComingSoon || 'Coming Soon'}
            </span>
          </div>

          {/* Icon + Title row */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-muted/30 dark:bg-muted/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-hf-teal" />
            </div>
            <h4 className="text-lg font-semibold font-display text-foreground">
              {t.customCta?.moreComingSoon || 'Coming Soon'}
            </h4>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {t.customCta?.exploreComingSoonSub || 'More automations are launching soon.'}
          </p>

          {/* Newsletter form */}
          <div className="mt-auto">
            <p className="text-xs font-medium text-foreground mb-2">
              {t.customCta?.getUpdates || 'Get updates'}
            </p>
            
            {submitState === 'success' ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm font-medium text-hf-teal py-2"
              >
                {t.customCta?.notifySuccess || "✓ You're in!"}
              </motion.p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                      if (submitState === 'error') setSubmitState('idle');
                    }}
                    placeholder={t.customCta?.yourEmail || 'Your email'}
                    className={cn(
                      "flex-1 h-9 text-sm bg-background/50",
                      emailError && "border-red-500 focus:border-red-500"
                    )}
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isSubmitting}
                    className="h-9 px-4 hf-gradient text-white hover:opacity-90 transition-opacity shrink-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3 h-3 mr-1.5 animate-spin" />
                        <span className="text-xs">{t.customCta?.notifying || 'Sending...'}</span>
                      </>
                    ) : (
                      <span className="text-xs">{t.customCta?.notifyMe || 'Notify me'}</span>
                    )}
                  </Button>
                </div>
                
                {emailError && (
                  <p className="text-xs text-red-500">{emailError}</p>
                )}
                
                {submitState === 'error' && (
                  <p className="text-xs text-red-500">
                    {t.customCta?.notifyError || 'Try again.'}
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
