import React, { useState } from 'react';
import { Layout, Server, Database, Cloud, Sparkles, BrainCircuit } from 'lucide-react';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: 'Back-end & Arquitetura',
      icon: 'server',
      description: 'Construção de APIs robustas, microsserviços, sistemas distribuídos e processamento assíncrono com mensageria.',
      skills: [
        { name: 'Python (FastAPI / Django / Flask)', level: 'Especialista', isPrimary: true },
        { name: 'Java (Spring Boot)', level: 'Avançado', isPrimary: true },
        { name: 'Node.js', level: 'Avançado', isPrimary: true },
        { name: 'RabbitMQ (Message Broker)', level: 'Avançado', isPrimary: true },
        { name: 'Celery (Filas Assíncronas)', level: 'Avançado', isPrimary: true },
        { name: 'Redis (Cache & Broker)', level: 'Avançado', isPrimary: true },
        { name: 'APIs RESTful & Microsserviços', level: 'Especialista' },
        { name: 'POO, Design Patterns & Gunicorn', level: 'Avançado' },
      ],
    },
    {
      title: 'Front-end & Mobile',
      icon: 'layout',
      description: 'Aplicações Web modernas, PWAs e aplicativos móveis multiplataforma (Android & iOS) de alta performance.',
      skills: [
        { name: 'React', level: 'Avançado', isPrimary: true },
        { name: 'Angular', level: 'Avançado', isPrimary: true },
        { name: 'TypeScript & JavaScript', level: 'Avançado', isPrimary: true },
        { name: 'Flutter (Android & iOS)', level: 'Avançado', isPrimary: true },
        { name: 'PWAs (Progressive Web Apps)', level: 'Avançado', isPrimary: true },
        { name: 'HTML5, CSS3 & Tailwind CSS', level: 'Especialista' },
        { name: 'Android Mobile', level: 'Avançado' },
      ],
    },
    {
      title: 'IA Generativa & Dados',
      icon: 'ai',
      description: 'Orquestração de LLMs, agentes autônomos, arquiteturas RAG e modelagem em bancos relacionais, NoSQL e vetoriais.',
      skills: [
        { name: 'IA Generativa & Arquitetura RAG', level: 'Avançado', isPrimary: true },
        { name: 'LangChain & Orquestração de LLMs', level: 'Avançado', isPrimary: true },
        { name: 'PostgreSQL', level: 'Especialista', isPrimary: true },
        { name: 'MySQL, Oracle & MongoDB', level: 'Avançado', isPrimary: true },
        { name: 'Bancos Vetoriais (Pinecone / ChromaDB)', level: 'Avançado', isPrimary: true },
        { name: 'Hugging Face & Ollama', level: 'Avançado' },
        { name: 'PyTorch & TensorFlow', level: 'Intermediário/Avançado' },
        { name: 'ONNX Optimization & Fine-tuning', level: 'Avançado' },
      ],
    },
    {
      title: 'DevOps & Infraestrutura',
      icon: 'cloud',
      description: 'Orquestração de contêineres, clusters em produção, automação de esteiras CI/CD e gestão de servidores Linux.',
      skills: [
        { name: 'Docker & Docker Compose', level: 'Especialista', isPrimary: true },
        { name: 'Docker Swarm', level: 'Avançado', isPrimary: true },
        { name: 'Kubernetes (K8s)', level: 'Intermediário/Avançado', isPrimary: true },
        { name: 'CI/CD & GitHub Actions', level: 'Avançado', isPrimary: true },
        { name: 'N8n (Automação de Fluxos)', level: 'Avançado', isPrimary: true },
        { name: 'Linux & Gestão de Servidores', level: 'Avançado' },
        { name: 'DBA & Modelagem de Dados', level: 'Avançado' },
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'layout': return <Layout className="w-5 h-5" />;
      case 'server': return <Server className="w-5 h-5" />;
      case 'ai': return <BrainCircuit className="w-5 h-5" />;
      case 'database': return <Database className="w-5 h-5" />;
      default: return <Cloud className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Arsenal Tecnológico</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Habilidades & Tecnologias
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Domínio completo do ciclo de desenvolvimento: Back-end, Front-end, Mobile, Inteligência Artificial Generativa, Bancos de Dados e DevOps.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === idx
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 scale-105'
                : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
            }`}
          >
            {getIcon(cat.icon)}
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Content Card */}
      <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-slate-700/60 transition-all duration-300">
        <div className="flex items-start gap-4 mb-8">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/30">
            {getIcon(categories[activeTab].icon)}
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">{categories[activeTab].title}</h3>
            <p className="text-slate-400 text-sm mt-1">{categories[activeTab].description}</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 text-left">
          {categories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-4 rounded-xl border transition-all duration-200 group ${
                skill.isPrimary
                  ? 'bg-slate-900/90 border-cyan-500/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
                {skill.isPrimary && (
                  <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                )}
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded border border-slate-700/50">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
