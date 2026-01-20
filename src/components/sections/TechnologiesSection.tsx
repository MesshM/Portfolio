"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/Marquee";
import {
  ElectronIcon,
  NextjsIcon,
  ViteIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  PythonIcon,
  FastAPIIcon,
  FlaskIcon,
  MySQLIcon,
  ChromaDBIcon,
  PostgreSQLIcon,
  SQLiteIcon,
  OpenAIIcon,
  OllamaIcon,
  LangChainIcon,
} from "@/components/icons/TechIcons";

const categories = [
  {
    id: "all",
    name: "Todas",
    color: "#6366F1",
  },
  {
    id: "frontend",
    name: "Frontend",
    color: "#3B82F6",
  },
  {
    id: "backend",
    name: "Backend",
    color: "#10B981",
  },
  {
    id: "databases",
    name: "Bases de Datos",
    color: "#F59E0B",
  },
  {
    id: "ai",
    name: "LLMs & AI",
    color: "#8B5CF6",
  },
];

const allTechs = [
  // Frontend
  { name: "Electron", icon: ElectronIcon, category: "frontend" },
  { name: "Next.js", icon: NextjsIcon, category: "frontend" },
  { name: "Vite", icon: ViteIcon, category: "frontend" },
  { name: "React", icon: ReactIcon, category: "frontend" },
  { name: "Tailwind CSS", icon: TailwindIcon, category: "frontend" },
  { name: "TypeScript", icon: TypeScriptIcon, category: "frontend" },
  // Backend
  { name: "Python", icon: PythonIcon, category: "backend" },
  { name: "FastAPI", icon: FastAPIIcon, category: "backend" },
  { name: "Flask", icon: FlaskIcon, category: "backend" },
  // Databases
  { name: "MySQL", icon: MySQLIcon, category: "databases" },
  { name: "ChromaDB", icon: ChromaDBIcon, category: "databases" },
  { name: "PostgreSQL", icon: PostgreSQLIcon, category: "databases" },
  { name: "SQLite", icon: SQLiteIcon, category: "databases" },
  // LLMs & AI
  { name: "OpenAI", icon: OpenAIIcon, category: "ai" },
  { name: "Ollama", icon: OllamaIcon, category: "ai" },
  { name: "LangChain", icon: LangChainIcon, category: "ai" },
];

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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTechs = activeCategory === "all" 
    ? allTechs 
    : allTechs.filter(tech => tech.category === activeCategory);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <section
      id="tecnologias"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-salmon-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-coffee-500/5 dark:bg-salmon-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
            Tecnologías
          </h2>
          <p className="text-lg text-coffee-600 dark:text-cream-300 max-w-2xl mx-auto">
            Stack tecnológico con el que trabajo día a día para crear soluciones innovadoras
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={fadeInUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white shadow-lg"
                  : "text-coffee-600 dark:text-cream-300 bg-cream-100 dark:bg-coffee-700 hover:bg-cream-200 dark:hover:bg-coffee-600"
              }`}
              style={{
                backgroundColor:
                  activeCategory === category.id ? category.color : undefined,
                boxShadow:
                  activeCategory === category.id
                    ? `0 10px 30px ${category.color}40`
                    : undefined,
              }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <Marquee pauseOnHover duration="40s" gap="2rem">
            {filteredTechs.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 px-6 py-4 bg-cream-100/80 dark:bg-coffee-800/50 rounded-2xl border border-coffee-200/50 dark:border-salmon-400/20 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-30"
              >
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${currentCategory?.color || "#6366F1"}15`,
                  }}
                >
                  <tech.icon size={40} />
                </div>
                <span className="text-sm font-medium text-coffee-800 dark:text-cream-100 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};
