import { motion } from 'framer-motion';
import { Rocket, RefreshCw, Target } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { useTranslation } from '@/i18n';

export function ConsultingAudience() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  const audiences = [
    {
      titleKey: 'audienceSMBTitle',
      descKey: 'audienceSMBDesc',
      icon: Rocket,
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      titleKey: 'audienceRedirectTitle',
      descKey: 'audienceRedirectDesc',
      icon: RefreshCw,
      gradient: 'from-accent/20 to-accent/5',
    },
    {
      titleKey: 'audienceLeadershipTitle',
      descKey: 'audienceLeadershipDesc',
      icon: Target,
      gradient: 'from-secondary/40 to-secondary/10',
    },
  ];

  return (
    <Section background="muted" id="audience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {consulting.audienceTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CardContainer containerClassName="py-4">
                  <CardBody className="bg-card relative group/card border border-border/50 w-full h-auto rounded-xl p-6">
                    <CardItem
                      translateZ="50"
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </CardItem>
                    <CardItem
                      as="h3"
                      translateZ="60"
                      className="text-xl font-bold font-display text-foreground mb-3"
                    >
                      {consulting[audience.titleKey]}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="40"
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      {consulting[audience.descKey]}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
