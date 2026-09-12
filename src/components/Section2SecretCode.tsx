import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Delete, Sparkles, HelpCircle } from 'lucide-react';
import { loveStory } from '../data/loveStory';
import { globalAudio } from '../utils/audioSynth';

interface Section2SecretCodeProps {
  onSuccess: () => void;
}

export const Section2SecretCode: React.FC<Section2SecretCodeProps> = ({ onSuccess }) => {
  const [pin, setPin] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  const targetPin = loveStory.secretCode || "0809";

  const handleKeyPress = (num: string) => {
    if (isSuccess || pin.length >= 4) return;
    globalAudio.playSoundEffect('keypad');
    const newPin = pin + num;
    setPin(newPin);
    setErrorMsg(null);

    if (newPin.length === 4) {
      verifyPin(newPin);
    }
  };

  const handleDelete = () => {
    if (isSuccess) return;
    globalAudio.playSoundEffect('keypad');
    setPin(prev => prev.slice(0, -1));
    setErrorMsg(null);
  };

  const verifyPin = (enteredPin: string) => {
    if (enteredPin === targetPin) {
      setIsSuccess(true);
      globalAudio.playSoundEffect('success');
      setErrorMsg(null);
      setTimeout(() => {
        onSuccess();
      }, 1400);
    } else {
      setIsShaking(true);
      setErrorMsg(loveStory.secretGate.incorrectMsg);
      setTimeout(() => {
        setIsShaking(false);
        setPin('');
      }, 700);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 text-center z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto glass-card-rose rounded-3xl p-6 sm:p-8 border border-rose-500/30 shadow-[0_0_60px_rgba(244,114,182,0.18)] relative overflow-hidden"
      >
        {/* Top Metallic Gold Dial Ring */}
        <div className="flex justify-center mb-4">
          <motion.div
            animate={isSuccess ? { scale: [1, 1.25, 1], rotate: [0, -15, 15, 0] } : {}}
            className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-colors duration-500 relative ${
              isSuccess
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.5)]'
                : 'bg-gradient-to-br from-rose-900/60 to-slate-900 border-amber-300/60 text-rose-300 shadow-[0_0_30px_rgba(244,114,182,0.35)]'
            }`}
          >
            <div className="absolute inset-1 rounded-full border border-rose-400/20 pointer-events-none" />
            {isSuccess ? <Unlock className="w-9 h-9 text-emerald-300" /> : <Lock className="w-9 h-9 text-rose-200" />}
          </motion.div>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-100 mb-2">
          {loveStory.secretGate.title}
        </h2>
        <p className="text-sm text-slate-300 mb-6 font-light">
          {loveStory.secretGate.subtext}
        </p>

        {/* PIN Indicators */}
        <motion.div
          animate={isShaking ? { x: [-12, 12, -10, 10, -5, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-4 mb-6"
        >
          {Array.from({ length: 4 }).map((_, index) => {
            const filled = pin.length > index;
            return (
              <motion.div
                key={index}
                animate={filled ? { scale: [1, 1.25, 1] } : {}}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 ${
                  isSuccess
                    ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.9)]'
                    : filled
                    ? 'bg-rose-400 border-rose-300 shadow-[0_0_15px_rgba(244,114,182,0.9)]'
                    : 'bg-transparent border-rose-500/30'
                }`}
              />
            );
          })}
        </motion.div>

        {/* Error / Success Toast Feedback */}
        <div className="h-10 mb-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs sm:text-sm text-rose-300 bg-rose-950/80 px-4 py-1.5 rounded-full border border-rose-500/40"
              >
                {errorMsg}
              </motion.div>
            )}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm font-semibold text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-500/40 flex items-center gap-1.5 shadow-lg"
              >
                <Sparkles className="w-4 h-4" /> {loveStory.secretGate.correctMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Keypad Grid */}
        <div className="grid grid-cols-3 gap-3 max-w-[280px] mx-auto">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
            <button
              key={num}
              onClick={() => handleKeyPress(num)}
              disabled={isSuccess}
              className="w-16 h-16 rounded-2xl bg-slate-900/70 border border-rose-500/25 hover:border-rose-400/70 text-rose-100 text-xl font-medium font-serif-romantic flex items-center justify-center shadow-md active:scale-90 hover:bg-rose-500/25 hover:shadow-[0_0_20px_rgba(244,114,182,0.4)] transition-all duration-200"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => {
              globalAudio.playSoundEffect('keypad');
              setShowHint(!showHint);
            }}
            className="w-16 h-16 rounded-2xl bg-slate-900/40 border border-slate-700/40 text-slate-400 flex items-center justify-center hover:text-rose-300 hover:border-rose-500/40 active:scale-90 transition-all"
            title="Hint"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleKeyPress('0')}
            disabled={isSuccess}
            className="w-16 h-16 rounded-2xl bg-slate-900/70 border border-rose-500/25 hover:border-rose-400/70 text-rose-100 text-xl font-medium font-serif-romantic flex items-center justify-center shadow-md active:scale-90 hover:bg-rose-500/25 hover:shadow-[0_0_20px_rgba(244,114,182,0.4)] transition-all duration-200"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            disabled={isSuccess}
            className="w-16 h-16 rounded-2xl bg-slate-900/40 border border-slate-700/40 text-slate-400 flex items-center justify-center hover:text-rose-300 hover:border-rose-500/40 active:scale-90 transition-all"
            title="Delete"
          >
            <Delete className="w-5 h-5" />
          </button>
        </div>

        {/* Hint drawer */}
        {showHint && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 text-xs text-rose-300/90 italic bg-rose-950/40 py-1.5 px-3 rounded-lg border border-rose-500/20"
          >
            {loveStory.secretGate.hint}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
