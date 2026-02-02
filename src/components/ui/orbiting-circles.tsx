"use client";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  /** Hide on mobile when set to true */
  hideOnMobile?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 50,
  path = true,
  hideOnMobile = false,
}: OrbitingCirclesProps) {
  const isMobile = useIsMobile();
  
  // Reduce radius on mobile for better fit
  const mobileRadius = Math.min(radius * 0.65, 120);
  const effectiveRadius = isMobile ? mobileRadius : radius;
  
  // Slow down animation for smoother performance
  const effectiveDuration = duration * 1.2;

  if (isMobile && hideOnMobile) {
    return null;
  }

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
          aria-hidden="true"
        >
          <circle
            className="stroke-border stroke-1 dark:stroke-border"
            cx="50%"
            cy="50%"
            r={effectiveRadius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": effectiveDuration,
            "--radius": effectiveRadius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-background/10 [animation-delay:calc(var(--delay)*1000ms)] will-change-transform",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

export default OrbitingCircles;
