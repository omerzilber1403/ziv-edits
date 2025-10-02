'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';
import LangToggle from './LangToggle';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = getTranslations(lang);

  useEffect(() => {
    // Intersection observer for active section highlighting
    const sections = ['hero', 'about', 'portfolio', 'contact'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    // Scroll handler - hide navbar on scroll down, show on scroll up
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
        setShowScrollTop(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setShowScrollTop(true);
      } else {
        // Scrolling up
        setIsVisible(true);
        setShowScrollTop(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
          >
            <div className="max-w-7xl mx-auto glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
              {/* Logo - hidden on mobile */}
              <button
                onClick={() => scrollToSection('hero')}
                className="hidden md:block text-2xl md:text-3xl font-display font-bold neon-text-glow tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded-lg px-2"
                aria-label="Z-I-V Home"
              >
                Z-I-V
              </button>

              {/* Nav links - responsive spacing */}
              <div className="flex items-center gap-3 md:gap-8 flex-1 md:flex-initial justify-center md:justify-start">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-xs md:text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded px-2 py-1 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'text-neon'
                        : 'text-fg-muted hover:text-fg'
                    }`}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon neon-glow"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Language toggle - desktop only, mobile will be at bottom */}
              <div className="hidden md:block">
                <LangToggle lang={lang} onToggle={onToggleLang} />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Language Toggle - Fixed at bottom */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <LangToggle lang={lang} onToggle={onToggleLang} />
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass neon-glow flex items-center justify-center hover:bg-neon/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="text-neon" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

