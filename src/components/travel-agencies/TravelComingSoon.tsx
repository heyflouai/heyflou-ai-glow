import { motion } from 'framer-motion';
import { 
  Plane, 
  Calendar, 
  MessageSquare, 
  Globe
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { useTranslation } from '@/i18n';

export function TravelComingSoon() {
  const t = useTranslation();
  const travel = t.travelAgencies as Record<string, string>;

  const scrollToForm = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Calendar,
      title: travel.featureBookings || "Smart Bookings",
      description: travel.featureBookingsDesc || "Automated booking confirmations and itinerary management",
    },
    {
      icon: MessageSquare,
      title: travel.featureComms || "Client Communication",
      description: travel.featureCommsDesc || "Personalized pre-trip and post-trip messaging",
    },
    {
      icon: Globe,
      title: travel.featureSuppliers || "Supplier Integration",
      description: travel.featureSuppliersDesc || "Connect with airlines, hotels, and tour operators",
    },
    {
      icon: Plane,
      title: travel.featureAutomation || "End-to-End Automation",
      description: travel.featureAutomationDesc || "From inquiry to thank-you, fully automated workflows",
    },
  ];

  return (
    <Section background="default" padding="large">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          {travel.comingSoonTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {travel.comingSoonSubtitle || "We're building something special for travel professionals. Here's a sneak peek."}
        </p>
      </motion.div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="relative group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-hf-teal/20 via-hf-purple/20 to-hf-sky/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="text-lg text-muted-foreground">
          {travel.expectedLaunch}
        </p>
        <MovingBorderButton
          onClick={scrollToForm}
          containerClassName="h-14 w-auto"
          className="px-8 font-semibold"
          duration={3000}
        >
          {travel.getEarlyAccess}
        </MovingBorderButton>
      </motion.div>
    </Section>
  );
}
