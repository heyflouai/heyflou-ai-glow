import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient' | 'glow';
  container?: boolean;
  padding?: 'default' | 'large' | 'small' | 'hero' | 'none';
  id?: string;
}

const backgroundVariants = {
  default: 'bg-background',
  muted: 'bg-surface-secondary',
  gradient: 'hf-gradient',
  glow: 'bg-background hf-glow'
};

// Standardized spacing: Desktop 120px, Tablet 80px, Mobile 60px
const paddingVariants = {
  none: '',
  small: 'py-8 md:py-10 lg:py-16', // 32px / 40px / 64px
  default: 'py-[60px] md:py-20 lg:py-[120px]', // 60px / 80px / 120px - Standard section spacing
  large: 'py-[60px] md:py-20 lg:py-[120px]', // Same as default for consistency
  hero: 'pt-16 pb-[60px] md:pt-20 md:pb-20 lg:pb-[120px]', // Hero: 64px/60px mobile, 80px/80px tablet, 80px/120px desktop
};

export const Section = ({ 
  children, 
  className, 
  background = 'default',
  container = true,
  padding = 'default',
  id
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        backgroundVariants[background],
        paddingVariants[padding],
        'transition-colors duration-300',
        className
      )}
    >
      {container ? (
        <div className="service-container mx-auto">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};
