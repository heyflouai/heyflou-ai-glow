"use client";
import { motion } from "framer-motion";
import { Phone, Palette, Wrench, Rocket, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n";

interface TimelineStep {
  weekKey: string;
  titleKey: string;
  descKey: string;
  labelKey: string;
  itemKeys: string[];
  icon: React.ReactNode;
}

const stepData: TimelineStep[] = [
  {
    weekKey: "timelineWeek1",
    titleKey: "timelineStep1Title",
    descKey: "timelineStep1Desc",
    labelKey: "timelineStep1Label",
    itemKeys: ["timelineStep1Item1", "timelineStep1Item2", "timelineStep1Item3"],
    icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    weekKey: "timelineWeek2",
    titleKey: "timelineStep2Title",
    descKey: "timelineStep2Desc",
    labelKey: "timelineStep2Label",
    itemKeys: ["timelineStep2Item1", "timelineStep2Item2", "timelineStep2Item3", "timelineStep2Item4"],
    icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    weekKey: "timelineWeek3",
    titleKey: "timelineStep3Title",
    descKey: "timelineStep3Desc",
    labelKey: "timelineStep3Label",
    itemKeys: ["timelineStep3Item1", "timelineStep3Item2", "timelineStep3Item3", "timelineStep3Item4"],
    icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    weekKey: "timelineWeek4",
    titleKey: "timelineStep4Title",
    descKey: "timelineStep4Desc",
    labelKey: "timelineStep4Label",
    itemKeys: ["timelineStep4Item1", "timelineStep4Item2", "timelineStep4Item3", "timelineStep4Item4"],
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />
  }
];

function TimelineCard({ step, index, translations }: { step: TimelineStep; index: number; translations: Record<string, string> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative h-full"
    >
      {/* Timeline connector line - visible on desktop */}
      {index < stepData.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-hf-teal/50 to-hf-purple/50" />
      )}
      
      {/* Mobile vertical connector */}
      {index < stepData.length - 1 && (
        <div className="lg:hidden absolute left-6 top-full w-0.5 h-8 bg-gradient-to-b from-hf-teal/50 to-hf-purple/50" />
      )}
      
      <div className={cn(
        "relative h-full flex flex-col p-5 md:p-6 rounded-2xl",
        "bg-card/80 backdrop-blur-sm",
        "border border-border/50 hover:border-hf-teal/30",
        "transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]",
        "group"
      )}>
        {/* Week Badge + Icon */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl hf-gradient flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
            {step.icon}
          </div>
          <div className="min-w-0">
            <span className="text-[10px] md:text-xs font-semibold text-hf-teal uppercase tracking-wide block">
              {translations[step.weekKey]}
            </span>
            <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">
              {translations[step.titleKey]}
            </h3>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
          {translations[step.descKey]}
        </p>
        
        {/* Deliverables */}
        <div className="mt-auto">
          <span className="text-[10px] md:text-xs font-semibold text-hf-teal uppercase tracking-wide mb-2 block">
            {translations[step.labelKey]}
          </span>
          <ul className="space-y-1.5">
            {step.itemKeys.map((key, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs md:text-sm text-foreground/80">
                <Check className="w-3.5 h-3.5 text-hf-teal shrink-0 mt-0.5" />
                <span className="leading-tight">{translations[key]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function ValuePropositionTimeline() {
  const t = useTranslation();
  const hp = t.homepage as Record<string, string>;

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            {hp.timelineTitle}
            <span className="block text-hf-teal mt-1">{hp.timelineHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
          >
            {hp.timelineSubtitle}
          </motion.p>
        </div>
        
        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {stepData.map((step, index) => (
            <TimelineCard key={index} step={step} index={index} translations={hp} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
            {hp.timelineReadyCta}
          </p>
          <a
            href="https://calendly.com/heyflou-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-foreground hf-gradient rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            {hp.timelineBookCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
