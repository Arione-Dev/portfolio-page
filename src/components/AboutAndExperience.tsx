import React from 'react';
import { User, Briefcase, GraduationCap, TrendingDown } from 'lucide-react';
import { TimelineItem } from '../types';

export const AboutAndExperience: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      period: '2025 – 2026',
      role: 'Desenvolvedor Full Stack',
      companyOrContext: 'Grupo Interfort',
      description:
        'Desenvolvimento de ecossistema de soluções para automação de processos (SAC, ouvidoria, financeiro, logística e operacional). Aplicações Web, PWA e Mobile (Flutter Android/iOS), backend em Python (FastAPI/Flask/Django), PostgreSQL, Docker Swarm e agentes autônomos de IA Generativa — alcançando redução de 62,5% nos custos operacionais.',
      tags: ['Python', 'FastAPI', 'Django', 'Flutter', 'PostgreSQL', 'Docker Swarm', 'IA Generativa']
    },
    {
      period: '2023 – 2025',
      role: 'Analista de Dados / Dev',
      companyOrContext: 'E.H.M - Diniz - Sacolão (10 Filiais)',
      description:
        'Desenvolvimento de plataforma interna com Python, Flask, HTML, CSS e JavaScript para RH, Análise de Dados e Logística. Implementação de sistema de agendamento e monitoramento de entregas em tempo real, reduzindo a ruptura de estoque das filiais de 30% para 5%.',
      tags: ['Python', 'Flask', 'JavaScript', 'SQL', 'Análise de Dados', 'Logística']
    },
    {
      period: '2020 – 2023',
      role: 'Suporte Logístico & Indicadores',
      companyOrContext: 'E.H.M - Diniz - Sacolão',
      description:
        'Gestão de indicadores e relatórios técnicos para suporte à tomada de decisão operacional, controle de inventário e acuracidade entre estoque físico e digital.',
      tags: ['Indicadores', 'BI & Relatórios', 'Gestão de Estoque']
    },
    {
      period: 'Conclusão em 2026',
      role: 'Bacharelado em Ciência da Computação',
      companyOrContext: 'UNP – Universidade Potiguar',
      description:
        'Formação acadêmica sólida complementada por cursos técnicos em Desenvolvimento de Sistemas, DBA (Database Administrator), Docker Swarm, Java, Python (POO) e Angular.',
      tags: ['Ciência da Computação', 'DBA', 'Java', 'Angular', 'Docker']
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-slate-700/60 relative overflow-hidden text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: About copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <User className="w-3.5 h-3.5" />
              <span>Sobre Mim</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Arquiteturas escaláveis, dados e automação com IA.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Sou <strong className="text-white">Arione Rodrigues</strong>, Desenvolvedor Full Stack com sólida experiência prática na construção de arquiteturas escaláveis, modelagem de bancos de dados e integração de sistemas corporativos de missão crítica.
              </p>
              <p>
                Aliando forte capacidade analítica e pensamento crítico, atuo no desenvolvimento de <strong className="text-cyan-400">APIs robustas</strong> em Python (FastAPI, Django, Flask), Java (Spring Boot) e Node.js, além de interfaces modernas em <strong className="text-blue-400">React, Angular e aplicativos móveis com Flutter</strong>.
              </p>
              <p>
                Tenho foco especial na automação de processos e implementação de <strong className="text-emerald-400">Inteligência Artificial Generativa (RAG, LangChain, Agentes Autônomos)</strong>, gerando eficiência comprovada e redução expressiva de custos operacionais.
              </p>
            </div>

            {/* Real Impact Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/30 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">-62,5% em Custos</h4>
                  <p className="text-xs text-slate-400">Automação com IA e ecossistema Full Stack no Grupo Interfort</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-emerald-500/30 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Ruptura de 30% ➔ 5%</h4>
                  <p className="text-xs text-slate-400">Plataforma logística em tempo real para 10 filiais</p>
                </div>
              </div>
            </div>

            {/* Academic Highlight */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Bacharelado em Ciência da Computação</h4>
                <p className="text-xs text-slate-400 font-mono">• Natal/RN</p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div id="experience" className="lg:col-span-6 bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Experiência Profissional & Formação</span>
            </h3>

            <div className="relative pl-6 border-l border-slate-800 space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node */}
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-4 border-[#05070e] shadow-[0_0_10px_#06b6d4] group-hover:scale-125 transition-transform" />

                  <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase">
                    {item.period}
                  </span>

                  <h4 className="font-bold text-white text-sm mt-0.5">
                    {item.role}
                  </h4>

                  <p className="text-xs text-slate-400 font-mono mb-2">
                    {item.companyOrContext}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
