import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal, Cpu, ArrowRight } from 'lucide-react';

interface HologramIntroProps {
  onComplete: () => void;
}

const GLYPHS = ['0', '1', '0', '1', '0', '1', '0', '1', 'A', 'F', '7', 'E', '4', 'C', 'x'];

const codeLines = [
  { text: '01000001 01110010 01101001 01101111 01101110 01100101 [ARIONE]', color: 'text-cyan-300' },
  { text: '0x7F 0x45 0x4C 0x46 0x02 0x01 0x01 0x00 [BOOT_EXEC_LOAD]', color: 'text-blue-400' },
  { text: '01000110 01110101 01101100 01101100 01010011 01110100 [FULLSTACK]', color: 'text-cyan-300' },
  { text: 'MOV EAX, [DEV_PTR] ; PUSH 0x01 ; JMP_RENDER_UI', color: 'text-purple-400' },
  { text: '01010010 01100101 01100001 01100011 01110100 [REACT_KERNEL]', color: 'text-cyan-300' },
  { text: '01001110 01101111 01100100 01100101 01001010 01010011 [NODE_ENGINE]', color: 'text-emerald-400' },
  { text: '>> COMPILANDO BINÁRIO EM INTERFACE VISUAL...', color: 'text-yellow-400' },
];

const FADE_MS = 1400;

export const HologramIntro: React.FC<HologramIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'run' | 'fade'>('run');
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Start at the top (no leftover #hash) and lock scroll during the intro
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Full-screen machine language rain (binary / hex)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.ceil(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -40);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf = 0;
    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 40) return;
      last = t;

      ctx.fillStyle = 'rgba(4, 6, 11, 0.16)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = '#e0fbff';
        ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], x, y);
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(6,182,212,0.85)' : 'rgba(56,189,248,0.6)';
        ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], x, y - fontSize);

        if (y > canvas.height && Math.random() > 0.96) drops[i] = 0;
        drops[i] += 1;
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Step 1: Progress bar fills 0 -> 100%
  useEffect(() => {
    if (phase !== 'run') return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + Math.floor(Math.random() * 3) + 1, 100);
      });
    }, 45);
    return () => clearInterval(timer);
  }, [phase]);

  // Step 2: When progress hits 100%, switch to 'fade' phase
  useEffect(() => {
    if (phase !== 'run' || progress < 100) return;
    const timer = setTimeout(() => {
      setPhase('fade');
    }, 350);
    return () => clearTimeout(timer);
  }, [progress, phase]);

  // Step 3: Everything dissolves smoothly into the real page and unmounts
  useEffect(() => {
    if (phase !== 'fade') return;
    const timer = setTimeout(() => {
      onCompleteRef.current();
    }, FADE_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const fading = phase === 'fade';
  const visibleLines = Math.max(1, Math.ceil((progress / 100) * codeLines.length));

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden font-mono">
      {/* Skip button: also fades out and disables pointer events as soon as fade starts */}
      <button
        onClick={() => onCompleteRef.current()}
        className={`absolute top-5 right-5 z-[60] flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 transition-opacity duration-500 backdrop-blur ${
          fading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
        title="Pular animação"
      >
        <span>Pular</span>
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Whole intro layer: dissolves softly (opacity + blur) to reveal the page underneath */}
      <div
        className="absolute inset-0 bg-[#04060b]"
        style={{
          opacity: fading ? 0 : 1,
          filter: fading ? 'blur(10px)' : 'blur(0px)',
          transition: `opacity ${FADE_MS}ms ease-in-out, filter ${FADE_MS}ms ease-in-out`,
          pointerEvents: fading ? 'none' : 'auto',
        }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,6,11,0.85)_0%,transparent_65%)]" />

        {/* Center Box: machine language lines */}
        <div className="h-full w-full flex items-center justify-center p-4">
          <div
            className="relative max-w-xl w-full p-6 sm:p-8 rounded-2xl glass-panel-glow text-left"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'scale(1.06)' : 'scale(1)',
              transition: `opacity ${FADE_MS * 0.7}ms ease-out, transform ${FADE_MS}ms ease-out`,
            }}
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>arione-boot-system.exe</span>
                </span>
              </div>
              <div className="text-[11px] text-cyan-400 font-mono flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                <span>{progress < 100 ? 'BOOT' : 'PRONTO'}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm min-h-[190px] flex flex-col justify-start">
              {codeLines.slice(0, visibleLines).map((line, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-slate-600 select-none text-[11px] pt-0.5">0{idx + 1}</span>
                  <span className={`${line.color} font-mono tracking-tight text-[11px] sm:text-xs`}>{line.text}</span>
                </div>
              ))}
              <div className="inline-block w-2 h-4 bg-cyan-400 animate-pulse mt-1" />
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{progress < 100 ? 'Carregando núcleo...' : 'Núcleo pronto'}</span>
              </span>
              <span className="text-slate-400 flex items-center gap-1 font-mono">
                <span>Arione Rodrigues</span>
                <ArrowRight className="w-3 h-3 text-cyan-400" />
              </span>
            </div>

            {/* Progress bar: glued to the bottom of the modal, full modal width */}
            <div className="-mx-6 sm:-mx-8 -mb-6 sm:-mb-8 mt-4">
              <div className="flex items-end justify-between px-6 sm:px-8 mb-2 text-[11px] tracking-widest uppercase">
                <span className="text-cyan-400/80">Carregando portfólio</span>
                <span className="text-xl font-extrabold text-cyan-300 tracking-tight">
                  {progress.toString().padStart(2, '0')}%
                </span>
              </div>
              <div className="w-full bg-slate-900/90 h-2 overflow-hidden rounded-b-2xl">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 shadow-[0_0_14px_rgba(6,182,212,0.7)] transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
