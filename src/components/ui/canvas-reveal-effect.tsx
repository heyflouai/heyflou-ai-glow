"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CanvasRevealEffectProps {
  /** Spacing between dots in px. */
  dotSize?: number;
  /** Animation speed multiplier. */
  animationSpeed?: number;
  /** Two RGB color triplets for the dot gradient. */
  colors?: [number, number, number][];
  className?: string;
  /** Container background — visible behind dots. */
  containerClassName?: string;
  /** Whether the reveal is active (hovered). */
  active?: boolean;
}

/**
 * Lightweight CSS-based dot-grid reveal — no WebGL.
 * Dots fade in from the center outward when `active` is true.
 */
export function CanvasRevealEffect({
  dotSize = 16,
  animationSpeed = 0.4,
  colors = [
    [31, 166, 193],
    [161, 91, 241],
  ],
  className,
  containerClassName,
  active = false,
}: CanvasRevealEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(() => {
      if (ref.current) setSize({ w: ref.current.offsetWidth, h: ref.current.offsetHeight });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const cols = Math.max(1, Math.floor(size.w / dotSize));
  const rows = Math.max(1, Math.floor(size.h / dotSize));
  const total = cols * rows;
  const centerC = cols / 2;
  const centerR = rows / 2;
  const maxDist = Math.sqrt(centerC * centerC + centerR * centerR);

  const dots = useMemo(() => {
    const arr: { x: number; y: number; delay: number; color: string }[] = [];
    for (let i = 0; i < total; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const dist = Math.sqrt((c - centerC) ** 2 + (r - centerR) ** 2);
      const delay = (dist / maxDist) * (1 / animationSpeed);
      const colorPick = colors[(c + r) % colors.length];
      arr.push({
        x: c * dotSize + dotSize / 2,
        y: r * dotSize + dotSize / 2,
        delay,
        color: `rgb(${colorPick.join(",")})`,
      });
    }
    return arr;
  }, [total, cols, dotSize, centerC, centerR, maxDist, animationSpeed, colors]);

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden", containerClassName)}
      aria-hidden
    >
      <AnimatePresence>
        {active && (
          <motion.svg
            key="dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            width={size.w}
            height={size.h}
            className={cn("block", className)}
          >
            {dots.map((d, i) => (
              <motion.circle
                key={i}
                cx={d.x}
                cy={d.y}
                r={1.5}
                fill={d.color}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.9, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: d.delay, ease: "easeOut" }}
              />
            ))}
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}