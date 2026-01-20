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
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  project?: string;
  reference?: {
    name: string;
    position: string;
  };
}

const experiences: Experience[] = [
  {
    id: "brm",
    company: "BRM",
    role: "Desarrollador de Software Trainee",
    period: "Julio 2025 - Enero 2026",
    description:
      "Desarrollador enfocado en automatización e inteligencia artificial para optimizar procesos operativos y asegurar la infraestructura de datos.",
    achievements: [
      "Diseñé e implementé scripts de automatización utilizando Python y modelos de IA, reduciendo la carga operativa manual del equipo en un 20%",
      "Administré el ciclo de vida de desarrollo de software seguro, colaborando directamente con el oficial de seguridad para blindar la infraestructura de datos",
      "Optimicé consultas en bases de datos y gestioné el control de versiones (Git/GitHub) para asegurar la integridad del código en producción",
    ],
    technologies: ["Python", "IA/ML", "SQL", "Git", "GitHub"],
    project: "Verzio",
    reference: {
      name: "Andres Garcia",
      position: "Oficial de Seguridad de la Información",
    },
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experiencia"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-salmon-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-coffee-500/5 dark:bg-salmon-500/5 rounded-full blur-3xl" />
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
            Experiencia
          </h2>
          <p className="text-lg text-coffee-600 dark:text-cream-300 max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo de software e inteligencia artificial
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <LiquidGlassCard
                className="p-6 md:p-8"
              >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-coffee-800 dark:text-cream-100 mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-medium text-salmon-500 dark:text-salmon-400">
                    {exp.role}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-salmon-400/10 dark:bg-salmon-500/10 border border-salmon-400/20 dark:border-salmon-500/20 self-start">
                  <svg
                    className="w-4 h-4 text-salmon-500 dark:text-salmon-400"
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
                  <span className="text-sm font-medium text-salmon-600 dark:text-salmon-400">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-coffee-600 dark:text-cream-300 mb-6 text-left">
                {exp.description}
              </p>

              {/* Project developed */}
              {exp.project && (
                <div className="mb-6 p-4 rounded-xl bg-salmon-400/5 dark:bg-salmon-500/5 border border-salmon-400/10 dark:border-salmon-500/10">
                  <div className="flex items-center gap-2 text-salmon-600 dark:text-salmon-400">
                    <svg
                      className="w-5 h-5"
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
                    <span className="font-semibold">Proyecto desarrollado:</span>
                    <span className="font-bold">{exp.project}</span>
                  </div>
                </div>
              )}

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-coffee-700 dark:text-cream-200 uppercase tracking-wider mb-3 text-left">
                  Logros Principales
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-coffee-600 dark:text-cream-300 text-left"
                    >
                      <svg
                        className="w-5 h-5 text-salmon-500 dark:text-salmon-400 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-coffee-700 dark:text-cream-200 uppercase tracking-wider mb-3 text-left">
                  Tecnologías
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-cream-200 dark:bg-coffee-700 text-coffee-700 dark:text-cream-200 border border-coffee-200/50 dark:border-salmon-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reference */}
              {exp.reference && (
                <div className="pt-6 border-t border-coffee-200/30 dark:border-salmon-500/20">
                  <h4 className="text-sm font-semibold text-coffee-700 dark:text-cream-200 uppercase tracking-wider mb-3 text-left">
                    Referencia
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-coffee-600 dark:text-cream-300">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-salmon-500 dark:text-salmon-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="font-medium">{exp.reference.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-salmon-500 dark:text-salmon-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{exp.reference.position}</span>
                    </div>
                  </div>
                </div>
              )}
            </LiquidGlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
