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
    <div id="about" className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-apple-blue/10 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto w-full"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-glass tracking-tight">
            {t.about.header}
          </h2>
        </motion.div>

        {/* Body text - Two sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="glass-heavy rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
          >
            <div className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white space-y-6">
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
            className="glass-heavy rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
          >
            <div className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white space-y-6">
              {t.about.body.split('\n\n').slice(2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative element - Apple style subtle line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"
        />

        {/* Floating accent orb */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-apple-blue blur-[120px] opacity-20 pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

