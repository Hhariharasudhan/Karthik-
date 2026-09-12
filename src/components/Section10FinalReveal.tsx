import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { loveStory } from '../data/loveStory';

interface Section10FinalRevealProps {
  onContinue: () => void;
}

export const Section10FinalReveal: React.FC<Section10FinalRevealProps> = ({ onContinue }) => {
  const [lineStep, setLineStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setLineStep(1), 1000);
    const t2 = setTimeout(() => setLineStep(2), 2600);
    const t3 = setTimeout(() => setLineStep(3), 4200);
    const t4 = setTimeout(() => setLineStep(4), 5800);
    const t5 = setTimeout(() => setLineStep(5), 7400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const revealData = loveStory.finalReveal;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 text-center z-10 overflow-hidden bg-[#060209]">
      {/* Deep Romantic Void Aura */}
      <div className="absolute inset-0 bg-radial-heart opacity-60 pointer-events-none" />

      <div className="max-w-2xl mx-auto space-y-10 relative z-20">
        {/* Line 1 */}
        {lineStep >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl font-serif-romantic font-black text-gradient-rose tracking-wider shadow-rose-500"
          >
            {revealData.line1}
          </motion.div>
        )}

        {/* Line 2 */}
        {lineStep >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-serif-romantic font-light text-rose-200 tracking-wide"
          >
            {revealData.line2}
          </motion.div>
        )}

        {/* Line 3 */}
        {lineStep >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-serif-romantic font-light text-slate-300 tracking-wide"
          >
            {revealData.line3}
          </motion.div>
        )}

        {/* Line 4 */}
        {lineStep >= 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.5 }}
            className="text-6xl sm:text-8xl font-serif-romantic font-bold text-gradient-gold drop-shadow-[0_0_40px_rgba(253,224,71,0.6)]"
          >
            {revealData.line4}
          </motion.div>
        )}

        {/* Final Message & Subtitle */}
        {lineStep >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-6 pt-6 border-t border-rose-500/20"
          >
            <p className="text-2xl sm:text-3xl font-serif-romantic font-semibold text-rose-100">
              {revealData.subtitle}
            </p>

            <p className="text-base sm:text-lg font-serif-romantic text-rose-300/90 font-light italic max-w-lg mx-auto leading-relaxed">
              "{loveStory.finalMessage}"
            </p>

            <div className="pt-4">
              <button
                onClick={onContinue}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-serif-romantic font-bold text-lg shadow-[0_0_35px_rgba(225,29,72,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-300/40"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>One Last Question...</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
