import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/i18n';
import { CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  businessType: z.string().min(1, 'Please select a business type'),
  businessSize: z.string().min(1, 'Please select a business size'),
  biggestChallenge: z.string().min(10, 'Please describe your challenge in at least 10 characters'),
  referralSource: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function FitnessContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const t = useTranslation();
  const feT = t.fitnessEducation as Record<string, string>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      businessType: '',
      businessSize: '',
      biggestChallenge: '',
      referralSource: '',
    },
  });

  const getTrackingData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utmSource: urlParams.get('utm_source') || null,
      utmMedium: urlParams.get('utm_medium') || null,
      utmCampaign: urlParams.get('utm_campaign') || null,
      referrer: document.referrer || null,
    };
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const trackingData = getTrackingData();
      const nameParts = data.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const { error } = await supabase
        .from('contacts')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: data.email,
          company: data.businessType,
          industry: 'Fitness & Education',
          team_size: data.businessSize,
          message: `Challenge: ${data.biggestChallenge}${data.phone ? `\nPhone: ${data.phone}` : ''}`,
          source_page: 'fitness-education',
          utm_source: trackingData.utmSource,
          utm_medium: trackingData.utmMedium,
          utm_campaign: trackingData.utmCampaign,
          referrer: data.referralSource || trackingData.referrer,
          consent: true,
        });

      if (error) throw error;

      setIsSuccess(true);
      form.reset();
      toast({
        title: feT.formSuccessTitle || "Thank you!",
        description: feT.formSuccessMessage || "We'll be in touch within 24 hours.",
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

  if (isSuccess) {
    return (
      <Section background="default" padding="large" id="contact-form">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-full hf-gradient flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold font-display text-foreground mb-4">
            {feT.formSuccessTitle}
          </h3>
          <p className="text-muted-foreground">
            {feT.formSuccessMessage}
          </p>
        </motion.div>
      </Section>
    );
  }

  return (
    <Section background="default" padding="large" id="contact-form">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
            {feT.formTitle}
          </h3>
          <p className="text-muted-foreground">
            {feT.formSubtitle}
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 border border-border/50 shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{feT.formName} *</FormLabel>
                      <FormControl>
                        <Input placeholder={feT.formNamePlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{feT.formEmail} *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={feT.formEmailPlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{feT.formPhone}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder={feT.formPhonePlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Business Type */}
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{feT.formBusinessType} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={feT.formBusinessTypePlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="personal-trainer">{feT.businessTypePersonalTrainer}</SelectItem>
                          <SelectItem value="gym-studio">{feT.businessTypeGymStudio}</SelectItem>
                          <SelectItem value="tutoring">{feT.businessTypeTutoring}</SelectItem>
                          <SelectItem value="private-school">{feT.businessTypePrivateSchool}</SelectItem>
                          <SelectItem value="language-academy">{feT.businessTypeLanguageAcademy}</SelectItem>
                          <SelectItem value="other">{feT.businessTypeOther}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Business Size */}
              <FormField
                control={form.control}
                name="businessSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{feT.formBusinessSize} *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={feT.formBusinessSizePlaceholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="solo">{feT.businessSizeSolo}</SelectItem>
                        <SelectItem value="2-5">{feT.businessSize2to5}</SelectItem>
                        <SelectItem value="6-15">{feT.businessSize6to15}</SelectItem>
                        <SelectItem value="15+">{feT.businessSize15plus}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Biggest Challenge */}
              <FormField
                control={form.control}
                name="biggestChallenge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{feT.formChallenge} *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={feT.formChallengePlaceholder}
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Referral Source */}
              <FormField
                control={form.control}
                name="referralSource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{feT.formReferral}</FormLabel>
                    <FormControl>
                      <Input placeholder={feT.formReferralPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full hf-gradient text-white hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {feT.formSending}
                  </>
                ) : (
                  feT.formSubmit
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </Section>
  );
}
