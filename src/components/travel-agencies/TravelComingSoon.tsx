import { motion } from 'framer-motion';
import { 
  Plane, 
  Calendar, 
  MessageSquare, 
  Globe
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { Typewriter } from '@/components/ui/typewriter-effect';
import { SpotlightCard } from '@/components/ui/spotlight-card';
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
      color: "hsl(var(--hf-teal))",
    },
    {
      icon: MessageSquare,
      title: travel.featureComms || "Client Communication",
      description: travel.featureCommsDesc || "Personalized pre-trip and post-trip messaging",
      color: "hsl(var(--hf-purple))",
    },
    {
      icon: Globe,
      title: travel.featureSuppliers || "Supplier Integration",
      description: travel.featureSuppliersDesc || "Connect with airlines, hotels, and tour operators",
      color: "hsl(var(--hf-sky))",
    },
    {
      icon: Plane,
      title: travel.featureAutomation || "End-to-End Automation",
      description: travel.featureAutomationDesc || "From inquiry to thank-you, fully automated workflows",
      color: "hsl(var(--primary))",
    },
  ];

  const typewriterPhrases = [
    "Transforming travel operations with AI...",
    "Automating booking workflows...",
    "Streamlining client communication...",
    "Building the future of travel tech...",
  ];

  return (
    <Section background="default" padding="default">
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
        
        {/* Typewriter effect for anticipation */}
        <div className="text-lg text-primary font-medium h-8 mb-4">
          <Typewriter 
            text={typewriterPhrases}
            speed={40}
            deleteSpeed={20}
            delay={2500}
            loop={true}
            cursor="_"
            cursorClassName="text-primary"
          />
        </div>
        
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {travel.comingSoonSubtitle || "We're building something special for travel professionals. Here's a sneak peek."}
        </p>
      </motion.div>

      {/* 2x2 Spotlight Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <SpotlightCard
              key={index}
              spotlightColor={feature.color}
              className="group"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-hf-purple/20 to-hf-sky/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* CTA with launch date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Launch Date Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border"
          animate={{ 
            boxShadow: [
              "0 0 0 0 hsl(var(--primary)/0)",
              "0 0 0 8px hsl(var(--primary)/0.1)",
              "0 0 0 0 hsl(var(--primary)/0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-lg">{travel.expectedLaunch}</span>
        </motion.div>
        
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
