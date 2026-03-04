'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { createPortal } from 'react-dom';
import { getTranslations, Lang } from '@/lib/i18n';

interface VideoModalProps {
  videoId: string;
  lang: Lang;
  onClose: () => void;
}

export default function VideoModal({ videoId, lang, onClose }: VideoModalProps) {
  const t = getTranslations(lang);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Tab trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const driveEmbedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
  const driveViewUrl = `https://drive.google.com/file/d/${videoId}/view`;

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-2xl"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={t.modal.close}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl glass-heavy rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <a
              href={driveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue rounded px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full"
              aria-label={t.modal.openDrive}
            >
              <ExternalLink size={18} />
              <span>{t.modal.openDrive}</span>
            </a>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-3 rounded-full glass-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
              aria-label={t.modal.close}
            >
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* Video iframe */}
          <div className="relative w-full aspect-video">
            <iframe
              src={driveEmbedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              loading="lazy"
              title="Video player"
            />
          </div>

          {/* Loading fallback */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none opacity-0 transition-opacity">
            <div className="w-16 h-16 border-4 border-white/10 border-t-white rounded-full animate-spin" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  // Render to body via portal
  return typeof window !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
}

