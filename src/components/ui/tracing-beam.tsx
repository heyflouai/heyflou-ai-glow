"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className }: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      if (ref.current) setSvgHeight(ref.current.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      {/* Beam rail — hidden on small screens to preserve layout */}
      <div
        className="pointer-events-none absolute left-4 top-0 hidden md:block"
        style={{ height: svgHeight }}
        aria-hidden
      >
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(31,166,193,0.35) 0px 0px 0px 4px, rgba(31,166,193,0.2) 0px 0px 12px 4px",
          }}
          className="ml-[27px] flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border border-[#1FA6C1]/40 shadow-sm"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#1FA6C1",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#A15BF1",
            }}
            className="h-2 w-2 rounded-full border bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          aria-hidden
          className="ml-4 block"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#E2E8F0"
            strokeOpacity="0.9"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#tracing-grad)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient
              id="tracing-grad"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#1FA6C1" stopOpacity="0" />
              <stop stopColor="#1FA6C1" />
              <stop offset="0.325" stopColor="#A15BF1" />
              <stop offset="1" stopColor="#A15BF1" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div className="md:pl-12">{children}</div>
    </div>
  );
}