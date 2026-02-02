"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, ReactNode } from "react";

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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={`Navigate to ${item.title}`}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/10 dark:bg-primary/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
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
            whileHover={{ y: -4 }}
          >
            <Card>
              <div className="flex items-center gap-3 mb-4">
                {item.icon && (
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                )}
                {item.badge && (
                  <span className="ml-auto text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium animate-pulse">
                    {item.badge}
                  </span>
                )}
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
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
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-card border border-border/50 dark:border-border/30 group-hover:border-primary/30 relative z-20 transition-all duration-200",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
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
    <h4 className={cn("text-foreground font-bold tracking-wide mt-2", className)}>
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
        "mt-4 text-muted-foreground tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
