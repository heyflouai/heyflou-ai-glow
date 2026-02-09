import { Clock, CalendarCheck, Sun, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const GradientIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="mb-5">
    <svg width="0" height="0" className="absolute">
      <linearGradient id="impact-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(190 72% 44%)" />
        <stop offset="100%" stopColor="hsl(268 84% 65%)" />
      </linearGradient>
    </svg>
    <Icon className="h-10 w-10" style={{ stroke: 'url(#impact-icon-grad)' }} />
  </div>
);

export function ImpactSnapshot() {
  const t = useTranslation();
  const s = t.about.impact;

  const metrics = [
    { icon: Clock, number: s.metric1Number, subtext: s.metric1Subtext, meaning: s.metric1Meaning },
    { icon: CalendarCheck, number: s.metric2Number, subtext: s.metric2Subtext, meaning: s.metric2Meaning },
    { icon: Sun, number: s.metric3Number, subtext: s.metric3Subtext, meaning: s.metric3Meaning },
    { icon: TrendingUp, number: s.metric4Number, subtext: s.metric4Subtext, meaning: s.metric4Meaning },
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-surface-secondary transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          className="text-[32px] md:text-[42px] font-bold font-display text-foreground text-center mb-6 leading-[1.2] tracking-[-0.01em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          custom={0}
          variants={fadeUp}
        >
          {s.title}
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-[18px] md:text-[20px] text-muted-foreground/70 text-center max-w-[900px] mx-auto mb-16 leading-[1.5]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          custom={1}
          variants={fadeUp}
        >
          {s.subtitle}
        </motion.p>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-card p-8 md:p-10 text-center flex flex-col items-center min-h-[240px] justify-center border border-border/30"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={2 + i}
              variants={fadeUp}
            >
              <GradientIcon icon={m.icon} />
              <span className="text-[44px] md:text-[56px] font-bold text-foreground font-display tracking-[-0.01em] mb-2">
                {m.number}
              </span>
              <span className="text-[15px] md:text-[16px] font-semibold text-foreground mb-4">
                {m.subtext}
              </span>
              <span className="text-[14px] text-muted-foreground/65 leading-[1.5] max-w-[200px]">
                {m.meaning}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-[13px] md:text-[14px] text-muted-foreground/60 text-center max-w-[800px] mx-auto mt-12 leading-[1.5] italic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={6}
          variants={fadeUp}
        >
          {s.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
