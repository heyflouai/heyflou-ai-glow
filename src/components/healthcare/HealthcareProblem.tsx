import { motion } from 'framer-motion';
import { 
  CalendarX, 
  FileText, 
  MessageSquareWarning, 
  Clock,
  Phone,
  AlertTriangle
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';

export function HealthcareProblem() {
  const painPoints: FocusCard[] = [
    {
      title: "Appointment No-Shows",
      description: "Last-minute cancellations and no-shows disrupt your schedule, waste valuable time slots, and reduce revenue. Manual reminder calls are time-consuming and often ineffective.",
      icon: CalendarX,
    },
    {
      title: "Manual Intake & Paperwork",
      description: "Patients fill out the same information repeatedly. Paper forms create data entry work, errors, and storage challenges. Digital intake is fragmented across multiple systems.",
      icon: FileText,
    },
    {
      title: "Inconsistent Follow-Ups",
      description: "Post-session check-ins, appointment reminders, and wellness tips fall through the cracks when your team is busy. Patients feel disconnected between visits.",
      icon: MessageSquareWarning,
    },
    {
      title: "Scheduling Complexity",
      description: "Managing multiple practitioners, room availability, and patient preferences manually leads to double-bookings, conflicts, and frustrated patients trying to find appointment times.",
      icon: Clock,
    },
    {
      title: "Time-Consuming Patient Communication",
      description: "Answering the same questions repeatedly about hours, services, insurance, and policies. Phone tag with patients takes staff away from in-person care.",
      icon: Phone,
    },
    {
      title: "Administrative Burden",
      description: "Your team spends more time on phone calls, paperwork, and scheduling than on patient care. Administrative tasks prevent you from growing your practice.",
      icon: AlertTriangle,
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
          The Challenge Healthcare Practices Face
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          These challenges are costing your practice time and money every single day.
        </p>
      </motion.div>

      <FocusCards cards={painPoints} />
    </Section>
  );
}
