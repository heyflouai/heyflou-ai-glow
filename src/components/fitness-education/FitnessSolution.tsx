import { motion } from 'framer-motion';
import { 
  Calendar, 
  RefreshCw, 
  UserPlus, 
  GraduationCap, 
  CreditCard, 
  Clock 
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { useTranslation } from '@/i18n';

export function FitnessSolution() {
  const t = useTranslation();
  const feT = t.fitnessEducation as Record<string, string>;

  const solutions = [
    {
      icon: <Calendar className="h-6 w-6 text-hf-teal" />,
      titleKey: 'solutionBookingTitle',
      descKey: 'solutionBookingDesc',
      className: "md:col-span-2",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-hf-purple" />,
      titleKey: 'solutionRenewalTitle',
      descKey: 'solutionRenewalDesc',
      className: "md:col-span-1",
    },
    {
      icon: <UserPlus className="h-6 w-6 text-hf-sky" />,
      titleKey: 'solutionTrialTitle',
      descKey: 'solutionTrialDesc',
      className: "md:col-span-1",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-hf-teal" />,
      titleKey: 'solutionOnboardingTitle',
      descKey: 'solutionOnboardingDesc',
      className: "md:col-span-2",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-hf-purple" />,
      titleKey: 'solutionPaymentTitle',
      descKey: 'solutionPaymentDesc',
      className: "md:col-span-1",
    },
    {
      icon: <Clock className="h-6 w-6 text-hf-sky" />,
      titleKey: 'solutionScheduleTitle',
      descKey: 'solutionScheduleDesc',
      className: "md:col-span-2",
    },
  ];

  return (
    <Section background="default" padding="large">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          {feT.solutionTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {feT.solutionIntro}
        </p>
      </motion.div>

      <BentoGrid className="mb-12">
        {solutions.map((solution, index) => (
          <BentoGridItem
            key={index}
            title={feT[solution.titleKey]}
            description={feT[solution.descKey]}
            icon={solution.icon}
            className={solution.className}
            header={
              <div className="flex items-center justify-center h-24 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shadow-sm">
                  {solution.icon}
                </div>
              </div>
            }
          />
        ))}
      </BentoGrid>

      {/* Demo Video Placeholder */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="aspect-video rounded-xl bg-muted border border-border/50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full hf-gradient flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-muted-foreground font-medium">{feT.demoVideoPlaceholder}</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
