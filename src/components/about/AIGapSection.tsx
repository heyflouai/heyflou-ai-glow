import { Section } from '@/components/ui/section';
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
    <Section background="muted" padding="default">
      {/* Section headline */}
      <motion.h2
        className="text-h2 font-bold font-display text-foreground text-center section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        custom={0}
        variants={fadeUp}
      >
        {gap.title}
      </motion.h2>

      {/* Two-column comparison */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 content-block">
        {/* Enterprise card */}
        <motion.div
          className="card-interactive p-6 md:p-8 flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-h3 text-foreground">{gap.enterpriseTitle}</h3>
          </div>
          <ul className="space-y-3">
            {enterpriseItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-body text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SMB card */}
        <motion.div
          className="card-interactive p-6 md:p-8 flex flex-col gap-4 opacity-90"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-destructive/10">
              <Store className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-h3 text-foreground">{gap.smbTitle}</h3>
          </div>
          <ul className="space-y-3">
            {smbItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-body text-muted-foreground">
                <XCircle className="h-5 w-5 shrink-0 text-destructive/70" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Descriptive paragraph */}
      <motion.p
        className="text-body text-muted-foreground text-center max-w-[800px] mx-auto py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        custom={3}
        variants={fadeUp}
      >
        {gap.description}
      </motion.p>

      {/* Three stat cards */}
      <div className="grid sm:grid-cols-3 gap-6 content-block">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="card-interactive p-6 text-center flex flex-col items-center gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={4 + i}
            variants={fadeUp}
          >
            <stat.icon className="h-6 w-6 text-primary mb-1" />
            <span className="text-3xl md:text-4xl font-bold font-display text-foreground">
              {stat.number}
            </span>
            <span className="text-small text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Solution tagline */}
      <motion.p
        className="text-h3 font-bold font-display text-center mt-16 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        custom={7}
        variants={fadeUp}
      >
        <span className="bg-clip-text text-transparent hf-gradient">{gap.solutionLabel}</span>
        {' '}
        <span className="text-foreground">{gap.solutionText}</span>
      </motion.p>
    </Section>
  );
}
