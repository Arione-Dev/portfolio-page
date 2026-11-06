import React, { useState } from 'react';
import { Layout, Server, Database, Cloud, Sparkles } from 'lucide-react';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'layout',
      description: 'Interfaces interativas, responsivas e focadas na melhor experiência do usuário (UX/UI).',
      skills: [
        { name: 'React', level: 'Avançado', isPrimary: true },
        { name: 'Next.js', level: 'Avançado', isPrimary: true },
        { name: 'TypeScript', level: 'Avançado', isPrimary: true },
        { name: 'Tailwind CSS', level: 'Avançado', isPrimary: true },
        { name: 'HTML5 / CSS3 Moderno', level: 'Especialista' },
        { name: 'State Management (Zustand/Redux)', level: 'Intermediário/Avançado' },
        { name: 'Figma to Code', level: 'Avançado' },
      ],
    },
    {
      title: 'Backend',
      icon: 'server',
      description: 'APIs resilientes, microsserviços seguros e regras de negócio com Clean Architecture.',
      skills: [
        { name: 'Node.js', level: 'Avançado', isPrimary: true },
        { name: 'Express.js', level: 'Avançado', isPrimary: true },
        { name: 'Python / FastAPI', level: 'Intermediário' },
        { name: 'APIs RESTful & GraphQL', level: 'Avançado', isPrimary: true },
        { name: 'Autenticação (JWT / OAuth2 / Bcrypt)', level: 'Avançado' },
        { name: 'Clean Architecture & SOLID', level: 'Avançado' },
        { name: 'WebSockets & Realtime', level: 'Intermediário' },
      ],
    },
    {
      title: 'Banco de Dados',
      icon: 'database',
      description: 'Modelagem relacional e NoSQL, otimização de consultas e integridade dos dados.',
      skills: [
        { name: 'PostgreSQL', level: 'Avançado', isPrimary: true },
        { name: 'MongoDB', level: 'Intermediário/Avançado' },
        { name: 'Prisma ORM', level: 'Avançado', isPrimary: true },
        { name: 'MySQL', level: 'Intermediário' },
        { name: 'Redis (Cache)', level: 'Intermediário' },
        { name: 'Modelagem ER & Migrations', level: 'Avançado' },
      ],
    },
    {
      title: 'DevOps & Ferramentas',
      icon: 'cloud',
      description: 'Containerização, versionamento colaborativo e deploy em nuvem contínuo.',
      skills: [
        { name: 'Docker', level: 'Intermediário/Avançado', isPrimary: true },
        { name: 'Git & GitHub', level: 'Avançado', isPrimary: true },
        { name: 'CI/CD Pipelines', level: 'Intermediário' },
        { name: 'Vercel / Render / Railway', level: 'Avançado' },
        { name: 'Linux & Terminal', level: 'Avançado' },
        { name: 'Postman / Insomnia', level: 'Avançado' },
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'layout': return <Layout className="w-5 h-5" />;
      case 'server': return <Server className="w-5 h-5" />;
      case 'database': return <Database className="w-5 h-5" />;
      default: return <Cloud className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Competências Técnicas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Habilidades & Tecnologias
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Stack moderna e validada no mercado para construir sistemas escaláveis de ponta a ponta.
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
          <div>
            <h3 className="text-2xl font-bold text-white">{categories[activeTab].title}</h3>
            <p className="text-slate-400 text-sm mt-1">{categories[activeTab].description}</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {categories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-4 rounded-xl border transition-all duration-200 group ${
                skill.isPrimary
                  ? 'bg-slate-900/90 border-cyan-500/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
                {skill.isPrimary && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
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
