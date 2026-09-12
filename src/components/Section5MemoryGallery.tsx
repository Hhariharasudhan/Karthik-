import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, MapPin, Sparkles, ZoomIn, Coffee, Sun, Moon, Car, Home, Flame } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import type { MemoryItem } from '../data/loveStory';
import { globalAudio } from '../utils/audioSynth';

const memoryIllustrations: Record<string, React.ReactNode> = {
  'mem-1': (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-950/80 via-rose-950 to-slate-950 flex flex-col items-center justify-center p-4 text-center">
      <Coffee className="w-12 h-12 text-amber-300 animate-pulse mb-2" />
      <span className="text-xs font-serif-romantic text-amber-200">Warm Coffee & Smiles</span>
    </div>
  ),
  'mem-2': (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/40 via-rose-900 to-indigo-950 flex flex-col items-center justify-center p-4 text-center">
      <Sun className="w-12 h-12 text-amber-300 animate-pulse mb-2" />
      <span className="text-xs font-serif-romantic text-rose-200">Golden Beach Sunset</span>
    </div>
  ),
  'mem-3': (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-rose-950 flex flex-col items-center justify-center p-4 text-center">
      <Moon className="w-12 h-12 text-indigo-300 animate-pulse mb-2" />
      <span className="text-xs font-serif-romantic text-indigo-200">Starlit Winter Walk</span>
    </div>
  ),
  'mem-4': (
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-rose-950 flex flex-col items-center justify-center p-4 text-center">
      <Car className="w-12 h-12 text-emerald-400 animate-pulse mb-2" />
      <span className="text-xs font-serif-romantic text-emerald-200">Wild Road Trip</span>
    </div>
  ),
  'mem-5': (
    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/60 via-amber-950 to-slate-950 flex flex-col items-center justify-center p-4 text-center">
      <Home className="w-12 h-12 text-rose-300 animate-pulse mb-2" />
      <span className="text-xs font-serif-romantic text-rose-200">Cozy Sunday Morning</span>
    </div>
  ),
  'mem-6': (
    <div className="absolute inset-0 bg-gradient-to-br from-pink-950 via-rose-950 to-purple-950 flex flex-col items-center justify-center p-4 text-center">
      <Flame className="w-12 h-12 text-pink-400 animate-pulse mb-2" />
      <span className="text-xs font-serif-romantic text-pink-200">Everyday Magic</span>
    </div>
  )
};

export const Section5MemoryGallery: React.FC = () => {
  const memories = loveStory.memories;
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  const handleOpenMemory = (mem: MemoryItem) => {
    globalAudio.playSoundEffect('butterfly');
    setSelectedMemory(mem);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center px-4 py-16 text-center z-10">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
          Photo Gallery
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-romantic font-bold text-gradient-rose">
          Our Memory Polaroid Album
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-light">
          Snapshots of our 4-year love story. Tap any polaroid frame to expand the memory.
        </p>
      </div>

      {/* Polaroid Gallery Grid with Organic Rotations */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 px-2">
        {memories.map((mem, index) => {
          const rotations = [-2.5, 3, -3.5, 2, -2, 3.5];
          const rot = rotations[index % rotations.length];

          return (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
              onClick={() => handleOpenMemory(mem)}
              style={{ transform: `rotate(${rot}deg)` }}
              className="cursor-pointer group relative bg-[#130b1a] rounded-2xl p-4 border border-rose-500/30 shadow-[0_12px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(244,114,182,0.3)] transition-all duration-300 flex flex-col items-center overflow-hidden"
            >
              {/* Polaroid Top Tape Effect */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-rose-200/20 backdrop-blur-sm border border-rose-300/20 rotate-1 rounded-sm z-20 pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-rose-500/25 mb-4 flex items-center justify-center">
                {memoryIllustrations[mem.id] || (
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-950 to-slate-900 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-rose-400" />
                  </div>
                )}

                {/* Hover zoom overlay */}
                <div className="absolute inset-0 bg-rose-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-10">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Bottom Label */}
              <div className="w-full text-center space-y-1 pt-1">
                <h3 className="text-lg font-serif-romantic font-bold text-rose-100 group-hover:text-rose-300 transition-colors">
                  {mem.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs text-rose-300/80">
                  <span className="font-handwriting text-lg text-pink-300">{mem.date}</span>
                  {mem.location && (
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      • <MapPin className="w-3 h-3 text-rose-400" /> {mem.location}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Enlarged Memory Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg glass-card-rose rounded-3xl p-6 sm:p-8 border border-rose-500/40 shadow-[0_0_70px_rgba(244,114,182,0.35)] text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-rose-300 hover:text-white border border-rose-500/30 hover:bg-rose-600 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Frame */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-rose-500/30 mb-6 relative flex items-center justify-center">
                {memoryIllustrations[selectedMemory.id] || (
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-900 to-pink-950 flex flex-col items-center justify-center">
                    <Heart className="w-16 h-16 text-rose-400 fill-rose-500/30 animate-pulse mb-3" />
                  </div>
                )}
              </div>

              {/* Memory Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif-romantic font-bold text-rose-100">
                    {selectedMemory.title}
                  </h3>
                  {selectedMemory.mood && (
                    <span className="text-xs font-medium text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {selectedMemory.mood}
                    </span>
                  )}
                </div>

                <p className="text-slate-200 text-base font-light leading-relaxed">
                  "{selectedMemory.caption}"
                </p>

                {selectedMemory.location && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-300/80 pt-2 border-t border-rose-500/20">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>{selectedMemory.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
