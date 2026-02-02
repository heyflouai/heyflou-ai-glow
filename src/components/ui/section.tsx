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

// Standardized spacing: Desktop 120px, Mobile 80px
const paddingVariants = {
  none: '',
  small: 'py-10 md:py-16', // 40px / 64px
  default: 'py-20 md:py-[120px]', // 80px / 120px - Standard section spacing
  large: 'py-20 md:py-[120px]', // Same as default for consistency
  hero: 'pt-20 pb-[120px] md:pt-20 md:pb-[120px]', // Hero: 80px top, 120px bottom
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
