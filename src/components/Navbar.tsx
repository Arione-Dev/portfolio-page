import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, RotateCw } from 'lucide-react';

interface NavbarProps {
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#05070e] rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              AR
            </div>
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
            Arione<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Replay Hologram Button */}
          <button
            onClick={onReplayIntro}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-400 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all"
            title="Rever animação de abertura holográfica"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Rever Holograma</span>
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center gap-1"
          >
            <span>Bora conversar</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onReplayIntro}
            className="p-2 text-cyan-400 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
            title="Rever Holograma"
          >
            <RotateCw className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-800/80 px-5 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white block shadow-lg shadow-cyan-500/20"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
