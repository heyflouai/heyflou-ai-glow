import { ShieldCheck, Lock, BadgeCheck } from 'lucide-react';
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
      <linearGradient id="sec-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(190 72% 44%)" />
        <stop offset="100%" stopColor="hsl(268 84% 65%)" />
      </linearGradient>
    </svg>
    <Icon className="h-12 w-12" style={{ stroke: 'url(#sec-icon-grad)' }} />
  </div>
);

export function ResponsibleAI() {
  const t = useTranslation();
  const s = t.about.security;

  const cards = [
    { icon: ShieldCheck, title: s.card1Title, desc: s.card1Desc },
    { icon: Lock, title: s.card2Title, desc: s.card2Desc },
    { icon: BadgeCheck, title: s.card3Title, desc: s.card3Desc },
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-background transition-colors duration-300">
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

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-card p-6 md:p-9 min-h-[300px] flex flex-col border border-border/30"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={2 + i}
              variants={fadeUp}
            >
              <GradientIcon icon={card.icon} />
              <h3 className="text-[22px] md:text-[24px] font-bold font-display text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-foreground/90 leading-[1.6]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="text-[24px] md:text-[28px] font-bold font-display text-center mt-14 bg-gradient-to-r from-[hsl(190_72%_44%)] to-[hsl(268_84%_65%)] bg-clip-text text-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={5}
          variants={fadeUp}
        >
          {s.tagline}
        </motion.p>
      </div>
    </section>
  );
}
