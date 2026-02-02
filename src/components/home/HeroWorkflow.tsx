"use client";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { motion } from "framer-motion";
import { FileText, Bot, Database, Send } from "lucide-react";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; label?: string }>(
  ({ className, children, label }, ref) => (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-full border-2 bg-card p-3 md:p-4 shadow-lg",
          "border-border dark:border-hf-teal/30",
          "dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-slate-900/80",
          "dark:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-xs md:text-sm text-muted-foreground font-medium text-center max-w-[80px] md:max-w-[100px]">
          {label}
        </span>
      )}
    </div>
  )
);
Circle.displayName = "Circle";

export function HeroWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-3xl mx-auto mt-12 md:mt-16"
    >
      {/* Labels row */}
      <div className="flex justify-between items-center mb-4 px-2">
        <span className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Manual Process
        </span>
        <span className="text-xs md:text-sm font-semibold text-hf-teal uppercase tracking-wide">
          AI Automation
        </span>
        <span className="text-xs md:text-sm font-semibold text-hf-purple uppercase tracking-wide">
          Results
        </span>
      </div>
      
      <div
        ref={containerRef}
        className="relative flex w-full items-center justify-between p-6 md:p-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
      >
        <Circle ref={step1Ref} label="Lead Capture">
          <FileText className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
        </Circle>
        
        <Circle ref={step2Ref} label="Qualification" className="border-hf-teal/50 dark:border-hf-teal/50">
          <Bot className="w-5 h-5 md:w-6 md:h-6 text-hf-teal" />
        </Circle>
        
        <Circle ref={step3Ref} label="CRM Sync" className="border-hf-purple/50 dark:border-hf-purple/50">
          <Database className="w-5 h-5 md:w-6 md:h-6 text-hf-purple" />
        </Circle>
        
        <Circle ref={step4Ref} label="Follow-up" className="border-hf-purple/50 dark:border-hf-purple/50">
          <Send className="w-5 h-5 md:w-6 md:h-6 text-hf-purple" />
        </Circle>

        {/* Animated beams connecting nodes */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={step1Ref}
          toRef={step2Ref}
          gradientStartColor="hsl(var(--muted-foreground))"
          gradientStopColor="hsl(var(--hf-teal))"
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={step2Ref}
          toRef={step3Ref}
          gradientStartColor="hsl(var(--hf-teal))"
          gradientStopColor="hsl(var(--hf-purple))"
          duration={3}
          delay={0.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={step3Ref}
          toRef={step4Ref}
          gradientStartColor="hsl(var(--hf-purple))"
          gradientStopColor="hsl(var(--hf-purple))"
          duration={3}
          delay={1}
        />
      </div>
    </motion.div>
  );
}
