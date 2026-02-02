import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Target, 
  CalendarCheck, 
  Settings,
  Database,
  Network
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';

export function CustomApproach() {
  const capabilities: FocusCard[] = [
    {
      title: "Customer Communication Automation",
      description: "Automate inquiries, support tickets, FAQs, and follow-ups across email, SMS, WhatsApp, and chat. Provide 24/7 responses while your team focuses on complex issues.",
      icon: MessageSquare,
    },
    {
      title: "Intelligent Lead Management",
      description: "Capture, qualify, route, and nurture leads automatically. Score prospects, trigger personalized sequences, and ensure no opportunity falls through the cracks.",
      icon: Target,
    },
    {
      title: "Smart Scheduling & Appointments",
      description: "Automated booking, reminders, rescheduling, and cancellation management. Reduce no-shows, optimize calendar utilization, and eliminate scheduling back-and-forth.",
      icon: CalendarCheck,
    },
    {
      title: "Internal Process Automation",
      description: "Streamline onboarding, approvals, data entry, reporting, and team coordination. Eliminate repetitive tasks and reduce human error in your operations.",
      icon: Settings,
    },
    {
      title: "Data Collection & Processing",
      description: "Automatically collect, validate, transform, and route data between systems. Build custom integrations and workflows that match your exact business logic.",
      icon: Database,
    },
    {
      title: "Seamless Platform Integration",
      description: "Connect your CRM, calendar, communication tools, payment systems, and databases. Create unified workflows across all your business tools.",
      icon: Network,
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
          Your Business, Your Automation
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Every business is unique. That's why we build solutions that fit you, not the other way around.
        </p>
      </motion.div>

      <FocusCards cards={capabilities} />
    </Section>
  );
}
