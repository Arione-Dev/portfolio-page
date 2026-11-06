import React, { useState } from 'react';
import { ExternalLink, Github, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { profile } from '../data/profile';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'frontend' | 'backend'>('all');

  const projects: Project[] = [
    {
      id: 'interfort-ecosystem',
      title: 'Ecossistema Corporativo & Agentes de IA (Interfort)',
      description:
        'Plataforma integrada para automação de SAC, ouvidoria, financeiro, logística e operacional. Engloba aplicações Web, PWA e apps móveis (Flutter Android/iOS) com backend em Python e IA Generativa.',
      category: 'fullstack',
      tags: ['Python', 'FastAPI', 'Django', 'Flutter', 'PostgreSQL', 'Docker Swarm', 'LangChain'],
      demoUrl: profile.github,
      githubUrl: profile.github,
      featured: true,
      highlights: [
        'Redução comprovada de 62,5% nos custos operacionais',
        'Agentes autônomos e IA Generativa (RAG) integrados ao atendimento',
        'Orquestração em contêineres Docker Swarm com alta disponibilidade'
      ]
    },
    {
      id: 'diniz-logistics-platform',
      title: 'Plataforma de Gestão Logística, RH & Dados em Tempo Real',
      description:
        'Sistema corporativo desenvolvido para reestruturação operacional e abastecimento estratégico de 10 filiais, com agendamento e monitoramento de entregas em tempo real.',
      category: 'fullstack',
      tags: ['Python', 'Flask', 'JavaScript', 'SQL', 'HTML5/CSS3', 'Análise de Dados'],
      demoUrl: profile.github,
      githubUrl: profile.github,
      featured: true,
      highlights: [
        'Redução da ruptura de estoque das 10 filiais de 30% para 5%',
        'Otimização completa do fluxo de separação e conferência de pedidos',
        'Painéis de indicadores operacionais para suporte à tomada de decisão'
      ]
    },
    {
      id: 'financas-pro',
      title: 'Finanças Pro — Gestão Financeira Inteligente PWA & IA Vision',
      description:
        'Plataforma completa de gestão financeira pessoal e familiar construída sob Clean Architecture, combinando Backend corporativo em Java 21 + Spring Boot 3, Frontend PWA instalável e visão computacional com Google Gemini.',
      category: 'fullstack',
      tags: [
        'Java 21',
        'Spring Boot 3',
        'Spring Security (JWT)',
        'Hibernate / JPA',
        'React 18 (PWA)',
        'TypeScript',
        'PostgreSQL 16',
        'Gemini Vision AI',
        'Docker'
      ],
      demoUrl: 'https://github.com/Arione-Dev/Financas-pro',
      githubUrl: 'https://github.com/Arione-Dev/Financas-pro',
      featured: true,
      highlights: [
        'Leitor multimodal de comprovantes Pix e cupons fiscais via Google Gemini Vision AI com Rate Limiting (Bucket4j)',
        'Motor inteligente de parcelamento de cartões e projeção automática de faturas futuras em PostgreSQL',
        'Frontend PWA instalável (Mobile & Desktop) com Nginx Reverse Proxy, tema claro/escuro e Privacy Shield'
      ]
    },
    {
      id: 'encarte-facil',
      title: 'Encarte Fácil — Estúdio WYSIWYG & API de Tabloides Comerciais',
      description:
        'Sistema full stack para automação de marketing no varejo e atacarejo, com editor visual em tempo real (WYSIWYG), catálogo de produtos frequentes e API RESTful de alta performance.',
      category: 'fullstack',
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'React', 'Vite', 'Tailwind CSS'],
      demoUrl: 'https://github.com/Arione-Dev/encarte-facil',
      githubUrl: 'https://github.com/Arione-Dev/encarte-facil',
      featured: true,
      highlights: [
        'Canvas renderizador WYSIWYG em tempo real com 14 templates comerciais (Tabloide A4, Stories 9:16 e Feed 1:1)',
        'Backend REST em FastAPI com CRUD de encartes, upload de mídias, seeds automáticos e catálogo de produtos',
        'Arquitetura multi-banco de dados com alternância transparente entre SQLite local e PostgreSQL em produção'
      ]
    },
    {
      id: 'portfolio-page',
      title: 'Portfólio Full Stack Interativo & Hologram Terminal',
      description:
        'Aplicação SPA de alta performance projetada com estética futurista de engenharia de software, animações em Canvas 2D a 60fps, terminal CLI interativo e fluxo completo GitFlow.',
      category: 'frontend',
      tags: ['React 18', 'TypeScript 5', 'Vite 6', 'Tailwind CSS 3', 'HTML5 Canvas', 'GitFlow'],
      demoUrl: 'https://github.com/Arione-Dev/portfolio-page',
      githubUrl: 'https://github.com/Arione-Dev/portfolio-page',
      featured: false,
      highlights: [
        'Intro holográfica em linguagem de máquina e efeito raio-X que decodifica binário em código-fonte sob o cursor',
        'Simulador de terminal CLI interativo com execução de comandos em tempo real e vitrine animada de stacks',
        'Formulário de contato integrado com disparo assíncrono direto para caixa de entrada e versionamento SemVer'
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Portfólio & Cases Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Projetos em Destaque</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Soluções em produção que unem engenharia de software sólida, bancos de dados, microsserviços e Inteligência Artificial.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
          {(['all', 'fullstack', 'frontend', 'backend'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col group"
          >
            {/* Visual Header / Mockup Banner */}
            <div className="h-44 bg-gradient-to-tr from-slate-950 via-[#0a1122] to-slate-950 relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-800/80">
              <div className="w-full h-full rounded-2xl bg-slate-900/80 border border-slate-700/60 p-4 shadow-2xl flex flex-col justify-between group-hover:scale-[1.03] transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-blue-500/30 rounded-full" />
                  <div className="h-2 w-1/2 bg-cyan-400/30 rounded-full" />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>status: production</span>
                  <span>verified</span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="pt-2 space-y-1.5">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action Links */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold pt-1">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Detalhes</span>
                  </a>

                  <span className="text-slate-700">•</span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};
