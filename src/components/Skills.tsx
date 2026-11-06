import React, { useState } from 'react';
import { Layout, Server, Database, Cloud, Sparkles, BrainCircuit } from 'lucide-react';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [animKey, setAnimKey] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setSelectedCard(null);
    setAnimKey((prev) => prev + 1);
  };

  const categories: SkillCategory[] = [
    {
      title: 'Back-end & Arquitetura',
      icon: 'server',
      description:
        'Desenvolvimento de APIs de alta vazão, microsserviços, filas assíncronas e arquiteturas distribuídas em Python, Java e Node.js.',
      skills: [
        {
          name: 'Ecossistema Python',
          level: 'Especialista',
          isPrimary: true,
          details: ['FastAPI', 'Django & DRF', 'Flask', 'SQLAlchemy', 'Alembic', 'Pydantic', 'Gunicorn & Uvicorn', 'Pytest', 'AsyncIO'],
        },
        {
          name: 'Ecossistema Java',
          level: 'Avançado',
          isPrimary: true,
          details: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'Spring Security', 'Maven & Gradle', 'Bean Validation', 'JUnit & Mockito'],
        },
        {
          name: 'Ecossistema Node.js',
          level: 'Avançado',
          isPrimary: true,
          details: ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'Prisma ORM', 'TypeORM', 'Socket.io (WebSockets)', 'Jest'],
        },
        {
          name: 'Filas & Processamento Assíncrono',
          level: 'Especialista',
          isPrimary: true,
          details: ['Celery', 'Celery Beat (Schedulers)', 'RabbitMQ (AMQP)', 'Redis Broker & Pub/Sub', 'Workers Distribuídos', 'Dead-Letter Queues'],
        },
        {
          name: 'Segurança & Autenticação',
          level: 'Avançado',
          isPrimary: true,
          details: ['JWT & Refresh Tokens', 'OAuth2 / OpenID', 'RBAC (Controle de Acesso)', 'Bcrypt / Argon2', 'CORS & Rate Limiting'],
        },
        {
          name: 'Arquitetura & Padrões',
          level: 'Especialista',
          isPrimary: true,
          details: ['Clean Architecture', 'DDD & SOLID', 'POO & Design Patterns (GoF)', 'Microsserviços', 'APIs RESTful & GraphQL', 'Swagger / OpenAPI'],
        },
      ],
    },
    {
      title: 'Front-end & Mobile',
      icon: 'layout',
      description:
        'Interfaces web reativas, PWAs instaláveis e aplicativos móveis nativos/multiplataforma com foco em fluidez e UX.',
      skills: [
        {
          name: 'Ecossistema React',
          level: 'Avançado',
          isPrimary: true,
          details: ['React 18', 'Next.js (SSR / App Router)', 'TypeScript', 'Redux Toolkit & Zustand', 'TanStack React Query', 'React Router', 'Hooks Customizados'],
        },
        {
          name: 'Ecossistema Angular',
          level: 'Avançado',
          isPrimary: true,
          details: ['Angular (Standalone & Signals)', 'RxJS (Programação Reativa)', 'NgRx', 'Angular Material', 'Forms Reativos', 'Lazy Loading & Guards'],
        },
        {
          name: 'Mobile Multiplataforma (Flutter)',
          level: 'Avançado',
          isPrimary: true,
          details: ['Flutter (Android & iOS)', 'Dart', 'Gerência de Estado (Bloc / Provider / Riverpod)', 'Integração Nativa & Câmera/GPS', 'Publicação & Builds'],
        },
        {
          name: 'PWAs & Mobile Android',
          level: 'Avançado',
          isPrimary: true,
          details: ['Progressive Web Apps (PWA)', 'Service Workers & Cache Offline', 'Web Push Notifications', 'Android SDK', 'Sincronização em Background'],
        },
        {
          name: 'UI, Estilização & Design System',
          level: 'Especialista',
          isPrimary: true,
          details: ['Tailwind CSS', 'HTML5 Semântico', 'CSS3 Moderno (Grid / Flexbox)', 'SASS / SCSS', 'Styled Components', 'Framer Motion & Animações'],
        },
        {
          name: 'Tooling & Performance Web',
          level: 'Avançado',
          details: ['JavaScript (ES6+)', 'Vite & Webpack', 'Core Web Vitals & SEO', 'Axios & Fetch API', 'Charts (Recharts / Chart.js)', 'Figma to Code'],
        },
      ],
    },
    {
      title: 'Bancos de Dados & DBA',
      icon: 'database',
      description:
        'Modelagem relacional, NoSQL, BaaS (Supabase), cache em memória, bancos vetoriais para IA e administração de performance (DBA).',
      skills: [
        {
          name: 'PostgreSQL & Supabase',
          level: 'Especialista',
          isPrimary: true,
          details: ['PostgreSQL', 'Supabase (BaaS / Realtime / RLS)', 'PL/pgSQL & Triggers', 'Índices (B-Tree, GIN) & Query Tuning', 'JSONB & pgvector', 'Connection Pooling'],
        },
        {
          name: 'SQL Server, MySQL & Oracle',
          level: 'Avançado',
          isPrimary: true,
          details: ['SQL Server (T-SQL / SSMS)', 'MySQL & MariaDB', 'Oracle Database (PL/SQL)', 'Stored Procedures & Views', 'Transações ACID & Locks', 'Otimização de Queries'],
        },
        {
          name: 'MongoDB & NoSQL',
          level: 'Avançado',
          isPrimary: true,
          details: ['MongoDB', 'Modelagem de Documentos', 'Aggregation Pipelines', 'Índices Compostos & TTL', 'Mongoose / PyMongo / Motor'],
        },
        {
          name: 'Redis (In-Memory & Cache)',
          level: 'Avançado',
          isPrimary: true,
          details: ['Cache Distribuído', 'Gerência de Sessões', 'Pub/Sub & Redis Streams', 'Rate Limiting', 'Invalidação Inteligente de Cache'],
        },
        {
          name: 'Bancos Vetoriais (Vector DBs)',
          level: 'Avançado',
          isPrimary: true,
          details: ['Pinecone', 'ChromaDB', 'pgvector', 'Embeddings & Busca Semântica', 'Cosine / Euclidean Similarity', 'Indexação HNSW'],
        },
        {
          name: 'ORMs, Migrations & Rotinas DBA',
          level: 'Especialista',
          isPrimary: true,
          details: ['Hibernate / Spring Data JPA', 'SQLAlchemy & Alembic', 'Django ORM', 'Prisma & Flyway', 'Backup, Restore & Replicação', 'Auditoria & Integridade'],
        },
      ],
    },
    {
      title: 'IA Generativa & Dados',
      icon: 'ai',
      description:
        'Arquiteturas RAG, agentes autônomos, orquestração de LLMs, otimização de modelos e análise de dados corporativos.',
      skills: [
        {
          name: 'IA Generativa & Arquiteturas RAG',
          level: 'Avançado',
          isPrimary: true,
          details: ['Retrieval-Augmented Generation (RAG)', 'Chunking & Reranking', 'Busca Híbrida (Semântica + Léxica)', 'Context Engineering', 'Memória Conversacional'],
        },
        {
          name: 'LangChain & Agentes Autônomos',
          level: 'Avançado',
          isPrimary: true,
          details: ['LangChain & LangGraph', 'Orquestração de LLMs', 'Agentes Autônomos & Tool Calling', 'Automação de SAC e Ouvidoria', 'Multi-Agent Workflows'],
        },
        {
          name: 'Modelos, Hugging Face & Ollama',
          level: 'Avançado',
          isPrimary: true,
          details: ['Hugging Face Transformers', 'Ollama (LLMs Locais)', 'OpenAI / Gemini / Claude APIs', 'Sentence-Transformers (Embeddings)', 'Inferência Local'],
        },
        {
          name: 'Deep Learning & Otimização (ONNX)',
          level: 'Avançado',
          isPrimary: true,
          details: ['PyTorch', 'TensorFlow', 'ONNX Runtime (Model Optimization)', 'Quantização de Modelos', 'Fine-tuning (LoRA / QLoRA)'],
        },
        {
          name: 'Análise de Dados, BI & ETL',
          level: 'Especialista',
          isPrimary: true,
          details: ['Python Pandas & NumPy', 'Pipelines ETL', 'Indicadores Operacionais (KPIs)', 'Previsão de Demanda & Estoque', 'Relatórios Gerenciais'],
        },
      ],
    },
    {
      title: 'DevOps & Infraestrutura',
      icon: 'cloud',
      description:
        'Contêineres, orquestração em cluster (Swarm & K8s), observabilidade com Prometheus & Grafana, esteiras CI/CD e servidores Linux.',
      skills: [
        {
          name: 'Docker & Docker Swarm',
          level: 'Especialista',
          isPrimary: true,
          details: ['Docker & Multi-stage Builds', 'Docker Compose', 'Docker Swarm (Clusters em Produção)', 'Stacks, Replicas & Rolling Updates', 'Redes Overlay & Volumes'],
        },
        {
          name: 'Kubernetes (K8s)',
          level: 'Intermediário/Avançado',
          isPrimary: true,
          details: ['Pods, Deployments & Services', 'Ingress & ConfigMaps/Secrets', 'Auto-scaling (HPA)', 'Healthchecks (Liveness/Readiness)', 'Helm Charts'],
        },
        {
          name: 'Monitoramento, Prometheus & Observabilidade',
          level: 'Avançado',
          isPrimary: true,
          details: ['Prometheus (Métricas & PromQL)', 'Grafana (Dashboards & Alertas)', 'Alertmanager & Node Exporter', 'cAdvisor & Netdata', 'Zabbix & Logs Centralizados', 'Healthchecks & SLA'],
        },
        {
          name: 'CI/CD & Versionamento',
          level: 'Avançado',
          isPrimary: true,
          details: ['GitHub Actions', 'Esteiras CI/CD Automatizadas', 'Build, Lint, Test & Deploy Contínuo', 'Git & Git Flow', 'Conventional Commits'],
        },
        {
          name: 'Automação, ERPs & Mensageria em Infra',
          level: 'Avançado',
          isPrimary: true,
          details: ['N8n (Automação de Workflows)', 'Webhooks & Integração de ERPs / Protheus', 'Clusters RabbitMQ & Redis', 'Jobs Agendados (Cron / Celery Beat)'],
        },
        {
          name: 'Servidores Linux & Proxy Reverso',
          level: 'Avançado',
          isPrimary: true,
          details: ['Linux (Ubuntu / Debian)', 'Nginx & Traefik (Reverse Proxy / Load Balancer)', 'SSL / Let’s Encrypt', 'Bash Scripting, SSH & Firewall (UFW)', 'Systemd'],
        },
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'layout': return <Layout className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'server': return <Server className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'ai': return <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'database': return <Database className="w-4 h-4 sm:w-5 sm:h-5" />;
      default: return <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const currentCategory = categories[activeTab];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Arsenal Tecnológico Completo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Habilidades & Ecossistemas
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Domínio aprofundado das bibliotecas, frameworks, ORMs, bancos de dados, monitoramento e ferramentas de produção em cada camada da engenharia.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {categories.map((cat, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={cat.title}
              onClick={() => handleTabClick(idx)}
              className={`relative overflow-hidden flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white shadow-lg shadow-cyan-500/25 scale-105 ring-1 ring-cyan-300/50'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40'
              }`}
            >
              {getIcon(cat.icon)}
              <span>{cat.title}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/25 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {cat.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card with Holographic Scan & Staggered Card Reveal */}
      <div
        key={animKey}
        className="relative overflow-hidden glass-panel-glow rounded-3xl p-6 sm:p-10 border border-slate-700/60"
      >
        {/* Holographic Laser Scanline Sweep on Tab Change */}
        <div className="pointer-events-none absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent skill-scan-line z-20">
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#06b6d4]" />
        </div>

        {/* Category Header */}
        <div className="flex items-start gap-4 mb-8 skill-header-animate">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/30 shrink-0 shadow-lg shadow-cyan-500/10">
            {getIcon(currentCategory.icon)}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{currentCategory.title}</h3>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Módulo Ativo
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">{currentCategory.description}</p>
          </div>
        </div>

        {/* Skills Grid with Staggered Boot-in Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left relative z-10">
          {currentCategory.skills.map((skill, cardIdx) => {
            const isSelected = selectedCard === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedCard(isSelected ? null : skill.name)}
                style={{ animationDelay: `${cardIdx * 85}ms` }}
                className={`skill-card-animate cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-slate-900/95 border-cyan-400 ring-1 ring-cyan-400/50 shadow-xl shadow-cyan-500/20'
                    : skill.isPrimary
                    ? 'bg-slate-900/90 border-cyan-500/35 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/15'
                    : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/25">
                        {skill.level}
                      </span>
                      {skill.isPrimary && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] group-hover:scale-125 transition-transform" />
                      )}
                    </div>
                  </div>

                  {/* Detailed ecosystem libraries & tools with staggered pop-in */}
                  {skill.details && skill.details.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/80">
                      {skill.details.map((item, chipIdx) => (
                        <span
                          key={item}
                          style={{ animationDelay: `${cardIdx * 85 + chipIdx * 30 + 120}ms` }}
                          className={`skill-chip-animate text-[11px] font-mono px-2 py-0.5 rounded-md border transition-all duration-200 ${
                            isSelected
                              ? 'bg-cyan-500/15 text-cyan-200 border-cyan-400/50'
                              : 'bg-slate-800/90 text-slate-200 border-slate-700/70 group-hover:border-cyan-500/35 hover:!bg-cyan-500/20 hover:!text-cyan-200 hover:!border-cyan-400'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
