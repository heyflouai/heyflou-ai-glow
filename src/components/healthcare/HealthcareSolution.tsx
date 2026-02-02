import { motion } from 'framer-motion';
import { 
  Calendar, 
  FileText, 
  Bell, 
  MessageSquare, 
  XCircle, 
  Clock 
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { useTranslation } from '@/i18n';

export function HealthcareSolution() {
  const t = useTranslation();
  const hcT = t.healthcare as Record<string, string>;

  const solutions = [
    {
      icon: <Calendar className="h-6 w-6 text-hf-teal" />,
      titleKey: 'solutionSchedulerTitle',
      descKey: 'solutionSchedulerDesc',
      className: "md:col-span-2",
    },
    {
      icon: <FileText className="h-6 w-6 text-hf-purple" />,
      titleKey: 'solutionIntakeTitle',
      descKey: 'solutionIntakeDesc',
      className: "md:col-span-1",
    },
    {
      icon: <Bell className="h-6 w-6 text-hf-sky" />,
      titleKey: 'solutionFollowupTitle',
      descKey: 'solutionFollowupDesc',
      className: "md:col-span-1",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-hf-teal" />,
      titleKey: 'solutionChatbotTitle',
      descKey: 'solutionChatbotDesc',
      className: "md:col-span-2",
    },
    {
      icon: <XCircle className="h-6 w-6 text-destructive" />,
      titleKey: 'solutionCancellationTitle',
      descKey: 'solutionCancellationDesc',
      className: "md:col-span-1",
    },
    {
      icon: <Clock className="h-6 w-6 text-hf-purple" />,
      titleKey: 'solutionRemindersTitle',
      descKey: 'solutionRemindersDesc',
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
          {hcT.solutionTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {hcT.solutionIntro}
        </p>
      </motion.div>

      <BentoGrid>
        {solutions.map((solution, index) => (
          <BentoGridItem
            key={index}
            index={index}
            title={hcT[solution.titleKey]}
            description={hcT[solution.descKey]}
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
    </Section>
  );
}
