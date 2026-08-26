"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  delay = 0,
  className,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const formattedValue =
    prefix +
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(value) +
    suffix;

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(
        "inline-block tabular-nums tracking-tight",
        className
      )}
    >
      {formattedValue}
    </motion.span>
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
