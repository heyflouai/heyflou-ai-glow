"use client";
import { forwardRef, useEffect, useId, useRef, useState, RefObject } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MessageSquare, CalendarCheck, BellRing, Megaphone, Target, BarChart3, BrainCircuit } from "lucide-react";
import { useTranslation } from "@/i18n";

const TEAL = "#00B4B4";
const PURPLE = "#7B5EA7";

// Dispatch beam: curved path from center outward with a glowing particle traveling along it
const DispatchBeam = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  color = TEAL,
  delay = 0,
  duration = 3,
}: {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  color?: string;
  delay?: number;
  duration?: number;
}) => {
  const uid = useId().replace(/:/g, "");
  const pathId = `dp-${uid}`;
  const gradId = `dg-${uid}`;
  const [pathD, setPathD] = useState("");
  const [dims, setDims] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      const c = containerRef.current;
      const a = fromRef.current;
      const b = toRef.current;
      if (!c || !a || !b) return;
      const cr = c.getBoundingClientRect();
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      setDims({ width: cr.width, height: cr.height });
      const sx = ar.left - cr.left + ar.width / 2;
      const sy = ar.top - cr.top + ar.height / 2;
      const ex = br.left - cr.left + br.width / 2;
      const ey = br.top - cr.top + br.height / 2;
      // perpendicular curvature for a gentle arc
      const mx = (sx + ex) / 2;
      const my = (sy + ey) / 2;
      const dx = ex - sx;
      const dy = ey - sy;
      const len = Math.max(1, Math.hypot(dx, dy));
      const nx = -dy / len;
      const ny = dx / len;
      const cxp = mx + nx * curvature;
      const cyp = my + ny * curvature;
      setPathD(`M ${sx},${sy} Q ${cxp},${cyp} ${ex},${ey}`);
    };
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    update();
    return () => ro.disconnect();
  }, [containerRef, fromRef, toRef, curvature]);

  return (
    <svg
      width={dims.width}
      height={dims.height}
      className="pointer-events-none absolute left-0 top-0 transform-gpu"
      fill="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.05" />
          <stop offset="50%" stopColor={color} stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path
        id={pathId}
        d={pathD}
        stroke={`url(#${gradId})`}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      {pathD && (
        <>
          <circle r={3.5} fill={color} opacity={0.95}>
            <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} rotate="auto">
              <mpath href={`#${pathId}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} />
          </circle>
          <circle r={6} fill={color} opacity={0.25}>
            <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`}>
              <mpath href={`#${pathId}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.35;0.35;0" dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} />
          </circle>
        </>
      )}
    </svg>
  );
};

const OuterNode = forwardRef<
  HTMLDivElement,
  { icon: React.ElementType; label: string; color: string; className?: string }
>(({ icon: IconCmp, label, color, className }, ref) => (
  <div className={cn("flex flex-col items-center gap-1.5 md:gap-2", className)}>
    <div
      ref={ref}
      className="z-10 flex items-center justify-center rounded-full border-2 bg-slate-900/80 backdrop-blur-sm p-3 md:p-3.5 shadow-[0_0_20px_-6px_rgba(0,180,180,0.4)] transition-transform hover:scale-105"
      style={{ borderColor: color, boxShadow: `0 0 18px -4px ${color}66` }}
    >
      <IconCmp className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2} />
    </div>
    <span className="text-[10px] md:text-xs font-medium text-center leading-tight text-slate-300 max-w-[88px] md:max-w-[100px]">
      {label}
    </span>
  </div>
));
OuterNode.displayName = "OuterNode";

const CenterNode = forwardRef<HTMLDivElement, { label: string }>(({ label }, ref) => (
  <div className="flex flex-col items-center gap-2 md:gap-2.5">
    <div className="relative">
      {/* Pulsing aura */}
      <span
        className="absolute inset-0 rounded-full animate-ping-slow"
        style={{ background: "radial-gradient(circle, rgba(0,180,180,0.45) 0%, transparent 70%)" }}
        aria-hidden
      />
      <span
        className="absolute -inset-3 rounded-full animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(123,94,167,0.25) 0%, transparent 65%)" }}
        aria-hidden
      />
      <div
        ref={ref}
        className="relative z-10 flex items-center justify-center rounded-full border-2 p-5 md:p-7"
        style={{
          background: "linear-gradient(135deg, #1A3A6B 0%, #00B4B4 100%)",
          borderColor: "rgba(0,180,180,0.55)",
          boxShadow: "0 0 40px 0 rgba(0,180,180,0.45), inset 0 0 20px rgba(255,255,255,0.08)",
        }}
      >
        <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" strokeWidth={1.75} />
      </div>
    </div>
    <span className="text-xs md:text-sm font-semibold text-center leading-tight text-white">
      {label}
    </span>
  </div>
));
CenterNode.displayName = "CenterNode";

export function HeroWorkflow() {
  const t = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const n0 = useRef<HTMLDivElement>(null);
  const n1 = useRef<HTMLDivElement>(null);
  const n2 = useRef<HTMLDivElement>(null);
  const n3 = useRef<HTMLDivElement>(null);
  const n4 = useRef<HTMLDivElement>(null);
  const n5 = useRef<HTMLDivElement>(null);

  const nodes = [
    { ref: n0, icon: MessageSquare, label: t.homepage.workflowChatbot, color: TEAL },
    { ref: n1, icon: CalendarCheck, label: t.homepage.workflowAppointments, color: PURPLE },
    { ref: n2, icon: BellRing, label: t.homepage.workflowReminders, color: TEAL },
    { ref: n3, icon: Megaphone, label: t.homepage.workflowConfirmations, color: PURPLE },
    { ref: n4, icon: Target, label: (t.homepage as any).workflowLeads ?? "Qualifies Leads", color: TEAL },
    { ref: n5, icon: BarChart3, label: (t.homepage as any).workflowReports ?? "Delivers Reports", color: PURPLE },
  ];

  // Radial positions (desktop): 6 evenly spaced around the center
  // angles in degrees, 0 = right; we start at top (-90) and go clockwise
  const RADIUS = 38; // % of container
  const positions = [-90, -30, 30, 90, 150, 210].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      left: `calc(50% + ${Math.cos(rad) * RADIUS}% )`,
      top: `calc(50% + ${Math.sin(rad) * RADIUS}% )`,
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-xl mx-auto mt-10 md:mt-14"
    >
      {/* DESKTOP — Radial command-center layout */}
      <div
        ref={containerRef}
        className="hidden md:block relative rounded-2xl border border-border/30 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 backdrop-blur-sm overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
      >
        {/* faint grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,180,180,0.6) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <CenterNode ref={centerRef} label={t.homepage.workflowYourBusiness} />
        </div>

        {/* Outer nodes */}
        {nodes.map((n, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: positions[i].left, top: positions[i].top }}
          >
            <OuterNode ref={n.ref} icon={n.icon} label={n.label} color={n.color} />
          </div>
        ))}

        {/* Dispatch beams: center → each outer node, particles travel outward */}
        {nodes.map((n, i) => (
          <DispatchBeam
            key={`beam-${i}`}
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={n.ref}
            curvature={18}
            color={n.color}
            delay={i * 0.5}
            duration={3.2}
          />
        ))}
      </div>

      {/* MOBILE — Center on top + 2x3 grid (no radial / no beams) */}
      <div className="md:hidden rounded-2xl border border-border/30 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 backdrop-blur-sm p-5">
        <div className="flex justify-center mb-6">
          <CenterNode label={t.homepage.workflowYourBusiness} />
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 place-items-center">
          {nodes.map((n, i) => (
            <OuterNode key={i} icon={n.icon} label={n.label} color={n.color} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
