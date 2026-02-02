"use client";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

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
  /** Show dashed orbit path */
  dashedPath?: boolean;
  /** Glow effect on path */
  glowPath?: boolean;
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
  dashedPath = false,
  glowPath = false,
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
          {/* Glow effect for path */}
          {glowPath && (
            <circle
              className="stroke-primary/20"
              cx="50%"
              cy="50%"
              r={effectiveRadius}
              fill="none"
              strokeWidth="4"
              style={{ filter: "blur(4px)" }}
            />
          )}
          <circle
            className={cn(
              "stroke-1",
              dashedPath 
                ? "stroke-border/60 dark:stroke-border/40" 
                : "stroke-border stroke-1 dark:stroke-border"
            )}
            cx="50%"
            cy="50%"
            r={effectiveRadius}
            fill="none"
            strokeDasharray={dashedPath ? "6 6" : undefined}
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

// Enhanced Integration Icon with hover tooltip
interface IntegrationIconProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

export function IntegrationIcon({ icon, name, className }: IntegrationIconProps) {
  return (
    <motion.div 
      className={cn(
        "group/icon relative flex items-center justify-center rounded-full bg-background p-2 border border-border cursor-pointer",
        "shadow-md hover:shadow-xl hover:shadow-primary/20",
        "transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.2, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        <div className="bg-popover text-popover-foreground text-xs font-medium px-2 py-1 rounded-md shadow-lg whitespace-nowrap border border-border">
          {name}
        </div>
      </div>
    </motion.div>
  );
}

// Center logo with glow effect
interface CenterLogoProps {
  logo: string;
  alt: string;
  className?: string;
}

export function CenterLogo({ logo, alt, className }: CenterLogoProps) {
  return (
    <div className={cn("relative z-10", className)}>
      {/* Animated glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-hf-teal via-hf-purple to-hf-sky opacity-40 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Logo container */}
      <motion.div 
        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background shadow-lg"
        animate={{
          boxShadow: [
            "0 0 20px hsl(var(--primary) / 0.2)",
            "0 0 40px hsl(var(--primary) / 0.3)",
            "0 0 20px hsl(var(--primary) / 0.2)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={logo} alt={alt} className="h-12 w-auto" />
      </motion.div>
    </div>
  );
}

// Radial background for integrations section
export function IntegrationsBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      {children}
    </div>
  );
}

// Animated underline for section headers
interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedUnderline({ children, className }: AnimatedUnderlineProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-hf-teal via-hf-purple to-hf-sky"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />
    </span>
  );
}

export default OrbitingCircles;
