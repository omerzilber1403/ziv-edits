'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface SocialHighlightsProps {
  lang: Lang;
}

export default function SocialHighlights({ lang }: SocialHighlightsProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Real social media links with view counts
  const highlights = [
    {
      text: lang === 'he' ? 'אינסטגרם רילז — 191K צפיות' : 'Instagram Reel — 191K views',
      url: 'https://www.instagram.com/reel/DGK0HbhsJdJ/',
      platform: 'Instagram',
    },
    {
      text: lang === 'he' ? 'אינסטגרם רילז — 313K צפיות, 1.7K לייקים' : 'Instagram Reel — 313K views, 1.7K likes',
      url: 'https://www.instagram.com/reel/DDuZdA2somf/',
      platform: 'Instagram',
    },
    {
      text: lang === 'he' ? 'טיקטוק — 100K צפיות' : 'TikTok — 100K views',
      url: 'https://vt.tiktok.com/ZSDE2nqdp/',
      platform: 'TikTok',
    },
  ];

  return (
    <div className="relative px-4 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-10 text-center text-neon-2"
          style={{ textShadow: '0 0 20px rgba(187, 102, 255, 0.5), 0 0 40px rgba(187, 102, 255, 0.3)' }}
        >
          {t.portfolio.socialHeader}
        </motion.h3>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group glass rounded-2xl p-8 hover:border-neon-2/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-2 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-2/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-neon-2/20 flex items-center justify-center group-hover:bg-neon-2/30 transition-colors">
                    <TrendingUp size={32} className="text-neon-2" />
                  </div>
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl font-medium text-fg mb-4 text-center leading-relaxed">
                  {item.text}
                </p>

                {/* Link indicator */}
                <div className="flex items-center justify-center gap-2 text-neon-2 text-sm font-medium">
                  <span>{lang === 'he' ? 'צפייה' : 'View'}</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

