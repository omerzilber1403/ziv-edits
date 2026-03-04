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
    <div id="tools" className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-apple-blue/5 blur-[100px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-16 text-center text-glass tracking-tight"
        >
          {t.tools.header}
        </motion.h2>

        {/* Tools grid - Cards for desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-heavy rounded-[2.5rem] p-8 md:p-10 hover:border-white/20 transition-all duration-500 group shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors shadow-inner">
                  <tool.icon size={36} className="text-apple-blue" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {lang === 'he' ? tool.nameHe : tool.nameEn}
                </h3>
                <p className="text-lg text-fg-muted leading-relaxed">
                  {lang === 'he' ? tool.descHe : tool.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Compact cards */}
        <div className="md:hidden space-y-4">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: lang === 'he' ? 20 : -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: lang === 'he' ? 20 : -20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
              className="glass-heavy rounded-3xl p-6 flex items-center gap-6 shadow-xl border border-white/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 shadow-inner">
                <tool.icon size={28} className="text-apple-blue" />
              </div>
              <div className="flex-1 text-right" dir={lang === 'he' ? 'rtl' : 'ltr'}>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {lang === 'he' ? tool.nameHe : tool.nameEn}
                </h3>
                <p className="text-base text-fg-muted">
                  {lang === 'he' ? tool.descHe : tool.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative element */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-apple-blue blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

