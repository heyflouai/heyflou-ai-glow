import { Clock, Filter, DollarSign, Bot, Magnet, CalendarCheck } from 'lucide-react';
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

const gradientBorderStyle: React.CSSProperties = {
  border: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'padding-box, border-box',
  backgroundImage:
    'linear-gradient(hsl(var(--card)), hsl(var(--card))), linear-gradient(135deg, hsl(190 72% 44%), hsl(268 84% 65%))',
};

const GradientIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="mb-5">
    <svg width="0" height="0" className="absolute">
      <linearGradient id="smb-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(190 72% 44%)" />
        <stop offset="100%" stopColor="hsl(268 84% 65%)" />
      </linearGradient>
    </svg>
    <Icon className="h-12 w-12" style={{ stroke: 'url(#smb-icon-grad)' }} />
  </div>
);

export function SMBStruggle() {
  const t = useTranslation();
  const s = t.about.smbStruggle;

  const painCards = [
    { icon: Clock, title: s.pain1Title, desc: s.pain1Desc },
    { icon: Filter, title: s.pain2Title, desc: s.pain2Desc },
    { icon: DollarSign, title: s.pain3Title, desc: s.pain3Desc },
  ];

  const solutionCards = [
    { icon: Bot, title: s.solution1Title, desc: s.solution1Desc },
    { icon: Magnet, title: s.solution2Title, desc: s.solution2Desc },
    { icon: CalendarCheck, title: s.solution3Title, desc: s.solution3Desc },
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

        {/* Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {painCards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-card p-6 md:p-9 min-h-[320px] flex flex-col border-2 border-border/50"
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

        {/* Transition */}
        <motion.div
          className="my-16 md:my-[72px] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={5}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 max-w-[600px] mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
            <span
              className="text-[24px] md:text-[28px] font-bold font-display bg-gradient-to-r from-[hsl(190_72%_44%)] to-[hsl(268_84%_65%)] bg-clip-text text-transparent"
            >
              {s.transition}
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
          </div>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {solutionCards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6 md:p-9 min-h-[320px] flex flex-col"
              style={{
                ...gradientBorderStyle,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={6 + i}
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
      </div>
    </section>
  );
}
