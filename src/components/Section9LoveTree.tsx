import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { loveStory } from '../data/loveStory';

export const Section9LoveTree: React.FC = () => {
  const [stage, setStage] = useState<number>(4); // Default to full bloom or allow stage progression

  const treeData = loveStory.loveTree;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 text-center z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-romantic opacity-40 pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-20">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
            Our Growth
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-romantic font-bold text-gradient-rose">
            Our Tree of Love 🌳❤️
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Watch how our love grew year by year, blooming into something truly beautiful.
          </p>
        </div>

        {/* Stage Selection Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {treeData.milestones.map((m) => {
            const isActive = stage === m.year;
            return (
              <button
                key={m.year}
                onClick={() => setStage(m.year)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif-romantic transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-rose-500 text-white border-rose-300 shadow-[0_0_20px_rgba(244,114,182,0.7)] font-bold scale-105'
                    : 'bg-slate-900/80 text-rose-200 border-rose-500/30 hover:border-rose-400'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isActive ? 'fill-white text-white' : 'text-rose-400'}`} />
                <span>{m.title}</span>
              </button>
            );
          })}
        </div>

        {/* SVG Animated Blooming Tree Illustration */}
        <div className="py-4 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl glass-card-rose border border-rose-500/30 shadow-[0_0_50px_rgba(244,114,182,0.2)] flex items-center justify-center p-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200">
              {/* Ground Roots */}
              <path
                d="M 60,180 Q 100,165 140,180"
                stroke="#be123c"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />

              {/* Main Trunk */}
              <motion.path
                d="M 100,175 Q 95,130 100,90"
                stroke="#881337"
                strokeWidth={8 + stage * 2}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />

              {/* Year 1 Branches */}
              {stage >= 1 && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <path d="M 100,130 Q 70,110 50,100" stroke="#9f1239" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M 100,120 Q 130,105 150,95" stroke="#9f1239" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <circle cx="50" cy="100" r="6" fill="#f472b6" />
                  <circle cx="150" cy="95" r="6" fill="#f472b6" />
                </motion.g>
              )}

              {/* Year 2 Branches & Leaves */}
              {stage >= 2 && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <path d="M 100,100 Q 60,70 40,55" stroke="#be123c" strokeWidth="3" fill="none" />
                  <path d="M 100,95 Q 140,65 160,50" stroke="#be123c" strokeWidth="3" fill="none" />
                  <circle cx="40" cy="55" r="9" fill="#fb7185" />
                  <circle cx="160" cy="50" r="9" fill="#fb7185" />
                </motion.g>
              )}

              {/* Year 3 Buds */}
              {stage >= 3 && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <path d="M 100,85 Q 85,50 70,35" stroke="#e11d48" strokeWidth="2.5" fill="none" />
                  <path d="M 100,85 Q 115,50 130,35" stroke="#e11d48" strokeWidth="2.5" fill="none" />
                  <circle cx="70" cy="35" r="11" fill="#f472b6" />
                  <circle cx="130" cy="35" r="11" fill="#f472b6" />
                </motion.g>
              )}

              {/* Year 4 Full Heart Canopy Bloom */}
              {stage >= 4 && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  {/* Floating heart blossoms */}
                  {[
                    { x: 100, y: 35, s: 18 },
                    { x: 75, y: 45, s: 14 },
                    { x: 125, y: 45, s: 14 },
                    { x: 55, y: 65, s: 12 },
                    { x: 145, y: 65, s: 12 },
                    { x: 90, y: 60, s: 16 },
                    { x: 110, y: 60, s: 16 },
                    { x: 100, y: 75, s: 15 }
                  ].map((h, i) => (
                    <g key={i} transform={`translate(${h.x}, ${h.y})`}>
                      <path
                        d="M 0 3 C 0 0, -6 0, -6 3 C -6 7, 0 10, 0 13 C 0 10, 6 7, 6 3 C 6 0, 0 0, 0 3 Z"
                        fill="#fb7185"
                        className="drop-shadow-[0_0_8px_rgba(251,113,133,0.8)] animate-pulse"
                      />
                    </g>
                  ))}
                </motion.g>
              )}
            </svg>
          </div>
        </div>

        {/* Descriptive Text Lines */}
        <div className="space-y-4 max-w-xl mx-auto">
          <p className="text-lg sm:text-xl font-serif-romantic text-rose-100 font-light leading-relaxed">
            "{treeData.finalTextLine1}"
          </p>

          <p className="text-base sm:text-lg font-serif-romantic text-rose-300 font-medium italic">
            "{treeData.finalTextLine2}"
          </p>
        </div>
      </div>
    </div>
  );
};
