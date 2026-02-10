import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Check } from 'lucide-react';
import { FormField } from '@/components/forms/FormField';
import { ConsentNote } from '@/components/forms/ConsentNote';
import { GradientButton } from '@/components/ui/gradient-button';
import { SubmitButton } from '@/components/ui/submit-button';
import { FormAlert } from '@/components/ui/form-alert';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/i18n';
import { sendConfirmationEmail } from '@/lib/send-confirmation-email';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const disposableEmailDomains = [
  '10minutemail.com', 'guerrillamail.com', 'tempmail.org', 'mailinator.com',
  'yopmail.com', 'temp-mail.org', 'throwaway.email', 'getnada.com'
];

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Please enter a valid email').refine(
    (email) => {
      const domain = email.split('@')[1]?.toLowerCase();
      return !disposableEmailDomains.includes(domain);
    },
    'Please use a business email address'
  ),
  phone: z.string().trim().optional(),
  businessType: z.string().min(1, 'Please select a business type'),
  timeSink: z.string().max(500).optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function CTAWithForm() {
  const t = useTranslation();
  const s = t.about.cta;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { consent: false, honeypot: '' },
  });

  const w = watch();

  const businessTypeOptions = [
    { value: 'healthcare', label: s.optHealthcare },
    { value: 'fitness', label: s.optFitness },
    { value: 'realestate', label: s.optRealEstate },
    { value: 'travel', label: s.optTravel },
    { value: 'professional', label: s.optProfessional },
    { value: 'other', label: s.optOther },
  ];

  const checklist = [s.check1, s.check2, s.check3, s.check4];

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const nameParts = data.name.trim().split(/\s+/);
      const firstName = nameParts[0] || data.name;
      const lastName = nameParts.slice(1).join(' ') || '-';

      const { error } = await supabase.from('contacts').insert({
        first_name: firstName,
        last_name: lastName,
        email: data.email,
        company: data.businessType,
        industry: data.businessType,
        team_size: '-',
        message: data.timeSink || null,
        source_page: 'about-cta',
        utm_source: urlParams.get('utm_source') || null,
        utm_medium: urlParams.get('utm_medium') || null,
        utm_campaign: urlParams.get('utm_campaign') || null,
        referrer: document.referrer || null,
        consent: data.consent,
      });

      if (error) throw error;

      sendConfirmationEmail({
        name: data.name || '',
        email: data.email,
        formSource: 'about-cta',
        message: data.timeSink || '',
        fields: {
          Phone: data.phone || '',
          'Business Type': data.businessType,
          'Time Sink': data.timeSink || '',
        },
      });

      setIsSuccess(true);
      reset();
      toast({ title: t.forms.thankYouToast, description: t.forms.thankYouToastDesc });
    } catch {
      setSubmitError(t.forms.submissionFailedDesc);
      toast({ title: t.forms.submissionFailed, description: t.forms.submissionFailedDesc, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[80px] md:py-[100px] bg-surface-secondary transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          className="text-[32px] md:text-[42px] font-bold font-display text-foreground text-center mb-6 leading-[1.2] tracking-[-0.01em]"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={0} variants={fadeUp}
        >
          {s.title}
        </motion.h2>
        <motion.p
          className="text-[18px] md:text-[20px] text-muted-foreground/70 text-center max-w-[900px] mx-auto mb-16 leading-[1.5]"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={1} variants={fadeUp}
        >
          {s.subtitle}
        </motion.p>

        {isSuccess ? (
          <motion.div
            className="max-w-[600px] mx-auto bg-card rounded-xl p-8 text-center border border-border/30"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-display text-foreground mb-2">{t.forms.thankYou}</h3>
            <p className="text-muted-foreground mb-6">
              {t.forms.wantFaster}{' '}
              <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                {t.forms.bookStrategyCall}
              </a>
            </p>
            <GradientButton variant="ghost" size="sm" onClick={() => setIsSuccess(false)}>
              {t.forms.submitAnother}
            </GradientButton>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} custom={2} variants={fadeUp}
          >
            {/* Left - Benefits */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-bold font-display text-foreground mb-6">
                {s.whyBook}
              </h3>
              <ul className="space-y-4">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[hsl(190_72%_44%)] to-[hsl(268_84%_65%)] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] md:text-[16px] text-foreground leading-[1.8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Form */}
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border/30" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <FormField type="hidden" name="honeypot" label="" value={w.honeypot} onChange={(v) => setValue('honeypot', v)} />

                <FormField
                  label={s.nameLabel}
                  name="name"
                  type="text"
                  value={w.name}
                  onChange={(v) => setValue('name', v)}
                  error={errors.name?.message}
                  required
                  placeholder={s.namePlaceholder}
                />

                <FormField
                  label={s.emailLabel}
                  name="email"
                  type="email"
                  value={w.email}
                  onChange={(v) => setValue('email', v)}
                  error={errors.email?.message}
                  required
                  placeholder={s.emailPlaceholder}
                />

                <FormField
                  label={s.phoneLabel}
                  name="phone"
                  type="text"
                  value={w.phone}
                  onChange={(v) => setValue('phone', v)}
                  placeholder={s.phonePlaceholder}
                />

                <FormField
                  label={s.businessTypeLabel}
                  name="businessType"
                  type="select"
                  value={w.businessType}
                  onChange={(v) => setValue('businessType', v)}
                  error={errors.businessType?.message}
                  options={businessTypeOptions}
                  placeholder={s.businessTypePlaceholder}
                  required
                />

                <FormField
                  label={s.timeSinkLabel}
                  name="timeSink"
                  type="textarea"
                  value={w.timeSink}
                  onChange={(v) => setValue('timeSink', v)}
                  placeholder={s.timeSinkPlaceholder}
                />

                <FormField
                  label={t.forms.consent}
                  name="consent"
                  type="checkbox"
                  value={w.consent}
                  onChange={(v) => setValue('consent', v)}
                  error={errors.consent?.message}
                  required
                />

                {submitError && (
                  <FormAlert type="error" title={t.forms.submissionFailed} message={submitError} onDismiss={() => setSubmitError(null)} />
                )}

                <SubmitButton variant="hero" size="lg" isSubmitting={isSubmitting} loadingText={t.forms.sending} className="w-full text-[18px] font-semibold">
                  {s.ctaButton}
                </SubmitButton>

                <ConsentNote />
              </form>
            </div>
          </motion.div>
        )}

        {/* Social proof */}
        <motion.p
          className="text-[15px] text-muted-foreground/65 text-center mt-12"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} custom={3} variants={fadeUp}
        >
          {s.socialProof}
        </motion.p>
      </div>
    </section>
  );
}
