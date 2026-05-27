"use client";
import { motion } from "framer-motion";
import { useId } from "react";
import { cn } from "@/lib/utils";

interface Point {
  lat: number;
  lng: number;
  label?: string;
}

interface WorldMapProps {
  points: Point[];
  /** Pairs of indexes into `points` to draw arcs between. */
  arcs?: Array<[number, number]>;
  dotColor?: string;
  lineColor?: string;
  pointColor?: string;
  labelColor?: string;
  className?: string;
}

// Equirectangular projection to 1000x500 viewBox.
const project = (lat: number, lng: number) => ({
  x: ((lng + 180) * 1000) / 360,
  y: ((90 - lat) * 500) / 180,
});

/**
 * Dotted world map with animated arcs between geographic points.
 * Lightweight: pure SVG, no external map libs.
 */
export function WorldMap({
  points,
  arcs = [],
  dotColor = "rgba(71, 85, 105, 0.55)",
  lineColor = "#A15BF1",
  pointColor = "#1FA6C1",
  labelColor = "#0F1729",
  className,
}: WorldMapProps) {
  const id = useId();

  // Generate a dot grid that loosely outlines continents using a noise mask.
  const cols = 80;
  const rows = 40;
  const dots: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c + 0.5) * (1000 / cols);
      const y = (r + 0.5) * (500 / rows);
      // Deterministic pseudo-random visibility to mimic land masses.
      const seed = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
      const n = seed - Math.floor(seed);
      if (n > 0.55) dots.push({ x, y });
    }
  }

  const arcPath = (a: Point, b: Point) => {
    const pa = project(a.lat, a.lng);
    const pb = project(b.lat, b.lng);
    const mx = (pa.x + pb.x) / 2;
    const my = (pa.y + pb.y) / 2 - Math.abs(pa.x - pb.x) * 0.35;
    return `M ${pa.x} ${pa.y} Q ${mx} ${my} ${pb.x} ${pb.y}`;
  };

  return (
    <div className={cn("w-full", className)}>
      <svg viewBox="0 0 1000 500" className="w-full h-auto">
        <defs>
          <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1FA6C1" />
            <stop offset="100%" stopColor="#A15BF1" />
          </linearGradient>
        </defs>

        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={2.2} fill={dotColor} />
        ))}

        {arcs.map(([i, j], k) => {
          const a = points[i];
          const b = points[j];
          if (!a || !b) return null;
          return (
            <motion.path
              key={k}
              d={arcPath(a, b)}
              fill="none"
              stroke={`url(#${id}-line)`}
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 + k * 0.4 }}
            />
          );
        })}

        {points.map((p, i) => {
          const { x, y } = project(p.lat, p.lng);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={6} fill={pointColor} />
              <motion.circle
                cx={x}
                cy={y}
                r={6}
                fill="none"
                stroke={pointColor}
                strokeWidth={2}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: i * 0.3 }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
              {p.label && (
                <text
                  x={x + 10}
                  y={y - 10}
                  fontSize={14}
                  fontWeight={700}
                  fill={labelColor}
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  {p.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}