# Renata Druck — Website

Website profissional para Renata Druck, psicanalista em São Paulo.  
Domínio: [renatadruck.com.br](https://renatadruck.com.br)

## Stack

- **React 18** — UI framework
- **Vite 5** — build tool and dev server
- **Tailwind CSS 3** — utility-first styling
- **React Router DOM 6** — client-side routing (BrowserRouter)
- **react-helmet-async** — per-page meta tags and SEO

## Dependências de produção

| Pacote | Versão | Finalidade |
|--------|--------|------------|
| `react` | ^18.3.1 | Biblioteca UI |
| `react-dom` | ^18.3.1 | Renderização React no DOM |
| `react-router-dom` | ^6.26.2 | Roteamento client-side |
| `react-helmet-async` | ^3.0.0 | Títulos, meta descriptions e canonical por página |

## Dependências de desenvolvimento

| Pacote | Versão | Finalidade |
|--------|--------|------------|
| `vite` | ^5.4.1 | Build tool e servidor de desenvolvimento |
| `@vitejs/plugin-react` | ^4.3.1 | Suporte a JSX/React no Vite |
| `tailwindcss` | ^3.4.11 | Framework CSS utilitário |
| `postcss` | ^8.4.45 | Processamento CSS (requerido pelo Tailwind) |
| `autoprefixer` | ^10.4.20 | Adiciona prefixos de vendor automaticamente |
| `eslint` | ^9.9.0 | Linting de código |
| `eslint-plugin-react-hooks` | ^5.1.0-rc.0 | Regras de lint para React Hooks |
| `eslint-plugin-react-refresh` | ^0.4.9 | Suporte a hot reload no desenvolvimento |

## Comandos

```bash
npm install              # instalar dependências
npm run dev              # servidor de desenvolvimento (http://localhost:5173)
npm run dev -- --host    # expor para a rede local
npm run build            # build de produção (gera /dist)
npm run preview          # prévia do build de produção
npm run lint             # verificar erros de lint
```

## Estrutura

```
src/
├── App.jsx              # roteamento principal (BrowserRouter + HelmetProvider)
├── index.css            # Tailwind base + estilos globais
├── main.jsx             # entrada da aplicação
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx       # barra de navegação com scroll e menu mobile
│   └── WhatsAppButton.jsx  # botão flutuante fixo
└── pages/
    ├── Home.jsx
    ├── Sobre.jsx
    ├── Atendimento.jsx
    └── Contato.jsx
public/
├── _redirects          # SPA fallback para Netlify
├── CNAME               # domínio customizado (referência)
├── favicon.svg
├── robots.txt
└── sitemap.xml
vercel.json             # SPA rewrites para Vercel
```

## Deploy

O deploy é automático via **Netlify** ou **Vercel**: qualquer push para `main` aciona um novo deploy.

- `public/_redirects` — fallback SPA para Netlify (`/* /index.html 200`)
- `vercel.json` — rewrites SPA para Vercel
- DNS do domínio `renatadruck.com.br` deve apontar para o provedor escolhido

## SEO

- Meta description e OG tags globais em `index.html`
- Título, description e canonical URL individuais em cada página via `react-helmet-async`
- JSON-LD structured data (`Person` + `LocalBusiness`) em `index.html`
- `robots.txt` e `sitemap.xml` em `/public`
- **TODO:** adicionar `public/og-image.png` (1200×630px) e descomentar `og:image` em `index.html`
