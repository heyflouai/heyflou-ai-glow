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
import { useTranslation } from '@/i18n';

export function HealthcareProblem() {
  const t = useTranslation();

  const painPoints: FocusCard[] = [
    {
      title: t.healthcare.painNoShows,
      description: t.healthcare.painNoShowsDesc,
      icon: CalendarX,
    },
    {
      title: t.healthcare.painIntake,
      description: t.healthcare.painIntakeDesc,
      icon: FileText,
    },
    {
      title: t.healthcare.painFollowUps,
      description: t.healthcare.painFollowUpsDesc,
      icon: MessageSquareWarning,
    },
    {
      title: t.healthcare.painScheduling,
      description: t.healthcare.painSchedulingDesc,
      icon: Clock,
    },
    {
      title: t.healthcare.painCommunication,
      description: t.healthcare.painCommunicationDesc,
      icon: Phone,
    },
    {
      title: t.healthcare.painAdmin,
      description: t.healthcare.painAdminDesc,
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
          {t.healthcare.problemTitle}
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          {t.healthcare.problemSubtitle}
        </p>
      </motion.div>

      <FocusCards cards={painPoints} />
    </Section>
  );
}