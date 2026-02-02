import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { GradientButton } from '@/components/ui/gradient-button';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/i18n';

export function TravelEarlyAccess() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: travel.formSuccessTitle,
      description: travel.formSuccessMessage,
    });
  };

  if (isSuccess) {
    return (
      <Section background="muted" id="early-access">
        <div className="max-w-xl mx-auto">
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
                {travel.formSuccessTitle}
              </h3>
              <p className="text-muted-foreground">
                {travel.formSuccessMessage}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    );
  }

  return (
    <Section background="muted" id="early-access">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
            {travel.formTitle}
          </h3>
          <p className="text-muted-foreground">
            {travel.formSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border border-border/50 bg-card">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">{travel.formName} *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={travel.formNamePlaceholder}
                    required
                    minLength={2}
                    className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-1"
                    aria-required="true"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">{travel.formEmail} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={travel.formEmailPlaceholder}
                    required
                    className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-1"
                    aria-required="true"
                  />
                </div>

                {/* Agency Name */}
                <div className="space-y-2">
                  <Label htmlFor="agency">{travel.formAgency}</Label>
                  <Input
                    id="agency"
                    name="agency"
                    placeholder={travel.formAgencyPlaceholder}
                    className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-1"
                  />
                </div>

                {/* Biggest Challenge */}
                <div className="space-y-2">
                  <Label htmlFor="challenge">{travel.formChallenge}</Label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    placeholder={travel.formChallengePlaceholder}
                    className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-1"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <GradientButton
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full min-h-[44px]"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? travel.formSending : travel.formSubmit}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {travel.formSending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {travel.formSubmit}
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
