import React from 'react';
import { Heart, Terminal, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 glass-nav py-10 relative z-20 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-white">Arione Rodrigues</span>
          <span>•</span>
          <span>Full Stack Developer</span>
        </div>

        {/* Center note */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <span>Construído com React, TypeScript & Tailwind</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/40" />
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-colors"
          title="Voltar ao Topo"
        >
          <span>Topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};

