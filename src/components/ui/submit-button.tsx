import * as React from "react";
import { Loader2 } from "lucide-react";
import { GradientButton, type ButtonProps } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";

interface SubmitButtonProps extends ButtonProps {
  /** Whether the form is currently submitting */
  isSubmitting?: boolean;
  /** Text to show while submitting (default: "Sending...") */
  loadingText?: string;
  /** Default button text */
  children: React.ReactNode;
}

/**
 * Consistent submit button with loading state
 * 
 * Features:
 * - Spinner animation while submitting
 * - Disabled state to prevent double-submit
 * - Consistent "Sending..." text
 * - Subtle scale animation on loading
 */
export function SubmitButton({
  isSubmitting = false,
  loadingText = "Sending...",
  children,
  className,
  disabled,
  ...props
}: SubmitButtonProps) {
  return (
    <GradientButton
      type="submit"
      disabled={disabled || isSubmitting}
      className={cn(
        "relative transition-all duration-200",
        isSubmitting && "cursor-wait",
        className
      )}
      {...props}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </GradientButton>
  );
}
