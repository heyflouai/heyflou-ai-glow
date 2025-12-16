"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
  className?: string;
}

export const AnimatedThemeToggler = ({ 
  theme, 
  onToggle, 
  className 
}: AnimatedThemeTogglerProps) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative flex items-center justify-center w-10 h-10 rounded-full",
        "border border-border hover:bg-muted",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-hf-teal/50",
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="relative w-5 h-5"
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Sun */}
        <motion.svg
          className="absolute inset-0 text-amber-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <circle cx="12" cy="12" r="4" />
          <motion.g
            initial={false}
            animate={{ rotate: isDark ? -45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </motion.g>
        </motion.svg>

        {/* Moon */}
        <motion.svg
          className="absolute inset-0 text-indigo-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <motion.g
            initial={false}
            animate={{ 
              opacity: isDark ? [0, 1] : 0,
              scale: isDark ? [0.5, 1] : 0.5 
            }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <circle cx="19" cy="5" r="1" fill="currentColor" />
            <circle cx="17" cy="9" r="0.5" fill="currentColor" />
          </motion.g>
        </motion.svg>
      </motion.div>
    </button>
  );
};
