import * as React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Standardized icon sizes following the design system
 * sm: 20px - For inline text, small buttons
 * md: 24px - Default, most UI elements
 * lg: 32px - Feature cards, emphasis
 * xl: 40px - Hero sections, large cards
 */
const iconSizes = {
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
} as const;

type IconSize = keyof typeof iconSizes;

interface IconProps extends Omit<LucideProps, "size"> {
  /** The Lucide icon component to render */
  icon: LucideIcon;
  /** Standardized size: sm (20px), md (24px), lg (32px), xl (40px) */
  size?: IconSize;
  /** Custom className for additional styling */
  className?: string;
}

/**
 * Icon wrapper component for consistent icon styling across the app
 * 
 * @example
 * import { Icon } from "@/components/ui/icon";
 * import { Mail } from "lucide-react";
 * 
 * <Icon icon={Mail} size="md" />
 * <Icon icon={Mail} size="lg" className="text-primary" />
 */
export function Icon({ 
  icon: LucideIcon, 
  size = "md", 
  className,
  strokeWidth = 2,
  ...props 
}: IconProps) {
  const pixelSize = iconSizes[size];
  
  return (
    <LucideIcon
      size={pixelSize}
      strokeWidth={strokeWidth}
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}

/**
 * Hook to get icon size value for custom implementations
 */
export function useIconSize(size: IconSize = "md"): number {
  return iconSizes[size];
}

export { iconSizes, type IconSize, type IconProps };
