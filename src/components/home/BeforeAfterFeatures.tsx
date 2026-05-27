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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n";

interface FeatureCard {
  icon: React.ReactNode;
  titleKey: string;
  shortKey: string;
}

const featureKeys: FeatureCard[] = [
  {
    icon: <Smartphone className="w-5 h-5" strokeWidth={1.5} />,
    titleKey: "feature1Title",
    shortKey: "feature1Short",
  },
  {
    icon: <Calendar className="w-5 h-5" strokeWidth={1.5} />,
    titleKey: "feature2Title",
    shortKey: "feature2Short",
  },
  {
    icon: <MessageSquare className="w-5 h-5" strokeWidth={1.5} />,
    titleKey: "feature3Title",
    shortKey: "feature3Short",
  },
  {
    icon: <CreditCard className="w-5 h-5" strokeWidth={1.5} />,
    titleKey: "feature4Title",
    shortKey: "feature4Short",
  },
  {
    icon: <Database className="w-5 h-5" strokeWidth={1.5} />,
    titleKey: "feature5Title",
    shortKey: "feature5Short",
  },
  {
    icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />,
    titleKey: "feature6Title",
    shortKey: "feature6Short",
  }
];

function FeatureCell({
  feature,
  index,
  translations,
  borderClasses,
}: {
  feature: FeatureCard;
  index: number;
  translations: Record<string, string>;
  borderClasses: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={cn(
        "group relative px-6 py-8 md:px-8 md:py-10 transition-colors duration-300",
        "hover:bg-hf-teal/[0.03]",
        borderClasses
      )}
    >
      <div className="mb-5 text-hf-teal/80 group-hover:text-hf-teal transition-colors">
        {feature.icon}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 tracking-tight">
        {translations[feature.titleKey]}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {translations[feature.shortKey]}
      </p>
    </motion.div>
  );
}

export function BeforeAfterFeatures() {
  const t = useTranslation();
  const hp = t.homepage as unknown as Record<string, string>;

  // 3 cols on lg, 2 on md, 1 on mobile. Use right/bottom hairline borders
  // and strip them on the last column/row so the grid looks like the reference.
  const cellBorder = (i: number) => {
    const classes = ["border-border/40"];
    // bottom border on all except mobile last
    classes.push("border-b");
    if (i === 5) classes.push("md:border-b-0");
    // remove bottom on the last row of md (last 2) and lg (last 3)
    if (i >= 4) classes.push("md:border-b-0");
    if (i >= 3) classes.push("lg:border-b-0");
    // right borders
    classes.push("md:border-r");
    if (i % 2 === 1) classes.push("md:border-r-0");
    classes.push("lg:border-r");
    if (i % 3 === 2) classes.push("lg:border-r-0");
    // restore md right border for items where lg removes it but md needs it
    return classes.join(" ");
  };

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
            className="text-xs text-muted-foreground mt-2"
          >
            {hp.featuresSource}
          </motion.p>
        </div>
        
        {/* Features Grid — compact, hairline dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto border border-border/40 rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm">
          {featureKeys.map((feature, index) => (
            <FeatureCell
              key={index}
              feature={feature}
              index={index}
              translations={hp}
              borderClasses={cellBorder(index)}
            />
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
