// Dados oficiais de Arione Rodrigues centralizados para todo o portfólio.
export const profile = {
  name: 'Arione Rodrigues',
  role: 'Desenvolvedor Full Stack',
  email: 'arionedesigner@gmail.com',
  phoneDisplay: 'Iniciar Conversa no WhatsApp',
  // Código do país + DDD + número, só dígitos
  whatsapp: '5584986292708',
  location: 'Natal, RN',
  education: 'Bacharelado em Ciência da Computação – UNP',
  github: 'https://github.com/Arione-Dev',
  linkedin: 'https://www.linkedin.com/in/arione-rodrigues-040997167',
  linkedinLabel: 'linkedin.com/in/arione-rodrigues-040997167',
  resumeUrl: '/Curriculo-Arione-Rodrigues.pdf',
};

export const whatsappUrl = profile.whatsapp
  ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Olá Arione! Vi seu portfólio e gostaria de conversar.')}`
  : 'https://wa.me/';

