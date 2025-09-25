import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface KpiStatProps {
  value: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export const KpiStat = ({ 
  value, 
  label, 
  description, 
  icon,
  className,
  animated = true 
}: KpiStatProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsVisible(true), 200);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [animated]);

  return (
    <div className={cn(
      "bg-card border border-border rounded-xl p-6 hf-shadow group hover:hf-shadow-lg transition-all duration-300",
      "hover:scale-[1.02] hover:border-hf-teal/20",
      className
    )}>
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-hf-teal/10 to-hf-purple/10 text-hf-teal group-hover:from-hf-teal/20 group-hover:to-hf-purple/20 transition-all duration-300">
          {icon}
        </div>
      )}
      <div className={cn(
        "text-3xl font-bold font-display text-hf-ink mb-2 transition-all duration-700",
        isVisible ? "animate-counter" : "opacity-0"
      )}>
        {value}
      </div>
      <div className="text-sm font-semibold text-hf-navy mb-1">
        {label}
      </div>
      <div className="text-sm text-muted-foreground">
        {description}
      </div>
    </div>
  );
};