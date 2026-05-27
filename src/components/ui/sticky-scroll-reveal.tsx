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
    <div className="relative flex justify-center px-4">
      <div className="max-w-4xl w-full">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="min-h-[60vh] flex flex-col justify-center py-10"
          >
            <motion.div
              animate={{ opacity: activeCard === index ? 1 : 0.35 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-6"
            >
              {item.icon && (
                <div className="shrink-0 flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-[#1FA6C1] to-[#A15BF1] text-white">
                  {item.icon}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-[32px] md:text-[44px] leading-[1.15] font-bold text-[#0F1729]">
                  {item.title}
                </h3>
                <p className="text-[20px] md:text-[22px] mt-5 max-w-2xl text-[#2B3650] leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};