import { useTranslation } from '@/i18n';
import { Building2, Store, CheckCircle2, XCircle, MessageSquare, Clock, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function AIGapSection() {
  const t = useTranslation();
  const gap = t.about.aiGap;

  const enterpriseItems = [gap.enterprise1, gap.enterprise2, gap.enterprise3];
  const smbItems = [gap.smb1, gap.smb2, gap.smb3];

  const stats = [
    { number: '90%', label: gap.stat1, icon: MessageSquare },
    { number: '15+', label: gap.stat2, icon: Clock },
    { number: '$2T', label: gap.stat3, icon: TrendingDown },
  ];

  return (
    <section className="w-full bg-muted/50 py-20 md:py-[100px] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          className="text-[36px] md:text-[48px] font-bold font-display text-foreground text-center mb-5 leading-[1.2] tracking-[-0.02em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          custom={0}
          variants={fadeUp}
        >
          {gap.title}
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
          {gap.subtitle}
        </motion.p>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-[900px] mx-auto">
          {/* Enterprise card */}
          <motion.div
            className="rounded-[20px] bg-card p-6 md:p-10 min-h-[360px] flex flex-col"
            style={{
              border: '3px solid #10B981',
              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.15)',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={2}
            variants={fadeUp}
          >
            <Building2 className="h-14 w-14 mb-6" style={{ color: '#10B981' }} />
            <h3 className="text-[24px] md:text-[28px] font-bold text-foreground mb-3">{gap.enterpriseTitle}</h3>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="h-5 w-5" style={{ color: '#10B981' }} />
              <span className="text-base font-semibold" style={{ color: '#10B981' }}>{gap.enterpriseStatus}</span>
            </div>
            <ul className="space-y-4">
              {enterpriseItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[15px] md:text-[16px] leading-[2.0] text-foreground">
                  <span className="mt-1" style={{ color: '#10B981' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SMB card */}
          <motion.div
            className="rounded-[20px] bg-card p-6 md:p-10 min-h-[360px] flex flex-col"
            style={{
              border: '3px solid #EF4444',
              boxShadow: '0 4px 20px rgba(239, 68, 68, 0.15)',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={3}
            variants={fadeUp}
          >
            <Store className="h-14 w-14 mb-6" style={{ color: '#EF4444' }} />
            <h3 className="text-[24px] md:text-[28px] font-bold text-foreground mb-3">{gap.smbTitle}</h3>
            <div className="flex items-center gap-2 mb-6">
              <XCircle className="h-5 w-5" style={{ color: '#EF4444' }} />
              <span className="text-base font-semibold" style={{ color: '#EF4444' }}>{gap.smbStatus}</span>
            </div>
            <ul className="space-y-4">
              {smbItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[15px] md:text-[16px] leading-[2.0] text-foreground/80">
                  <span className="mt-1" style={{ color: '#EF4444' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Spacer */}
        <div className="h-[72px]" />

        {/* Three stat cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-[20px] bg-card p-8 md:p-12 shadow-sm text-center flex flex-col items-center min-h-[240px] justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={4 + i}
              variants={fadeUp}
            >
              <stat.icon className="h-10 w-10 mb-5" style={{ stroke: 'url(#stat-gradient)' }} />
              <span className="text-[48px] md:text-[64px] font-extrabold text-foreground mb-4 font-display tracking-[-0.02em]">
                {stat.number}
              </span>
              <span className="text-[14px] md:text-[15px] text-muted-foreground/70 leading-[1.5] max-w-[200px]">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* SVG gradient definition for stat icons */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="stat-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(190, 72%, 44%)" />
              <stop offset="100%" stopColor="hsl(268, 84%, 65%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Spacer */}
        <div className="h-[72px]" />

        {/* Solution tagline */}
        <div className="max-w-[800px] mx-auto text-center">
          <motion.p
            className="text-[28px] md:text-[36px] font-bold text-foreground mb-4 font-display"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={7}
            variants={fadeUp}
          >
            {gap.solutionLine1}
          </motion.p>
          <motion.p
            className="text-[18px] md:text-[20px] text-muted-foreground/70 leading-[1.6]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={8}
            variants={fadeUp}
          >
            {gap.solutionLine2}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
