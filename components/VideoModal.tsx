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
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg/95 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={t.modal.close}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-bg-glass glass rounded-3xl overflow-hidden neon-glow"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neon/20">
            <a
              href={driveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neon hover:text-neon-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded px-2 py-1"
              aria-label={t.modal.openDrive}
            >
              <ExternalLink size={16} />
              <span>{t.modal.openDrive}</span>
            </a>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neon/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon"
              aria-label={t.modal.close}
            >
              <X size={24} className="text-fg" />
            </button>
          </div>

          {/* Video iframe */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={driveEmbedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              loading="lazy"
              title="Video player"
            />
          </div>

          {/* Loading fallback */}
          <div className="absolute inset-0 flex items-center justify-center bg-bg pointer-events-none opacity-0 transition-opacity">
            <div className="w-16 h-16 border-4 border-neon/30 border-t-neon rounded-full animate-spin" />
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

