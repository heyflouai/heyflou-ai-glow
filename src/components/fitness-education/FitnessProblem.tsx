import { motion } from 'framer-motion';
import { 
  CalendarX, 
  RefreshCw, 
  UserMinus, 
  ClipboardList,
  CalendarClock,
  CreditCard
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';
import { useTranslation } from '@/i18n';

export function FitnessProblem() {
  const t = useTranslation();

  const painPoints: FocusCard[] = [
    {
      title: t.fitnessEducation.painBooking,
      description: t.fitnessEducation.painBookingDesc,
      icon: CalendarX,
    },
    {
      title: t.fitnessEducation.painRenewal,
      description: t.fitnessEducation.painRenewalDesc,
      icon: RefreshCw,
    },
    {
      title: t.fitnessEducation.painTrial,
      description: t.fitnessEducation.painTrialDesc,
      icon: UserMinus,
    },
    {
      title: t.fitnessEducation.painOnboarding,
      description: t.fitnessEducation.painOnboardingDesc,
      icon: ClipboardList,
    },
    {
      title: t.fitnessEducation.painScheduleChanges,
      description: t.fitnessEducation.painScheduleChangesDesc,
      icon: CalendarClock,
    },
    {
      title: t.fitnessEducation.painPayment,
      description: t.fitnessEducation.painPaymentDesc,
      icon: CreditCard,
    },
  ];

  return (
    <Section background="muted" padding="default">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h2 text-foreground mb-4">
          {t.fitnessEducation.problemTitle}
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          {t.fitnessEducation.problemSubtitle}
        </p>
      </motion.div>

      <FocusCards cards={painPoints} />
    </Section>
  );
}