import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  GitFork, 
  Shield, 
  TrendingUp
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { FocusCards, type FocusCard } from '@/components/ui/focus-cards';
import { useTranslation } from '@/i18n';

export function ConsultingChallenge() {
  const t = useTranslation();
  const consulting = t.consulting as Record<string, string>;

  const challenges: FocusCard[] = [
    {
      title: consulting.challengeWhere || "Where to Start?",
      description: consulting.challengeWhereDesc || "AI opportunities seem endless, but knowing which ones will actually move the needle for your business is the hard part.",
      icon: HelpCircle,
    },
    {
      title: consulting.challengeVendors || "Vendor Overload",
      description: consulting.challengeVendorsDesc || "Every vendor promises the world. Cutting through the noise to find solutions that actually fit your needs takes expertise.",
      icon: GitFork,
    },
    {
      title: consulting.challengeRisk || "Risk & Uncertainty",
      description: consulting.challengeRiskDesc || "AI investments are significant. Without proper planning, you risk costly mistakes and wasted resources.",
      icon: Shield,
    },
    {
      title: consulting.challengeROI || "Proving ROI",
      description: consulting.challengeROIDesc || "Stakeholders want to see results. Building a business case that demonstrates clear value is essential but challenging.",
      icon: TrendingUp,
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
          {consulting.challengeTitle}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {consulting.challengeSubtitle || "Navigating AI transformation is complex. Here's what keeps leaders up at night."}
        </p>
      </motion.div>

      <FocusCards cards={challenges} className="lg:grid-cols-2" />
    </Section>
  );
}
