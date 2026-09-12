import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { StarryBackground } from './components/StarryBackground';
import { MusicController } from './components/MusicController';
import { ProgressIndicator } from './components/ProgressIndicator';
import { Section1Intro } from './components/Section1Intro';
import { Section2SecretCode } from './components/Section2SecretCode';
import { Section3GiftReveal } from './components/Section3GiftReveal';
import { Section4JourneyTimeline } from './components/Section4JourneyTimeline';
import { Section5MemoryGallery } from './components/Section5MemoryGallery';
import { Section6LoveLetter } from './components/Section6LoveLetter';
import { Section7ButterflyMessages } from './components/Section7ButterflyMessages';
import { Section8VirtualHug } from './components/Section8VirtualHug';
import { Section9LoveTree } from './components/Section9LoveTree';
import { Section10FinalReveal } from './components/Section10FinalReveal';
import { Section11FinalQuestion } from './components/Section11FinalQuestion';

const sectionTitles = [
  'Intro',
  'Secret Lock',
  'Gift Reveal',
  'Our Journey',
  'Memories',
  'Love Letter',
  'Butterflies',
  'Virtual Hug',
  'Love Tree',
  'Final Reveal',
  'Will You?'
];

export function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [unlockedStep, setUnlockedStep] = useState<number>(1);
  const [musicAutoStart, setMusicAutoStart] = useState<boolean>(false);

  const totalSteps = 11;

  const goToStep = (step: number) => {
    if (step <= unlockedStep) {
      setCurrentStep(step);
    }
  };

  const handleNextStep = () => {
    const next = currentStep + 1;
    if (next <= totalSteps) {
      setUnlockedStep(prev => Math.max(prev, next));
      setCurrentStep(next);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleIntroStart = () => {
    setMusicAutoStart(true);
    setUnlockedStep(prev => Math.max(prev, 2));
    setCurrentStep(2);
  };

  const handleSecretCodeSuccess = () => {
    setUnlockedStep(prev => Math.max(prev, 3));
    setCurrentStep(3);
  };

  const handleRestart = () => {
    setCurrentStep(1);
  };

  return (
    <div className="relative min-h-screen bg-[#08030c] text-slate-100 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Canvas Starry & Particle Background */}
      <StarryBackground />

      {/* Floating Audio Controller */}
      <MusicController autoStartTrigger={musicAutoStart} />

      {/* Floating Story Progress Indicator Bar */}
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        unlockedStep={unlockedStep}
        onSelectStep={goToStep}
        sectionTitles={sectionTitles}
      />

      {/* Section View Container with Framer Motion Transitions */}
      <main className="relative z-10 min-h-screen flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex-grow flex items-center justify-center pb-20 sm:pb-24"
          >
            {currentStep === 1 && (
              <Section1Intro onStart={handleIntroStart} />
            )}

            {currentStep === 2 && (
              <Section2SecretCode onSuccess={handleSecretCodeSuccess} />
            )}

            {currentStep === 3 && (
              <Section3GiftReveal onContinue={handleNextStep} />
            )}

            {currentStep === 4 && (
              <Section4JourneyTimeline />
            )}

            {currentStep === 5 && (
              <Section5MemoryGallery />
            )}

            {currentStep === 6 && (
              <Section6LoveLetter />
            )}

            {currentStep === 7 && (
              <Section7ButterflyMessages />
            )}

            {currentStep === 8 && (
              <Section8VirtualHug />
            )}

            {currentStep === 9 && (
              <Section9LoveTree />
            )}

            {currentStep === 10 && (
              <Section10FinalReveal onContinue={handleNextStep} />
            )}

            {currentStep === 11 && (
              <Section11FinalQuestion onRestart={handleRestart} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Global Continuous Section Navigation Footer Cues (for steps 4 through 9) */}
        {currentStep >= 4 && currentStep <= 9 && (
          <div className="relative z-30 pb-14 sm:pb-16 pt-2 px-6 flex justify-between items-center max-w-4xl mx-auto w-full">
            <button
              onClick={handlePrevStep}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs font-serif-romantic hover:border-rose-400 hover:text-rose-200 transition-all backdrop-blur-md shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNextStep}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 border border-rose-300/40 text-white text-sm font-serif-romantic font-semibold shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>Continue Story</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
