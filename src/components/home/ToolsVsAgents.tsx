import { motion } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';
import { useTranslation } from '@/i18n';

export function ToolsVsAgents() {
  const t = useTranslation();
  const d = t.homepage.toolsVsAgents;

  const leftBullets = [
    d.leftBullet1,
    d.leftBullet2,
    d.leftBullet3,
    d.leftBullet4,
    d.leftBullet5,
  ];

  const rightBullets = [
    d.rightBullet1,
    d.rightBullet2,
    d.rightBullet3,
    d.rightBullet4,
    d.rightBullet5,
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground">
            {d.title}
          </h2>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
          {/* Left Column — AI Tools (DIY) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-muted/40 dark:bg-muted/20 border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-lg md:text-xl font-semibold text-muted-foreground mb-1">
              {d.leftLabel}
            </h3>
            <p className="text-base md:text-lg font-bold text-foreground mb-6">
              {d.leftHeader}
            </p>
            <ul className="space-y-4 flex-1">
              {leftBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                    <X size={12} className="text-muted-foreground" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow Divider — Desktop only */}
          <div className="hidden lg:flex items-center justify-center px-2">
            <div className="w-10 h-10 rounded-full bg-hf-teal/10 border border-hf-teal/30 flex items-center justify-center">
              <ArrowRight size={18} className="text-hf-teal" />
            </div>
          </div>

          {/* Right Column — AI Agents (HeyFlou) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-hf-teal/30 rounded-2xl p-6 md:p-8 hf-shadow flex flex-col relative overflow-hidden"
          >
            {/* Subtle teal glow */}
            <div
              aria-hidden
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, hsl(var(--hf-teal)) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <h3 className="text-lg md:text-xl font-semibold text-hf-teal mb-1 relative z-10">
              {d.rightLabel}
            </h3>
            <p className="text-base md:text-lg font-bold text-foreground mb-6 relative z-10">
              {d.rightHeader}
            </p>
            <ul className="space-y-4 flex-1 relative z-10">
              {rightBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground leading-relaxed">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-hf-teal/20 flex items-center justify-center">
                    <Check size={12} className="text-hf-teal" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 md:mt-14 text-base md:text-lg font-semibold text-foreground"
        >
          {d.tagline}
        </motion.p>
      </div>
    </section>
  );
}
