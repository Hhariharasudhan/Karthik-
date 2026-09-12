import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Heart, Flame, Infinity as InfinityIcon, Calendar, CheckCircle2 } from 'lucide-react';
import { loveStory } from '../data/loveStory';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-amber-300" />,
  MoonStars: <Moon className="w-5 h-5 text-rose-300" />,
  HeartHandshake: <Heart className="w-5 h-5 text-rose-400 fill-rose-400/40" />,
  Flame: <Flame className="w-5 h-5 text-orange-400" />,
  Infinity: <InfinityIcon className="w-5 h-5 text-rose-300" />
};

export const Section4JourneyTimeline: React.FC = () => {
  const milestones = loveStory.journey;
  const [activeId, setActiveId] = useState<string>(milestones[0]?.id || 'journey-1');

  const activeMilestone = milestones.find(m => m.id === activeId) || milestones[0];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center px-4 py-16 text-center z-10">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
          Our Timeline
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-romantic font-bold text-gradient-rose">
          4 Years of Memories
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-light">
          Tap on each milestone along our starry path to re-live our special moments.
        </p>
      </div>

      {/* Desktop View: Horizontal Glowing Curved Path */}
      <div className="hidden lg:block max-w-5xl mx-auto w-full relative mb-12">
        {/* SVG Curved Glowing Path */}
        <svg className="w-full h-24 overflow-visible" viewBox="0 0 1000 100">
          <path
            d="M 50,50 Q 250,10 500,50 T 950,50"
            fill="none"
            stroke="rgba(244, 114, 182, 0.2)"
            strokeWidth="4"
          />
          <path
            d="M 50,50 Q 250,10 500,50 T 950,50"
            fill="none"
            stroke="url(#roseGlowGradient)"
            strokeWidth="4"
            className="drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]"
          />
          <defs>
            <linearGradient id="roseGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="50%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>
          </defs>
        </svg>

        {/* Milestone Nodes positioned on path */}
        <div className="absolute inset-0 flex justify-between items-center px-8">
          {milestones.map((m) => {
            const isActive = m.id === activeId;
            return (
              <button
                key={m.id}
                onClick={() => setActiveId(m.id)}
                className={`relative group flex flex-col items-center transition-all duration-300 ${
                  isActive ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                }`}
              >
                {/* Glowing Node Button */}
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-rose-500 border-white text-white shadow-[0_0_25px_rgba(244,114,182,0.9)]'
                      : 'bg-slate-900/90 border-rose-500/40 text-rose-300 hover:border-rose-400 shadow-md'
                  }`}
                >
                  {iconMap[m.iconName || 'Sparkles'] || <Sparkles className="w-5 h-5" />}
                </div>

                {/* Node Title Preview */}
                <span
                  className={`mt-2 text-xs font-serif-romantic transition-colors whitespace-nowrap ${
                    isActive ? 'text-rose-200 font-bold' : 'text-slate-400 group-hover:text-rose-300'
                  }`}
                >
                  {m.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile View: Vertical Timeline Bar */}
      <div className="lg:hidden flex overflow-x-auto gap-3 px-4 py-2 mb-8 no-scrollbar max-w-full">
        {milestones.map((m) => {
          const isActive = m.id === activeId;
          return (
            <button
              key={m.id}
              onClick={() => setActiveId(m.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-serif-romantic border transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-rose-500 text-white border-rose-300 shadow-[0_0_15px_rgba(244,114,182,0.6)] font-bold'
                  : 'bg-slate-900/80 text-rose-200 border-rose-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-300 animate-pulse" />
              {m.title}
            </button>
          );
        })}
      </div>

      {/* Active Milestone Card Display */}
      <div className="max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="glass-card-rose rounded-3xl p-6 sm:p-8 text-left border border-rose-500/30 shadow-[0_0_40px_rgba(244,114,182,0.15)] relative overflow-hidden"
          >
            {/* Top Tag & Date */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-semibold text-rose-300 bg-rose-950/70 border border-rose-500/40 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-rose-400" />
                {activeMilestone.date}
              </span>
              {activeMilestone.tag && (
                <span className="text-xs font-medium text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  {activeMilestone.tag}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-100 mb-3">
              {activeMilestone.title}
            </h3>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light mb-6">
              {activeMilestone.description}
            </p>

            {/* Optional Image or Romantic Graphic Card */}
            <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden border border-rose-500/20 bg-slate-900/80 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-70" />

              {/* Decorative Romantic Canvas Graphic Fallback */}
              <div className="absolute inset-0 bg-radial-heart flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 mb-3 shadow-[0_0_20px_rgba(244,114,182,0.4)] group-hover:scale-110 transition-transform duration-500">
                  {iconMap[activeMilestone.iconName || 'Sparkles']}
                </div>
                <span className="text-xs text-rose-300/80 font-serif-romantic italic">
                  {activeMilestone.date} — {activeMilestone.title}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
