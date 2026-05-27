"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CursorSpotlightProps {
  className?: string;
  /** CSS color or gradient stop color for the glow. */
  color?: string;
  /** Radius of the spotlight in px. */
  size?: number;
}

/**
 * A soft radial glow that follows the cursor within its parent.
 * Parent must have position: relative and overflow: hidden.
 */
export function CursorSpotlight({
  className,
  color = "rgba(31,166,193,0.18)",
  size = 420,
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300",
        className,
      )}
      style={{
        background: `radial-gradient(${size}px circle at var(--x, 50%) var(--y, 50%), ${color}, transparent 70%)`,
      }}
    />
  );
}