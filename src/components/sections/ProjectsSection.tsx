"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig, Transition } from "motion/react";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { WavyBackground } from "@/components/ui/WavyBackground";
import { LinearModal } from "@/components/ui/LinearModal";

// Transition config for shared layout animation
const transition: Transition = {
  type: 'spring',
  bounce: 0.05,
  duration: 0.3,
};

// Animation variants for scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  features: string[];
  status: string;
  link: string;
  imageUrl: string;
  isPublic: boolean;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "verzio",
    title: "Verzio",
    subtitle: "Automatización Documental con IA Local",
    description:
      "Aplicación de escritorio para automatizar la documentación del área de seguridad de la información, utilizando inteligencia artificial de forma completamente local. Permite modificar archivos Office, inyectar metadatos, realizar seguimiento de cambios, generar plantillas con búsqueda semántica e integración con Google Drive.",
    tags: ["Electron", "Vite", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "ChromaDB", "SQLite"],
    color: "#FF7F65",
    features: [
      "Modificación de archivos Office con metadatos",
      "Búsqueda semántica de documentos",
      "Generación de plantillas con IA",
      "Seguimiento y control de cambios",
      "Modelos transformer locales",
      "Integración con Google Drive API",
    ],
    status: "Terminado",
    link: "#",
    imageUrl: "/projects/verzio.png",
    isPublic: false,
    githubUrl: undefined,
  },
  {
    id: "cva",
    title: "CVA",
    subtitle: "Gestor Web de Citas para Visas",
    description:
      "Plataforma web completa para la gestión de citas de asesores de visas. Incluye tres vistas diferenciadas: usuarios que pueden agendar citas, asesores que gestionan su disponibilidad, y administradores con panel de control completo. Sistema de pagos integrado con Stripe.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Flask", "PostgreSQL", "Stripe"],
    color: "#FF7F65",
    features: [
      "Vista de usuario para agendar citas",
      "Panel de asesor con gestión de agenda",
      "Dashboard administrativo completo",
      "Pagos seguros con Stripe",
      "Sistema de notificaciones",
      "Gestión de disponibilidad en tiempo real",
    ],
    status: "Terminado",
    link: "#",
    imageUrl: "/projects/cva.png",
    isPublic: true,
    githubUrl: "https://github.com/MesshM/Canadian-Visa-Advise-PAGE",
  },
];

// Wave colors for light and dark mode
const lightWaveColors = [
  "#FFE4DB",
  "#FFCFC2",
  "#FFB5A3",
  "#FF9A84",
  "#EDE0C0",
];

const darkWaveColors = [
  "#5D4026",
  "#6B4423",
  "#D98878",
  "#CA7060",
  "#4D3520",
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig transition={transition}>
      <section
        id="proyectos"
        className="relative overflow-hidden"
      >
      <WavyBackground
        className="max-w-6xl mx-auto px-4"
        containerClassName="min-h-fit py-24"
        colors={isDark ? darkWaveColors : lightWaveColors}
        backgroundFill={isDark ? "#2D1F14" : "#FFFDF7"}
        waveOpacity={0.4}
        blur={15}
        speed="slow"
      >
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
            Proyectos
          </h2>
          <p className="text-lg text-coffee-600 dark:text-cream-200 max-w-2xl mx-auto">
            Soluciones innovadoras que combinan desarrollo FullStack con inteligencia artificial
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <LiquidGlassCard
                className="p-0 overflow-hidden group h-full"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
              {/* Header with gradient bar */}
              <div
                className="h-2"
                style={{ backgroundColor: project.color }}
              />

              <div className="p-8">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cream-50"
                    style={{ backgroundColor: project.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cream-50 animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-coffee-800 dark:text-cream-100 mb-2">
                  {project.title}
                </h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: project.color }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-coffee-600 dark:text-cream-200 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-coffee-800 dark:text-cream-100 mb-3">
                    Características principales:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-coffee-600 dark:text-cream-200"
                      >
                        <svg
                          className="w-4 h-4 shrink-0"
                          style={{ color: project.color }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-coffee-700 dark:text-cream-200 bg-cream-200 dark:bg-coffee-800/50 rounded-lg border border-cream-300 dark:border-salmon-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action button - only show for public projects */}
                {project.isPublic && (
                  <AnimatePresence mode="sync">
                    {!(modalOpen && selectedProject?.id === project.id) && (
                      <motion.div
                        key={`card-${project.id}`}
                        layoutId={`dialog-${project.id}`}
                        className="overflow-hidden cursor-pointer"
                        style={{ borderRadius: '9999px' }}
                        onClick={() => handleOpenModal(project)}
                      >
                        <motion.div
                          layoutId={`dialog-img-${project.id}`}
                          className="hidden"
                        />
                        <motion.div
                          layoutId={`dialog-title-${project.id}`}
                          className="hidden"
                        />
                        <motion.button
                          className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-cream-50 rounded-full cursor-pointer"
                          style={{
                            backgroundColor: project.color,
                          }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Ver Proyecto
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>

              {/* Hover decoration */}
              <div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-20"
                style={{ backgroundColor: project.color }}
              />
            </LiquidGlassCard>
            </motion.div>
          ))}
        </motion.div>
      </WavyBackground>

      {/* Linear Modal */}
      <LinearModal
        item={selectedProject ? {
          id: selectedProject.id,
          imageUrl: selectedProject.imageUrl,
          title: selectedProject.title,
          description: selectedProject.description,
          tags: selectedProject.tags,
          githubUrl: selectedProject.githubUrl,
        } : null}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        accentColor={selectedProject?.color}
      />
    </section>
    </MotionConfig>
  );
};
