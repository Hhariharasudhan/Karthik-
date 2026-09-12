import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  unlockedStep: number;
  onSelectStep: (step: number) => void;
  sectionTitles: string[];
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  unlockedStep,
  onSelectStep,
  sectionTitles
}) => {
  if (currentStep === 1) return null; // Hide on intro section for maximum immersion

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1.5 sm:py-2 rounded-full glass-card border border-rose-500/25 shadow-2xl flex items-center gap-1.5 max-w-[92vw] overflow-x-auto no-scrollbar backdrop-blur-xl"
    >
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1;
        const isCurrent = currentStep === stepNum;
        const isUnlocked = stepNum <= unlockedStep;

        return (
          <button
            key={stepNum}
            onClick={() => isUnlocked && onSelectStep(stepNum)}
            disabled={!isUnlocked}
            title={`${stepNum}. ${sectionTitles[i] || `Section ${stepNum}`}`}
            className={`group relative flex items-center justify-center transition-all duration-300 ${
              isCurrent
                ? 'w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-[11px] sm:text-xs shadow-[0_0_12px_rgba(244,114,182,0.6)] scale-110'
                : isUnlocked
                ? 'w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-rose-400/40 hover:bg-rose-400 hover:scale-125'
                : 'w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-700/50 cursor-not-allowed opacity-40'
            }`}
          >
            {isCurrent && (
              <span className="text-[10px] leading-none">{stepNum}</span>
            )}

            {/* Hover tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-slate-900/90 text-rose-200 text-[11px] px-2.5 py-1 rounded-md border border-rose-500/30 shadow-lg">
              {stepNum}. {sectionTitles[i]}
            </div>
          </button>
        );
      })}
    </motion.div>
  );
};
