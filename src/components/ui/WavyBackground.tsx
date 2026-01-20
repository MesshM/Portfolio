"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const noiseRef = useRef(createNoise3D());
  const ntRef = useRef(0);

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const getSpeed = useCallback(() => {
    return speed === "slow" ? 0.001 : 0.002;
  }, [speed]);

  const drawWave = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, n: number) => {
      ntRef.current += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noiseRef.current(x / 800, 0.3 * i, ntRef.current) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveColors, waveWidth, getSpeed]
  );

  const render = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = 1;
      drawWave(ctx, w, h, 5);
      animationRef.current = requestAnimationFrame(() => render(ctx, w, h));
    },
    [backgroundFill, waveOpacity, drawWave]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    resize();
    window.addEventListener("resize", resize);

    // Cancel any existing animation before starting new one
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    render(ctx, canvas.width, canvas.height);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [blur, render]);

  // Force re-render when colors or background change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Cancel existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Restart animation with new colors
    render(ctx, canvas.width, canvas.height);
  }, [colors, backgroundFill, waveOpacity, render]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
