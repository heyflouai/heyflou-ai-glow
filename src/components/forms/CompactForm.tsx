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
  industry: z.string().min(1, 'Please select an industry'),
  teamSize: z.string().min(1, 'Please select team size'),
  message: z.string().max(1000, 'Message must be less than 1000 characters').optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
  companyWebsite: z.string().optional(), // Honeypot field
});

type CompactFormData = z.infer<typeof compactFormSchema>;

interface CompactFormProps {
  sourcePage: string;
}

export const CompactForm: React.FC<CompactFormProps> = ({ sourcePage }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

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
        title: "Thank you for your inquiry!",
        description: "Our team will reach out to you shortly.",
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const industryOptions = [
    { value: 'retail', label: 'Retail' },
    { value: 'services', label: 'Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'other', label: 'Other' },
  ];

  const teamSizeOptions = [
    { value: '1-10', label: '1–10' },
    { value: '11-50', label: '11–50' },
    { value: '51-200', label: '51–200' },
    { value: '200+', label: '200+' },
  ];

  if (isSuccess) {
    return (
      <div className="bg-card rounded-xl p-8 hf-shadow text-center">
        <CheckCircle className="w-12 h-12 text-hf-teal mx-auto mb-4" />
        <h3 className="text-xl font-bold font-display text-hf-ink mb-2">
          Thanks! We'll be in touch soon.
        </h3>
        <p className="text-muted-foreground mb-6">
          Want to move faster?{' '}
          <GradientButton variant="ghost" size="sm" asChild>
            <a href="https://calendly.com/heyflou/30min" target="_blank" rel="noopener noreferrer">
              Book a strategy call
            </a>
          </GradientButton>
        </p>
        <GradientButton 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsSuccess(false)}
        >
          Submit another inquiry
        </GradientButton>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left column - Copy */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
            Start Your AI Project
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your business—our team will reach out with next steps.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full hf-gradient flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-hf-navy font-medium">Human-in-the-loop</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full hf-gradient flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-hf-navy font-medium">Secure-by-design</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full hf-gradient flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-hf-navy font-medium">From audit to ROI in 90 days</span>
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
              label="First Name"
              name="firstName"
              type="text"
              value={watchedValues.firstName}
              onChange={(value) => setValue('firstName', value)}
              error={errors.firstName?.message}
              required
              placeholder="John"
            />

            <FormField
              label="Last Name"
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
            label="Work Email"
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
              label="Company"
              name="company"
              type="text"
              value={watchedValues.company}
              onChange={(value) => setValue('company', value)}
              error={errors.company?.message}
              required
              placeholder="Company Name"
            />

            <FormField
              label="Website"
              name="website"
              type="text"
              value={watchedValues.website}
              onChange={(value) => setValue('website', value)}
              error={errors.website?.message}
              placeholder="yourdomain.com"
              helpText="Optional"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Industry"
              name="industry"
              type="select"
              value={watchedValues.industry}
              onChange={(value) => setValue('industry', value)}
              error={errors.industry?.message}
              options={industryOptions}
              placeholder="Select industry"
              required
            />

            <FormField
              label="Team Size"
              name="teamSize"
              type="select"
              value={watchedValues.teamSize}
              onChange={(value) => setValue('teamSize', value)}
              error={errors.teamSize?.message}
              options={teamSizeOptions}
              placeholder="Select team size"
              required
            />
          </div>

          <FormField
            label="Message"
            name="message"
            type="textarea"
            value={watchedValues.message}
            onChange={(value) => setValue('message', value)}
            error={errors.message?.message}
            placeholder="Tell us about your goals or current challenges... (optional)"
          />

          <FormField
            label="I agree to be contacted about AI automation opportunities"
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
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </GradientButton>
            
            <GradientButton
              variant="ghost"
              size="lg"
              asChild
              className="flex-1"
            >
              <a href="https://calendly.com/heyflou/30min" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </a>
            </GradientButton>
          </div>

          <ConsentNote />
        </form>
      </div>
    </div>
  );
};