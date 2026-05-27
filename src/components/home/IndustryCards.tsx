"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Dumbbell, 
  Scissors, 
  Target, 
  GraduationCap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n";

interface IndustryCardData {
  icon: React.ReactNode;
  titleKey: string;
  hookKey: string;
  featureKeys: string[];
  outcomeKey: string;
  ctaKey: string;
  link: string;
}

const industryData: IndustryCardData[] = [
  {
    icon: <Stethoscope className="w-6 h-6" strokeWidth={1.5} />,
    titleKey: "industry1Title",
    hookKey: "industry1Hook",
    featureKeys: ["industry1Feature1", "industry1Feature2", "industry1Feature3", "industry1Feature4"],
    outcomeKey: "industry1Outcome",
    ctaKey: "industry1Cta",
    link: "/services/healthcare"
  },
  {
    icon: <Dumbbell className="w-6 h-6" strokeWidth={1.5} />,
    titleKey: "industry2Title",
    hookKey: "industry2Hook",
    featureKeys: ["industry2Feature1", "industry2Feature2", "industry2Feature3", "industry2Feature4"],
    outcomeKey: "industry2Outcome",
    ctaKey: "industry2Cta",
    link: "/services/fitness-education"
  },
  {
    icon: <Scissors className="w-6 h-6" strokeWidth={1.5} />,
    titleKey: "industry3Title",
    hookKey: "industry3Hook",
    featureKeys: ["industry3Feature1", "industry3Feature2", "industry3Feature3", "industry3Feature4"],
    outcomeKey: "industry3Outcome",
    ctaKey: "industry3Cta",
    link: "/services/custom-automation"
  },
  {
    icon: <Target className="w-6 h-6" strokeWidth={1.5} />,
    titleKey: "industry4Title",
    hookKey: "industry4Hook",
    featureKeys: ["industry4Feature1", "industry4Feature2", "industry4Feature3", "industry4Feature4"],
    outcomeKey: "industry4Outcome",
    ctaKey: "industry4Cta",
    link: "/services/custom-automation"
  },
  {
    icon: <GraduationCap className="w-6 h-6" strokeWidth={1.5} />,
    titleKey: "industry5Title",
    hookKey: "industry5Hook",
    featureKeys: ["industry5Feature1", "industry5Feature2", "industry5Feature3", "industry5Feature4"],
    outcomeKey: "industry5Outcome",
    ctaKey: "industry5Cta",
    link: "/services/custom-automation"
  },
  {
    icon: <Sparkles className="w-6 h-6" strokeWidth={1.5} />,
    titleKey: "industry6Title",
    hookKey: "industry6Hook",
    featureKeys: ["industry6Feature1", "industry6Feature2", "industry6Feature3", "industry6Feature4"],
    outcomeKey: "industry6Outcome",
    ctaKey: "industry6Cta",
    link: "/services/custom-automation"
  }
];

function IndustryCardComponent({ card, index, translations, isFeatured = false }: { card: IndustryCardData; index: number; translations: Record<string, string>; isFeatured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col h-full p-6 md:p-8 rounded-3xl",
        "backdrop-blur-sm",
        "transition-all duration-400 ease-out",
        "hover:-translate-y-2",
        "group",
        isFeatured
          ? "bg-hf-teal/[0.06] border-2 border-hf-teal/50 shadow-[0_0_40px_rgba(6,182,212,0.12)] hover:border-hf-teal hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)]"
          : "bg-card/90 border border-border/50 hover:border-hf-teal/40 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
      )}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white hf-gradient shadow-lg shadow-hf-teal/25">
            <Sparkles className="w-3 h-3" />
            {translations.industryFeaturedBadge || "Featured"}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5",
        "transition-transform duration-300 group-hover:scale-110",
        isFeatured ? "bg-hf-teal shadow-[0_0_20px_rgba(6,182,212,0.4)]" : "hf-gradient"
      )}>
        {card.icon}
      </div>
      
      {/* Industry Name */}
      <h3 className={cn(
        "text-lg md:text-xl font-bold mb-2",
        isFeatured ? "text-hf-teal" : "text-foreground"
      )}>
        {translations[card.titleKey]}
      </h3>
      
      {/* Pain Hook */}
      <p className="text-sm md:text-base italic text-hf-teal mb-5">
        "{translations[card.hookKey]}"
      </p>
      
      {/* Capabilities List */}
      <div className="flex-grow">
        <ul className="space-y-2.5">
          {card.featureKeys.map((key, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
              <span className="text-hf-teal mt-1 shrink-0">—</span>
              <span>{translations[key]}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Divider + Outcome */}
      <div className={cn(
        "h-px w-full mt-6 mb-4",
        isFeatured ? "bg-hf-teal/20" : "bg-border/50"
      )} />
      <p className="text-sm font-bold text-hf-teal mb-5">
        {translations[card.outcomeKey]}
      </p>
      
      {/* CTA Button */}
      <Link
        to={card.link}
        className={cn(
          "w-full py-3 px-5 rounded-xl text-center font-semibold text-sm",
          "flex items-center justify-center gap-2",
          "transition-all duration-300",
          isFeatured
            ? "hf-gradient text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-[1.02]"
            : "bg-transparent border border-hf-teal/50 text-foreground hover:hf-gradient hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        )}
      >
        {translations[card.ctaKey]}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export function IndustryCards() {
  const t = useTranslation();
  const hp = t.homepage as unknown as Record<string, string>;

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background">
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
            {hp.industryTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            {hp.industrySubtitle}
          </motion.p>
        </div>
        
        {/* Cards Grid - 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {industryData.map((card, index) => (
            <IndustryCardComponent key={index} card={card} index={index} translations={hp} />
          ))}
        </div>
        
        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-10 md:mt-12"
        >
          {hp.industryNotSeeYours}{" "}
          <Link to="/contact" className="text-hf-teal hover:underline">
            {hp.industryLetsTalk}
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
