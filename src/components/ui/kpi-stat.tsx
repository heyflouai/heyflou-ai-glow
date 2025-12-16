import { cn } from '@/lib/utils';
import { NumberTicker, parseMetricValue } from '@/components/ui/number-ticker';

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
  const { numericValue, prefix, suffix } = parseMetricValue(value);

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
      <div className="text-3xl font-bold font-display text-foreground mb-2">
        {animated ? (
          <NumberTicker
            value={numericValue}
            prefix={prefix}
            suffix={suffix}
            delay={0.2}
          />
        ) : (
          value
        )}
      </div>
      <div className="text-sm font-semibold text-foreground/90 mb-1">
        {label}
      </div>
      <div className="text-sm text-muted-foreground">
        {description}
      </div>
    </div>
  );
};