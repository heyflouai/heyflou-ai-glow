import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  practiceType: z.string().min(1, 'Please select a practice type'),
  practiceSize: z.string().min(1, 'Please select a practice size'),
  biggestChallenge: z.string().min(10, 'Please describe your challenge in at least 10 characters'),
  referralSource: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function HealthcareContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const t = useTranslation();
  const hcT = t.healthcare as Record<string, string>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      practiceType: '',
      practiceSize: '',
      biggestChallenge: '',
      referralSource: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: hcT.formSuccessTitle || "Thank you!",
      description: hcT.formSuccessMessage || "We'll be in touch within 24 hours.",
    });
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
            {hcT.formSuccessTitle}
          </h3>
          <p className="text-muted-foreground">
            {hcT.formSuccessMessage}
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
            {hcT.formTitle}
          </h3>
          <p className="text-muted-foreground">
            {hcT.formSubtitle}
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border/50 shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{hcT.formName} *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={hcT.formNamePlaceholder} 
                          className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-1"
                          aria-required="true"
                          {...field} 
                        />
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
                      <FormLabel>{hcT.formEmail} *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder={hcT.formEmailPlaceholder} 
                          className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-1"
                          aria-required="true"
                          {...field} 
                        />
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
                      <FormLabel>{hcT.formPhone}</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder={hcT.formPhonePlaceholder} 
                          className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-1"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Practice Type */}
                <FormField
                  control={form.control}
                  name="practiceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{hcT.formPracticeType} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={hcT.formPracticeTypePlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="therapist">{hcT.practiceTypeTherapist}</SelectItem>
                          <SelectItem value="psychologist">{hcT.practiceTypePsychologist}</SelectItem>
                          <SelectItem value="physical-therapist">{hcT.practiceTypePhysicalTherapist}</SelectItem>
                          <SelectItem value="clinic">{hcT.practiceTypeClinic}</SelectItem>
                          <SelectItem value="other">{hcT.practiceTypeOther}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Practice Size */}
              <FormField
                control={form.control}
                name="practiceSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{hcT.formPracticeSize} *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={hcT.formPracticeSizePlaceholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="solo">{hcT.practiceSizeSolo}</SelectItem>
                        <SelectItem value="2-5">{hcT.practiceSize2to5}</SelectItem>
                        <SelectItem value="6-10">{hcT.practiceSize6to10}</SelectItem>
                        <SelectItem value="10+">{hcT.practiceSize10plus}</SelectItem>
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
                    <FormLabel>{hcT.formChallenge} *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={hcT.formChallengePlaceholder}
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
                    <FormLabel>{hcT.formReferral}</FormLabel>
                    <FormControl>
                      <Input placeholder={hcT.formReferralPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full hf-gradient text-white hover:opacity-90 transition-opacity min-h-[48px]"
                disabled={isSubmitting}
                aria-label={isSubmitting ? hcT.formSending : hcT.formSubmit}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {hcT.formSending}
                  </>
                ) : (
                  hcT.formSubmit
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </Section>
  );
}
