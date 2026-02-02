import { motion } from 'framer-motion';
import { Bot, MessageSquare, Map, Globe } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/i18n';

export function TravelPreview() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;

  const features = [
    {
      titleKey: 'previewBookingTitle',
      descKey: 'previewBookingDesc',
      icon: Bot,
    },
    {
      titleKey: 'previewInquiryTitle',
      descKey: 'previewInquiryDesc',
      icon: MessageSquare,
    },
    {
      titleKey: 'previewItineraryTitle',
      descKey: 'previewItineraryDesc',
      icon: Map,
    },
    {
      titleKey: 'previewMultiPlatformTitle',
      descKey: 'previewMultiPlatformDesc',
      icon: Globe,
    },
  ];

  return (
    <Section background="default" id="preview">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            {travel.previewTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {travel.previewSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border border-border/50 bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-foreground mb-2">
                      {travel[feature.titleKey]}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {travel[feature.descKey]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
