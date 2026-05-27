"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  density?: number;
  color?: string;
  className?: string;
}

/**
 * Lightweight canvas-based starfield/sparkles background.
 */
export function Sparkles({
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.6,
  density = 80,
  color = "#ffffff",
  className,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: {
      x: number;
      y: number;
      r: number;
      a: number;
      speed: number;
    }[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      const count = Math.floor((width * height) / (12000 / (density / 80)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: minSize + Math.random() * (maxSize - minSize),
        a: Math.random(),
        speed: 0.005 + Math.random() * 0.015,
      }));
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.a += p.speed;
        const alpha = (Math.sin(p.a) + 1) / 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha * 0.9;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [color, density, maxSize, minSize]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      style={{ background }}
    />
  );
}