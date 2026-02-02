import { motion } from 'framer-motion';
import { Phone, PenTool, Wrench, Rocket } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Timeline } from '@/components/ui/timeline';
import { useTranslation } from '@/i18n';

export function CustomProcess() {
  const t = useTranslation();
  const caT = t.customAutomation as Record<string, string>;

  const timelineData = [
    {
      title: caT.processStep1Title || "Discovery Call",
      content: (
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-hf-teal">{caT.processStep1Label}</span>
          </div>
          <p className="text-muted-foreground">
            {caT.processStep1Desc}
          </p>
        </div>
      ),
    },
    {
      title: caT.processStep2Title || "Custom Design",
      content: (
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-hf-purple">{caT.processStep2Label}</span>
          </div>
          <p className="text-muted-foreground">
            {caT.processStep2Desc}
          </p>
        </div>
      ),
    },
    {
      title: caT.processStep3Title || "Build & Test",
      content: (
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-hf-sky">{caT.processStep3Label}</span>
          </div>
          <p className="text-muted-foreground">
            {caT.processStep3Desc}
          </p>
        </div>
      ),
    },
    {
      title: caT.processStep4Title || "Deploy & Support",
      content: (
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg hf-gradient flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-hf-teal">{caT.processStep4Label}</span>
          </div>
          <p className="text-muted-foreground">
            {caT.processStep4Desc}
          </p>
        </div>
      ),
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
          {caT.processTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {caT.processSubtitle}
        </p>
      </motion.div>

      <Timeline data={timelineData} />
    </Section>
  );
}
