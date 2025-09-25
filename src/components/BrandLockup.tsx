import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/heyflou-logo-new.png';

interface BrandLockupProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizeConfig = {
  sm: { logo: 'h-5 w-5', text: 'text-base' },
  md: { logo: 'h-6 w-6 md:h-7 md:w-7', text: 'text-lg md:text-xl' },
  lg: { logo: 'h-8 w-8', text: 'text-xl' }
};

export const BrandLockup = ({ 
  className, 
  size = 'md',
  showText = true 
}: BrandLockupProps) => {
  const config = sizeConfig[size];
  
  return (
    <Link 
      to="/" 
      className={cn(
        "flex items-center space-x-2 font-display font-bold transition-opacity hover:opacity-75",
        className
      )}
    >
      <img 
        src={logoImage} 
        alt="HeyFlou AI consulting logo" 
        className={cn("object-contain", config.logo)}
      />
      {showText && (
        <span className={cn("text-hf-ink", config.text)}>
          HeyFlou
        </span>
      )}
    </Link>
  );
};