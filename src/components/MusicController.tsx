import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { globalAudio } from '../utils/audioSynth';
import { loveStory } from '../data/loveStory';

interface MusicControllerProps {
  autoStartTrigger?: boolean;
}

export const MusicController: React.FC<MusicControllerProps> = ({ autoStartTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (autoStartTrigger && !isPlaying) {
      globalAudio.play(loveStory.musicUrl).then(() => {
        setIsPlaying(true);
      });
    }
  }, [autoStartTrigger]);

  const toggleMusic = () => {
    const newState = globalAudio.toggle(loveStory.musicUrl);
    setIsPlaying(newState);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
      {showTooltip && (
        <span className="text-xs px-3 py-1.5 rounded-full bg-rose-950/80 text-rose-200 border border-rose-500/30 backdrop-blur-md animate-fade-in shadow-lg">
          {isPlaying ? 'Music Playing 🎵' : 'Muted 🔇'}
        </span>
      )}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute music" : "Play music"}
        className={`relative p-3 rounded-full border transition-all duration-300 backdrop-blur-md group ${
          isPlaying
            ? 'bg-rose-500/20 border-rose-400/50 text-rose-300 shadow-[0_0_20px_rgba(244,114,182,0.4)] scale-105'
            : 'bg-slate-900/60 border-slate-700/50 text-slate-400 hover:text-rose-300 hover:border-rose-500/40'
        }`}
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 className="w-5 h-5 animate-pulse text-rose-300" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5" />
        )}

        {/* Floating music note icon hint */}
        <Music className="w-3 h-3 absolute -bottom-1 -left-1 text-rose-400/70 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};
