# Portfólio — Arione Rodrigues

Portfólio pessoal de **Arione Rodrigues**, Desenvolvedor Full Stack. Single Page Application moderna, em dark mode, com uma introdução animada em que **linguagem de máquina (binário/hex/Assembly)** é "compilada" numa barra de progresso e se dissolve suavemente na página.

## Destaques

- **Intro cinematográfica:** chuva de código de máquina em tela cheia (canvas), modal estilo terminal com linhas sendo "compiladas", barra de progresso com porcentagem e dissolução suave (fade + blur) para a página. Botão **Pular** e **Rever Holograma** no menu.
- **Hero com terminal interativo:** aba de código e aba de terminal onde o visitante digita `help`, `skills`, `projects`, `contact`, `hire`, `about` e `clear`.
- **Habilidades por categoria** (Frontend, Backend, Banco de Dados, DevOps) em abas.
- **Projetos** com filtro (Todos, Full Stack, Frontend, Backend).
- **Sobre mim e trajetória** em linha do tempo.
- **Contato:** formulário com confete, copiar e-mail e atalhos para WhatsApp, LinkedIn e GitHub.
- **Efeito spotlight** que segue o mouse e visual com glassmorphism.
- Responsivo (desktop e mobile).

## Tecnologias

| Camada | Tecnologia |
| --- | --- |
| Framework | [React 18](https://react.dev) |
| Linguagem | [TypeScript 5](https://www.typescriptlang.org) (modo `strict`) |
| Build / Dev server | [Vite 6](https://vite.dev) |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) + PostCSS + Autoprefixer |
| Ícones | [lucide-react](https://lucide.dev) |
| Efeitos | [canvas-confetti](https://github.com/catdad/canvas-confetti) e Canvas 2D (chuva de código) |
| Fontes | Inter e JetBrains Mono (Google Fonts) |

## Estrutura do projeto

```
portfolio-page/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx                  # entrada da aplicação
    ├── App.tsx                   # composição das seções e spotlight do mouse
    ├── index.css                 # Tailwind + classes utilitárias (glass, grid)
    ├── components/
    │   ├── HologramIntro.tsx     # animação de abertura
    │   ├── Navbar.tsx
    │   ├── Hero.tsx              # apresentação + terminal interativo
    │   ├── Skills.tsx
    │   ├── Projects.tsx
    │   ├── AboutAndExperience.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    ├── data/
    │   └── profile.ts            # dados de contato (edite aqui)
    └── types/
        └── index.ts              # tipos compartilhados
```

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) 18 ou superior e npm.

```bash
# instalar dependências
npm install

# servidor de desenvolvimento (http://localhost:5173)
npm run dev

# checagem de tipos + build de produção (saída em dist/)
npm run build

# pré-visualizar o build
npm run preview
```

## Como personalizar

1. **Contatos:** edite [`src/data/profile.ts`](src/data/profile.ts) (e-mail, WhatsApp com código do país e DDD, GitHub e LinkedIn). O Hero e a seção de Contato leem desse arquivo.
2. **Projetos:** edite a lista `projects` em [`src/components/Projects.tsx`](src/components/Projects.tsx).
3. **Habilidades:** edite `categories` em [`src/components/Skills.tsx`](src/components/Skills.tsx).
4. **Trajetória e "Sobre mim":** edite [`src/components/AboutAndExperience.tsx`](src/components/AboutAndExperience.tsx).
5. **Intro:** a duração do fade está em `FADE_MS` e as linhas exibidas em `codeLines`, ambos em [`src/components/HologramIntro.tsx`](src/components/HologramIntro.tsx).

> Os projetos, as habilidades e os textos atuais são **exemplos** e devem ser substituídos pelos dados reais. O formulário de contato é apenas visual (não envia e-mails).

## Deploy

O build gera arquivos estáticos em `dist/`. Funciona em [Vercel](https://vercel.com), [Netlify](https://netlify.com) ou GitHub Pages:

- **Comando de build:** `npm run build`
- **Diretório de saída:** `dist`

## Fluxo de trabalho (Git Flow)

Este repositório segue Git Flow e Conventional Commits. Veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).

