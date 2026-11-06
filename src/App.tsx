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

      {/* 4. Main Portfolio Content (Always rendered behind, revealed as laser scans down) */}
      <div className="relative z-10 opacity-100">
        <Navbar onReplayIntro={handleReplayIntro} />
        
        <main>
          <Hero />

          {/* Quick Metrics Bar */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center group hover:border-cyan-500/30 transition">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
                  <Code2 className="w-4 h-4" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Full Stack
                </p>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                  Front, Back & Cloud
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center group hover:border-blue-500/30 transition">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Clean Code
                </p>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                  Padrões & Boas Práticas
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center group hover:border-emerald-500/30 transition">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Alta Performance
                </p>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                  Otimização & Escalabilidade
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center group hover:border-purple-500/30 transition">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
                  <Rocket className="w-4 h-4" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
                  Entrega Ágil
                </p>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                  CI/CD & Resolução
                </p>
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
