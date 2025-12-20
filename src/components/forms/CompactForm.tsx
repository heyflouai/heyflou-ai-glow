import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Users, Shield, Zap } from 'lucide-react';
import { FormField } from './FormField';
import { ConsentNote } from './ConsentNote';
import { GradientButton } from '@/components/ui/gradient-button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/i18n';

const disposableEmailDomains = [
  '10minutemail.com', 'guerrillamail.com', 'tempmail.org', 'mailinator.com',
  'yopmail.com', 'temp-mail.org', 'throwaway.email', 'getnada.com'
];

const compactFormSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Last name must be less than 50 characters'),
  email: z.string().trim().email('Please enter a valid email address').refine(
    (email) => {
      const domain = email.split('@')[1]?.toLowerCase();
      return !disposableEmailDomains.includes(domain);
    },
    'Please use a business email address'
  ),
  company: z.string().trim().min(1, 'Company name is required').max(100, 'Company name must be less than 100 characters'),
  website: z.string().trim().optional(),
  industry: z.string().trim().min(1, 'Industry is required').max(100, 'Industry must be less than 100 characters'),
  teamSize: z.string().min(1, 'Please select team size'),
  message: z.string().max(1000, 'Message must be less than 1000 characters').optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
  companyWebsite: z.string().optional(), // Honeypot field
});

type CompactFormData = z.infer<typeof compactFormSchema>;

interface CompactFormProps {
  sourcePage: string;
  hidePromoText?: boolean;
}

export const CompactForm: React.FC<CompactFormProps> = ({ sourcePage, hidePromoText = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const t = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<CompactFormData>({
    resolver: zodResolver(compactFormSchema),
    defaultValues: {
      consent: false,
      companyWebsite: '', // Honeypot
    },
  });

  const watchedValues = watch();

  // Get UTM parameters and referrer
  const getTrackingData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utmSource: urlParams.get('utm_source') || null,
      utmMedium: urlParams.get('utm_medium') || null,
      utmCampaign: urlParams.get('utm_campaign') || null,
      referrer: document.referrer || null,
    };
  };

  const onSubmit = async (data: CompactFormData) => {
    // Check honeypot
    if (data.companyWebsite) {
      console.warn('Bot submission detected');
      return;
    }

    setIsSubmitting(true);

    try {
      const trackingData = getTrackingData();

      const { error } = await supabase
        .from('contacts')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          company: data.company,
          website: data.website || null,
          industry: data.industry,
          team_size: data.teamSize,
          message: data.message || null,
          source_page: sourcePage,
          utm_source: trackingData.utmSource,
          utm_medium: trackingData.utmMedium,
          utm_campaign: trackingData.utmCampaign,
          referrer: trackingData.referrer,
          consent: data.consent,
        });

      if (error) {
        throw error;
      }

      // Trigger n8n webhook in the background (fire-and-forget)
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      fetch(`${supabaseUrl}/functions/v1/sync-contact-webhook`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          company: data.company,
          website: data.website || null,
          industry: data.industry,
          team_size: data.teamSize,
          message: data.message || null,
          source_page: sourcePage,
          utm_source: trackingData.utmSource,
          utm_medium: trackingData.utmMedium,
          utm_campaign: trackingData.utmCampaign,
          referrer: trackingData.referrer,
          consent: data.consent,
          created_at: new Date().toISOString(),
        }),
      }).catch((err) => {
        console.error("Failed to trigger sync-contact-webhook:", err?.message);
      });

      // Analytics tracking
      if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'form_submit',
          formType: 'compact',
          sourcePage,
        });
      }

      setIsSuccess(true);
      reset();
      toast({
        title: t.forms.thankYouToast,
        description: t.forms.thankYouToastDesc,
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: t.forms.submissionFailed,
        description: t.forms.submissionFailedDesc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamSizeOptions = [
    { value: '1-10', label: '1–10' },
    { value: '11-50', label: '11–50' },
    { value: '51-200', label: '51–200' },
    { value: '200+', label: '200+' },
  ];

  if (isSuccess) {
    return (
      <div className="bg-card rounded-xl p-8 hf-shadow text-center">
        <CheckCircle className="w-16 h-16 text-hf-teal mx-auto mb-4" />
        <h3 className="text-2xl font-bold font-display text-hf-ink mb-2">
          {t.forms.thankYou}
        </h3>
        <p className="text-muted-foreground mb-6">
          {t.forms.wantFaster}{' '}
          <GradientButton variant="ghost" size="sm" asChild>
            <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
              {t.forms.bookStrategyCall}
            </a>
          </GradientButton>
        </p>
        <GradientButton 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsSuccess(false)}
        >
          {t.forms.submitAnother}
        </GradientButton>
      </div>
    );
  }

  if (hidePromoText) {
    return (
      <div className="bg-card rounded-xl p-6 md:p-8 hf-shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Honeypot field */}
          <FormField
            type="hidden"
            name="companyWebsite"
            label=""
            value={watchedValues.companyWebsite}
            onChange={(value) => setValue('companyWebsite', value)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label={t.forms.firstName}
              name="firstName"
              type="text"
              value={watchedValues.firstName}
              onChange={(value) => setValue('firstName', value)}
              error={errors.firstName?.message}
              required
              placeholder="John"
            />

            <FormField
              label={t.forms.lastName}
              name="lastName"
              type="text"
              value={watchedValues.lastName}
              onChange={(value) => setValue('lastName', value)}
              error={errors.lastName?.message}
              required
              placeholder="Doe"
            />
          </div>

          <FormField
            label={t.forms.workEmail}
            name="email"
            type="email"
            value={watchedValues.email}
            onChange={(value) => setValue('email', value)}
            error={errors.email?.message}
            required
            placeholder="john@company.com"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label={t.forms.company}
              name="company"
              type="text"
              value={watchedValues.company}
              onChange={(value) => setValue('company', value)}
              error={errors.company?.message}
              required
              placeholder={t.forms.company}
            />

            <FormField
              label={t.forms.website}
              name="website"
              type="text"
              value={watchedValues.website}
              onChange={(value) => setValue('website', value)}
              error={errors.website?.message}
              placeholder="yourdomain.com"
              helpText={t.forms.optional}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label={t.forms.industry}
              name="industry"
              type="text"
              value={watchedValues.industry}
              onChange={(value) => setValue('industry', value)}
              error={errors.industry?.message}
              placeholder={t.forms.industryPlaceholder}
              required
            />

            <FormField
              label={t.forms.teamSize}
              name="teamSize"
              type="select"
              value={watchedValues.teamSize}
              onChange={(value) => setValue('teamSize', value)}
              error={errors.teamSize?.message}
              options={teamSizeOptions}
              placeholder={t.forms.selectTeamSize}
              required
            />
          </div>

          <FormField
            label={t.forms.message}
            name="message"
            type="textarea"
            value={watchedValues.message}
            onChange={(value) => setValue('message', value)}
            error={errors.message?.message}
            placeholder={t.forms.messagePlaceholder}
          />

          <FormField
            label={t.forms.consent}
            name="consent"
            type="checkbox"
            value={watchedValues.consent}
            onChange={(value) => setValue('consent', value)}
            error={errors.consent?.message}
            required
          />

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <GradientButton
              type="submit"
              variant="hero"
              size="lg"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? t.forms.sending : t.forms.sendInquiry}
            </GradientButton>
            
            <GradientButton
              variant="ghost"
              size="lg"
              asChild
              className="flex-1"
            >
              <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                {t.forms.bookStrategyCall}
              </a>
            </GradientButton>
          </div>

          <ConsentNote />
        </form>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left column - Copy */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink dark:text-[hsl(220,20%,97%)] mb-4">
            {t.forms.getStartedTitle}
          </h2>
          <p className="text-lg text-muted-foreground dark:text-[hsl(220,15%,75%)]">
            {t.forms.getStartedSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg dark:bg-[hsl(222,40%,11%)] dark:border dark:border-white/5">
            <div className="w-9 h-9 rounded-full hf-gradient flex items-center justify-center dark:ring-1 dark:ring-white/10 dark:brightness-110">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-hf-navy dark:text-[hsl(220,25%,92%)] font-medium">{t.forms.promo1}</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg dark:bg-[hsl(222,40%,11%)] dark:border dark:border-white/5">
            <div className="w-9 h-9 rounded-full hf-gradient flex items-center justify-center dark:ring-1 dark:ring-white/10 dark:brightness-110">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-hf-navy dark:text-[hsl(220,25%,92%)] font-medium">{t.forms.promo2}</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg dark:bg-[hsl(222,40%,11%)] dark:border dark:border-white/5">
            <div className="w-9 h-9 rounded-full hf-gradient flex items-center justify-center dark:ring-1 dark:ring-white/10 dark:brightness-110">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-hf-navy dark:text-[hsl(220,25%,92%)] font-medium">{t.forms.promo3}</span>
          </div>
        </div>
      </div>

      {/* Right column - Form */}
      <div className="bg-card rounded-xl p-6 hf-shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Honeypot field */}
          <FormField
            type="hidden"
            name="companyWebsite"
            label=""
            value={watchedValues.companyWebsite}
            onChange={(value) => setValue('companyWebsite', value)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label={t.forms.firstName}
              name="firstName"
              type="text"
              value={watchedValues.firstName}
              onChange={(value) => setValue('firstName', value)}
              error={errors.firstName?.message}
              required
              placeholder="John"
            />

            <FormField
              label={t.forms.lastName}
              name="lastName"
              type="text"
              value={watchedValues.lastName}
              onChange={(value) => setValue('lastName', value)}
              error={errors.lastName?.message}
              required
              placeholder="Doe"
            />
          </div>

          <FormField
            label={t.forms.workEmail}
            name="email"
            type="email"
            value={watchedValues.email}
            onChange={(value) => setValue('email', value)}
            error={errors.email?.message}
            required
            placeholder="john@company.com"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label={t.forms.company}
              name="company"
              type="text"
              value={watchedValues.company}
              onChange={(value) => setValue('company', value)}
              error={errors.company?.message}
              required
              placeholder={t.forms.company}
            />

            <FormField
              label={t.forms.website}
              name="website"
              type="text"
              value={watchedValues.website}
              onChange={(value) => setValue('website', value)}
              error={errors.website?.message}
              placeholder="yourdomain.com"
              helpText={t.forms.optional}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label={t.forms.industry}
              name="industry"
              type="text"
              value={watchedValues.industry}
              onChange={(value) => setValue('industry', value)}
              error={errors.industry?.message}
              placeholder={t.forms.industryPlaceholder}
              required
            />

            <FormField
              label={t.forms.teamSize}
              name="teamSize"
              type="select"
              value={watchedValues.teamSize}
              onChange={(value) => setValue('teamSize', value)}
              error={errors.teamSize?.message}
              options={teamSizeOptions}
              placeholder={t.forms.selectTeamSize}
              required
            />
          </div>

          <FormField
            label={t.forms.message}
            name="message"
            type="textarea"
            value={watchedValues.message}
            onChange={(value) => setValue('message', value)}
            error={errors.message?.message}
            placeholder={t.forms.messagePlaceholder}
          />

          <FormField
            label={t.forms.consent}
            name="consent"
            type="checkbox"
            value={watchedValues.consent}
            onChange={(value) => setValue('consent', value)}
            error={errors.consent?.message}
            required
          />

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <GradientButton
              type="submit"
              variant="hero"
              size="lg"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? t.forms.sending : t.forms.sendInquiry}
            </GradientButton>
            
            <GradientButton
              variant="ghost"
              size="lg"
              asChild
              className="flex-1"
            >
              <a href="https://calendly.com/heyflou-ai/30min" target="_blank" rel="noopener noreferrer">
                {t.forms.bookStrategyCall}
              </a>
            </GradientButton>
          </div>

          <ConsentNote />
        </form>
      </div>
    </div>
  );
};