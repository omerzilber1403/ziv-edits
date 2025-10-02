'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Film, Palette, Wand2, Music, Monitor, Sparkles } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface ToolsProps {
  lang: Lang;
}

export default function Tools({ lang }: ToolsProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tools = [
    {
      icon: Film,
      nameHe: 'DaVinci Resolve',
      nameEn: 'DaVinci Resolve',
      descHe: 'כולל Color Grading',
      descEn: 'including Color Grading',
    },
    {
      icon: Film,
      nameHe: 'Adobe Premiere Pro',
      nameEn: 'Adobe Premiere Pro',
      descHe: 'עריכת וידאו מקצועית',
      descEn: 'Professional video editing',
    },
    {
      icon: Palette,
      nameHe: 'Adobe Illustrator',
      nameEn: 'Adobe Illustrator',
      descHe: 'עיצוב גרפי',
      descEn: 'Graphic design',
    },
    {
      icon: Wand2,
      nameHe: 'Adobe After Effects',
      nameEn: 'Adobe After Effects',
      descHe: 'אנימציות ואפקטים',
      descEn: 'Animations & effects',
    },
    {
      icon: Music,
      nameHe: 'Sound Design',
      nameEn: 'Sound Design',
      descHe: 'עיצוב סאונד מקצועי',
      descEn: 'Professional sound design',
    },
    {
      icon: Monitor,
      nameHe: 'התאמות לפלטפורמות',
      nameEn: 'Platform Adaptations',
      descHe: 'Instagram, YouTube, Shorts',
      descEn: 'Instagram, YouTube, Shorts',
    },
    {
      icon: Sparkles,
      nameHe: 'התמחות',
      nameEn: 'Specialization',
      descHe: 'סרטוני VSL ותדמית',
      descEn: 'VSL & corporate videos',
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 pb-48 md:pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-12 text-center text-neon neon-text-glow"
        >
          {t.tools.header}
        </motion.h2>

        {/* Tools grid - Cards for desktop, list for mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:border-neon-2/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-neon-2/20 flex items-center justify-center mb-4 group-hover:bg-neon-2/30 transition-colors">
                  <tool.icon size={32} className="text-neon-2" />
                </div>
                <h3 className="text-xl font-bold text-fg mb-2">
                  {lang === 'he' ? tool.nameHe : tool.nameEn}
                </h3>
                <p className="text-sm text-fg-muted">
                  {lang === 'he' ? tool.descHe : tool.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Compact cards */}
        <div className="md:hidden space-y-3">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: lang === 'he' ? 20 : -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: lang === 'he' ? 20 : -20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
              className="glass rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-neon-2/20 flex items-center justify-center flex-shrink-0">
                <tool.icon size={24} className="text-neon-2" />
              </div>
              <div className="flex-1 text-right" dir={lang === 'he' ? 'rtl' : 'ltr'}>
                <h3 className="text-base font-bold text-fg">
                  {lang === 'he' ? tool.nameHe : tool.nameEn}
                </h3>
                <p className="text-sm text-fg-muted">
                  {lang === 'he' ? tool.descHe : tool.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty spacer for mobile */}
        <div className="h-32 md:h-0" aria-hidden="true" />
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
    </div>
  );
}

