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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  industry: z.string().min(2, 'Please enter your industry'),
  companySize: z.string().min(1, 'Please select a company size'),
  automationNeeds: z.string().min(20, 'Please describe what you want to automate in at least 20 characters'),
  currentTools: z.string().optional(),
  referralSource: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function CustomContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const t = useTranslation();
  const caT = t.customAutomation as Record<string, string>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      industry: '',
      companySize: '',
      automationNeeds: '',
      currentTools: '',
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
      title: caT.formSuccessTitle || "Thank you!",
      description: caT.formSuccessMessage || "We'll be in touch within 24 hours.",
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
            {caT.formSuccessTitle}
          </h3>
          <p className="text-muted-foreground">
            {caT.formSuccessMessage}
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
            {caT.formTitle}
          </h3>
          <p className="text-muted-foreground">
            {caT.formSubtitle}
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
                      <FormLabel>{caT.formName} *</FormLabel>
                      <FormControl>
                        <Input placeholder={caT.formNamePlaceholder} {...field} />
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
                      <FormLabel>{caT.formEmail} *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={caT.formEmailPlaceholder} {...field} />
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
                      <FormLabel>{caT.formPhone}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder={caT.formPhonePlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Industry */}
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{caT.formIndustry} *</FormLabel>
                      <FormControl>
                        <Input placeholder={caT.formIndustryPlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Company Size */}
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{caT.formCompanySize} *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={caT.formCompanySizePlaceholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="solo">{caT.companySizeSolo}</SelectItem>
                        <SelectItem value="2-10">{caT.companySize2to10}</SelectItem>
                        <SelectItem value="11-50">{caT.companySize11to50}</SelectItem>
                        <SelectItem value="50+">{caT.companySize50plus}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Automation Needs */}
              <FormField
                control={form.control}
                name="automationNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{caT.formAutomationNeeds} *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={caT.formAutomationNeedsPlaceholder}
                        className="min-h-[150px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Current Tools */}
              <FormField
                control={form.control}
                name="currentTools"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{caT.formCurrentTools}</FormLabel>
                    <FormControl>
                      <Input placeholder={caT.formCurrentToolsPlaceholder} {...field} />
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
                    <FormLabel>{caT.formReferral}</FormLabel>
                    <FormControl>
                      <Input placeholder={caT.formReferralPlaceholder} {...field} />
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
                    {caT.formSending}
                  </>
                ) : (
                  caT.formSubmit
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </Section>
  );
}
