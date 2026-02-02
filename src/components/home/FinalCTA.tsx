"use client";
import { motion } from "framer-motion";
import { Mail, Zap, Star } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Meteors } from "@/components/ui/meteors";

export function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      {/* Meteors Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={15} />
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
      
      <div className="container relative z-10 mx-auto px-5 md:px-6 lg:px-8 max-w-4xl">
        {/* Hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl font-semibold text-hf-teal text-center mb-4"
        >
          Still Doing This Manually?
        </motion.p>
        
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6"
        >
          Let's Build Your Custom AI Solution
        </motion.h2>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Free 30-minute consultation. No pressure, no generic templates. 
          Just a custom plan for your specific business challenges.
        </motion.p>
        
        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-8"
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
              className="px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold text-white w-full"
            >
              Book Your Free Consultation →
            </ShimmerButton>
          </a>
        </motion.div>
        
        {/* Alternative Option */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            Already have a project in mind?
          </p>
          <a 
            href="mailto:hello@heyflou.com"
            className="inline-flex items-center gap-2 text-sm md:text-base text-hf-teal hover:underline transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email us: hello@heyflou.com
          </a>
        </motion.div>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-xl mx-auto p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 text-center mb-8"
        >
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-base md:text-lg italic text-foreground mb-2">
            "Best decision we made this year"
          </p>
          <p className="text-sm text-muted-foreground">
            — Healthcare Clinic Owner
          </p>
        </motion.div>
        
        {/* Urgency Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-400">
              Limited spots: We take on 3 custom projects per month
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
