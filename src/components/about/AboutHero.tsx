import logoNew from '@/assets/heyflou-logo-new.png';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { motion } from 'framer-motion';

export function AboutHero() {
  const t = useTranslation();
  
  return (
    <section className="relative py-20 md:py-28 text-center overflow-hidden bg-background transition-colors duration-300">
      {/* Animated gradient background - Light Mode */}
      <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, hsl(var(--hf-purple)/0.08) 0%, hsl(var(--hf-sky)/0.05) 50%, transparent 80%)",
            filter: "blur(60px)",
            animationDuration: '6s',
          }}
        />
        <div 
          className="absolute top-20 left-1/3 w-[500px] h-[400px] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, hsl(var(--hf-teal)/0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            animationDuration: '8s',
            animationDelay: '2s',
          }}
        />
      </div>
      
      {/* Dark mode animated gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, hsl(var(--hf-purple)/0.18) 0%, hsl(var(--hf-sky)/0.10) 40%, transparent 70%)",
            filter: "blur(80px)",
            animationDuration: '6s',
          }}
        />
        <div 
          className="absolute top-24 right-1/3 w-[600px] h-[500px] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, hsl(var(--hf-teal)/0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
            animationDuration: '8s',
            animationDelay: '2s',
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H1 - matching homepage typography */}
        <motion.h1 
          className="text-h1 font-bold font-display text-foreground mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.about.heroTitle}
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          className="text-subtitle-lg text-muted-foreground max-w-[700px] mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {t.about.heroSubtitle}
        </motion.p>
        
        {/* Logo with pulse animation */}
        <motion.div 
          className="flex justify-center my-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.img 
            src={logoNew} 
            alt="HeyFlou AI Consulting logo" 
            className="h-[128px] md:h-[176px] lg:h-[224px] w-auto drop-shadow-sm dark:drop-shadow-[0_0_40px_hsl(var(--hf-purple)/0.3)]" 
            loading="eager"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* CTA group */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <GradientButton variant="primary" size="lg" asChild>
            <a href="#contact" className="inline-flex items-center gap-2">
              {t.about.bookStrategyCall}
            </a>
          </GradientButton>
          
          <Button 
            variant="ghost" 
            size="lg" 
            asChild 
            className="text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
          >
            <a href="/case-studies" className="inline-flex items-center gap-2">
              {t.about.seeCaseStudies}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
