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
    <div className="relative min-h-screen flex flex-col justify-center px-4 py-20 overflow-hidden">
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
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl glass hover:border-neon/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon"
              aria-label={`Play video: ${lang === 'he' ? video.titleHe : video.titleEn}`}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-full">
                <Image
                  src={video.thumb}
                  alt={lang === 'he' ? video.titleHe : video.titleEn}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  unoptimized
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-full bg-neon/20 backdrop-blur-sm flex items-center justify-center border-2 border-neon group-hover:bg-neon/30 transition-all duration-300"
                  >
                    <Play size={28} className="text-neon" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-sm md:text-base text-fg group-hover:text-neon transition-colors duration-300">
                    {lang === 'he' ? video.titleHe : video.titleEn}
                  </h3>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Show More Button */}
        {!showAll && videos.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon to-neon-2 text-bg font-bold text-lg hover:shadow-xl transition-all duration-300 neon-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {lang === 'he' ? 'צפה עוד' : 'Show More'}
              <ChevronDown size={24} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

