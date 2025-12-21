import * as React from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormAlertProps {
  type: "success" | "error";
  title: string;
  message?: string;
  onDismiss?: () => void;
  className?: string;
}

/**
 * Inline form alert for success/error feedback
 * 
 * Used as a fallback/complement to toast notifications
 * Provides persistent, accessible feedback within the form
 */
export function FormAlert({
  type,
  title,
  message,
  onDismiss,
  className,
}: FormAlertProps) {
  const Icon = type === "success" ? CheckCircle : AlertCircle;
  
  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border animate-fade-in",
        type === "success" && "bg-hf-teal/10 border-hf-teal/30 text-hf-teal",
        type === "error" && "bg-destructive/10 border-destructive/30 text-destructive",
        className
      )}
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm">{title}</p>
        {message && (
          <p className={cn(
            "text-sm mt-1",
            type === "success" && "text-hf-teal/80",
            type === "error" && "text-destructive/80"
          )}>
            {message}
          </p>
        )}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className={cn(
            "shrink-0 p-1 rounded-md transition-colors",
            type === "success" && "hover:bg-hf-teal/20",
            type === "error" && "hover:bg-destructive/20"
          )}
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
