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
      <footer className="fixed bottom-0 left-0 right-0 py-3 pb-20 md:pb-3 text-center text-xs text-fg-muted pointer-events-none z-10">
        <p>© 2025 Z-I-V • {lang === 'he' ? 'נבנה עם' : 'Built with'} Next.js</p>
      </footer>
    </main>
  );
}

