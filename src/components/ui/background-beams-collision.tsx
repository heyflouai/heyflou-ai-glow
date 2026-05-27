"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Beam = {
  initialX: number;
  translateX: number;
  duration: number;
  repeatDelay: number;
  delay?: number;
  className?: string;
};

const BEAMS: Beam[] = [
  { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
  { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
  { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
  { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
  { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
  { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
  { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
];

interface CollisionMechanismProps {
  containerRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement>;
  beamOptions: Beam;
}

function CollisionMechanism({ containerRef, parentRef, beamOptions }: CollisionMechanismProps) {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{ detected: boolean; coordinates: { x: number; y: number } | null }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const check = () => {
      if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();
        if (beamRect.bottom >= containerRect.top) {
          const relX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relY = beamRect.bottom - parentRect.top;
          setCollision({ detected: true, coordinates: { x: relX, y: relY } });
          setCycleCollisionDetected(true);
        }
      }
    };
    const id = setInterval(check, 50);
    return () => clearInterval(id);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const t1 = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);
      const t2 = setTimeout(() => setBeamKey((k) => k + 1), 2000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{ translateY: "-200px", translateX: beamOptions.initialX || "0px", rotate: 0 }}
        variants={{
          animate: {
            translateY: "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-[#1FA6C1] via-[#A15BF1] to-transparent",
          beamOptions.className,
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`explosion-${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Explosion({ style }: { style: React.CSSProperties }) {
  const spans = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    dx: Math.floor(Math.random() * 80 - 40),
    dy: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div className="absolute z-50 h-2 w-2" style={style}>
      <motion.div
        initial={{ opacity: 0.7, scale: 0 }}
        animate={{ opacity: 1, scale: 1.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-[#5CB3E8] to-transparent blur-sm"
      />
      {spans.map((s) => (
        <motion.span
          key={s.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: s.dx, y: s.dy, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-[#1FA6C1] to-[#A15BF1]"
        />
      ))}
    </div>
  );
}

interface BackgroundBeamsCollisionProps {
  children?: React.ReactNode;
  className?: string;
}

export function BackgroundBeamsWithCollision({ children, className }: BackgroundBeamsCollisionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={parentRef} className={cn("relative overflow-hidden", className)}>
      {BEAMS.map((b, i) => (
        <CollisionMechanism
          key={`beam-${i}`}
          containerRef={containerRef}
          parentRef={parentRef}
          beamOptions={b}
        />
      ))}
      <div className="relative z-10">{children}</div>
      <div
        ref={containerRef}
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px w-full bg-transparent"
        style={{
          boxShadow:
            "0 0 24px rgba(31,166,193,0.0), 0 0 0 1px rgba(255,255,255,0.0)",
        }}
      />
    </div>
  );
}