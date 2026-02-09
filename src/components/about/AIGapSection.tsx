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

/* Shared gradient border style using background-clip trick */
const gradientBorderStyle: React.CSSProperties = {
  border: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'padding-box, border-box',
  backgroundImage:
    'linear-gradient(hsl(var(--card)), hsl(var(--card))), linear-gradient(135deg, hsl(190 72% 44%), hsl(268 84% 65%))',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
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
          className="text-[32px] md:text-[42px] font-bold font-display text-foreground text-center mb-5 leading-[1.2] tracking-[-0.01em]"
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
          className="text-[16px] md:text-[18px] text-muted-foreground/70 text-center max-w-[900px] mx-auto mb-14 leading-[1.5]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          custom={1}
          variants={fadeUp}
        >
          {gap.subtitle}
        </motion.p>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-[900px] mx-auto">
          {/* Enterprise card */}
          <motion.div
            className="rounded-2xl p-6 md:p-9 min-h-[320px] flex flex-col"
            style={gradientBorderStyle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={2}
            variants={fadeUp}
          >
            <Building2 className="h-12 w-12 mb-5 text-primary" />
            <h3 className="text-[22px] md:text-[24px] font-bold text-foreground mb-3">{gap.enterpriseTitle}</h3>
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-[15px] font-semibold text-primary">{gap.enterpriseStatus}</span>
            </div>
            <ul className="space-y-3">
              {enterpriseItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] md:text-[15px] leading-[1.8] text-foreground/90">
                  <span className="mt-1 text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SMB card */}
          <motion.div
            className="rounded-2xl p-6 md:p-9 min-h-[320px] flex flex-col"
            style={gradientBorderStyle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={3}
            variants={fadeUp}
          >
            <Store className="h-12 w-12 mb-5 text-primary" />
            <h3 className="text-[22px] md:text-[24px] font-bold text-foreground mb-3">{gap.smbTitle}</h3>
            <div className="flex items-center gap-2 mb-5">
              <XCircle className="h-5 w-5 text-muted-foreground/60" />
              <span className="text-[15px] font-semibold text-muted-foreground/60">{gap.smbStatus}</span>
            </div>
            <ul className="space-y-3">
              {smbItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] md:text-[15px] leading-[1.8] text-foreground/70">
                  <span className="mt-1 text-muted-foreground/50">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Spacer */}
        <div className="h-16" />

        {/* Three stat cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-card p-8 md:p-10 text-center flex flex-col items-center min-h-[200px] justify-center"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={4 + i}
              variants={fadeUp}
            >
              <stat.icon className="h-9 w-9 mb-5 text-primary" />
              <span className="text-[40px] md:text-[52px] font-bold text-foreground mb-3 font-display tracking-[-0.01em]">
                {stat.number}
              </span>
              <span className="text-[13px] md:text-[14px] text-muted-foreground/65 leading-[1.5] max-w-[180px]">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Spacer */}
        <div className="h-16" />

        {/* Solution tagline */}
        <div className="max-w-[800px] mx-auto text-center">
          <motion.p
            className="text-[26px] md:text-[32px] font-bold text-foreground mb-3 font-display"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={7}
            variants={fadeUp}
          >
            {gap.solutionLine1}
          </motion.p>
          <motion.p
            className="text-[16px] md:text-[18px] text-muted-foreground/70 leading-[1.6]"
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
