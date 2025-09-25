import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import horizontalLogo from '@/assets/heyflou_logo_lockup_horizontal.png';
import stackedLogo from '@/assets/heyflou_logo_lockup_stacked.png';

interface BrandLockupProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'auto';
  height?: string;
}

export const BrandLockup = ({ 
  className, 
  variant = 'auto',
  height = 'h-12'
}: BrandLockupProps) => {
  const logoSrc = variant === 'stacked' ? stackedLogo : 
                  variant === 'horizontal' ? horizontalLogo : 
                  horizontalLogo; // Default to horizontal for auto
  
  return (
    <Link 
      to="/" 
      className={cn(
        "block transition-opacity hover:opacity-75",
        className
      )}
    >
      {variant === 'auto' ? (
        <>
          {/* Show horizontal on larger screens */}
          <img 
            src={horizontalLogo} 
            alt="HeyFlou logo" 
            className={cn("object-contain hidden sm:block", height)}
          />
          {/* Show stacked on mobile */}
          <img 
            src={stackedLogo} 
            alt="HeyFlou logo" 
            className={cn("object-contain block sm:hidden", height)}
          />
        </>
      ) : (
        <img 
          src={logoSrc} 
          alt="HeyFlou logo" 
          className={cn("object-contain", height)}
        />
      )}
    </Link>
  );
};