"use client";

import { motion } from "motion/react";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

interface Education {
  id: string;
  title: string;
  institution: string;
  location: string;
  year: string;
  type: "degree" | "diploma" | "certification";
}

const educations: Education[] = [
  {
    id: "sena",
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    institution: "Servicio Nacional de Aprendizaje (SENA)",
    location: "Bogotá",
    year: "2026",
    type: "degree",
  },
  {
    id: "unal",
    title: "Diplomado en Desarrollo de Aplicaciones Móviles",
    institution: "Universidad Nacional de Colombia",
    location: "Bogotá",
    year: "2023",
    type: "diploma",
  },
  {
    id: "udemy",
    title: "Curso en Desarrollo Web PHP y gestion de bases de datos MySQL",
    institution: "Udemy",
    location: "En línea",
    year: "2023",
    type: "certification",
  },
];

const getIcon = (type: Education["type"]) => {
  switch (type) {
    case "degree":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      );
    case "diploma":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      );
  }
};

export const EducationSection = () => {
  return (
    <section
      id="educacion"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-salmon-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-coffee-500/5 dark:bg-salmon-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-800 dark:text-cream-100 mb-4">
            Educación
          </h2>
          <p className="text-lg text-coffee-600 dark:text-cream-300 max-w-2xl mx-auto">
            Mi formación académica y certificaciones profesionales
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {educations.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <LiquidGlassCard
                className="p-6 h-full"
              >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-salmon-400/10 dark:bg-salmon-500/10 flex items-center justify-center text-salmon-500 dark:text-salmon-400 mb-4">
                {getIcon(edu.type)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-coffee-800 dark:text-cream-100 mb-2">
                {edu.title}
              </h3>

              {/* Institution */}
              <p className="text-salmon-500 dark:text-salmon-400 font-medium mb-3">
                {edu.institution}
              </p>

              {/* Location & Year */}
              <div className="flex items-center gap-4 text-sm text-coffee-600 dark:text-cream-300">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-coffee-400 dark:text-cream-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-coffee-400 dark:text-cream-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{edu.year}</span>
                </div>
              </div>
            </LiquidGlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
