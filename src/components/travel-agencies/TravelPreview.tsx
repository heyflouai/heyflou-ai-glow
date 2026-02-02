import { motion } from 'framer-motion';
import { Bot, MessageSquare, Map, Globe } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { useTranslation } from '@/i18n';

export function TravelPreview() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;

  const features = [
    {
      titleKey: 'previewBookingTitle',
      descKey: 'previewBookingDesc',
      icon: Bot,
      color: "hsl(var(--hf-teal))",
    },
    {
      titleKey: 'previewInquiryTitle',
      descKey: 'previewInquiryDesc',
      icon: MessageSquare,
      color: "hsl(var(--hf-purple))",
    },
    {
      titleKey: 'previewItineraryTitle',
      descKey: 'previewItineraryDesc',
      icon: Map,
      color: "hsl(var(--hf-sky))",
    },
    {
      titleKey: 'previewMultiPlatformTitle',
      descKey: 'previewMultiPlatformDesc',
      icon: Globe,
      color: "hsl(var(--primary))",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Section background="default" id="preview" padding="default">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-h2 text-foreground mb-4">
            {travel.previewTitle}
          </h2>
          <p className="text-body text-muted-foreground">
            {travel.previewSubtitle}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <SpotlightCard 
                key={i} 
                spotlightColor={feature.color}
                className="group"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">
                  {travel[feature.titleKey]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {travel[feature.descKey]}
                </p>
              </SpotlightCard>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
