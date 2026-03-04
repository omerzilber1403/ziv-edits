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
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.1 });

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
    <div id="social-highlights" className="relative px-4 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-16 text-center text-glass tracking-tight"
        >
          {t.portfolio.socialHeader}
        </motion.h3>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group glass-heavy rounded-[2.5rem] p-10 hover:border-white/20 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue relative overflow-hidden shadow-2xl"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon - Apple Style Circle */}
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-inner">
                    <TrendingUp size={36} className="text-apple-blue" />
                  </div>
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl font-bold text-white mb-6 text-center leading-tight tracking-tight">
                  {item.text}
                </p>

                {/* Link indicator */}
                <div className="flex items-center justify-center gap-2 text-white/50 text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  <span>{lang === 'he' ? 'צפייה' : 'View'}</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

