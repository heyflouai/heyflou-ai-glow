"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const BRAND_GRADIENT = "linear-gradient(135deg, #1FA6C1, #A15BF1)";

interface GradientMovingButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  /** Inner pill background — defaults to brand gradient. Pass "white" for inverse. */
  background?: string;
  /** Inner text color */
  color?: string;
  duration?: number;
  borderRadius?: string;
  onClick?: () => void;
}

export function GradientMovingButton({
  children,
  to,
  href,
  className,
  background = BRAND_GRADIENT,
  color = "#ffffff",
  duration = 3000,
  borderRadius = "10px",
  onClick,
}: GradientMovingButtonProps) {
  const Inner = (
    <span
      className={cn(
        "relative inline-block bg-transparent p-[2px] overflow-hidden",
      )}
      style={{ borderRadius }}
    >
      <span
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingTrail duration={duration} color={color} />
      </span>
      <span
        className={cn(
          "relative inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] text-[15px] transition-transform duration-200 hover:scale-[1.02]",
          className,
        )}
        style={{
          background,
          color,
          borderRadius: `calc(${borderRadius} * 0.96)`,
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
        }}
      >
        {children}
      </span>
    </span>
  );

  if (to) return <Link to={to} onClick={onClick}>{Inner}</Link>;
  if (href) return <a href={href} onClick={onClick}>{Inner}</a>;
  return <button onClick={onClick} type="button">{Inner}</button>;
}

function MovingTrail({ duration, color }: { duration: number; color: string }) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect fill="none" width="100%" height="100%" rx="30%" ry="30%" ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        <div
          className="h-16 w-16 opacity-90 rounded-full"
          style={{
            background: `radial-gradient(${color} 30%, transparent 60%)`,
          }}
        />
      </motion.div>
    </>
  );
}