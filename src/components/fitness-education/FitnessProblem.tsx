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

export function FitnessProblem() {
  const painPoints: FocusCard[] = [
    {
      title: "Class Booking Chaos",
      description: "Managing class capacities, waitlists, and last-minute bookings manually leads to overbooking, confusion, and frustrated clients unable to secure their spot.",
      icon: CalendarX,
    },
    {
      title: "Missed Renewal Opportunities",
      description: "Manual renewal reminders fall through the cracks. Members lapse without warning, and you lose revenue. Chasing down expired memberships wastes valuable time.",
      icon: RefreshCw,
    },
    {
      title: "Trial-to-Member Conversion Gap",
      description: "Trial clients attend once and disappear. Without systematic follow-up, you lose potential long-term members. Manual outreach is inconsistent and time-consuming.",
      icon: UserMinus,
    },
    {
      title: "Inconsistent Client Onboarding",
      description: "New members need waivers, orientation, goal-setting, and program recommendations. Manual onboarding leads to incomplete information and slower time-to-value.",
      icon: ClipboardList,
    },
    {
      title: "Last-Minute Schedule Changes",
      description: "Class cancellations, instructor substitutions, and time changes require manual notifications. Clients show up to cancelled classes or miss important updates.",
      icon: CalendarClock,
    },
    {
      title: "Payment & Billing Headaches",
      description: "Tracking membership payments, failed transactions, and payment method updates manually creates accounting nightmares and awkward conversations with clients.",
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
          The Challenge Fitness & Education Businesses Face
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          These challenges are holding your business back from growth and excellence.
        </p>
      </motion.div>

      <FocusCards cards={painPoints} />
    </Section>
  );
}
