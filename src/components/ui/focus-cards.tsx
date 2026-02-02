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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
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
              "relative group cursor-pointer rounded-2xl p-6 md:p-8",
              "bg-card border border-border/50",
              "transition-all duration-300 ease-out",
              isFocused && "border-primary/50 shadow-lg shadow-primary/10",
              isBlurred && "opacity-40 scale-[0.98]"
            )}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Icon */}
            <motion.div
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                "bg-gradient-to-br from-hf-teal/20 via-hf-purple/20 to-hf-sky/20",
                "transition-all duration-300",
                isFocused && "from-hf-teal/30 via-hf-purple/30 to-hf-sky/30 scale-110"
              )}
            >
              <Icon className={cn(
                "w-6 h-6 transition-colors duration-300",
                isFocused ? "text-primary" : "text-muted-foreground"
              )} />
            </motion.div>

            {/* Title */}
            <h3 className={cn(
              "text-lg md:text-xl font-semibold font-display mb-3 transition-colors duration-300",
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
        "relative rounded-2xl p-8 md:p-10",
        "bg-card border border-border/50",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        "transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-hf-teal/20 via-hf-purple/20 to-hf-sky/20 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold font-display text-foreground mb-4">
          {title}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
