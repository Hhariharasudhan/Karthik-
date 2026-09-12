import confetti from 'canvas-confetti';

// Trigger romantic heart confetti explosion
export const triggerHeartExplosion = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;

  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval: ReturnType<typeof setInterval> = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // Heart shapes and soft pink/gold colors
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#f472b6', '#fb7185', '#be123c', '#fef08a', '#ffffff'],
      shapes: ['circle', 'square']
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#f472b6', '#fb7185', '#be123c', '#fef08a', '#ffffff'],
      shapes: ['circle', 'square']
    });
  }, 250);
};

// Trigger side cannons confetti celebration for final answer
export const triggerGrandCelebration = () => {
  // Fire center explosion
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#f472b6', '#e11d48', '#fda4af', '#fde047', '#ffffff']
  });

  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
      colors: ['#f472b6', '#e11d48', '#fde047']
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
      colors: ['#f472b6', '#e11d48', '#fde047']
    });
  }, 300);
};
