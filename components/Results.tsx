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
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.15 });

  const items = [
    t.results.item1,
    t.results.item2,
    t.results.item3,
  ];

  return (
    <div id="results" className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-apple-blue/5 blur-[100px]" />
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-16 text-center text-glass tracking-tight"
        >
          {t.results.header}
        </motion.h2>

        {/* Results list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
              className="glass-heavy rounded-[2rem] p-8 flex flex-col items-center text-center gap-6 hover:border-white/20 transition-all duration-500 shadow-xl"
            >
              <CheckCircle size={32} className="text-apple-blue flex-shrink-0" />
              <p className="text-lg md:text-xl text-white leading-relaxed font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
          className="glass-heavy rounded-[3rem] p-10 md:p-16 relative shadow-2xl border border-white/5"
        >
          <Quote size={64} className="text-white opacity-10 absolute top-8 left-10" aria-hidden="true" />
          <div className="relative z-10 pt-8 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8 leading-relaxed italic tracking-tight">
              "{t.results.quote}"
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="h-[1px] w-12 bg-apple-blue mb-4" />
              <p className="text-xl text-apple-blue font-bold tracking-wide">
                — {t.results.quoteAuthor}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

