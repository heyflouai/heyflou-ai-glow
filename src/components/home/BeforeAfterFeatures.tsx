"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Calendar, 
  MessageSquare, 
  CreditCard, 
  Database, 
  TrendingUp,
  X,
  Check,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n";

interface FeatureCard {
  icon: React.ReactNode;
  titleKey: string;
  beforeKey: string;
  afterKey: string;
  statKey: string;
}

const featureKeys: FeatureCard[] = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    titleKey: "feature1Title",
    beforeKey: "feature1Before",
    afterKey: "feature1After",
    statKey: "feature1Stat"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    titleKey: "feature2Title",
    beforeKey: "feature2Before",
    afterKey: "feature2After",
    statKey: "feature2Stat"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    titleKey: "feature3Title",
    beforeKey: "feature3Before",
    afterKey: "feature3After",
    statKey: "feature3Stat"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    titleKey: "feature4Title",
    beforeKey: "feature4Before",
    afterKey: "feature4After",
    statKey: "feature4Stat"
  },
  {
    icon: <Database className="w-6 h-6" />,
    titleKey: "feature5Title",
    beforeKey: "feature5Before",
    afterKey: "feature5After",
    statKey: "feature5Stat"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    titleKey: "feature6Title",
    beforeKey: "feature6Before",
    afterKey: "feature6After",
    statKey: "feature6Stat"
  }
];

function FeatureCardComponent({ feature, index, translations }: { feature: FeatureCard; index: number; translations: Record<string, string> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative p-6 md:p-8 rounded-2xl",
        "bg-card/80 backdrop-blur-sm",
        "border border-border/50 hover:border-hf-teal/30",
        "transition-all duration-300",
        "hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]",
        "hover:-translate-y-2",
        "group"
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl hf-gradient flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
        {feature.icon}
      </div>
      
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">
        {translations[feature.titleKey]}
      </h3>
      
      {/* Before Section */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <X className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-semibold text-orange-400">{translations.beforeLabel}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {translations[feature.beforeKey]}
        </p>
      </div>
      
      {/* Divider */}
      <div className="h-px w-full bg-border/50 mb-5" />
      
      {/* After Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-sm font-semibold text-green-400">{translations.afterLabel}</span>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          {translations[feature.afterKey]}
        </p>
        
        {/* Stat Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-hf-teal/10 border border-hf-teal/20 px-3 py-1.5">
          <Sparkles className="w-3 h-3 text-hf-teal shrink-0" />
          <span className="text-xs font-medium text-hf-teal leading-none">
            {translations[feature.statKey]}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function BeforeAfterFeatures() {
  const t = useTranslation();
  const hp = t.homepage as unknown as Record<string, string>;

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            {hp.featuresTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {hp.featuresSubtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs text-muted-foreground/50 mt-2"
          >
            {hp.featuresSource}
          </motion.p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featureKeys.map((feature, index) => (
            <FeatureCardComponent key={index} feature={feature} index={index} translations={hp} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
            {hp.featuresReadyCta}
          </p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-transparent border border-hf-teal/50 rounded-full transition-all duration-300 hover:border-hf-teal hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
          >
            {hp.featuresExplore}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
