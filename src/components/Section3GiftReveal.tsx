import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import { triggerHeartExplosion } from '../utils/canvasEffects';

interface Section3GiftRevealProps {
  onContinue: () => void;
}

export const Section3GiftReveal: React.FC<Section3GiftRevealProps> = ({ onContinue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const handleOpenGift = () => {
    if (isOpen) return;
    setIsOpen(true);
    triggerHeartExplosion();

    setTimeout(() => {
      setShowFullText(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 text-center z-10 overflow-hidden">
      {/* Background Soft Radial Glow */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isOpen ? 'bg-radial-heart opacity-100' : 'bg-radial-romantic opacity-50'}`} />

      <div className="max-w-xl mx-auto space-y-8 relative z-20">
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-xl sm:text-2xl font-serif-romantic text-rose-200 font-light">
              {loveStory.giftReveal.teaserText}
            </p>

            {/* Interactive 3D Gift Box Container */}
            <div className="py-6 flex justify-center">
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                onClick={handleOpenGift}
                className="cursor-pointer group relative"
              >
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-rose-500/30 rounded-3xl blur-2xl group-hover:bg-rose-400/50 transition-all duration-500" />

                {/* Box body */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-br from-rose-700 via-rose-800 to-rose-950 rounded-3xl border-2 border-rose-400/40 shadow-[0_0_40px_rgba(225,29,72,0.4)] flex items-center justify-center overflow-hidden">
                  {/* Vertical Ribbon */}
                  <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 shadow-md" />
                  {/* Horizontal Ribbon */}
                  <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-400 shadow-md" />

                  {/* Ribbon Bow Icon */}
                  <div className="relative z-10 bg-amber-400/90 text-amber-950 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <Gift className="w-10 h-10 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.button
              onClick={handleOpenGift}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-serif-romantic font-bold text-lg shadow-[0_0_25px_rgba(244,114,182,0.5)] border border-rose-300/40"
            >
              {loveStory.giftReveal.openBtnText}
            </motion.button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
              className="space-y-6"
            >
              {/* Explosion Hearts floating */}
              <div className="flex justify-center items-center gap-3 text-rose-400 mb-4 animate-bounce">
                <Sparkles className="w-8 h-8 text-amber-300" />
                <Heart className="w-12 h-12 fill-rose-500 text-rose-400 shadow-[0_0_20px_rgba(244,114,182,0.8)]" />
                <Sparkles className="w-8 h-8 text-amber-300" />
              </div>

              {/* Big Header Reveal */}
              <div className="font-serif-romantic font-black tracking-tight leading-none text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-7xl sm:text-9xl text-gradient-gold drop-shadow-[0_0_35px_rgba(253,224,71,0.6)] font-bold"
                >
                  {loveStory.giftReveal.bigHeaderLine1}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl sm:text-7xl text-gradient-rose tracking-widest my-2"
                >
                  {loveStory.giftReveal.bigHeaderLine2}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-3xl sm:text-5xl text-rose-200 font-light tracking-widest"
                >
                  {loveStory.giftReveal.bigHeaderLine3}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-6xl sm:text-8xl text-rose-400 font-bold tracking-tight"
                >
                  {loveStory.giftReveal.bigHeaderLine4}
                </motion.div>
              </div>

              {showFullText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 pt-6"
                >
                  <p className="text-xl sm:text-2xl font-serif-romantic text-rose-100">
                    {loveStory.giftReveal.subRevealText}
                  </p>

                  <button
                    onClick={onContinue}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900/80 border border-rose-500/50 text-rose-200 font-medium text-lg hover:bg-rose-600 hover:text-white hover:border-rose-400 transition-all duration-300 shadow-[0_0_20px_rgba(244,114,182,0.3)]"
                  >
                    <span>Explore Our Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
