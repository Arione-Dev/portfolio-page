import React from 'react';
import { User, Briefcase, GraduationCap, MapPin } from 'lucide-react';
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
    }
  ];

  const academicTags = ['Ciência da Computação', 'DBA', 'Java', 'Python (POO)', 'Angular', 'Docker Swarm'];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-slate-700/60 relative overflow-hidden text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: About copy + Profile Photo + Full Academic Formation Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <User className="w-3.5 h-3.5" />
              <span>Sobre Mim</span>
            </div>

            {/* Profile Photo + Identity Header Card */}
            <div className="relative overflow-hidden p-5 rounded-2xl bg-slate-900/85 border border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-500 group hover:shadow-[0_14px_35px_-10px_rgba(6,182,212,0.35)]">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/12 via-transparent to-blue-600/10 opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shimmer sweep */}
              <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent opacity-0 group-hover:animate-[shimmerSweep_1.1s_ease-in-out] group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Holographic Photo Frame */}
                <div className="relative shrink-0">
                  {/* Outer glowing ring */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-teal-400 opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-400/80 bg-slate-950 shadow-xl">
                    <img
                      src="/arione-rodrigues.jpg"
                      alt="Arione Rodrigues - Desenvolvedor Full Stack"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle cyan hologram overlay at bottom */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  </div>
                  {/* Online badge */}
                  <span
                    className="absolute -bottom-1.5 -right-1.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950 border border-emerald-400/60 text-[10px] font-mono text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                    title="Disponível para projetos e oportunidades"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </span>
                </div>

                {/* Title & Headline next to photo */}
                <div className="text-center sm:text-left space-y-2 flex-1">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      Arione Rodrigues
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold">
                      Desenvolvedor Full Stack • Arquitetura & IA
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Arquiteturas escaláveis, engenharia de dados e automação inteligente com IA Generativa.
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/70">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>Natal/RN</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Com sólida experiência prática na construção de <strong className="text-white">arquiteturas escaláveis</strong>, modelagem de bancos de dados e integração de sistemas corporativos de missão crítica, atuo de ponta a ponta no ciclo de engenharia de software.
              </p>
              <p>
                Desenvolvo <strong className="text-cyan-400">APIs robustas</strong> em Python (FastAPI, Django, Flask), Java (Spring Boot) e Node.js, além de interfaces modernas em <strong className="text-blue-400">React, Angular e aplicativos móveis com Flutter</strong>.
              </p>
              <p>
                Tenho foco especial na automação de processos e implementação de <strong className="text-emerald-400">Inteligência Artificial Generativa (RAG, LangChain, Agentes Autônomos)</strong>, gerando eficiência comprovada e redução expressiva de custos operacionais.
              </p>
            </div>

            {/* Complete Academic Formation Card (Moved from Experience Timeline) */}
            <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(6,182,212,0.28)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase block">
                    Conclusão em 2026
                  </span>
                  <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    Bacharelado em Ciência da Computação
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    UNP – Universidade Potiguar • Natal/RN
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    Formação acadêmica sólida complementada por cursos técnicos em Desenvolvimento de Sistemas, DBA (Database Administrator), Docker Swarm, Java, Python (POO) e Angular.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2.5">
                    {academicTags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-800/90 text-cyan-300 border border-slate-700/70 group-hover:border-cyan-500/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div id="experience" className="lg:col-span-6 bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Experiência Profissional</span>
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
