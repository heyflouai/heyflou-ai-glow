"use client";
import { motion } from "framer-motion";
import { Mail, Zap } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Meteors } from "@/components/ui/meteors";
import { useTranslation } from "@/i18n";

export function FinalCTA() {
  const t = useTranslation();
  const hp = t.homepage as Record<string, string>;

  return (
    <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      {/* Meteors Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={10} />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-1/4 top-1/4 w-[40vw] h-[40vh] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--hf-teal) / 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div 
          className="absolute right-1/4 bottom-1/4 w-[30vw] h-[30vh] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--hf-purple) / 0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-5 md:px-6 max-w-3xl">
        {/* Hook */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-base md:text-lg lg:text-xl font-semibold text-hf-teal text-center mb-3"
        >
          {hp.finalCtaHook}
        </motion.p>
        
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center mb-4"
        >
          {hp.finalCtaTitle}
        </motion.h2>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-sm md:text-base text-muted-foreground text-center max-w-xl mx-auto mb-6 leading-relaxed"
        >
          {hp.finalCtaDesc}
        </motion.p>
        
        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <a 
            href="https://calendly.com/heyflou-ai/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <ShimmerButton
              shimmerColor="hsl(var(--hf-teal))"
              shimmerDuration="2.5s"
              background="linear-gradient(135deg, hsl(var(--hf-teal)), hsl(var(--hf-purple)))"
              className="px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-semibold text-white w-full min-h-[48px]"
            >
              {hp.finalCtaPrimary}
            </ShimmerButton>
          </a>
        </motion.div>
        
        {/* Alternative Option */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-center mb-6"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            {hp.finalCtaAlt}
          </p>
          <a 
            href="mailto:hello@heyflou.com"
            className="inline-flex items-center gap-2 text-sm md:text-base text-hf-teal hover:underline transition-colors"
          >
            <Mail className="w-4 h-4" />
            {hp.finalCtaEmail}
          </a>
        </motion.div>
        
        {/* Urgency Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-xs md:text-sm font-medium text-orange-400">
              {hp.finalCtaUrgency}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
