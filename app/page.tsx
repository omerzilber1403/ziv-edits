'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import Portfolio from '@/components/Portfolio';
import SocialHighlights from '@/components/SocialHighlights';
import Process from '@/components/Process';
import Results from '@/components/Results';
import Tools from '@/components/Tools';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import VideoModal from '@/components/VideoModal';
import { Lang } from '@/lib/i18n';

export default function Home() {
  const [lang, setLang] = useState<Lang>('he');
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // Initialize language from localStorage
  useEffect(() => {
    const savedLang = (localStorage.getItem('lang') as Lang) || 'he';
    setLang(savedLang);
    updateHtmlLang(savedLang);
  }, []);

  const updateHtmlLang = (newLang: Lang) => {
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    const newLang = lang === 'he' ? 'en' : 'he';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    updateHtmlLang(newLang);
  };

  const openVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const closeVideo = () => {
    setSelectedVideoId(null);
  };

  return (
    <main className="relative">
      <Navbar lang={lang} onToggleLang={toggleLanguage} />
      
      {/* Scroll snap container */}
      <div className="snap-container">
        <section id="hero" className="snap-section">
          <Hero lang={lang} />
        </section>

        <section id="about" className="snap-section">
          <About lang={lang} />
        </section>

        <section className="snap-section">
          <WhyWorkWithMe lang={lang} />
        </section>

        <section id="portfolio" className="snap-section">
          <Portfolio lang={lang} onVideoClick={openVideo} />
        </section>

        <section className="snap-section">
          <SocialHighlights lang={lang} />
        </section>

        <section className="snap-section">
          <Process lang={lang} />
        </section>

        <section className="snap-section">
          <Results lang={lang} />
        </section>

        <section className="snap-section">
          <Tools lang={lang} />
        </section>

        <section className="snap-section">
          <FAQ lang={lang} />
        </section>

        <section id="contact" className="snap-section">
          <Contact lang={lang} />
        </section>
      </div>

      {/* Video modal */}
      {selectedVideoId && (
        <VideoModal
          videoId={selectedVideoId}
          lang={lang}
          onClose={closeVideo}
        />
      )}

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-neon/20 glass">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left side - Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon to-neon-2 flex items-center justify-center neon-glow">
                <span className="text-bg font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-lg font-bold text-neon">Z-I-V</div>
                <div className="text-xs text-fg-muted">{lang === 'he' ? 'עורך וידאו מקצועי' : 'Professional Video Editor'}</div>
              </div>
            </div>

            {/* Center - Built by */}
            <div className="flex items-center gap-2 text-fg-muted">
              <span className="text-sm">{lang === 'he' ? 'נבנה על ידי' : 'Built by'}</span>
              <a
                href="https://zilber.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-2/20 to-neon/20 border border-neon/30 hover:border-neon-2 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-neon-2 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-2 to-neon">
                  Zilber Solutions
                </span>
              </a>
            </div>

            {/* Right side - Copyright */}
            <div className="text-sm text-fg-muted">
              © 2025 Z-I-V
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-10 w-32 h-32 rounded-full bg-neon/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-10 w-32 h-32 rounded-full bg-neon-2/10 blur-3xl pointer-events-none" aria-hidden="true" />
      </footer>
    </main>
  );
}

