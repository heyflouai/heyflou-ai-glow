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
          className="text-h2 font-bold font-display text-foreground text-center mb-6"
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
          className="text-lg md:text-[18px] text-muted-foreground/80 text-center max-w-[800px] mx-auto mb-[60px] leading-relaxed"
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
            className="rounded-2xl bg-card p-8 md:p-10 shadow-md border-2 border-green-500/60 dark:border-green-400/40 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={2}
            variants={fadeUp}
          >
            <Building2 className="h-12 w-12 text-green-600 dark:text-green-400 mb-5" />
            <h3 className="text-2xl font-bold text-foreground mb-4">{gap.enterpriseTitle}</h3>
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="text-base text-green-700 dark:text-green-400 font-medium">{gap.enterpriseStatus}</span>
            </div>
            <ul className="space-y-3">
              {enterpriseItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[15px] leading-[1.8] text-foreground">
                  <span className="mt-1 text-green-600 dark:text-green-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SMB card */}
          <motion.div
            className="rounded-2xl bg-card p-8 md:p-10 shadow-md border-2 border-red-500/60 dark:border-red-400/40 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={3}
            variants={fadeUp}
          >
            <Store className="h-12 w-12 text-red-600 dark:text-red-400 mb-5" />
            <h3 className="text-2xl font-bold text-foreground mb-4">{gap.smbTitle}</h3>
            <div className="flex items-center gap-2 mb-5">
              <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <span className="text-base text-red-700 dark:text-red-400 font-medium">{gap.smbStatus}</span>
            </div>
            <ul className="space-y-3">
              {smbItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[15px] leading-[1.8] text-foreground/80">
                  <span className="mt-1 text-red-600 dark:text-red-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Spacer */}
        <div className="h-[60px]" />

        {/* Three stat cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-card p-8 shadow-sm text-center flex flex-col items-center min-h-[180px] justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={4 + i}
              variants={fadeUp}
            >
              <stat.icon className="h-8 w-8 text-primary mb-4" />
              <span className="text-4xl md:text-[48px] font-extrabold text-foreground mb-3 font-display">
                {stat.number}
              </span>
              <span className="text-sm text-muted-foreground/80 leading-snug">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Spacer */}
        <div className="h-[60px]" />

        {/* Solution tagline */}
        <div className="max-w-[800px] mx-auto text-center">
          <motion.p
            className="text-2xl md:text-[28px] font-bold text-foreground mb-3 font-display"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={7}
            variants={fadeUp}
          >
            {gap.solutionLine1}
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-muted-foreground/70 leading-relaxed"
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
