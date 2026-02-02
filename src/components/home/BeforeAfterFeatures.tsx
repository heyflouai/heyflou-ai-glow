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
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  before: {
    problem: string;
    impact: string;
  };
  after: {
    solution: string;
    result: string;
  };
}

const features: FeatureCard[] = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "24/7 Lead Capture",
    before: {
      problem: "Missing 40% of leads that come in outside business hours",
      impact: "$2,000+ monthly lost revenue"
    },
    after: {
      solution: "AI chatbot captures and qualifies every inquiry instantly—even at 2am",
      result: "100% lead capture rate • Zero missed opportunities"
    }
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Smart Scheduling",
    before: {
      problem: "Spending 10+ hours per week on phone calls and emails just to book appointments",
      impact: "Could serve 15 more clients monthly"
    },
    after: {
      solution: "Clients book instantly 24/7. Automatic reminders eliminate no-shows",
      result: "10 hours saved weekly • 15% more bookings"
    }
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Automated Follow-Ups",
    before: {
      problem: "Follow-ups fall through the cracks. Clients feel neglected between sessions",
      impact: "20% churn due to poor communication"
    },
    after: {
      solution: "Personalized check-ins, wellness tips, and reminders sent automatically",
      result: "20% increase in retention • Higher satisfaction"
    }
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Smart Billing",
    before: {
      problem: "Chasing clients for payments manually. Awkward conversations. Delayed cash flow",
      impact: "Average 2-week payment delay"
    },
    after: {
      solution: "Automated invoicing, friendly reminders, and instant payment processing",
      result: "Faster payments • Improved cash flow"
    }
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Zero Data Entry",
    before: {
      problem: "Staff spends 5+ hours weekly entering client information into multiple systems",
      impact: "Errors, delays, and wasted time"
    },
    after: {
      solution: "Information captured once, synced everywhere automatically",
      result: "5 hours saved weekly • 95% fewer errors"
    }
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Instant Insights",
    before: {
      problem: "Spending hours compiling reports manually. Data always outdated",
      impact: "Making decisions based on gut feeling"
    },
    after: {
      solution: "Real-time dashboards showing bookings, revenue, and trends automatically",
      result: "Data-driven decisions • Spot trends early"
    }
  }
];

function FeatureCardComponent({ feature, index }: { feature: FeatureCard; index: number }) {
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
        {feature.title}
      </h3>
      
      {/* Before Section */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <X className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-semibold text-orange-400">Before</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-1">
          {feature.before.problem}
        </p>
        <p className="text-xs text-muted-foreground/70 italic">
          Impact: {feature.before.impact}
        </p>
      </div>
      
      {/* Divider */}
      <div className="h-px w-full bg-border/50 mb-5" />
      
      {/* After Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-sm font-semibold text-green-400">After</span>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed mb-1">
          {feature.after.solution}
        </p>
        <p className="text-xs font-semibold text-hf-teal">
          {feature.after.result}
        </p>
      </div>
    </motion.div>
  );
}

export function BeforeAfterFeatures() {
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
            Stop Losing Money to Manual Processes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
          >
            See how automation transforms daily operations
          </motion.p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCardComponent key={index} feature={feature} index={index} />
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
            Ready to Transform Your Operations?
          </p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-transparent border border-hf-teal/50 rounded-full transition-all duration-300 hover:border-hf-teal hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
          >
            Explore Our Solutions →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
