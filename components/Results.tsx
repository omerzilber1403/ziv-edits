'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Quote } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface ResultsProps {
  lang: Lang;
}

export default function Results({ lang }: ResultsProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = [
    t.results.item1,
    t.results.item2,
    t.results.item3,
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-12 text-center text-neon neon-text-glow"
        >
          {t.results.header}
        </motion.h2>

        {/* Results list */}
        <div className="space-y-4 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: lang === 'he' ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: lang === 'he' ? 50 : -50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-neon/50 transition-all duration-300"
            >
              <CheckCircle size={28} className="text-neon flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-fg leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass rounded-3xl p-8 md:p-12 relative"
        >
          <Quote size={48} className="text-neon-2 opacity-30 absolute top-6 left-6" aria-hidden="true" />
          <div className="relative z-10 pt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-fg mb-6 leading-relaxed italic">
              "{t.results.quote}"
            </p>
            <p className="text-lg text-neon-2 font-medium">
              — {t.results.quoteAuthor}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

