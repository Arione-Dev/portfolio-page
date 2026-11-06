// Edite apenas este arquivo para trocar seus dados de contato em todo o site.
export const profile = {
  name: 'Arione Rodrigues',
  email: 'arionedesigner@gmail.com',
  // Formato: código do país + DDD + número, só dígitos. Ex.: 5511999999999
  whatsapp: '',
  github: 'https://github.com/Arione-Dev',
  linkedin: 'https://linkedin.com',
  linkedinLabel: 'linkedin.com/in/arionerodrigues',
};

export const whatsappUrl = profile.whatsapp
  ? `https://wa.me/${profile.whatsapp}`
  : 'https://wa.me/';

