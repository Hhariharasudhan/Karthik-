import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import { triggerHeartExplosion } from '../utils/canvasEffects';
import { globalAudio } from '../utils/audioSynth';

export const Section8VirtualHug: React.FC = () => {
  const [hugDelivered, setHugDelivered] = useState(false);
  const [isEmbracing, setIsEmbracing] = useState(false);

  const hugData = loveStory.hugSection;

  const handleSendHug = () => {
    globalAudio.playSoundEffect('hug');
    setIsEmbracing(true);
    setHugDelivered(true);
    triggerHeartExplosion();

    // Device vibration if supported
    if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200]);
    }

    setTimeout(() => {
      setIsEmbracing(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 text-center z-10 overflow-hidden">
      {/* Background Pulsing Aura on Hug */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${hugDelivered ? 'bg-radial-heart opacity-100' : 'bg-radial-romantic opacity-30'}`} />

      <div className="max-w-xl mx-auto space-y-8 relative z-20">
        {/* Title & Subtitle */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
            Warm Embrace
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-romantic font-bold text-gradient-rose">
            {hugDelivered ? hugData.afterHugTitle : hugData.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            {hugDelivered ? hugData.afterHugSubtitle : hugData.subtitle}
          </p>
        </div>

        {/* Custom Bespoke SVG Hugging Bear Illustration */}
        <div className="py-6 flex justify-center">
          <motion.div
            animate={isEmbracing ? { scale: [1, 1.15, 1], rotate: [0, -6, 6, 0] } : { y: [0, -10, 0] }}
            transition={isEmbracing ? { duration: 0.8, repeat: 2 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-60 h-60 sm:w-68 sm:h-68 rounded-full bg-gradient-to-br from-rose-900/70 via-slate-950 to-pink-950/80 border-2 border-rose-400/50 p-6 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(244,114,182,0.35)] group cursor-pointer"
            onClick={handleSendHug}
          >
            {/* Outer Glow Halo */}
            <div className="absolute inset-0 rounded-full bg-rose-500/20 blur-2xl group-hover:bg-rose-400/40 transition-all duration-500" />

            {/* Hugging Graphic SVG */}
            <div className="relative z-10 w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Bear Left */}
                <g transform="translate(18, 30)">
                  <circle cx="20" cy="20" r="18" fill="#f472b6" opacity="0.9" />
                  <circle cx="8" cy="8" r="6" fill="#be123c" />
                  <circle cx="32" cy="8" r="6" fill="#be123c" />
                  <circle cx="15" cy="18" r="2.5" fill="#1e1b4b" />
                  <circle cx="25" cy="18" r="2.5" fill="#1e1b4b" />
                  <ellipse cx="20" cy="24" rx="4" ry="3" fill="#fbcfe8" />
                </g>
                {/* Bear Right */}
                <g transform="translate(42, 30)">
                  <circle cx="20" cy="20" r="18" fill="#fb7185" opacity="0.9" />
                  <circle cx="8" cy="8" r="6" fill="#881337" />
                  <circle cx="32" cy="8" r="6" fill="#881337" />
                  <circle cx="15" cy="18" r="2.5" fill="#1e1b4b" />
                  <circle cx="25" cy="18" r="2.5" fill="#1e1b4b" />
                  <ellipse cx="20" cy="24" rx="4" ry="3" fill="#ffe4e6" />
                </g>
                {/* Center Pulsing Heart */}
                <path
                  d="M 50 35 C 50 30, 42 30, 42 37 C 42 45, 50 52, 50 55 C 50 52, 58 45, 58 37 C 58 30, 50 30, 50 35 Z"
                  fill="#e11d48"
                  className="animate-ping"
                />
                <path
                  d="M 50 35 C 50 30, 42 30, 42 37 C 42 45, 50 52, 50 55 C 50 52, 58 45, 58 37 C 58 30, 50 30, 50 35 Z"
                  fill="#fb7185"
                />
              </svg>
            </div>

            {/* Sublabel */}
            <span className="relative z-10 text-xs font-serif-romantic font-semibold text-rose-300 mt-2">
              {hugDelivered ? "Warmest Hug Delivered ✨" : "Tap to Embrace"}
            </span>
          </motion.div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={handleSendHug}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-rose-500 text-white font-serif-romantic font-bold text-lg shadow-[0_0_35px_rgba(225,29,72,0.6)] hover:shadow-[0_0_55px_rgba(244,114,182,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-300/40"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>{hugData.btnText}</span>
            <Heart className="w-5 h-5 fill-white text-rose-200 group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
