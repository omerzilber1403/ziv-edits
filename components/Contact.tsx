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
    <div id="contact" className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[30%] left-[-5%] w-[350px] h-[350px] rounded-full bg-apple-blue/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-12 text-glass tracking-tight"
        >
          {t.contact.header}
        </motion.h2>


        {/* WhatsApp button - Apple Style Glass Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full glass glass-hover text-white font-bold text-xl transition-all duration-300 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
          >
            <MessageCircle size={28} className="text-green-400" />
            {lang === 'he' ? 'שלחו לי הודעה בוואטסאפ' : 'Message me on WhatsApp'}
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-heavy rounded-[3rem] p-10 md:p-14 shadow-2xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Instagram */}
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full glass glass-hover border border-white/10 hover:border-white/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
              aria-label="Instagram"
            >
              <Instagram size={22} className="text-white" />
              <span className="text-white font-semibold">Instagram</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full glass glass-hover border border-white/10 hover:border-white/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="text-white" />
              <span className="text-white font-semibold">LinkedIn</span>
            </motion.a>

            {/* CV Download */}
            <motion.a
              href="/cv-ziv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full glass glass-hover border border-white/10 hover:border-white/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
              aria-label={t.contact.cv}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span className="text-white font-semibold">{t.contact.cv}</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Ambient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-apple-blue blur-[150px] pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

