'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = getTranslations(lang);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Ambient glass orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-apple-blue blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 text-glass tracking-tight leading-[1.1]"
        >
          {t.hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl lg:text-3xl text-fg-muted mb-14 leading-relaxed max-w-3xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Button - Apple Style Glass Pill */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToPortfolio}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full glass glass-hover text-white font-semibold text-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
        >
          {t.hero.cta}
          <ChevronDown className="animate-bounce" size={24} />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} className="text-white opacity-30" />
        </motion.div>
      </motion.div>
    </div>
  );
}

