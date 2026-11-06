import React, { useState, useEffect } from 'react';
import { HologramIntro } from './components/HologramIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutAndExperience } from './components/AboutAndExperience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';
import { CodeRevealBackground } from './components/CodeRevealBackground';
import { Zap, Code2, ShieldCheck, Rocket } from 'lucide-react';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      
      {/* 1. Hologram Intro Sequence (Acts as dynamic revealing curtain) */}
      {showIntro && (
        <HologramIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. Interactive Mouse Ambient Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-25"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.12), transparent 80%)`,
        }}
      />

      {/* 3. Global Ambient Blurred Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />
      </div>

      {/* 3b. Code "x-ray" lens: binary then source code revealed behind the site on mouse move */}
      <CodeRevealBackground />

      {/* 4. Main Portfolio Content (Always rendered behind, revealed as laser scans down) */}
      <div className="relative z-10 opacity-100">
        <Navbar onReplayIntro={handleReplayIntro} />
        
        <main>
          <Hero />

          {/* Quick Metrics Bar */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Card 1: Full Stack */}
              <div className="glass-panel relative overflow-hidden p-6 rounded-2xl border border-slate-800/90 text-center flex flex-col items-center justify-center group cursor-default transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-cyan-400/60 hover:shadow-[0_14px_35px_-10px_rgba(6,182,212,0.35)]">
                {/* Ambient radial glow on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Diagonal shimmer sweep */}
                <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent opacity-0 group-hover:animate-[shimmerSweep_1.1s_ease-in-out] group-hover:opacity-100" />
                {/* Corner pulse dot */}
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-all duration-300" />

                <div className="relative z-10 w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  <Code2 className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <p className="relative z-10 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 transition-transform duration-300 group-hover:scale-105">
                  Full Stack
                </p>
                <p className="relative z-10 text-[11px] font-mono text-slate-400 group-hover:text-cyan-200/90 uppercase tracking-wider mt-1 transition-colors duration-300">
                  Front, Back & Cloud
                </p>
                {/* Bottom neon bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee] transition-all duration-500" />
              </div>

              {/* Card 2: Clean Code */}
              <div className="glass-panel relative overflow-hidden p-6 rounded-2xl border border-slate-800/90 text-center flex flex-col items-center justify-center group cursor-default transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-blue-400/60 hover:shadow-[0_14px_35px_-10px_rgba(59,130,246,0.35)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-blue-300/15 to-transparent opacity-0 group-hover:animate-[shimmerSweep_1.1s_ease-in-out] group-hover:opacity-100" />
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-400/40 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_#60a5fa] transition-all duration-300" />

                <div className="relative z-10 w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <ShieldCheck className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <p className="relative z-10 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 transition-transform duration-300 group-hover:scale-105">
                  Clean Code
                </p>
                <p className="relative z-10 text-[11px] font-mono text-slate-400 group-hover:text-blue-200/90 uppercase tracking-wider mt-1 transition-colors duration-300">
                  Padrões & Boas Práticas
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_12px_#60a5fa] transition-all duration-500" />
              </div>

              {/* Card 3: Alta Performance */}
              <div className="glass-panel relative overflow-hidden p-6 rounded-2xl border border-slate-800/90 text-center flex flex-col items-center justify-center group cursor-default transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-emerald-400/60 hover:shadow-[0_14px_35px_-10px_rgba(16,185,129,0.35)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-300/15 to-transparent opacity-0 group-hover:animate-[shimmerSweep_1.1s_ease-in-out] group-hover:opacity-100" />
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_#34d399] transition-all duration-300" />

                <div className="relative z-10 w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <Zap className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <p className="relative z-10 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 transition-transform duration-300 group-hover:scale-105">
                  Alta Performance
                </p>
                <p className="relative z-10 text-[11px] font-mono text-slate-400 group-hover:text-emerald-200/90 uppercase tracking-wider mt-1 transition-colors duration-300">
                  Otimização & Escalabilidade
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] transition-all duration-500" />
              </div>

              {/* Card 4: Entrega Ágil */}
              <div className="glass-panel relative overflow-hidden p-6 rounded-2xl border border-slate-800/90 text-center flex flex-col items-center justify-center group cursor-default transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-purple-400/60 hover:shadow-[0_14px_35px_-10px_rgba(168,85,247,0.35)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-purple-300/15 to-transparent opacity-0 group-hover:animate-[shimmerSweep_1.1s_ease-in-out] group-hover:opacity-100" />
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-purple-400/40 group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_#c084fc] transition-all duration-300" />

                <div className="relative z-10 w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-500/20 group-hover:border-purple-400/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <Rocket className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <p className="relative z-10 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-rose-400 transition-transform duration-300 group-hover:scale-105">
                  Entrega Ágil
                </p>
                <p className="relative z-10 text-[11px] font-mono text-slate-400 group-hover:text-purple-200/90 uppercase tracking-wider mt-1 transition-colors duration-300">
                  CI/CD & Resolução
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_12px_#c084fc] transition-all duration-500" />
              </div>
            </Reveal>
          </section>

          <Reveal><Skills /></Reveal>
          <Reveal><Projects /></Reveal>
          <Reveal><AboutAndExperience /></Reveal>
          <Reveal><Contact /></Reveal>
        </main>

        <Reveal><Footer /></Reveal>
      </div>

    </div>
  );
};

export default App;
