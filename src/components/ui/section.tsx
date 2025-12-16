import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient' | 'glow';
  container?: boolean;
  padding?: 'default' | 'large' | 'small';
  id?: string;
}

const backgroundVariants = {
  default: 'bg-background',
  muted: 'bg-surface-secondary',
  gradient: 'hf-gradient',
  glow: 'bg-background hf-glow'
};

const paddingVariants = {
  small: 'py-12',
  default: 'py-16 lg:py-24',
  large: 'py-20 lg:py-32'
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};