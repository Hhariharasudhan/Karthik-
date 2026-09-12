import React, { useEffect, useRef } from 'react';

export const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const numStars = 120;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.6 + 0.4,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1
    }));

    // Floating heart particles
    const numHearts = 18;
    const hearts = Array.from({ length: numHearts }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 200,
      size: Math.random() * 10 + 8,
      speedY: Math.random() * 0.6 + 0.3,
      speedX: Math.sin(Math.random() * Math.PI) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.8
    }));

    const drawHeart = (x: number, y: number, size: number, alpha: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.fillStyle = `rgba(244, 114, 182, ${alpha})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = `rgba(225, 29, 72, ${alpha * 0.8})`;

      // Heart path relative to size
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size);
      ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);

      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space ambient glow
      const radialGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height * 0.4,
        50,
        canvas.width / 2,
        canvas.height * 0.4,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      radialGradient.addColorStop(0, '#150921');
      radialGradient.addColorStop(0.5, '#0d0516');
      radialGradient.addColorStop(1, '#060209');

      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render Twinkling Stars
      stars.forEach(star => {
        star.alpha += star.speed * star.twinkleDir;
        if (star.alpha >= 1) {
          star.alpha = 1;
          star.twinkleDir = -1;
        } else if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.twinkleDir = 1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 245, ${star.alpha})`;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = 'rgba(253, 224, 71, 0.8)';
        ctx.fill();
      });

      // Render Floating Hearts
      hearts.forEach(heart => {
        heart.y -= heart.speedY;
        heart.x += Math.sin(heart.y * 0.01) * 0.4;
        heart.rotation += heart.rotSpeed;

        if (heart.y < -30) {
          heart.y = canvas.height + 30;
          heart.x = Math.random() * canvas.width;
        }

        drawHeart(heart.x, heart.y, heart.size, heart.alpha, heart.rotation);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
