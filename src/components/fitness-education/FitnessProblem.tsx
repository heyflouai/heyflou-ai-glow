import { motion } from 'framer-motion';
import { 
  CalendarX, 
  RefreshCw, 
  UserMinus, 
  GraduationCap,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';
import { useTranslation } from '@/i18n';

export function FitnessProblem() {
  const t = useTranslation();
  const feT = t.fitnessEducation as Record<string, string>;

  const painPoints: FocusCard[] = [
    {
      title: feT.painBookingChaos || "Class Booking Chaos",
      description: feT.painBookingChaosDesc || "Managing class schedules, waitlists, and last-minute cancellations manually takes hours every week.",
      icon: CalendarX,
    },
    {
      title: feT.painMembershipRenewals || "Membership Renewals",
      description: feT.painMembershipRenewalsDesc || "Renewals falling through the cracks, missed payments, and members leaving without you even knowing.",
      icon: RefreshCw,
    },
    {
      title: feT.painTrialFollowUps || "Trial Class Follow-Ups",
      description: feT.painTrialFollowUpsDesc || "New leads try a class and never hear from you again. Conversions suffer without automated nurturing.",
      icon: UserMinus,
    },
    {
      title: feT.painOnboarding || "Complex Onboarding",
      description: feT.painOnboardingDesc || "New student and member onboarding involves too many manual steps, forms, and back-and-forth emails.",
      icon: GraduationCap,
    },
    {
      title: feT.painScheduleChanges || "Constant Schedule Changes",
      description: feT.painScheduleChangesDesc || "Instructor changes, room switches, and holiday schedules create communication headaches.",
      icon: Clock,
    },
    {
      title: feT.painAdminBurden || "Admin Burden",
      description: feT.painAdminBurdenDesc || "Your focus should be on training and teaching, not drowning in administrative work.",
      icon: AlertCircle,
    },
  ];

  return (
    <Section background="muted" padding="large">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          {feT.problemTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {feT.problemSubtitle || "These challenges are holding your business back from growth and excellence."}
        </p>
      </motion.div>

      <FocusCards cards={painPoints} />
    </Section>
  );
}
