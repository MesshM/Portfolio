"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#educacion", label: "Educación" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-cream-50/90 dark:bg-coffee-800/90 backdrop-blur-lg shadow-sm border-b border-coffee-200/50 dark:border-salmon-500/10"
          : "py-5 bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl font-bold text-coffee-800 dark:text-cream-100"
        >
          <span className="text-salmon-500 dark:text-salmon-400">{"<"}</span>
          MG
          <span className="text-salmon-500 dark:text-salmon-400">{"/>"}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Contact button - desktop */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-salmon-500 hover:bg-salmon-600 dark:bg-salmon-500 dark:hover:bg-salmon-400 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-salmon-500/25"
          >
            Contacto
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-cream-50/95 dark:bg-coffee-800/95 backdrop-blur-lg border-b border-coffee-200/50 dark:border-salmon-500/10 transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-salmon-500 hover:bg-salmon-600 rounded-full transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
};
