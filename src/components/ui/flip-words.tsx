import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    if (words.length <= 1) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(false);
    }, 200);
  }, [words.length]);

  useEffect(() => {
    if (words.length <= 1) return;
    
    const interval = setInterval(() => {
      startAnimation();
    }, duration);

    return () => clearInterval(interval);
  }, [duration, startAnimation, words.length]);

  // For single word, just show with entrance animation
  if (words.length === 1) {
    return (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "inline-block bg-gradient-to-r from-hf-teal via-hf-purple to-hf-sky bg-clip-text text-transparent",
          className
        )}
      >
        {words[0]}
      </motion.span>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{
          opacity: 0,
          y: 10,
          rotateX: 90,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          y: -10,
          rotateX: -90,
          filter: "blur(8px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "inline-block bg-gradient-to-r from-hf-teal via-hf-purple to-hf-sky bg-clip-text text-transparent",
          // Reduce animation intensity on mobile
          "motion-reduce:transform-none",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  );
};
