import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { loveStory } from '../data/loveStory';

interface Section1IntroProps {
  onStart: () => void;
}

export const Section1Intro: React.FC<Section1IntroProps> = ({ onStart }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(2), 2600);
    const timer3 = setTimeout(() => setStep(3), 4400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center z-10 overflow-hidden">
      {/* Soft central radial glow */}
      <div className="absolute inset-0 bg-radial-romantic pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 text-rose-500/20 animate-float-slow pointer-events-none">
        <Heart className="w-16 h-16 blur-[1px]" />
      </div>
      <div className="absolute bottom-1/4 right-10 text-pink-500/20 animate-float-slow [animation-delay:2s] pointer-events-none">
        <Heart className="w-20 h-20 blur-[1px]" />
      </div>

      <div className="max-w-2xl mx-auto space-y-8 relative z-20">
        {/* Line 1: Greeting */}
        {step >= 1 && (
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif-romantic tracking-wide text-gradient-rose font-bold drop-shadow-[0_0_25px_rgba(244,114,182,0.4)]"
          >
            {loveStory.intro.greeting}
          </motion.h1>
        )}

        {/* Line 2: Main intro text */}
        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-xl sm:text-3xl font-light text-slate-200 tracking-wide font-serif-romantic"
          >
            {loveStory.intro.message}
          </motion.p>
        )}

        {/* Line 3: Subtext */}
        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-base sm:text-lg text-rose-300/80 font-sans tracking-widest uppercase text-xs"
          >
            {loveStory.intro.subMessage}
          </motion.p>
        )}

        {/* CTA Button */}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
            className="pt-6"
          >
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 text-white font-medium text-lg tracking-wider shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:shadow-[0_0_50px_rgba(244,114,182,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-300/40 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              <Sparkles className="w-5 h-5 text-rose-200 animate-spin [animation-duration:8s]" />
              <span className="relative z-10 font-serif-romantic font-semibold">{loveStory.intro.ctaText}</span>
              <Heart className="w-5 h-5 text-rose-100 group-hover:scale-125 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
