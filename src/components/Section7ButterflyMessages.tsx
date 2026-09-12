import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Trophy } from 'lucide-react';
import { loveStory } from '../data/loveStory';

interface ButterflyItem {
  id: number;
  message: string;
  x: number; // percentage
  y: number; // percentage
  color: string;
}

export const Section7ButterflyMessages: React.FC = () => {
  const messages = loveStory.butterflyMessages;

  const colors = ['#f472b6', '#fb7185', '#be123c', '#fef08a', '#e879f9'];

  const initialButterflies: ButterflyItem[] = messages.slice(0, 6).map((msg, index) => ({
    id: index,
    message: msg,
    x: 15 + (index * 15) % 70,
    y: 20 + ((index * 25) % 55),
    color: colors[index % colors.length]
  }));

  const [caughtIds, setCaughtIds] = useState<number[]>([]);
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  const handleCatch = (b: ButterflyItem) => {
    if (!caughtIds.includes(b.id)) {
      setCaughtIds(prev => [...prev, b.id]);
    }
    setActiveMessage(b.message);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center px-4 py-16 text-center z-10 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-8 space-y-3">
        <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
          Interactive Butterflies
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-romantic font-bold text-gradient-rose">
          Catch a Little Love 🦋
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-light">
          Fluttering around are tiny whispers of my love for you. Tap a butterfly to catch its secret note!
        </p>

        {/* Counter */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-rose-500/30 text-rose-200 text-xs font-semibold">
          <Trophy className="w-4 h-4 text-amber-300" />
          <span>Caught: {caughtIds.length} / {initialButterflies.length}</span>
        </div>
      </div>

      {/* Interactive Butterfly Stage Container */}
      <div className="relative w-full max-w-4xl mx-auto h-[420px] sm:h-[480px] rounded-3xl glass-card border border-rose-500/20 shadow-2xl overflow-hidden my-4 flex items-center justify-center">
        {/* Soft background aura */}
        <div className="absolute inset-0 bg-radial-romantic opacity-40 pointer-events-none" />

        {/* Render Butterflies */}
        {initialButterflies.map((b) => {
          const isCaught = caughtIds.includes(b.id);

          return (
            <motion.div
              key={b.id}
              onClick={() => handleCatch(b)}
              animate={{
                x: [0, 20, -15, 10, 0],
                y: [0, -25, 15, -10, 0],
                rotate: [0, 8, -8, 4, 0]
              }}
              transition={{
                duration: 6 + b.id * 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                left: `${b.x}%`,
                top: `${b.y}%`
              }}
              className={`absolute cursor-pointer p-3 rounded-full transition-all duration-300 group ${
                isCaught
                  ? 'opacity-40 scale-75'
                  : 'hover:scale-125 z-20 shadow-[0_0_20px_rgba(244,114,182,0.6)]'
              }`}
            >
              {/* Wing Flapping Butterfly SVG */}
              <motion.div
                animate={{ scaleX: [1, 0.4, 1] }}
                transition={{ duration: 0.35, repeat: Infinity, ease: 'linear' }}
                className="relative"
              >
                <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 50 50">
                  <path
                    d="M 25 25 C 10 5, 0 20, 15 32 C 22 38, 25 28, 25 25 C 25 28, 28 38, 35 32 C 50 20, 40 5, 25 25 Z"
                    fill={b.color}
                    opacity="0.85"
                  />
                  <circle cx="25" cy="25" r="2.5" fill="#ffffff" />
                </svg>
              </motion.div>

              {/* Glowing Aura Ring */}
              <div className="absolute inset-0 rounded-full border border-rose-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          );
        })}
      </div>

      {/* Popover Card for Revealed Message */}
      <AnimatePresence>
        {activeMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full max-w-sm glass-card-rose rounded-3xl p-6 sm:p-8 border border-rose-500/40 shadow-[0_0_50px_rgba(244,114,182,0.3)] text-center space-y-4"
            >
              <button
                onClick={() => setActiveMessage(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/80 text-rose-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 mx-auto shadow-md">
                <Heart className="w-6 h-6 fill-rose-500 text-rose-400 animate-pulse" />
              </div>

              <h3 className="text-xl font-serif-romantic font-bold text-rose-100">
                A Butterfly Whispers:
              </h3>

              <p className="text-lg font-serif-romantic text-rose-200 italic leading-relaxed py-2">
                "{activeMessage}"
              </p>

              <button
                onClick={() => setActiveMessage(null)}
                className="w-full py-3 rounded-full bg-rose-500 text-white font-serif-romantic font-semibold text-sm shadow-md hover:bg-rose-600 transition-colors"
              >
                Keep In My Heart ❤️
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
