"use client";
import { motion } from "framer-motion";
import { Phone, Palette, Wrench, Rocket, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  week: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const steps: TimelineStep[] = [
  {
    week: "Week 1",
    title: "Discovery Call",
    description: "We understand your business, pain points, current processes, and automation goals. No sales pitch—just listening.",
    deliverables: [
      "Recorded consultation",
      "Problem analysis document",
      "Initial feasibility assessment"
    ],
    icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    week: "Week 2",
    title: "Custom Design",
    description: "We map your workflows, design the automation architecture, and create a detailed implementation plan tailored to your business.",
    deliverables: [
      "Visual workflow diagrams",
      "Technical specification document",
      "Transparent cost breakdown",
      "Timeline & milestones"
    ],
    icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    week: "Week 3",
    title: "Build & Test",
    description: "We develop your automation, integrate with your existing tools, and rigorously test every workflow with real scenarios.",
    deliverables: [
      "Working automation prototype",
      "Integration with your systems",
      "Test results documentation",
      "Training materials prep"
    ],
    icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    week: "Week 4+",
    title: "Deploy & Support",
    description: "We launch your automation with full team training, documentation, and 24/7 monitoring. You start seeing results immediately.",
    deliverables: [
      "Live automation deployment",
      "Team training session",
      "Complete documentation",
      "24/7 monitoring & support"
    ],
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />
  }
];

function TimelineCard({ step, index }: { step: TimelineStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline connector line - visible on desktop */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-hf-teal/50 to-hf-purple/50" />
      )}
      
      {/* Mobile vertical connector */}
      {index < steps.length - 1 && (
        <div className="lg:hidden absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-hf-teal/50 to-hf-purple/50" />
      )}
      
      <div className={cn(
        "relative p-6 md:p-8 rounded-2xl",
        "bg-card/80 backdrop-blur-sm",
        "border border-border/50 hover:border-hf-teal/30",
        "transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]",
        "group"
      )}>
        {/* Week Badge + Icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl hf-gradient flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
            {step.icon}
          </div>
          <div>
            <span className="text-xs md:text-sm font-semibold text-hf-teal uppercase tracking-wide">
              {step.week}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              {step.title}
            </h3>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
          {step.description}
        </p>
        
        {/* Deliverables */}
        <div>
          <span className="text-xs md:text-sm font-semibold text-hf-teal uppercase tracking-wide mb-3 block">
            What You Get:
          </span>
          <ul className="space-y-2">
            {step.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-hf-teal shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function ValuePropositionTimeline() {
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
            From Manual Chaos to AI-Powered Efficiency
            <span className="block text-hf-teal mt-1">in 4 Weeks</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Clear process. No complexity. Real results.
          </motion.p>
        </div>
        
        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <TimelineCard key={index} step={step} index={index} />
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
            Ready to Start Your Project?
          </p>
          <a
            href="https://calendly.com/heyflou-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-foreground hf-gradient rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            Book Discovery Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
