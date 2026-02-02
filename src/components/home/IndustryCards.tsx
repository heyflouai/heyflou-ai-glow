"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Dumbbell, 
  Settings, 
  Plane, 
  Lightbulb,
  Check,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryCard {
  icon: React.ReactNode;
  industry: string;
  hookQuestion: string;
  description: string;
  features: string[];
  featuresLabel: string;
  keyMetric: string;
  cta: string;
  link: string;
  comingSoon?: boolean;
  comingSoonBadge?: string;
}

const industries: IndustryCard[] = [
  {
    icon: <Stethoscope className="w-7 h-7 md:w-8 md:h-8" />,
    industry: "Healthcare Automation",
    hookQuestion: "Tired of appointment no-shows costing you thousands?",
    description: "End-to-end automation for therapists, psychologists, physical therapists, and private clinics.",
    featuresLabel: "What We Automate:",
    features: [
      "Appointment reminders & confirmations",
      "Patient intake forms & paperwork",
      "Post-session follow-up sequences",
      "Cancellation waitlist management"
    ],
    keyMetric: "Save 10+ hours per week",
    cta: "Explore Healthcare Solutions",
    link: "/services/healthcare"
  },
  {
    icon: <Dumbbell className="w-7 h-7 md:w-8 md:h-8" />,
    industry: "Fitness & Education",
    hookQuestion: "Struggling with class booking chaos and missed renewals?",
    description: "Smart automation for gyms, studios, trainers, tutors, and private schools.",
    featuresLabel: "What We Automate:",
    features: [
      "Class booking & capacity management",
      "Membership renewal reminders",
      "Trial-to-member conversion sequences",
      "Payment & billing automation"
    ],
    keyMetric: "Increase bookings by 30%",
    cta: "Explore Fitness Solutions",
    link: "/services/fitness-education"
  },
  {
    icon: <Settings className="w-7 h-7 md:w-8 md:h-8" />,
    industry: "Custom Automation",
    hookQuestion: "Have a unique business challenge?",
    description: "Tailored AI automation for any business, any industry, any workflow.",
    featuresLabel: "What We Build:",
    features: [
      "Customer communication systems",
      "Lead management workflows",
      "Internal process automation",
      "Multi-platform integrations"
    ],
    keyMetric: "Built for your exact needs",
    cta: "Design Your Solution",
    link: "/services/custom-automation"
  },
  {
    icon: <Plane className="w-7 h-7 md:w-8 md:h-8" />,
    industry: "Travel Agency Automation",
    hookQuestion: "Drowning in booking confirmations and client inquiries?",
    description: "AI-powered automation for travel agencies and tour operators.",
    featuresLabel: "What We're Building:",
    features: [
      "Automated booking confirmations",
      "Client inquiry responses 24/7",
      "Itinerary management",
      "Supplier coordination"
    ],
    keyMetric: "Join the waitlist",
    cta: "Get Early Access",
    link: "/services/travel-agencies",
    comingSoon: true,
    comingSoonBadge: "Coming Q3 2025"
  },
  {
    icon: <Lightbulb className="w-7 h-7 md:w-8 md:h-8" />,
    industry: "AI Strategy & Consulting",
    hookQuestion: "Uncertain where AI fits in your business?",
    description: "Strategic guidance to navigate your AI transformation journey.",
    featuresLabel: "What We Offer:",
    features: [
      "AI readiness assessment",
      "Custom AI strategy development",
      "Vendor & tool selection",
      "Implementation planning"
    ],
    keyMetric: "Strategy-first approach",
    cta: "Get Strategic Guidance",
    link: "/services/consulting"
  }
];

function IndustryCardComponent({ card, index }: { card: IndustryCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col h-full p-6 md:p-8 rounded-3xl",
        "bg-card/90 backdrop-blur-sm",
        "border border-border/50",
        "transition-all duration-400 ease-out",
        "hover:border-hf-teal/40",
        "hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]",
        "hover:-translate-y-3",
        "group",
        card.comingSoon && "opacity-90"
      )}
    >
      {/* Icon */}
      <div className={cn(
        "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white mb-5 mx-auto",
        "transition-transform duration-300 group-hover:scale-110",
        card.comingSoon ? "bg-gradient-to-br from-muted-foreground/60 to-muted-foreground/40" : "hf-gradient"
      )}>
        {card.icon}
      </div>
      
      {/* Industry Name */}
      <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
        {card.industry}
      </h3>
      
      {/* Coming Soon Badge */}
      {card.comingSoon && card.comingSoonBadge && (
        <div className="flex justify-center mb-3">
          <span className="px-3 py-1 text-xs font-medium text-hf-teal bg-hf-teal/10 border border-hf-teal/30 rounded-full">
            {card.comingSoonBadge}
          </span>
        </div>
      )}
      
      {/* Hook Question */}
      <p className="text-base md:text-lg italic text-hf-teal text-center mb-4">
        "{card.hookQuestion}"
      </p>
      
      {/* Description */}
      <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed mb-5">
        {card.description}
      </p>
      
      {/* Features List */}
      <div className="flex-grow mb-5">
        <span className="text-xs md:text-sm font-semibold text-hf-teal uppercase tracking-wide mb-3 block">
          {card.featuresLabel}
        </span>
        <ul className="space-y-2">
          {card.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Divider */}
      <div className="h-px w-full bg-border/50 mb-5" />
      
      {/* Key Metric */}
      <p className="text-sm font-bold text-foreground text-center mb-5">
        📊 {card.keyMetric}
      </p>
      
      {/* CTA Button */}
      <Link
        to={card.link}
        className={cn(
          "w-full py-3.5 px-6 rounded-xl text-center font-semibold text-sm md:text-base",
          "flex items-center justify-center gap-2",
          "transition-all duration-300",
          card.comingSoon
            ? "bg-transparent border border-hf-teal/40 text-foreground hover:bg-hf-teal/10 hover:border-hf-teal/60"
            : "bg-transparent border border-hf-teal/50 text-foreground hover:hf-gradient hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        )}
      >
        {card.cta}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export function IndustryCards() {
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
            Automation Solutions for Your Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Custom AI workflows built specifically for your industry's unique challenges
          </motion.p>
        </div>
        
        {/* Cards Grid - First Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-6 md:mb-8">
          {industries.slice(0, 3).map((card, index) => (
            <IndustryCardComponent key={index} card={card} index={index} />
          ))}
        </div>
        
        {/* Cards Grid - Second Row (2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {industries.slice(3).map((card, index) => (
            <IndustryCardComponent key={index + 3} card={card} index={index + 3} />
          ))}
        </div>
        
        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-10 md:mt-12"
        >
          Don't see your industry? We build custom solutions for any business.{" "}
          <Link to="/contact" className="text-hf-teal hover:underline">
            Let's talk →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
