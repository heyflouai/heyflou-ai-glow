import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export const BentoGrid = ({
  className,
  children,
}: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  index?: number;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index = 0,
}: BentoGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition-shadow duration-200 shadow-input dark:shadow-none p-4 bg-card border border-border/50 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-foreground mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-sm">
          {description}
        </div>
      </div>
    </motion.div>
  );
};