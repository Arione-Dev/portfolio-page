// Dados oficiais de Arione Rodrigues centralizados para todo o portfólio.
export const profile = {
  name: 'Arione Rodrigues',
  role: 'Desenvolvedor Full Stack',
  email: 'arionedesigner@gmail.com',
  phoneDisplay: '(84) 98629-2708',
  // Código do país + DDD + número, só dígitos
  whatsapp: '5584986292708',
  location: 'Natal, RN',
  education: 'Bacharelado em Ciência da Computação – UNP',
  github: 'https://github.com/Arione-Dev',
  linkedin: 'https://linkedin.com/in/arione-rodrigues',
  linkedinLabel: 'linkedin.com/in/arione-rodrigues',
  resumeUrl: '/Curriculo-Arione-Rodrigues.pdf',
};

export const whatsappUrl = profile.whatsapp
  ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Olá Arione! Vi seu portfólio e gostaria de conversar.')}`
  : 'https://wa.me/';
