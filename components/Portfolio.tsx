'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, ChevronDown } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';
import { videos } from '@/lib/videos';

interface PortfolioProps {
  lang: Lang;
  onVideoClick: (videoId: string) => void;
}

export default function Portfolio({ lang, onVideoClick }: PortfolioProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  // Show only first 4 videos initially (2 rows on mobile, 1 row on desktop 4 columns)
  const visibleVideos = showAll ? videos : videos.slice(0, 4);

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 py-20 pb-40 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-neon neon-text-glow">
            {t.portfolio.header}
          </h2>
          <p className="text-base md:text-lg text-fg-muted max-w-3xl mx-auto leading-relaxed">{t.portfolio.driveIntro}</p>
        </motion.div>

        {/* Video grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {visibleVideos.map((video, index) => (
            <motion.button
              key={video.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onVideoClick(video.id)}
              className="group relative aspect-[9/16] overflow-hidden rounded-3xl glass glass-hover transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
              aria-label={`Play video: ${lang === 'he' ? video.titleHe : video.titleEn}`}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-full">
                <Image
                  src={video.thumb}
                  alt={lang === 'he' ? video.titleHe : video.titleEn}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  unoptimized
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Play button - Apple style circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300"
                  >
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </motion.div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                  <h3 className="font-bold text-base md:text-lg text-white filter drop-shadow-lg">
                    {lang === 'he' ? video.titleHe : video.titleEn}
                  </h3>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Show More Button - Apple Glass Pill */}
        {!showAll && videos.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full glass glass-hover text-white font-semibold text-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
            >
              {lang === 'he' ? 'צפה עוד' : 'Show More'}
              <ChevronDown size={24} />
            </motion.button>

            {/* Empty spacer for mobile to give time to see the button */}
            <div className="h-48 md:h-0" aria-hidden="true" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

