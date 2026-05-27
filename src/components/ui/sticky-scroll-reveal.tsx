"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: { title: string; description: string; icon?: React.ReactNode }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveCard(closest);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [content.length]);

  return (
    <div className="relative flex justify-center gap-10 px-4">
      <div className="max-w-2xl w-full">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="min-h-[60vh] flex flex-col justify-center py-10"
          >
            <motion.h3
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold text-[#0F1729]"
            >
              {item.title}
            </motion.h3>
            <motion.p
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
              className="text-[16px] mt-4 max-w-md text-[#2B3650] leading-[1.6]"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
      <div className="hidden lg:block w-80 shrink-0">
        <div
          className={cn(
            "h-60 w-80 rounded-md bg-gradient-to-br from-[#1FA6C1] to-[#A15BF1] sticky top-1/2 -translate-y-1/2 overflow-hidden flex items-center justify-center text-white",
            contentClassName,
          )}
        >
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {content[activeCard]?.icon ?? (
              <span className="text-5xl font-bold opacity-30">{activeCard + 1}</span>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};