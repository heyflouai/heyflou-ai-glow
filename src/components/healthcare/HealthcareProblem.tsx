import { motion } from 'framer-motion';
import { 
  CalendarX, 
  FileText, 
  PhoneOff, 
  Clock,
  UserX,
  AlertCircle
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';
import { useTranslation } from '@/i18n';

export function HealthcareProblem() {
  const t = useTranslation();
  const hcT = t.healthcare as Record<string, string>;

  const painPoints: FocusCard[] = [
    {
      title: hcT.painNoShows || "Appointment No-Shows",
      description: hcT.painNoShowsDesc || "Hours lost every week to patients who don't show up, with no automated reminders or easy rescheduling options.",
      icon: CalendarX,
    },
    {
      title: hcT.painIntakeForms || "Manual Intake Forms",
      description: hcT.painIntakeFormsDesc || "Paper forms and manual data entry eat up valuable time that should be spent with patients.",
      icon: FileText,
    },
    {
      title: hcT.painFollowUps || "Endless Follow-Ups",
      description: hcT.painFollowUpsDesc || "Chasing patients for post-appointment tasks, prescription refills, and check-ins.",
      icon: PhoneOff,
    },
    {
      title: hcT.painScheduling || "Scheduling Chaos",
      description: hcT.painSchedulingDesc || "Double bookings, availability conflicts, and constant back-and-forth to find suitable times.",
      icon: Clock,
    },
    {
      title: hcT.painPatientComms || "Patient Communication",
      description: hcT.painPatientCommsDesc || "Answering the same questions repeatedly, managing inquiries across multiple channels.",
      icon: UserX,
    },
    {
      title: hcT.painAdminOverload || "Admin Overload",
      description: hcT.painAdminOverloadDesc || "Your time should be spent healing patients, not drowning in paperwork and phone calls.",
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
          {hcT.problemTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {hcT.problemSubtitle || "These challenges are costing your practice time and money every single day."}
        </p>
      </motion.div>

      <FocusCards cards={painPoints} />
    </Section>
  );
}
