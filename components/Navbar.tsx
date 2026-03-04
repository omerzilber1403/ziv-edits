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
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8"
          >
            <div className="max-w-3xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
              {/* Logo */}
              <button
                onClick={() => scrollToSection('hero')}
                className="text-xl md:text-2xl font-display font-bold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue rounded-full px-3 py-1"
                aria-label="Z-I-V Home"
              >
                Z-I-V
              </button>

              {/* Nav links */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue rounded px-2 py-1 ${activeSection === item.id
                        ? 'text-white'
                        : 'text-fg-muted hover:text-white'
                      }`}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-apple-blue"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Indicators or Language toggle */}
              <div className="flex items-center gap-4">
                <div className="md:hidden flex gap-3">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-apple-blue w-4' : 'bg-fg-muted/30'
                        }`}
                    />
                  ))}
                </div>
                <LangToggle lang={lang} onToggle={onToggleLang} />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 w-14 h-14 rounded-full glass glass-hover flex items-center justify-center shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
            aria-label="Scroll to top"
          >
            <ChevronUp size={28} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

