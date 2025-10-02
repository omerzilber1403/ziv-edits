'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface ToolsProps {
  lang: Lang;
}

export default function Tools({ lang }: ToolsProps) {
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
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon/20 mb-6">
            <Wrench size={40} className="text-neon" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neon neon-text-glow">
            {t.tools.header}
          </h2>
        </motion.div>

        {/* Tools list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-fg text-center font-medium">
            {t.tools.list}
          </p>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-neon-2 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

