import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, Sparkles } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/i18n';
import { supabase } from '@/integrations/supabase/client';
import { sendConfirmationEmail } from '@/lib/send-confirmation-email';

export function TravelEarlyAccess() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getTrackingData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utmSource: urlParams.get('utm_source') || null,
      utmMedium: urlParams.get('utm_medium') || null,
      utmCampaign: urlParams.get('utm_campaign') || null,
      referrer: document.referrer || null,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const agency = formData.get('agency') as string;
      const challenge = formData.get('challenge') as string;
      
      const trackingData = getTrackingData();
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const { error } = await supabase
        .from('contacts')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: email,
          company: agency || 'Not provided',
          industry: 'Travel Agency',
          team_size: '1-10',
          message: challenge ? `Challenge: ${challenge}` : 'Early access waitlist signup',
          source_page: 'travel-agencies',
          utm_source: trackingData.utmSource,
          utm_medium: trackingData.utmMedium,
          utm_campaign: trackingData.utmCampaign,
          referrer: trackingData.referrer,
          consent: true,
        });

      if (error) throw error;

      sendConfirmationEmail({
        name,
        email,
        formSource: 'travel-agencies',
        message: challenge || '',
        fields: {
          Agency: agency || '',
          Challenge: challenge || '',
        },
      });

      setIsSuccess(true);
      toast({
        title: travel.formSuccessTitle,
        description: travel.formSuccessMessage,
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
      <Section background="muted" id="early-access" padding="default">
        <div className="max-w-xl mx-auto">
          {/* Gradient border container */}
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-hf-teal via-hf-purple to-hf-sky">
            <Card className="border-0 bg-card rounded-2xl">
              <CardContent className="p-8 md:p-12 text-center">
                {/* Celebratory animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="relative w-20 h-20 mx-auto mb-6"
                >
                  {/* Animated sparkles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: Math.cos((i / 6) * Math.PI * 2) * 40,
                        y: Math.sin((i / 6) * Math.PI * 2) * 40,
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-primary" />
                    </motion.div>
                  ))}
                  
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-hf-teal via-primary to-hf-purple flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                    {travel.formSuccessTitle}
                  </h3>
                  <p className="text-muted-foreground">
                    {travel.formSuccessMessage}
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section background="muted" id="early-access" padding="default">
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
          {/* Gradient border container */}
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-hf-teal via-hf-purple to-hf-sky animate-gradient-x">
            <Card className="border-0 bg-card rounded-2xl">
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
                      className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1"
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
                      className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1"
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
                      className="h-11 md:h-10 transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1"
                    />
                  </div>

                  {/* Biggest Challenge */}
                  <div className="space-y-2">
                    <Label htmlFor="challenge">{travel.formChallenge}</Label>
                    <Textarea
                      id="challenge"
                      name="challenge"
                      placeholder={travel.formChallengePlaceholder}
                      className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <ShimmerButton
                      type="submit"
                      className="w-full h-12 text-base font-semibold"
                      shimmerColor="hsl(var(--hf-teal))"
                      shimmerSize="0.1em"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          {travel.formSending}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {travel.formSubmit}
                        </>
                      )}
                    </ShimmerButton>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
