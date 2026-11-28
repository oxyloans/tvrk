import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, Layers, Sparkles } from "lucide-react";
import ecosystemImg from "./assets/ecosystem.png";

interface EcosystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EcosystemModal({ isOpen, onClose }: EcosystemModalProps) {
  // Lock body scroll when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ecosystem-modal-title"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container - Clean White Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", damping: 28, stiffness: 340 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col w-fit max-w-[95vw] max-h-[92vh] rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] overflow-hidden"
          >
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between gap-3 border-b border-slate-100 bg-white px-3.5 py-2.5 sm:px-5 sm:py-3.5 shrink-0">
              {/* Branding */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#241b67]/10 border border-[#241b67]/15">
                  <Layers className="h-4 w-4 text-[#241b67]" />
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <h2
                    id="ecosystem-modal-title"
                    className="font-display text-sm font-extrabold tracking-tight text-slate-900 sm:text-base truncate"
                  >
                    Oxy Global Ecosystem
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Architecture
                  </span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Download */}
                <a
                  href={ecosystemImg}
                  download="Oxy-Global-Ecosystem.png"
                  title="Download image"
                  aria-label="Download image"
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Open full resolution in new tab */}
                <a
                  href={ecosystemImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open original resolution in new tab"
                  aria-label="Open original resolution in new tab"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 transition cursor-pointer ml-0.5"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Viewer Body - Pure White Background, image cleanly framed */}
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-3 overflow-hidden min-h-0 bg-white">
              <div className="relative inline-flex items-center justify-center rounded-xl overflow-hidden border border-slate-100 bg-white shadow-sm">
                <img
                  src={ecosystemImg}
                  alt="Oxy Global Ecosystem Architecture Blueprint"
                  className="block w-auto h-auto max-h-[calc(88vh-65px)] max-w-[calc(94vw-24px)] object-contain rounded-xl select-none"
                  style={{
                    imageRendering: "auto",
                  }}
                />

                {/* Corner Badge */}
                <div className="absolute top-2.5 left-2.5 pointer-events-none flex items-center gap-1.5 rounded-md bg-white/90 backdrop-blur-md px-2 py-1 border border-slate-200/80 text-[10px] font-bold text-slate-800 shadow-sm">
                  <Sparkles className="h-3 w-3 text-emerald-600" />
                  <span>Official Blueprint</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
