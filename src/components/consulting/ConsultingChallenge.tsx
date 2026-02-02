import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Map, 
  ShieldAlert
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';

export function ConsultingChallenge() {
  const challenges: FocusCard[] = [
    {
      title: "Uncertain Where AI Fits",
      description: "You know AI is transforming industries, but struggle to identify concrete, high-impact opportunities specific to your business model, customers, and operations.",
      icon: Compass,
    },
    {
      title: "Overwhelmed by AI Options",
      description: "Hundreds of AI tools and vendors promise transformation. Without expertise, it's impossible to separate hype from reality and choose solutions that actually deliver ROI.",
      icon: Layers,
    },
    {
      title: "Need Roadmap, Not Just Tools",
      description: "Implementing AI tools without strategy leads to disconnected pilots and wasted investment. You need a cohesive plan aligned with business goals, not just technology.",
      icon: Map,
    },
    {
      title: "Want to Avoid Expensive Mistakes",
      description: "You've seen AI projects fail or heard horror stories. Without expert guidance, the risk of choosing wrong tools, poor implementation, or cultural resistance feels too high.",
      icon: ShieldAlert,
    },
  ];

  return (
    <Section background="default" padding="default">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h2 text-foreground mb-4">
          The AI Opportunity Gap
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Navigating AI transformation is complex. Here's what keeps leaders up at night.
        </p>
      </motion.div>

      <FocusCards cards={challenges} className="lg:grid-cols-2" />
    </Section>
  );
}
