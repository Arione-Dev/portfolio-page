import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  alpha: number;
  color: string;
}

const CODE_CHARS = ['0', '1', '0', '1', '</>', '{ }', '=>', '01'];
const PARTICLE_COLORS = ['#22d3ee', '#38bdf8', '#34d399', '#818cf8'];

export const CyberCursor: React.FC = () => {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mq.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d') ?? null;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      setIsHovering(Boolean(interactive));
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Spawn binary / code micro-particles on click
      const count = 8;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = 1.4 + Math.random() * 2.2;
        particlesRef.current.push({
          id: nextIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
          alpha: 1,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        });
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const animate = () => {
      // Smooth lerp for outer HUD ring
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      // Render click binary particles if any
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const list = particlesRef.current;
        for (let i = list.length - 1; i >= 0; i--) {
          const p = list[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.032;

          if (p.alpha <= 0) {
            list.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.font = 'bold 10px "JetBrains Mono", "Fira Code", monospace';
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fillText(p.char, p.x, p.y);
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isFinePointer, isVisible]);

  if (!isFinePointer) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Particle burst canvas */}
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 w-full h-full" />

      {/* Outer Cyber HUD Ring + Code Brackets `< />` */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`relative flex items-center justify-center rounded-full transition-all duration-200 ${
            isClicking
              ? 'w-8 h-8 border border-emerald-400 bg-emerald-400/15 shadow-[0_0_20px_rgba(52,211,153,0.6)] scale-90'
              : isHovering
              ? 'w-12 h-12 border border-cyan-300/90 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.45)]'
              : 'w-9 h-9 border border-cyan-400/50 bg-cyan-500/5 shadow-[0_0_14px_rgba(6,182,212,0.25)]'
          }`}
        >
          {/* Rotating dashed HUD reticle */}
          <div
            className={`absolute inset-0.5 rounded-full border border-dashed transition-colors duration-200 animate-[spin_8s_linear_infinite] ${
              isHovering ? 'border-cyan-300/60' : 'border-cyan-500/30'
            }`}
          />

          {/* Developer `< />` HUD brackets around the ring */}
          <span
            className={`font-mono font-bold select-none transition-all duration-200 ${
              isHovering
                ? 'text-[10px] text-cyan-200 tracking-widest opacity-100 scale-105'
                : 'text-[8px] text-cyan-400/75 tracking-tight opacity-80'
            }`}
          >
            {isHovering ? '< />' : '</>'}
          </span>
        </div>
      </div>

      {/* Inner Precision Laser Core Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isClicking
              ? 'w-2.5 h-2.5 bg-emerald-300 shadow-[0_0_14px_#34d399]'
              : isHovering
              ? 'w-1.5 h-1.5 bg-white shadow-[0_0_12px_#22d3ee]'
              : 'w-2 h-2 bg-cyan-300 shadow-[0_0_10px_#06b6d4]'
          }`}
        />
      </div>
    </div>
  );
};
