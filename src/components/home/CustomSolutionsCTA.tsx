import { useState } from 'react';
import { Wand2, Sparkles, Loader2, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useTranslation } from '@/i18n';
import { supabase } from '@/integrations/supabase/client';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function CustomSolutionsCTA() {
  const t = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  
  // Form state
  const [industry, setIndustry] = useState('');
  const [automationType, setAutomationType] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setIndustry('');
    setAutomationType('');
    setDescription('');
    setEmail('');
    setPhone('');
    setFormStatus('idle');
  };

  const handleModalClose = (open: boolean) => {
    if (!open) {
      setTimeout(resetForm, 300);
    }
    setIsModalOpen(open);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !industry || !automationType) return;
    
    setFormStatus('submitting');
    
    try {
      const { error } = await supabase.from('contacts').insert({
        first_name: 'Custom Workflow',
        last_name: 'Request',
        email,
        company: phone || 'Not provided',
        industry,
        team_size: automationType,
        message: description || 'No description provided',
        source_page: 'home-custom-workflow',
        consent: true,
      });
      
      if (error) throw error;
      setFormStatus('success');
    } catch (err) {
      console.error('Form submission error:', err);
      setFormStatus('error');
    }
  };

  const industries = [
    { value: 'medical', label: t.customCta?.industryMedical || 'Medical' },
    { value: 'travel', label: t.customCta?.industryTravel || 'Travel Agencies' },
    { value: 'education', label: t.customCta?.industryEducation || 'Private Ed & Fitness' },
    { value: 'other', label: t.customCta?.industryOther || 'Other' },
  ];

  const automationTypes = [
    { value: 'lead-capture', label: t.customCta?.autoLeadCapture || 'Lead capture' },
    { value: 'follow-ups', label: t.customCta?.autoFollowUps || 'Follow-ups' },
    { value: 'scheduling', label: t.customCta?.autoScheduling || 'Scheduling' },
    { value: 'crm-updates', label: t.customCta?.autoCrmUpdates || 'CRM updates' },
    { value: 'email-marketing', label: t.customCta?.autoEmailMarketing || 'Email marketing' },
    { value: 'reporting', label: t.customCta?.autoReporting || 'Reporting' },
    { value: 'other', label: t.customCta?.autoOther || 'Other' },
  ];


  return (
    <div className="mt-12 md:mt-16">
      <div className="max-w-3xl mx-auto">
        {/* Container with subtle styling */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/5 dark:bg-white/[0.03] border border-border/20 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Primary CTA - Build Custom Workflow */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start flex-1">
              <GradientButton 
                variant="hero" 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="group w-full sm:w-auto"
              >
                <Wand2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                {t.customCta?.buildCustom || 'Build a Custom Workflow'}
              </GradientButton>
              <p className="text-xs text-muted-foreground mt-2 max-w-[280px]">
                {t.customCta?.buildCustomSub || "Tell us your process — we'll design an automation plan."}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-border/30" />
            <div className="sm:hidden w-full h-px bg-border/30" />

            {/* Secondary - More Coming Soon (text only) */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start flex-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-hf-teal" />
                <span className="text-base font-semibold text-foreground">
                  {t.customCta?.moreComingSoon || 'More Coming Soon'}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 max-w-[280px]">
                {t.customCta?.exploreComingSoonSub || 'More automations are launching soon.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Workflow Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-hf-teal" />
              {t.customCta?.modalTitle || 'Custom Workflow Builder'}
            </DialogTitle>
            <DialogDescription>
              {t.customCta?.modalSubtitle || "Answer 3 questions — we'll recommend the right automation."}
            </DialogDescription>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-8 text-center"
                aria-live="polite"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-foreground font-medium">
                  {t.customCta?.successMessage || "✓ Thanks! We'll reply within 24 hours."}
                </p>
              </motion.div>
            ) : formStatus === 'error' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-8 text-center"
                aria-live="polite"
              >
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-foreground font-medium mb-4">
                  {t.customCta?.errorMessage || 'Something went wrong — please try again.'}
                </p>
                <Button variant="outline" onClick={() => setFormStatus('idle')}>
                  {t.customCta?.tryAgain || 'Try Again'}
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Industry */}
                <div className="space-y-2">
                  <Label htmlFor="industry">{t.customCta?.labelIndustry || 'Industry'} *</Label>
                  <Select value={industry} onValueChange={setIndustry} required>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder={t.customCta?.selectIndustry || 'Select your industry'} />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind.value} value={ind.value}>
                          {ind.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Automation Type */}
                <div className="space-y-2">
                  <Label htmlFor="automation-type">{t.customCta?.labelAutomation || 'What do you want to automate?'} *</Label>
                  <Select value={automationType} onValueChange={setAutomationType} required>
                    <SelectTrigger id="automation-type">
                      <SelectValue placeholder={t.customCta?.selectAutomation || 'Select automation type'} />
                    </SelectTrigger>
                    <SelectContent>
                      {automationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">{t.customCta?.labelDescription || 'Describe your current process (1–2 sentences)'}</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t.customCta?.descriptionPlaceholder || 'e.g., We currently track leads in a spreadsheet and follow up manually...'}
                    rows={3}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">{t.customCta?.labelEmail || 'Email'} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                {/* Phone (optional) */}
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {t.customCta?.labelPhone || 'WhatsApp / Phone'}{' '}
                    <span className="text-muted-foreground text-xs">({t.forms?.optional || 'Optional'})</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555 123 4567"
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  className="w-full hf-gradient text-white"
                  disabled={formStatus === 'submitting' || !email || !industry || !automationType}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t.customCta?.sending || 'Sending…'}
                    </>
                  ) : (
                    t.customCta?.sendRequest || 'Send Request'
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}
