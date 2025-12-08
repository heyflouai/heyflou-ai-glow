import React, { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface LogoLoopProps {
  logos: Array<{ name: string; icon?: React.ReactNode }>;
  speed?: number;
  hoverSpeed?: number;
  logoHeight?: number;
  gap?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  className?: string;
}

export function LogoLoop({
  logos,
  speed = 80,
  hoverSpeed = 0,
  logoHeight = 36,
  gap = 48,
  scaleOnHover = true,
  fadeOut = true,
  className,
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const currentSpeed = isHovering ? hoverSpeed : speed;

  const animate = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = timestamp;
    }

    const deltaTime = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    if (currentSpeed > 0) {
      setPosition((prev) => {
        const scrollWidth = scrollRef.current?.scrollWidth || 0;
        const halfWidth = scrollWidth / 2;
        const newPos = prev + (currentSpeed * deltaTime) / 1000;
        return newPos >= halfWidth ? 0 : newPos;
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [currentSpeed]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden w-full',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Partner logos"
    >
      {fadeOut && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </>
      )}
      
      <div
        ref={scrollRef}
        className="flex items-center"
        style={{
          gap: `${gap}px`,
          transform: `translateX(-${position}px)`,
          willChange: 'transform',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={cn(
              'flex items-center justify-center shrink-0 px-4 py-2 bg-muted/50 rounded-lg border border-border/50',
              'transition-all duration-300',
              scaleOnHover && 'hover:scale-110 hover:bg-muted hover:border-border'
            )}
            style={{ height: `${logoHeight}px` }}
          >
            {logo.icon && (
              <span className="mr-2 text-muted-foreground">{logo.icon}</span>
            )}
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
