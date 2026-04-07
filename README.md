# Renata Druck — Website

Website profissional para Renata Druck, psicanalista em São Paulo.  
Domínio: [renatadruck.com.br](https://renatadruck.com.br)

## Stack

- **React 18** — UI framework
- **Vite 5** — build tool and dev server
- **Tailwind CSS 3** — utility-first styling
- **React Router DOM 6** — client-side routing (HashRouter for GitHub Pages compatibility)
- **gh-pages 6** — deploy to GitHub Pages

## Dependências de desenvolvimento

| Pacote | Versão | Finalidade |
|--------|--------|------------|
| `vite` | ^5.4.1 | Build tool e servidor de desenvolvimento |
| `@vitejs/plugin-react` | ^4.3.1 | Suporte a JSX/React no Vite |
| `tailwindcss` | ^3.4.11 | Framework CSS utilitário |
| `postcss` | ^8.4.45 | Processamento CSS (requerido pelo Tailwind) |
| `autoprefixer` | ^10.4.20 | Adiciona prefixos de vendor automaticamente |
| `gh-pages` | ^6.1.1 | Deploy para GitHub Pages |
| `eslint` | ^9.9.0 | Linting de código |
| `eslint-plugin-react-hooks` | ^5.1.0-rc.0 | Regras de lint para React Hooks |
| `eslint-plugin-react-refresh` | ^0.4.9 | Suporte a hot reload no desenvolvimento |

## Dependências de produção

| Pacote | Versão | Finalidade |
|--------|--------|------------|
| `react` | ^18.3.1 | Biblioteca UI |
| `react-dom` | ^18.3.1 | Renderização React no DOM |
| `react-router-dom` | ^6.26.2 | Roteamento client-side |

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # build de produção (gera /dist)
npm run preview    # prévia do build de produção
npm run lint       # verificar erros de lint
npm run deploy     # build + deploy para GitHub Pages
```

## Estrutura

```
src/
├── App.jsx              # roteamento principal (HashRouter)
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
└── CNAME               # domínio customizado para GitHub Pages
```

## Deploy

```bash
npm run deploy
```

Faz o build e publica o conteúdo de `/dist` na branch `gh-pages`.  
O arquivo `public/CNAME` garante o domínio customizado `renatadruck.com.br`.
