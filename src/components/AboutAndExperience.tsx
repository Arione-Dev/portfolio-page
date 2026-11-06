import React from 'react';
import { User, Briefcase, Check } from 'lucide-react';
import { TimelineItem } from '../types';

export const AboutAndExperience: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      period: 'Atualmente',
      role: 'Desenvolvedor Full Stack',
      companyOrContext: 'Projetos Web & Soluções Digitais',
      description: 'Atuação no ciclo completo de desenvolvimento: concepção de arquitetura, modelagem de banco de dados, criação de APIs RESTful e interfaces modernas de alta performance.',
      tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript']
    },
    {
      period: 'Especialização Contínua',
      role: 'Ecossistema Moderno Full Stack',
      companyOrContext: 'Formação & Projetos Avançados',
      description: 'Aprofundamento em Clean Architecture, padrões de microsserviços, cache distribuído com Redis, containerização com Docker e autenticação robusta.',
      tags: ['Docker', 'Prisma', 'REST', 'Tailwind CSS', 'Git']
    },
    {
      period: 'Fundamentos',
      role: 'Engenharia de Software & Web',
      companyOrContext: 'Ciência da Computação & Prática',
      description: 'Construção de base sólida em algoritmos, estruturas de dados, protocolos web (HTTP, WebSockets), bancos relacionais e metodologias ágeis (Scrum/Kanban).',
      tags: ['Algoritmos', 'SQL', 'Estruturas de Dados', 'Clean Code']
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-slate-700/60 relative overflow-hidden text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: About copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <User className="w-3.5 h-3.5" />
              <span>Sobre Mim</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Desenvolvendo com consistência, paixão e rigor técnico.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Sou <strong className="text-white">Arione Rodrigues</strong>, desenvolvedor full stack movido pela curiosidade e pelo prazer de transformar problemas complexos em softwares elegantes, intuitivos e de alta confiabilidade.
              </p>
              <p>
                Minha abordagem combina o melhor dos dois mundos: no <strong className="text-cyan-400">Back-end</strong>, priorizo segurança, escalabilidade, modelagem limpa e APIs bem documentadas; no <strong className="text-blue-400">Front-end</strong>, prezo por interfaces fluidas, responsivas e com atenção minuciosa à experiência do usuário.
              </p>
              <p>
                Estou sempre antenado às inovações do mercado e praticando código limpo, testes e arquitetura que facilitam a manutenção e a evolução contínua dos produtos.
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Resolução Ágil</h4>
                  <p className="text-xs text-slate-400">Foco em soluções diretas e eficientes</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Comunicação Clara</h4>
                  <p className="text-xs text-slate-400">Alinhamento constante e transparência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div id="experience" className="lg:col-span-5 bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Trajetória & Marcos</span>
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
                  
                  <p className="text-xs text-slate-500 font-mono mb-2">
                    {item.companyOrContext}
                  </p>
                  
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
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
