'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface ContactProps {
  lang: Lang;
}

export default function Contact({ lang }: ContactProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Replace with actual links
  const email = 'ziv8800@gmail.com';
  const whatsappUrl = 'https://wa.me/972507439484';
  const instagramUrl = 'https://instagram.com/ziv.editor';
  const linkedinUrl = 'https://linkedin.com/in/ziv-editor';

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-neon neon-text-glow"
        >
          {t.contact.header}
        </motion.h2>


        {/* WhatsApp button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neon text-bg font-bold text-lg hover:bg-neon-2 transition-all duration-300 neon-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <MessageCircle size={24} />
            {lang === 'he' ? 'שלחו לי הודעה בוואטסאפ' : 'Message me on WhatsApp'}
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Instagram */}
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-neon-2/30 hover:border-neon-2 hover:bg-neon-2/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-2"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-neon-2" />
              <span className="text-fg font-medium">Instagram</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-neon-2/30 hover:border-neon-2 hover:bg-neon-2/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-neon-2" />
              <span className="text-fg font-medium">LinkedIn</span>
            </motion.a>

            {/* CV Download */}
            <motion.a
              href="/cv-ziv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-neon-2/30 hover:border-neon-2 hover:bg-neon-2/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-2"
              aria-label={t.contact.cv}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span className="text-fg font-medium">{t.contact.cv}</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-neon blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-neon-2 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

