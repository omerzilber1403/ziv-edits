'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface FAQProps {
  lang: Lang;
}

export default function FAQ({ lang }: FAQProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 pb-56 md:pb-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-12 text-center text-neon neon-text-glow"
        >
          {t.faq.header}
        </motion.h2>

        {/* FAQ items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 hover:border-neon/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <HelpCircle size={28} className="text-neon flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-neon mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-lg md:text-xl text-fg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

