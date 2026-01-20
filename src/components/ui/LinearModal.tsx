'use client';

import { motion, AnimatePresence, MotionConfig, Transition } from 'motion/react';
import { X } from 'lucide-react';
import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface LinearModalItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
}

interface LinearModalProps {
  item: LinearModalItem | null;
  isOpen: boolean;
  onClose: () => void;
  accentColor?: string;
}

const transition: Transition = {
  type: 'spring',
  bounce: 0.05,
  duration: 0.3,
};

export const LinearModal: React.FC<LinearModalProps> = ({
  item,
  isOpen,
  onClose,
  accentColor = '#FF7F65',
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!mounted) return null;

  // El portal se renderiza siempre, pero el contenido solo cuando isOpen && item
  return createPortal(
    <>
      {isOpen && item && (
        <MotionConfig transition={transition}>
          <AnimatePresence mode="sync">
            {/* Backdrop */}
            <motion.div
              key={`backdrop-${item.id}`}
              className="fixed inset-0 h-full w-full bg-black/50 dark:bg-black/70 backdrop-blur-sm z-100"
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={handleBackdropClick}
            />

            {/* Modal Container */}
            <motion.div
              key="dialog"
              className="pointer-events-none fixed inset-0 flex items-center justify-center z-101 p-4"
            >
              <motion.div
                className="pointer-events-auto relative flex h-auto w-full max-w-150 flex-col overflow-hidden bg-cream-50 dark:bg-coffee-800 border border-cream-200 dark:border-salmon-500/20 shadow-2xl max-h-[90vh] overflow-y-auto"
                layoutId={`dialog-${item.id}`}
                tabIndex={-1}
                style={{ borderRadius: '24px' }}
                role="dialog"
                aria-labelledby={`modal-title-${item.id}`}
                aria-describedby={`modal-description-${item.id}`}
              >
                {/* Accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: accentColor }}
                />

                {/* Image with shared layoutId */}
                <motion.div 
                  layoutId={`dialog-img-${item.id}`}
                  className="relative w-full aspect-video overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-coffee-800/30 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <motion.h2
                    layoutId={`dialog-title-${item.id}`}
                    className="text-2xl font-bold text-coffee-800 dark:text-cream-100 mb-2 font-heading"
                    id={`modal-title-${item.id}`}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    className="text-coffee-600 dark:text-cream-200 leading-relaxed mb-4"
                    id={`modal-description-${item.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.15 }}
                    >
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={`${tag}-${tagIndex}`}
                          className="px-3 py-1 text-xs font-medium bg-cream-200 dark:bg-coffee-700 text-coffee-700 dark:text-cream-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  {/* GitHub Button */}
                  {item.githubUrl && (
                    <motion.a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full mt-4 px-6 py-3 text-sm font-semibold text-white bg-[#333] hover:bg-[#24292e] rounded-full transition-all duration-200 hover:shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.2 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Ver en GitHub
                    </motion.a>
                  )}
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-6 p-2 bg-coffee-800 dark:bg-cream-100 rounded-full text-cream-100 dark:text-coffee-800 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  type="button"
                  aria-label={`Cerrar ${item.title}`}
                >
                  <X size={18} />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </MotionConfig>
      )}
    </>,
    document.body
  );
};

export default LinearModal;
