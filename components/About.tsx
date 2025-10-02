'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getTranslations, Lang } from '@/lib/i18n';

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, x: lang === 'he' ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: lang === 'he' ? 50 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-neon neon-text-glow"
        >
          {t.about.header}
        </motion.h2>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="text-lg md:text-xl lg:text-2xl leading-relaxed text-fg space-y-6">
            {t.about.body.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 h-1 bg-gradient-to-r from-neon to-neon-2 rounded-full"
            style={{ transformOrigin: lang === 'he' ? 'right' : 'left' }}
          />
        </motion.div>

        {/* Floating accent */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-neon-2 blur-3xl opacity-20 pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

