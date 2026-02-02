import { motion } from 'framer-motion';
import { Check, Lightbulb } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/i18n';

export function ConsultingSection() {
  const t = useTranslation();
  const servicesT = t.servicesPage as Record<string, string>;

  const consultingBenefits = [
    'consultingBenefit1',
    'consultingBenefit2',
    'consultingBenefit3',
    'consultingBenefit4',
    'consultingBenefit5',
    'consultingBenefit6',
  ];

  return (
    <Section background="muted" id="consulting">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-border/50 bg-card overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl hf-gradient flex items-center justify-center shrink-0">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      💼 {servicesT.consultingBadge}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-3">
                      {servicesT.consultingTitle}
                    </h2>
                    <p className="text-muted-foreground">
                      {servicesT.consultingDesc}
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {consultingBenefits.map((key, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {servicesT[key]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <GradientButton variant="hero" size="lg" asChild>
                      <a href="mailto:hello@heyflou.com">
                        {servicesT.consultingCta}
                      </a>
                    </GradientButton>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
