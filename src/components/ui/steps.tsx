"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface StepsProps {
  steps: Step[];
  className?: string;
}

export function Steps({ steps, className }: StepsProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Gradient connecting line */}
      <div className="absolute left-6 top-8 bottom-8 w-0.5 hidden md:block overflow-hidden">
        <motion.div 
          className="w-full h-full bg-gradient-to-b from-hf-teal via-primary to-hf-purple"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>
      
      <div className="space-y-10 md:space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex gap-6 group"
          >
            {/* Step number/icon with animations */}
            <motion.div 
              className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-hf-teal via-primary to-hf-purple text-primary-foreground font-bold text-lg shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 15,
                delay: index * 0.15 + 0.2 
              }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Animated glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
              >
                {step.icon || index + 1}
              </motion.span>
            </motion.div>
            
            {/* Content with staggered animation */}
            <div className="pt-1 flex-1">
              <motion.h3 
                className="text-xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.25, duration: 0.4 }}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.35, duration: 0.4 }}
              >
                {step.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
