'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getTranslations, Lang } from '@/lib/i18n';

interface ProcessProps {
  lang: Lang;
}

export default function Process({ lang }: ProcessProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div id="process" className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-apple-blue/10 blur-[90px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto w-full"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-12 text-glass tracking-tight text-center"
        >
          {t.process.header}
        </motion.h2>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-heavy rounded-[2.5rem] p-10 md:p-16 shadow-2xl"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white text-center">
            {t.process.body}
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-apple-blue blur-[100px] opacity-20 pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

