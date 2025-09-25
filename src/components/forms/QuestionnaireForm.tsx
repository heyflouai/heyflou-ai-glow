import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { FormField } from './FormField';
import { ConsentNote } from './ConsentNote';
import { GradientButton } from '@/components/ui/gradient-button';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const disposableEmailDomains = [
  '10minutemail.com', 'guerrillamail.com', 'tempmail.org', 'mailinator.com',
  'yopmail.com', 'temp-mail.org', 'throwaway.email', 'getnada.com'
];

const questionnaireFormSchema = z.object({
  // Contact info
  firstName: z.string().trim().min(1, 'First name is required').max(50),
  lastName: z.string().trim().min(1, 'Last name is required').max(50),
  email: z.string().trim().email('Please enter a valid email address').refine(
    (email) => {
      const domain = email.split('@')[1]?.toLowerCase();
      return !disposableEmailDomains.includes(domain);
    },
    'Please use a business email address'
  ),
  phone: z.string().trim().optional(),
  
  // Business info
  company: z.string().trim().min(1, 'Company name is required').max(100),
  website: z.string().trim().optional(),
  country: z.string().trim().optional(),
  industry: z.string().min(1, 'Please select an industry'),
  teamSize: z.string().min(1, 'Please select team size'),
  role: z.string().trim().optional(),
  
  // AI & Goals
  currentAiUsage: z.string().min(1, 'Please select your current AI usage'),
  toolsInUse: z.array(z.string()).optional(),
  areasOfInterest: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  goals: z.array(z.string()).min(1, 'Please select at least one goal'),
  biggestPain: z.string().trim().optional(),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  preferredContact: z.string().min(1, 'Please select preferred contact method'),
  
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
  companyWebsite: z.string().optional(), // Honeypot field
});

type QuestionnaireFormData = z.infer<typeof questionnaireFormSchema>;

export const QuestionnaireForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<QuestionnaireFormData>({
    resolver: zodResolver(questionnaireFormSchema),
    defaultValues: {
      consent: false,
      companyWebsite: '', // Honeypot
      toolsInUse: [],
      areasOfInterest: [],
      goals: [],
    },
  });

  const watchedValues = watch();

  const steps = [
    { number: 1, title: 'Contact', fields: ['firstName', 'lastName', 'email', 'phone'] },
    { number: 2, title: 'Business', fields: ['company', 'website', 'country', 'industry', 'teamSize', 'role'] },
    { number: 3, title: 'Goals', fields: ['currentAiUsage', 'toolsInUse', 'areasOfInterest', 'goals', 'biggestPain', 'budgetRange', 'timeline', 'preferredContact', 'consent'] },
  ];

  const getTrackingData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utmSource: urlParams.get('utm_source') || null,
      utmMedium: urlParams.get('utm_medium') || null,
      utmCampaign: urlParams.get('utm_campaign') || null,
      referrer: document.referrer || null,
    };
  };

  const onSubmit = async (data: QuestionnaireFormData) => {
    // Check honeypot
    if (data.companyWebsite) {
      console.warn('Bot submission detected');
      return;
    }

    setIsSubmitting(true);

    try {
      const trackingData = getTrackingData();

      const { error } = await supabase
        .from('intakes')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          company: data.company,
          website: data.website || null,
          industry: data.industry,
          team_size: data.teamSize,
          source_page: '/',
          utm_source: trackingData.utmSource,
          utm_medium: trackingData.utmMedium,
          utm_campaign: trackingData.utmCampaign,
          referrer: trackingData.referrer,
          consent: data.consent,
          role: data.role || null,
          country: data.country || null,
          current_ai_usage: data.currentAiUsage,
          tools_in_use: data.toolsInUse || [],
          areas_of_interest: data.areasOfInterest,
          goals: data.goals,
          biggest_pain: data.biggestPain || null,
          budget_range: data.budgetRange,
          timeline: data.timeline,
          preferred_contact: data.preferredContact,
          message: null, // Not collected in questionnaire
        });

      if (error) {
        throw error;
      }

      // Analytics tracking
      if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'form_submit',
          formType: 'questionnaire',
          sourcePage: '/',
        });
      }

      setIsSuccess(true);
      reset();
      toast({
        title: "Thank you for completing the questionnaire!",
        description: "We'll review your responses and follow up shortly.",
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

  const nextStep = async () => {
    const currentStepFields = steps[currentStep - 1].fields;
    const isValid = await trigger(currentStepFields as any);
    
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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

  const aiUsageOptions = [
    { value: 'none', label: 'None' },
    { value: 'experimenting', label: 'Experimenting' },
    { value: 'active-limited', label: 'Active in 1–2 areas' },
    { value: 'active-teams', label: 'Active across teams' },
  ];

  const toolsOptions = [
    { value: 'chatgpt', label: 'ChatGPT' },
    { value: 'gemini', label: 'Gemini' },
    { value: 'copilot', label: 'Microsoft Copilot' },
    { value: 'zapier', label: 'Zapier' },
    { value: 'make', label: 'Make' },
    { value: 'hubspot', label: 'HubSpot AI' },
    { value: 'notion', label: 'Notion AI' },
    { value: 'other', label: 'Other' },
  ];

  const areasOptions = [
    { value: 'workflow-automation', label: 'Workflow Automation' },
    { value: 'ai-training', label: 'AI Training' },
    { value: 'ai-agents', label: 'AI Agents' },
    { value: 'data-readiness', label: 'Data Readiness' },
    { value: 'integrations', label: 'Integrations' },
  ];

  const goalsOptions = [
    { value: 'save-time', label: 'Save time' },
    { value: 'reduce-costs', label: 'Reduce costs' },
    { value: 'increase-revenue', label: 'Increase revenue' },
    { value: 'improve-cx', label: 'Improve CX' },
    { value: 'better-reporting', label: 'Better reporting' },
    { value: 'compliance', label: 'Compliance/Governance' },
  ];

  const budgetOptions = [
    { value: 'under-5k', label: '<$5k' },
    { value: '5k-15k', label: '$5k–$15k' },
    { value: '15k-50k', label: '$15k–$50k' },
    { value: 'over-50k', label: '$50k+' },
    { value: 'undisclosed', label: 'Undisclosed' },
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1–3 months' },
    { value: '3-6-months', label: '3–6 months' },
    { value: 'exploring', label: 'Exploring' },
  ];

  const contactOptions = [
    { value: 'email', label: 'Email' },
    { value: 'call', label: 'Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
  ];

  if (isSuccess) {
    return (
      <div className="bg-card rounded-xl p-8 hf-shadow text-center max-w-2xl mx-auto">
        <CheckCircle className="w-12 h-12 text-hf-teal mx-auto mb-4" />
        <h3 className="text-2xl font-bold font-display text-hf-ink mb-2">
          Thanks! We'll review and follow up shortly.
        </h3>
        <p className="text-muted-foreground mb-6">
          Want to move faster? Book a strategy call.
        </p>
        <GradientButton variant="hero" size="lg" asChild>
          <a href="https://calendly.com/heyflou/30min" target="_blank" rel="noopener noreferrer">
            Book a Strategy Call
          </a>
        </GradientButton>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-hf-ink mb-4">
          AI Readiness Questionnaire
        </h2>
        <p className="text-lg text-muted-foreground">
          Answer a few questions so we can recommend the fastest path to ROI for your team.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex items-center ${step.number < steps.length ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step.number <= currentStep
                    ? 'hf-gradient text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step.number}
              </div>
              <div className="ml-2 text-sm font-medium text-hf-navy">
                {step.title}
              </div>
              {step.number < steps.length && (
                <div className="flex-1 h-0.5 bg-muted mx-4">
                  <div
                    className={`h-full hf-gradient transition-all duration-300 ${
                      step.number < currentStep ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <Progress value={(currentStep / 3) * 100} className="h-2" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
        {/* Honeypot field */}
        <FormField
          type="hidden"
          name="companyWebsite"
          label=""
          value={watchedValues.companyWebsite}
          onChange={(value) => setValue('companyWebsite', value)}
        />

        <div className="bg-card rounded-xl p-6 hf-shadow space-y-6">
          {/* Step 1: Contact */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="border-b border-hf-ink/8 pb-4">
                <h3 className="text-xl font-bold font-display text-hf-ink">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Let's start with your basic contact details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="First Name"
                  name="firstName"
                  value={watchedValues.firstName}
                  onChange={(value) => setValue('firstName', value)}
                  error={errors.firstName?.message}
                  required
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={watchedValues.lastName}
                  onChange={(value) => setValue('lastName', value)}
                  error={errors.lastName?.message}
                  required
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
              />

              <FormField
                label="Phone"
                name="phone"
                type="tel"
                value={watchedValues.phone}
                onChange={(value) => setValue('phone', value)}
                error={errors.phone?.message}
                helpText="Optional"
              />
            </div>
          )}

          {/* Step 2: Business */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="border-b border-hf-ink/8 pb-4">
                <h3 className="text-xl font-bold font-display text-hf-ink">
                  Business Information
                </h3>
                <p className="text-muted-foreground">
                  Tell us about your company and role.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Company"
                  name="company"
                  value={watchedValues.company}
                  onChange={(value) => setValue('company', value)}
                  error={errors.company?.message}
                  required
                />
                <FormField
                  label="Website"
                  name="website"
                  value={watchedValues.website}
                  onChange={(value) => setValue('website', value)}
                  error={errors.website?.message}
                  helpText="Optional"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Country/Region"
                  name="country"
                  value={watchedValues.country}
                  onChange={(value) => setValue('country', value)}
                  error={errors.country?.message}
                  helpText="Optional"
                />
                <FormField
                  label="Role/Title"
                  name="role"
                  value={watchedValues.role}
                  onChange={(value) => setValue('role', value)}
                  error={errors.role?.message}
                  helpText="Optional"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Industry"
                  name="industry"
                  type="select"
                  value={watchedValues.industry}
                  onChange={(value) => setValue('industry', value)}
                  error={errors.industry?.message}
                  options={industryOptions}
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
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Goals */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-b border-hf-ink/8 pb-4">
                <h3 className="text-xl font-bold font-display text-hf-ink">
                  AI Goals & Preferences
                </h3>
                <p className="text-muted-foreground">
                  Help us understand your AI readiness and objectives.
                </p>
              </div>

              <FormField
                label="Current AI Usage"
                name="currentAiUsage"
                type="radio"
                value={watchedValues.currentAiUsage}
                onChange={(value) => setValue('currentAiUsage', value)}
                error={errors.currentAiUsage?.message}
                options={aiUsageOptions}
                required
              />

              <FormField
                label="Tools in Use"
                name="toolsInUse"
                type="checkbox"
                value={watchedValues.toolsInUse}
                onChange={(value) => setValue('toolsInUse', value)}
                error={errors.toolsInUse?.message}
                options={toolsOptions}
                helpText="Select all that apply"
              />

              <FormField
                label="Areas of Interest"
                name="areasOfInterest"
                type="checkbox"
                value={watchedValues.areasOfInterest}
                onChange={(value) => setValue('areasOfInterest', value)}
                error={errors.areasOfInterest?.message}
                options={areasOptions}
                required
              />

              <FormField
                label="Goals"
                name="goals"
                type="checkbox"
                value={watchedValues.goals}
                onChange={(value) => setValue('goals', value)}
                error={errors.goals?.message}
                options={goalsOptions}
                required
              />

              <FormField
                label="Biggest Pain Point"
                name="biggestPain"
                type="textarea"
                value={watchedValues.biggestPain}
                onChange={(value) => setValue('biggestPain', value)}
                error={errors.biggestPain?.message}
                helpText="Optional - What's your biggest operational challenge?"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Budget Range"
                  name="budgetRange"
                  type="select"
                  value={watchedValues.budgetRange}
                  onChange={(value) => setValue('budgetRange', value)}
                  error={errors.budgetRange?.message}
                  options={budgetOptions}
                  required
                />
                <FormField
                  label="Timeline"
                  name="timeline"
                  type="select"
                  value={watchedValues.timeline}
                  onChange={(value) => setValue('timeline', value)}
                  error={errors.timeline?.message}
                  options={timelineOptions}
                  required
                />
              </div>

              <FormField
                label="Preferred Contact Method"
                name="preferredContact"
                type="select"
                value={watchedValues.preferredContact}
                onChange={(value) => setValue('preferredContact', value)}
                error={errors.preferredContact?.message}
                options={contactOptions}
                required
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
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <div>
            {currentStep > 1 && (
              <GradientButton
                type="button"
                variant="ghost"
                size="lg"
                onClick={prevStep}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </GradientButton>
            )}
          </div>

          <div className="flex gap-3">
            {currentStep < 3 ? (
              <GradientButton
                type="button"
                variant="hero"
                size="lg"
                onClick={nextStep}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </GradientButton>
            ) : (
              <>
                <GradientButton
                  variant="ghost"
                  size="lg"
                  asChild
                >
                  <a href="https://calendly.com/heyflou/30min" target="_blank" rel="noopener noreferrer">
                    Book a Strategy Call
                  </a>
                </GradientButton>
                <GradientButton
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
                </GradientButton>
              </>
            )}
          </div>
        </div>

        {currentStep === 3 && <ConsentNote />}
      </form>
    </div>
  );
};