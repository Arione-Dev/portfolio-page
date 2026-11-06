import React, { useState } from 'react';
import { Send, Mail, MessageCircle, Linkedin, Github, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile, whatsappUrl } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emailAddress = profile.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Fire Confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981']
    });

    // Reset after a while
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Column: Direct Connect Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Send className="w-3.5 h-3.5" />
            <span>Fale Comigo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Pronto para transformar ideias em realidade?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Seja para uma nova vaga, um projeto freelance desafiador ou uma consultoria técnica, minha caixa de entrada está sempre aberta.
          </p>

          <div className="space-y-3 pt-2">
            
            {/* Email card */}
            <div className="glass-panel p-4 rounded-2xl flex items-center justify-between border border-slate-800 hover:border-cyan-500/40 transition group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">E-mail Direto</span>
                  <p className="text-sm font-semibold text-white">{emailAddress}</p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-800"
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp direct */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl flex items-center justify-between border border-slate-800 hover:border-emerald-500/40 transition group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">WhatsApp Direto</span>
                  <p className="text-sm font-semibold text-white">{profile.phoneDisplay}</p>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-mono group-hover:translate-x-1 transition-transform">
                Enviar ➔
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl flex items-center justify-between border border-slate-800 hover:border-blue-500/40 transition group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn</span>
                  <p className="text-sm font-semibold text-white">{profile.linkedinLabel}</p>
                </div>
              </div>
              <span className="text-xs text-blue-400 font-mono group-hover:translate-x-1 transition-transform">
                Conectar ➔
              </span>
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl flex items-center justify-between border border-slate-800 hover:border-slate-600 transition group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">GitHub</span>
                  <p className="text-sm font-semibold text-white">Repositórios & Códigos</p>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-mono group-hover:translate-x-1 transition-transform">
                Acessar ➔
              </span>
            </a>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel-glow p-8 sm:p-10 rounded-3xl border border-slate-700/60">
            <h3 className="text-xl font-bold text-white mb-2">Enviar Mensagem</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Preencha os campos abaixo e responderei o mais breve possível.
            </p>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-slate-900/60 rounded-2xl border border-emerald-500/30">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Mensagem Enviada com Sucesso!</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  Obrigado pelo contato, Arione responderá o mais breve possível.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Como posso te chamar?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Seu E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Assunto</label>
                  <input
                    type="text"
                    required
                    placeholder="Proposta de projeto, vaga, consultoria..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Conte um pouco sobre a sua ideia ou necessidade..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

