import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface FocusCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FocusCardsProps {
  cards: FocusCard[];
  className?: string;
}

export function FocusCards({ cards, className }: FocusCardsProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-0",
        className
      )}
    >
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isFocused = focusedIndex === index;
        const isBlurred = focusedIndex !== null && focusedIndex !== index;

        return (
          <motion.div
            key={index}
            className={cn(
              "relative group cursor-pointer rounded-2xl p-5 md:p-6 lg:p-8",
              "bg-card border border-border/50",
              "transition-all duration-300 ease-out",
              "min-h-[140px] md:min-h-[160px]", // Ensure min height
              isFocused && "border-primary/50 shadow-lg shadow-primary/10",
              // Reduced blur effect on mobile for better readability
              isBlurred && "opacity-60 md:opacity-40 scale-[0.99] md:scale-[0.98]",
              // Mobile tap feedback
              "active:scale-[0.98] md:active:scale-100"
            )}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
            onTouchStart={() => setFocusedIndex(index)}
            onTouchEnd={() => setTimeout(() => setFocusedIndex(null), 300)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Icon */}
            <motion.div
              className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 md:mb-4",
                "bg-gradient-to-br from-hf-teal/20 via-hf-purple/20 to-hf-sky/20",
                "transition-all duration-300",
                isFocused && "from-hf-teal/30 via-hf-purple/30 to-hf-sky/30 scale-105 md:scale-110"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 md:w-6 md:h-6 transition-colors duration-300",
                isFocused ? "text-primary" : "text-muted-foreground"
              )} />
            </motion.div>

            {/* Title */}
            <h3 className={cn(
              "text-base md:text-lg lg:text-xl font-semibold font-display mb-2 md:mb-3 transition-colors duration-300 leading-snug",
              isFocused ? "text-foreground" : "text-foreground/80"
            )}>
              {card.title}
            </h3>

            {/* Description - Expand on focus */}
            <AnimatePresence mode="wait">
              <motion.p
                key={isFocused ? 'expanded' : 'collapsed'}
                className={cn(
                  "text-sm md:text-base leading-relaxed",
                  isFocused ? "text-muted-foreground" : "text-muted-foreground/70"
                )}
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                }}
                transition={{ duration: 0.2 }}
              >
                {card.description}
              </motion.p>
            </AnimatePresence>

            {/* Gradient border on hover */}
            <motion.div
              className={cn(
                "absolute inset-0 rounded-2xl pointer-events-none",
                "bg-gradient-to-br from-hf-teal/0 via-hf-purple/0 to-hf-sky/0",
                "transition-opacity duration-300",
                isFocused && "from-hf-teal/10 via-hf-purple/5 to-hf-sky/10 opacity-100"
              )}
              style={{ 
                opacity: isFocused ? 1 : 0,
                zIndex: -1 
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

// Simplified version for single highlight cards (like Coming Soon)
interface SimpleFocusCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function SimpleFocusCard({ icon: Icon, title, description, className }: SimpleFocusCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl p-6 md:p-8 lg:p-10",
        "bg-card border border-border/50",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        "transition-all duration-300",
        "active:scale-[0.98] md:active:scale-100",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-hf-teal/20 via-hf-purple/20 to-hf-sky/20 flex items-center justify-center mb-4 md:mb-6">
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
        </div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-display text-foreground mb-3 md:mb-4">
          {title}
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
