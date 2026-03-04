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
    <div id="faq" className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-apple-blue/5 blur-[80px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto w-full"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-16 text-center text-glass tracking-tight"
        >
          {t.faq.header}
        </motion.h2>

        {/* FAQ items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-heavy rounded-[2.5rem] p-8 md:p-12 hover:border-white/20 transition-all duration-500 shadow-xl border border-white/5"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-inner">
                  <HelpCircle size={28} className="text-apple-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {faq.question}
                  </h3>
                  <p className="text-lg md:text-xl text-fg-muted leading-relaxed">
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

