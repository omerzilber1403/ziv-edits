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

        {/* Footer */}
        <footer className="relative z-20 py-12 pb-32 md:pb-12 px-6 border-t border-white/10 glass-heavy">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-[-5%] w-32 h-32 rounded-full bg-apple-blue/10 blur-3xl" />
            <div className="absolute bottom-0 right-[-5%] w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left side - Logo/Brand */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-apple-blue to-purple-600 flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">Z-I-V</div>
                  <div className="text-sm text-fg-muted">
                    {lang === 'he' ? 'עורך וידאו מקצועי' : 'Professional Video Editor'}
                  </div>
                </div>
              </div>

              {/* Center - Built by */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs text-fg-muted font-medium uppercase tracking-widest">
                  {lang === 'he' ? 'נבנה על ידי' : 'Built by'}
                </span>
                <a
                  href="https://zilber.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass glass-hover border border-white/10 hover:border-white/20 transition-all duration-500 group"
                >
                  <svg className="w-5 h-5 text-apple-blue group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span className="font-bold text-lg text-white">
                    Zilber Solutions
                  </span>
                </a>
              </div>

              {/* Right side - Copyright */}
              <div className="text-sm text-fg-muted font-medium">
                © 2025 Z-I-V • All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Video modal */}
      {selectedVideoId && (
        <VideoModal
          videoId={selectedVideoId}
          lang={lang}
          onClose={closeVideo}
        />
      )}
    </main>
  );
}

