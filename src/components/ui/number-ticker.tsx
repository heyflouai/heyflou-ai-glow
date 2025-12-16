"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction, hasAnimated]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix +
          Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces))) +
          suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, decimalPlaces, prefix, suffix]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums tracking-tight",
        className
      )}
      ref={ref}
    >
      {prefix}
      {direction === "down" ? value : 0}
      {suffix}
    </span>
  );
}

// Helper to parse metric values like "91%", "20+", "$2K"
export function parseMetricValue(value: string): {
  numericValue: number;
  prefix: string;
  suffix: string;
} {
  // Handle "$2K" format
  if (value.startsWith("$") && value.endsWith("K")) {
    return {
      numericValue: parseFloat(value.slice(1, -1)),
      prefix: "$",
      suffix: "K",
    };
  }
  
  // Handle "20+" format
  if (value.endsWith("+")) {
    return {
      numericValue: parseFloat(value.slice(0, -1)),
      prefix: "",
      suffix: "+",
    };
  }
  
  // Handle "91%" format
  if (value.endsWith("%")) {
    return {
      numericValue: parseFloat(value.slice(0, -1)),
      prefix: "",
      suffix: "%",
    };
  }
  
  // Default case - just a number
  return {
    numericValue: parseFloat(value) || 0,
    prefix: "",
    suffix: "",
  };
}
