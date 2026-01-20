"use client";

import { useRef, useEffect, ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: "low" | "medium" | "high";
}

export const LiquidGlassCard = ({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.15)",
  intensity = "medium",
  ...props
}: LiquidGlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const intensityClasses = {
    low: "backdrop-blur-sm",
    medium: "backdrop-blur-md",
    high: "backdrop-blur-xl",
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-white/80 dark:bg-slate-900/60",
        intensityClasses[intensity],
        "border border-gray-200/50 dark:border-white/10",
        "shadow-lg shadow-black/5 dark:shadow-black/20",
        "transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.15),transparent_50%)]",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        "before:pointer-events-none",
        className
      )}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Subtle inner glow */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Glass edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-t from-transparent via-white/30 to-transparent dark:via-white/20 pointer-events-none" />
    </div>
  );
};
