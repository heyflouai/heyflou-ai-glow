"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: ReactNode;
    badge?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={`Navigate to ${item.title}`}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary/20 via-hf-purple/10 to-hf-sky/20 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.4, 
              delay: idx * 0.1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="h-full"
          >
            <Card isHovered={hoveredIndex === idx}>
              {/* Icon and Badge row */}
              <div className="flex items-center justify-between mb-4">
                {item.icon && (
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      animate={hoveredIndex === idx ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>
                )}
                {item.badge && (
                  <span className="text-[11px] px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold animate-pulse-glow border border-primary/20">
                    {item.badge}
                  </span>
                )}
              </div>

              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>

              {/* Card footer with arrow */}
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <motion.div
                  animate={hoveredIndex === idx ? { x: [0, 4, 0] } : { x: 0 }}
                  transition={{ duration: 1, repeat: hoveredIndex === idx ? Infinity : 0 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isHovered,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}) => {
  return (
    <motion.div
      animate={isHovered ? { y: -8 } : { y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-card border border-border/50 dark:border-border/30 relative z-20 transition-all duration-300",
        isHovered && "border-primary/40 shadow-xl shadow-primary/10",
        className
      )}
    >
      {/* Subtle glow overlay on hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none",
          isHovered && "opacity-100"
        )}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-lg text-foreground font-bold tracking-wide mt-2", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-muted-foreground tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
