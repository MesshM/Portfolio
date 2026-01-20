"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={
        {
          "--duration": duration,
          "--gap": gap,
          gap: gap,
        } as React.CSSProperties
      }
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around", {
              "animate-marquee flex-row": !vertical && !reverse,
              "animate-marquee-vertical flex-col": vertical && !reverse,
              "animate-marquee-reverse flex-row": !vertical && reverse,
              "animate-marquee-vertical-reverse flex-col": vertical && reverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
            style={{ gap: gap } as React.CSSProperties}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
