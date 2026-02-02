import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { GradientButton } from '@/components/ui/gradient-button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslation } from '@/i18n';

export function ConsultingContactForm() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <Section background="muted" id="contact-form">
        <div className="max-w-2xl mx-auto">
          <Card className="border border-border/50 bg-card">
            <CardContent className="p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                {consulting.formSuccessTitle}
              </h3>
              <p className="text-muted-foreground">
                {consulting.formSuccessMessage}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    );
  }

  return (
    <Section background="muted" id="contact-form">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
            {consulting.formTitle}
          </h3>
          <p className="text-muted-foreground">
            {consulting.formSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border border-border/50 bg-card">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{consulting.formName} *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={consulting.formNamePlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{consulting.formEmail} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={consulting.formEmailPlaceholder}
                      required
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{consulting.formPhone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={consulting.formPhonePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{consulting.formCompany} *</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={consulting.formCompanyPlaceholder}
                      required
                    />
                  </div>
                </div>

                {/* Role & Industry Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">{consulting.formRole}</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder={consulting.formRolePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">{consulting.formIndustry}</Label>
                    <Select name="industry">
                      <SelectTrigger>
                        <SelectValue placeholder={consulting.formIndustryPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">{consulting.industryHealthcare}</SelectItem>
                        <SelectItem value="finance">{consulting.industryFinance}</SelectItem>
                        <SelectItem value="retail">{consulting.industryRetail}</SelectItem>
                        <SelectItem value="technology">{consulting.industryTechnology}</SelectItem>
                        <SelectItem value="manufacturing">{consulting.industryManufacturing}</SelectItem>
                        <SelectItem value="professional-services">{consulting.industryProfessionalServices}</SelectItem>
                        <SelectItem value="other">{consulting.industryOther}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* AI Goal */}
                <div className="space-y-2">
                  <Label htmlFor="goal">{consulting.formGoal}</Label>
                  <Textarea
                    id="goal"
                    name="goal"
                    placeholder={consulting.formGoalPlaceholder}
                    className="min-h-[100px]"
                  />
                </div>

                {/* Timeline & Referral Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timeline">{consulting.formTimeline}</Label>
                    <Select name="timeline">
                      <SelectTrigger>
                        <SelectValue placeholder={consulting.formTimelinePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exploring">{consulting.timelineExploring}</SelectItem>
                        <SelectItem value="1-3months">{consulting.timeline1to3}</SelectItem>
                        <SelectItem value="3-6months">{consulting.timeline3to6}</SelectItem>
                        <SelectItem value="6plus">{consulting.timeline6plus}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="referral">{consulting.formReferral}</Label>
                    <Input
                      id="referral"
                      name="referral"
                      placeholder={consulting.formReferralPlaceholder}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <GradientButton
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      consulting.formSending
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {consulting.formSubmit}
                      </>
                    )}
                  </GradientButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
