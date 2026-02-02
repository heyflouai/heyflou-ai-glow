"use client";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Bell, CheckCircle, Building2 } from "lucide-react";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; label?: string; isCenter?: boolean }>(
  ({ className, children, label, isCenter }, ref) => (
    <div className="flex flex-col items-center gap-1.5 md:gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-full border-2 shadow-lg",
          isCenter 
            ? "p-4 md:p-5 bg-gradient-to-br from-hf-teal to-hf-purple border-hf-teal/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]" 
            : "p-2.5 md:p-3 bg-card border-border dark:border-hf-teal/30 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-slate-900/80 dark:shadow-[0_0_15px_rgba(6,182,212,0.1)]",
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className={cn(
          "text-[10px] md:text-xs font-medium text-center leading-tight",
          isCenter ? "text-foreground" : "text-muted-foreground",
          "max-w-[70px] md:max-w-[90px]"
        )}>
          {label}
        </span>
      )}
    </div>
  )
);
Circle.displayName = "Circle";

export function HeroWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const appointmentsRef = useRef<HTMLDivElement>(null);
  const remindersRef = useRef<HTMLDivElement>(null);
  const confirmationsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-lg mx-auto mt-10 md:mt-14"
    >
      <div
        ref={containerRef}
        className="relative flex flex-col items-center p-6 md:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30"
      >
        {/* Top row - Chatbot and Appointments */}
        <div className="flex w-full justify-between items-start mb-6 md:mb-8 px-2 md:px-4">
          <Circle ref={chatbotRef} label="24/7 AI Assistant">
            <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-hf-teal" />
          </Circle>
          
          <Circle ref={appointmentsRef} label="Smart Scheduling">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-hf-teal" />
          </Circle>
        </div>
        
        {/* Center - Your Business */}
        <div className="mb-6 md:mb-8">
          <Circle ref={centerRef} label="Your Business" isCenter>
            <Building2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </Circle>
        </div>
        
        {/* Bottom row - Reminders and Confirmations */}
        <div className="flex w-full justify-between items-end px-2 md:px-4">
          <Circle ref={remindersRef} label="Auto Reminders">
            <Bell className="w-4 h-4 md:w-5 md:h-5 text-hf-teal" />
          </Circle>
          
          <Circle ref={confirmationsRef} label="Instant Confirmations">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-hf-teal" />
          </Circle>
        </div>

        {/* Animated beams from center to each node */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={chatbotRef}
          curvature={-30}
          gradientStartColor="hsl(var(--hf-teal))"
          gradientStopColor="hsl(var(--hf-purple))"
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={appointmentsRef}
          curvature={30}
          gradientStartColor="hsl(var(--hf-teal))"
          gradientStopColor="hsl(var(--hf-purple))"
          duration={3}
          delay={0.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={remindersRef}
          curvature={30}
          gradientStartColor="hsl(var(--hf-teal))"
          gradientStopColor="hsl(var(--hf-purple))"
          duration={3}
          delay={1}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={confirmationsRef}
          curvature={-30}
          gradientStartColor="hsl(var(--hf-teal))"
          gradientStopColor="hsl(var(--hf-purple))"
          duration={3}
          delay={1.5}
        />
      </div>
    </motion.div>
  );
}
