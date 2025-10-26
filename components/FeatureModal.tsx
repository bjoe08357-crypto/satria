"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface Feature {
  id: string;
  title: string;
  desc: string;
  icon: string;
  bullets: string[];
}

interface FeatureModalProps {
  open: boolean;
  onClose: () => void;
  feature: Feature;
}

export default function FeatureModal({ open, onClose, feature }: FeatureModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    // Focus close button on open
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feature-title"
            onClick={(e) => e.stopPropagation()}
            ref={ref}
            className="mx-auto mt-8 md:mt-12 max-w-5xl w-[92vw] md:w-full rounded-2xl overflow-hidden bg-white/80 border border-black/5 shadow-ring"
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="grid md:grid-cols-2 max-h-[80vh] md:max-h-[600px] overflow-hidden">
              {/* Image only */}
              <div className="relative aspect-video md:aspect-auto hidden md:flex items-center justify-center overflow-hidden">
                <img
                  alt={feature.title}
                  src={`/features/${feature.id}.jpg`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `/features/${feature.id}.png`;
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content Panel */}
              <div className="p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
                <div className="space-y-4">
                  {/* Close Button */}
                  <div className="flex justify-end -mx-2 -mt-2">
                    <button
                      ref={closeRef}
                      onClick={onClose}
                      className="p-2 hover:bg-black/5 rounded-lg transition-colors"
                      aria-label="Close modal"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Title */}
                  <div>
                    <h3
                      id="feature-title"
                      className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFB200] to-[#FF6A00] bg-clip-text text-transparent mb-2"
                    >
                      {feature.title}
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#FFB200] to-[#FF6A00] rounded-full" />
                  </div>

                  {/* Description */}
                  <p className="text-[#1A1C22]/80 leading-relaxed text-base">
                    {feature.desc}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mt-4">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">✓</span>
                        <span className="text-[#1A1C22]/70 text-sm md:text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-black/10">
                    <a
                      href="https://satriatoken.gitbook.io/satria-token/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm py-2"
                    >
                      📄 View Whitepaper
                    </a>
                    <button onClick={onClose} className="btn btn-ghost text-sm py-2 ml-auto">
                      ✕ Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
