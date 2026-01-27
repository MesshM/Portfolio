"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { RandomizedTextEffect } from "@/components/ui/RandomizedTextEffect";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const HeroSection = () => {
  const [showRandomText, setShowRandomText] = useState(true);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-salmon-400/10 dark:bg-salmon-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-salmon-300/10 dark:bg-salmon-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cream-200/20 dark:bg-coffee-700/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <LiquidGlassCard className="p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Photo */}
            <motion.div
              variants={fadeInScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="shrink-0"
            >
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-salmon-400 to-coffee-600 dark:from-salmon-500 dark:to-coffee-700 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-cream-50 dark:bg-coffee-800">
                    <Image
                      src="/my.png"
                      alt="Manuel Alejandro Galindo Nivia"
                      width={240}
                      height={240}
                      className="w-full h-full object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-salmon-400/30 dark:border-salmon-500/30 animate-pulse" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-salmon-400/10 dark:bg-salmon-500/10 border border-salmon-400/20 dark:border-salmon-500/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-salmon-600 dark:text-salmon-400">
                  Disponible para proyectos
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-800 dark:text-cream-100 mb-2 tracking-tight leading-tight"
              >
                {showRandomText ? (
                  <RandomizedTextEffect text="MANUEL ALEJANDRO" />
                ) : (
                  "MANUEL ALEJANDRO"
                )}
              </motion.h1>
              <motion.h2
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-salmon-500 dark:text-salmon-400 mb-6 tracking-tight"
              >
                {showRandomText ? (
                  <RandomizedTextEffect text="GALINDO NIVIA" />
                ) : (
                  "GALINDO NIVIA"
                )}
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-base md:text-lg lg:text-xl text-coffee-700 dark:text-cream-200 max-w-2xl mb-8 leading-relaxed"
              >
                Desarrollador de software enfocado en{" "}
                <span className="font-semibold text-salmon-500 dark:text-salmon-400">
                  inteligencia artificial
                </span>
                , automatización y análisis de datos, con el objetivo de crear soluciones
                inteligentes que optimicen procesos, reduzcan fricción operativa y
                conviertan datos en{" "}
                <span className="font-semibold text-coffee-600 dark:text-cream-100">
                  decisiones accionables
                </span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-salmon-500 hover:bg-salmon-600 dark:bg-salmon-500 dark:hover:bg-salmon-400 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-salmon-500/25"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Ver Proyectos
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-coffee-700 dark:text-cream-100 bg-cream-200 hover:bg-cream-300 dark:bg-coffee-700 dark:hover:bg-coffee-600 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contactar
                </a>
                <a
                  href="https://www.linkedin.com/in/manuel-alejandro-galindo-nivia-3157b03a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#0077B5] hover:bg-[#006097] rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0077B5]/25"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MesshM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#333] hover:bg-[#24292e] rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#333]/25"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </motion.div>
            </motion.div>
          </div>
        </LiquidGlassCard>

      </div>
    </section>
  );
};
