"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  style?: CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  duration?: number;
  stagger?: number;
}

export function TextGenerateEffect({
  words,
  className,
  style,
  as: Tag = "h1",
  duration = 0.5,
  stagger = 0.06,
}: TextGenerateEffectProps) {
  const tokens = words.split(" ");
  return (
    <Tag className={cn(className)} style={style}>
      {tokens.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, filter: "blur(6px)", y: 4 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration, delay: i * stagger, ease: "easeOut" }}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}