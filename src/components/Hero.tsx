import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Copy, 
  Check,
  Code2,
  Sparkles
} from 'lucide-react';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'cli'>('code');
  
  // Interactive CLI State
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    {
      command: 'welcome',
      output: 'Arione.OS v2.5 CLI pronto. Digite "help" para listar os comandos.'
    }
  ]);
  const cliEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === 'cli') {
      cliEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cliHistory, activeTab]);

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = 'Comandos: help, skills, ai, db, devops, projects, contact, hire, about, clear';
        break;
      case 'skills':
        output = 'Backend: Python (FastAPI/Django/Flask), Java (Spring Boot), Node.js | Frontend/Mobile: React, Angular, TS, Flutter (Android/iOS)';
        break;
      case 'ai':
        output = 'IA & Dados: Arquiteturas RAG, LangChain, Orquestração de LLMs, Hugging Face, Ollama, PyTorch, TensorFlow, ONNX, Fine-tuning';
        break;
      case 'db':
        output = 'Bancos de Dados: PostgreSQL, MySQL, Oracle, MongoDB, Redis e Vetoriais (Pinecone, ChromaDB)';
        break;
      case 'devops':
        output = 'DevOps & Infra: Docker, Docker Compose, Docker Swarm, Kubernetes (K8s), RabbitMQ, Celery, CI/CD, GitHub Actions, N8n, Linux';
        break;
      case 'projects':
        output = 'Destaques: Ecossistema Interfort (-62,5% custos com IA/Flutter/FastAPI) e Plataforma Logística Diniz (ruptura 30% -> 5%).';
        break;
      case 'contact':
        output = `E-mail: ${profile.email} | WhatsApp: ${profile.phoneDisplay} | LinkedIn: ${profile.linkedinLabel} | GitHub: github.com/Arione-Dev`;
        break;
      case 'hire':
        output = 'Status: Disponível para atuar como Desenvolvedor Full Stack (PJ, CLT ou Projetos). Vamos conversar!';
        break;
      case 'about':
        output = 'Arione Rodrigues: Desenvolvedor Full Stack (Natal/RN), graduando em Ciência da Computação (8º período - UNP).';
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        output = `Comando não reconhecido: "${cmd}". Digite "help" para ver os comandos.`;
    }

    setCliHistory((prev) => [...prev, { command: cliInput, output }]);
    setCliInput('');
  };

  const codeSnippet = `// arione-developer.config.ts
export const developer = {
  name: "Arione Rodrigues",
  role: "Desenvolvedor Full Stack",
  backend: ["Python (FastAPI/Django/Flask)", "Java (Spring Boot)", "Node.js"],
  frontendMobile: ["React", "Angular", "TypeScript", "Flutter (Android/iOS)"],
  databases: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Pinecone/ChromaDB"],
  aiAndInfra: ["RAG & LangChain", "Docker Swarm & K8s", "RabbitMQ & Redis"],
  impact: "-62.5% custos operacionais com automação e IA Generativa"
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
            <span className="font-semibold">Disponível para novos projetos & oportunidades • Natal/RN</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Arquiteturas escaláveis, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Full Stack & IA Generativa.
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed pt-1">
              Olá! Eu sou <strong className="text-white">Arione Rodrigues</strong>, Desenvolvedor Full Stack especializado em construir APIs robustas (<span className="text-slate-200">Python, Java, Node.js</span>), aplicações <span className="text-slate-200">Web, PWA e Mobile (React, Angular, Flutter)</span> e automações com <span className="text-cyan-400">Inteligência Artificial</span>.
            </p>
          </div>

        </div>

        {/* Right Column: Code Terminal Presentation with Tabs */}
        <div className="lg:col-span-5">
          <div className="relative group">
            {/* Ambient Neon Back-glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-25 blur-xl group-hover:opacity-45 transition duration-700" />
            
            <div className="relative glass-panel rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl font-mono text-xs">
              
              {/* Window Header with Tab Switcher */}
              <div className="bg-slate-900/95 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  
                  {/* Tabs */}
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'code'
                          ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Code2 className="w-3 h-3 text-cyan-400" />
                      <span>arione.ts</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('cli')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'cli'
                          ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <TerminalIcon className="w-3 h-3 text-emerald-400" />
                      <span>terminal (bash)</span>
                    </button>
                  </div>
                </div>
                
                {activeTab === 'code' && (
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded hover:bg-slate-800"
                    title="Copiar código"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}

                {activeTab === 'cli' && (
                  <span className="text-[10px] text-emerald-400/90 font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>interativo</span>
                  </span>
                )}
              </div>

              {/* Tab 1: Static Code Body */}
              {activeTab === 'code' && (
                <div className="p-5 text-slate-300 space-y-1.5 overflow-x-auto leading-relaxed select-text min-h-[235px]">
                  <p><span className="text-purple-400">export const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Arione Rodrigues"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">backend:</span> [<span className="text-cyan-300">"Python (FastAPI/Django)"</span>, <span className="text-cyan-300">"Java (Spring)"</span>, <span className="text-cyan-300">"Node.js"</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">frontMobile:</span> [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Angular"</span>, <span className="text-cyan-300">"TypeScript"</span>, <span className="text-cyan-300">"Flutter"</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">databases:</span> [<span className="text-cyan-300">"PostgreSQL"</span>, <span className="text-cyan-300">"MySQL"</span>, <span className="text-cyan-300">"Oracle"</span>, <span className="text-cyan-300">"MongoDB"</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">aiAndCloud:</span> [<span className="text-emerald-300">"RAG & LangChain"</span>, <span className="text-emerald-300">"Docker Swarm & K8s"</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">messaging:</span> [<span className="text-amber-300">"RabbitMQ"</span>, <span className="text-amber-300">"Celery"</span>, <span className="text-amber-300">"Redis"</span>]</p>
                  <p>&#125;;</p>
                  
                  <div className="pt-3 border-t border-slate-800/80">
                    <p className="text-slate-500 flex items-center gap-2">
                      <span className="text-cyan-400">➜</span>
                      <span className="text-slate-400">arione.getImpact()</span>
                    </p>
                    <p className="text-emerald-400 pl-4 font-semibold text-[11px]">
                      "-62,5% em custos operacionais com automação e IA."
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Interactive Terminal CLI */}
              {activeTab === 'cli' && (
                <div className="p-4 text-slate-300 space-y-2 font-mono text-[11px] min-h-[235px] max-h-[270px] overflow-y-auto flex flex-col justify-between">
                  <div className="space-y-2">
                    {cliHistory.map((item, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-cyan-400">
                          <span className="text-slate-500">guest@arione.dev:~$</span>
                          <span className="text-white font-semibold">{item.command}</span>
                        </div>
                        <div className="text-slate-300 pl-2 border-l border-cyan-500/30">
                          {item.output}
                        </div>
                      </div>
                    ))}
                    <div ref={cliEndRef} />
                  </div>

                  {/* Input line */}
                  <form onSubmit={handleCliSubmit} className="pt-2 border-t border-slate-800 flex items-center gap-1.5">
                    <span className="text-cyan-400">guest@arione.dev:~$</span>
                    <input
                      type="text"
                      autoFocus
                      placeholder="digite help, skills, ai, db, devops..."
                      value={cliInput}
                      onChange={(e) => setCliInput(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-white text-[11px] font-mono placeholder-slate-600"
                    />
                  </form>
                </div>
              )}

              {/* Terminal Footer */}
              <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Full Stack & IA • Ready</span>
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
