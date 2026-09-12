import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Infinity as InfinityIcon, RefreshCw } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import { triggerGrandCelebration, triggerHeartExplosion } from '../utils/canvasEffects';

interface Section11FinalQuestionProps {
  onRestart: () => void;
}

export const Section11FinalQuestion: React.FC<Section11FinalQuestionProps> = ({ onRestart }) => {
  const [answered, setAnswered] = useState(false);

  const questionData = loveStory.finalQuestion;

  const handleAnswer = () => {
    setAnswered(true);
    triggerGrandCelebration();
    setTimeout(() => {
      triggerHeartExplosion();
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 text-center z-10 overflow-hidden">
      {/* Background Heart Explosion Radial Aura */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${answered ? 'bg-radial-heart opacity-100' : 'bg-radial-romantic opacity-50'}`} />

      <div className="max-w-2xl mx-auto space-y-8 relative z-20">
        {!answered ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 glass-card-rose rounded-3xl p-8 sm:p-12 border border-rose-500/40 shadow-[0_0_60px_rgba(244,114,182,0.25)]"
          >
            {/* Heart Icon Header */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-rose-500/20 border border-rose-400/50 flex items-center justify-center text-rose-300 shadow-[0_0_30px_rgba(244,114,182,0.6)] animate-pulse">
                <Heart className="w-10 h-10 fill-rose-500 text-rose-300" />
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-serif-romantic font-light text-rose-200 leading-relaxed whitespace-pre-line">
                {questionData.question}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAnswer}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-serif-romantic font-bold text-lg shadow-[0_0_30px_rgba(244,114,182,0.6)] border border-rose-300/40 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>{questionData.btnYes}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAnswer}
                className="px-8 py-4 rounded-full bg-slate-900/90 text-rose-200 font-serif-romantic font-bold text-lg shadow-[0_0_20px_rgba(244,114,182,0.3)] border border-rose-500/50 hover:bg-rose-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>{questionData.btnOfCourse}</span>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* Celebration View */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            className="space-y-8 glass-card-rose rounded-3xl p-8 sm:p-12 border border-rose-400/50 shadow-[0_0_80px_rgba(244,114,182,0.4)]"
          >
            <div className="flex justify-center items-center gap-3">
              <Sparkles className="w-8 h-8 text-amber-300 animate-spin" />
              <Heart className="w-16 h-16 fill-rose-500 text-rose-300 shadow-[0_0_30px_rgba(244,114,182,0.8)]" />
              <Sparkles className="w-8 h-8 text-amber-300 animate-spin" />
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif-romantic font-bold text-gradient-gold drop-shadow-[0_0_35px_rgba(253,224,71,0.6)]">
              {questionData.celebrationText1}
            </h2>

            <p className="text-xl sm:text-2xl font-serif-romantic text-rose-100 font-light leading-relaxed max-w-lg mx-auto">
              {questionData.celebrationText2}
            </p>

            <div className="pt-6 flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 text-rose-300/80 font-handwriting text-2xl">
                <span>Infinity & Beyond</span>
                <InfinityIcon className="w-6 h-6 text-rose-400" />
              </div>

              <button
                onClick={onRestart}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/80 border border-rose-500/30 text-rose-300 text-sm font-serif-romantic hover:bg-rose-950 hover:text-white transition-all shadow-md"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Replay Our Story</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
