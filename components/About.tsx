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
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.2 });

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 pb-40 md:pb-20 overflow-hidden">
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-neon neon-text-glow"
        >
          {t.about.header}
        </motion.h2>

        {/* Body text - Two sections for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="glass rounded-3xl p-6 md:p-10"
          >
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-fg space-y-4">
              {t.about.body.split('\n\n').slice(0, 2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Second section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="glass rounded-3xl p-6 md:p-10"
          >
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-fg space-y-4">
              {t.about.body.split('\n\n').slice(2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 h-1 bg-gradient-to-r from-neon to-neon-2 rounded-full"
          style={{ transformOrigin: lang === 'he' ? 'right' : 'left' }}
        />

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

