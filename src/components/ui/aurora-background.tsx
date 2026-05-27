"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
}: {
  className?: string;
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_7%,transparent_10%,transparent_12%,rgba(255,255,255,0.08)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_7%,transparent_10%,transparent_12%,rgba(0,0,0,0.5)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#1FA6C1_10%,#5CB3E8_15%,#A15BF1_20%,#9D8FE3_25%,#1FA6C1_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0
            after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform animate-aurora`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};
