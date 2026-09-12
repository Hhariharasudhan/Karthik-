import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, ScrollText, Check } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const Section6LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const letterData = loveStory.letter;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 text-center z-10">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-10 space-y-3">
        <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
          Personal Letter
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-romantic font-bold text-gradient-rose">
          {letterData.title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-light">
          {letterData.subtitle}
        </p>
      </div>

      <div className="max-w-2xl mx-auto w-full">
        {!isOpen ? (
          /* Sealed Envelope Interactive Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group relative glass-card-rose rounded-3xl p-8 sm:p-12 border border-rose-500/40 shadow-[0_0_50px_rgba(244,114,182,0.2)] flex flex-col items-center justify-center space-y-6 max-w-lg mx-auto"
          >
            {/* Pulsing Envelope Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:opacity-100 transition-opacity" />

            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-rose-500/20 border-2 border-rose-400/50 flex items-center justify-center text-rose-300 shadow-[0_0_30px_rgba(244,114,182,0.5)] group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-12 h-12 sm:w-14 sm:h-14 animate-bounce text-rose-200" />
            </div>

            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-100">
                💌 {letterData.title}
              </h3>
              <p className="text-rose-300/80 text-sm tracking-widest uppercase font-medium">
                Tap to open letter
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/40 text-sm font-serif-romantic group-hover:bg-rose-500 group-hover:text-white transition-all">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Read Heartfelt Letter</span>
            </div>
          </motion.div>
        ) : (
          /* Unfolded Letter Paper Container */
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-gradient-to-b from-[#1b0d26] via-[#150a1d] to-[#0c0512] rounded-3xl p-6 sm:p-10 text-left border border-rose-400/40 shadow-[0_0_60px_rgba(225,29,72,0.25)] relative overflow-hidden"
            >
              {/* Paper Texture Overlay Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Envelope Stamp / Seal Header */}
              <div className="flex justify-between items-center mb-8 border-b border-rose-500/20 pb-4">
                <div className="flex items-center gap-2 text-rose-300">
                  <ScrollText className="w-5 h-5 text-rose-400" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Special Edition • Love Letter</span>
                </div>
                <span className="text-xs font-handwriting text-pink-300 text-base">
                  {letterData.date}
                </span>
              </div>

              {/* Salutation */}
              <p className="text-2xl sm:text-3xl font-handwriting text-pink-300 mb-6">
                {letterData.salutation}
              </p>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed font-light font-serif-romantic">
                {letterData.paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.2 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Closing & Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-10 pt-6 border-t border-rose-500/20 text-right space-y-1"
              >
                <p className="text-sm text-rose-300 font-serif-romantic italic">
                  {letterData.closing}
                </p>
                <p className="text-2xl sm:text-4xl font-handwriting text-pink-300 pt-2 drop-shadow-[0_0_10px_rgba(244,114,182,0.6)]">
                  {letterData.signature}
                </p>
              </motion.div>

              {/* Fold back button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-rose-300/70 hover:text-rose-200 flex items-center gap-1.5 px-4 py-2 rounded-full border border-rose-500/20 hover:border-rose-500/40 transition-all"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Fold letter back</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
