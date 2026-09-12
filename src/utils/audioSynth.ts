// Web Audio API ambient synth fallback + Sound Effects Manager
class AudioManager {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private htmlAudio: HTMLAudioElement | null = null;
  private isSynthRunning: boolean = false;
  private synthInterval: number | null = null;

  constructor() {
    // Lazy audio context init on user gesture
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public async play(musicUrl: string): Promise<boolean> {
    this.initAudioContext();
    this.isPlaying = true;

    // Try HTML Audio first if url provided
    if (musicUrl) {
      try {
        if (!this.htmlAudio) {
          this.htmlAudio = new Audio(musicUrl);
          this.htmlAudio.loop = true;
          this.htmlAudio.volume = 0.5;
        }
        await this.htmlAudio.play();
        return true;
      } catch {
        // Fallback to Web Audio API Synth if MP3 fails to play or file missing
        console.log("Audio file unavailable, starting ambient romantic music synthesizer fallback.");
        this.startAmbientSynth();
        return true;
      }
    } else {
      this.startAmbientSynth();
      return true;
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.htmlAudio) {
      this.htmlAudio.pause();
    }
    this.stopAmbientSynth();
  }

  public toggle(musicUrl: string): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play(musicUrl);
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // Synthesize soft chime sound effects for keypresses and triggers
  public playSoundEffect(type: 'keypad' | 'success' | 'gift' | 'butterfly' | 'hug') {
    this.initAudioContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    if (type === 'keypad') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5 note chime
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880.00, now + 0.1); // A5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'butterfly' || type === 'gift' || type === 'hug') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.setValueAtTime(987.77, now + 0.12); // B5
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    }
  }

  // Synthesize a dreamy, romantic ambient chord progression (Cmaj7 -> Am7 -> Fmaj7 -> G7sus4)
  private startAmbientSynth() {
    if (this.isSynthRunning || !this.audioCtx) return;
    this.isSynthRunning = true;

    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 349.23], // Fmaj7
      [196.00, 261.63, 349.23, 440.00]  // G7sus4
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.audioCtx) return;
      
      const currentChord = chords[chordIdx];
      chordIdx = (chordIdx + 1) % chords.length;

      currentChord.forEach((freq, noteIdx) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const noteGain = this.audioCtx.createGain();

        // Soft sine & triangle blend for warm music-box chime feel
        osc.type = noteIdx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        const now = this.audioCtx.currentTime;
        const duration = 4.5;

        // Envelope: soft attack, gentle sustain, smooth fade out
        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.03, now + 0.8);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(noteGain);
        noteGain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + duration);
      });
    };

    playChord();
    this.synthInterval = window.setInterval(playChord, 4000);
  }

  private stopAmbientSynth() {
    this.isSynthRunning = false;
    if (this.synthInterval !== null) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

export const globalAudio = new AudioManager();
