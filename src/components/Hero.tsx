import React, { useState } from 'react';
import { 
  Terminal, 
  ChevronRight, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  MessageCircle, 
  Copy, 
  Check 
} from 'lucide-react';
import { profile, whatsappUrl } from '../data/profile';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// arione-developer.config.ts
export const developer = {
  name: "Arione Rodrigues",
  role: "Full Stack Developer",
  core: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  architecture: "Clean Architecture & REST/GraphQL APIs",
  availableForHire: true,
  buildAwesomeSoftware: () => {
    return "Transformando desafios complexos em produtos digitais escaláveis.";
  }
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold">Disponível para novos projetos & contratos</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Construindo software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                robusto, moderno e completo.
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed pt-1">
              Olá! Eu sou <strong className="text-white">Arione Rodrigues</strong>, Desenvolvedor Full Stack focado em unir arquitetura sólida de backend a interfaces modernas, rápidas e intuitivas.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>Explorar Projetos</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-5 py-3 rounded-xl font-semibold text-sm glass-panel hover:bg-slate-800/90 text-slate-200 hover:text-white transition-all flex items-center gap-2 border border-slate-700/60"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Fale Comigo</span>
            </a>

            <a
              href="#contact"
              className="px-4 py-3 rounded-xl font-semibold text-sm glass-panel hover:bg-slate-800/90 text-slate-300 hover:text-white transition-all flex items-center gap-2 border border-slate-700/60"
              title="Solicitar Currículo em PDF"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Currículo</span>
            </a>
          </div>

          {/* Social Proof & Quick Connect */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Conectar:</span>
            <div className="flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs">GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Code Terminal Presentation */}
        <div className="lg:col-span-5">
          <div className="relative group">
            {/* Ambient Neon Back-glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-25 blur-xl group-hover:opacity-45 transition duration-700" />
            
            <div className="relative glass-panel rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl font-mono text-xs">
              
              {/* Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-400 text-xs ml-1 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>arione-developer.ts</span>
                  </span>
                </div>
                
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded hover:bg-slate-800"
                  title="Copiar código"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-5 text-slate-300 space-y-1.5 overflow-x-auto leading-relaxed select-text">
                <p><span className="text-purple-400">export const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Arione Rodrigues"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">frontend:</span> [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"TypeScript"</span>, <span className="text-cyan-300">"Tailwind"</span>],</p>
                <p className="pl-4"><span className="text-slate-400">backend:</span> [<span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"Express"</span>, <span className="text-cyan-300">"PostgreSQL"</span>, <span className="text-cyan-300">"Docker"</span>],</p>
                <p className="pl-4"><span className="text-slate-400">architecture:</span> <span className="text-emerald-300">"Clean Code & APIs RESTful"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400 font-semibold">"Ready to build"</span></p>
                <p>&#125;;</p>
                
                <div className="pt-3 border-t border-slate-800/80">
                  <p className="text-slate-500 flex items-center gap-2">
                    <span className="text-cyan-400">➜</span>
                    <span className="text-slate-400">arione.getMission()</span>
                  </p>
                  <p className="text-emerald-400 pl-4 font-semibold text-[11px]">
                    "Criar produtos digitais de alta performance e impacto."
                  </p>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>TypeScript 5.7 • Ready</span>
                </span>
                <span className="text-slate-500 font-mono text-[10px]">UTF-8 • LF</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
