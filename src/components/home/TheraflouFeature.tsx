import { motion } from 'framer-motion';
import { Calendar, FileText, BarChart3, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n';
import theraflouMark from '@/assets/theraflou-mark.svg';

export const TheraflouFeature = () => {
  const t = useTranslation();
  const tf = (t.homepage as unknown as Record<string, string>);

  const features = [
    { icon: Calendar, text: tf.theraflouFeature1 },
    { icon: FileText, text: tf.theraflouFeature2 },
    { icon: BarChart3, text: tf.theraflouFeature3 },
  ];

  return (
    <section className="relative py-[60px] md:py-20 lg:py-[120px] overflow-hidden">
      {/* Subtle teal tint background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 50%, hsl(var(--hf-teal) / 0.06) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hf-teal/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-hf-teal/30 to-transparent" />

      <div className="service-container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-hf-teal mb-4">
              {tf.theraflouEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-5">
              {tf.theraflouTitle}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {tf.theraflouSubtitle}
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-hf-teal/10 border border-hf-teal/30">
                    <f.icon className="w-4 h-4 text-hf-teal" />
                  </span>
                  <span className="text-sm md:text-base text-foreground/90 leading-relaxed pt-1">
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-base md:text-lg font-medium text-foreground/95 italic border-l-2 border-hf-teal pl-4 mb-8 max-w-2xl">
              {tf.theraflouProof}
            </p>

            <a
              href="https://theraflou.heyflou.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm md:text-base font-medium text-foreground border border-hf-teal/50 rounded-full transition-all duration-300 hover:border-hf-teal hover:bg-hf-teal/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
            >
              {tf.theraflouCta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: product visual card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-hf-teal/30 bg-card/80 backdrop-blur p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(6,182,212,0.25)]">
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <img src={theraflouMark} alt="TheraFlou" className="h-10 w-auto" />
                  <div>
                    <p className="text-base font-semibold text-foreground leading-tight">TheraFlou</p>
                    <p className="text-xs text-muted-foreground">Patient CRM · MX</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-hf-teal/15 text-hf-teal border border-hf-teal/30">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/60 border border-border/50 hover:border-hf-teal/40 transition-colors"
                  >
                    <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md bg-hf-teal/10">
                      <f.icon className="w-4 h-4 text-hf-teal" />
                    </span>
                    <span className="text-sm text-foreground/90 leading-snug">
                      {f.text.split(' — ')[0]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <span>NOM-004 compliant</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-hf-teal animate-pulse" />
                  AI agents active
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};