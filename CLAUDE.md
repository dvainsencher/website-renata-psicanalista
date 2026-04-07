# CLAUDE.md — Renata Druck Website

## Project Overview
Website for Renata Druck, a psychoanalyst based in São Paulo, Brazil.
Domain: renatadruck.com.br
Hosting: GitHub Pages (free plan)
Stack: React + Vite + Tailwind CSS + gh-pages

## Language
The entire website must be in Brazilian Portuguese.
All UI text, labels, buttons, and meta tags in pt-BR.

## About the Clinic
Renata offers individual and couples psychoanalytic treatment,
in-person, remote and hybrid. Offices near Sumaré and Butantã
metro stations in São Paulo.

## Clinical Approach
Grounded in psychoanalysis and enriched by contemporary approaches.
Offers a qualified listening space. Never mention a specific school
(Lacanian, Freudian, etc.) — always use "contemporary psychoanalysis"
or "psychoanalytic listening".

## Target Audience
Young adults, adults and couples. Upper-middle class. Values:
discretion, quality, professional credibility, location convenience.
Seeks a safe, sophisticated and trustworthy space.

## Brand Voice
- Warm, empathetic, sophisticated and authoritative
- Human without being informal
- Deep without being obscure
- Never cold, overly clinical or sensationalist

## Design Guidelines
- Warm off-white backgrounds (#FDFBF8, #F5F2EE)
- Deep warm neutrals for text (#2C2824)
- Beige/golden accents (#B8A898)
- Elegant serif font for headings (Cormorant Garamond or Lora)
- Clean light sans-serif for body (Montserrat Light or Poppins Light)
- Generous white space
- Minimal decorative elements — quality over quantity
- Mobile-first, fully responsive

## Key Content

### Issues addressed in therapy
Internal conflicts, recurring behavioral patterns, anxiety, 
relationship difficulties, self-esteem, identity issues,
conflicted or short-lived relationships, professional instability,
phobias, social isolation, anxiety disorders, compulsions.

### Credentials
- Trained at CEP (Centro de Estudos Psicanalíticos)
- Offices near Sumaré and Butantã metro stations, São Paulo

## Pages

### Home
- Hero with tagline and CTA to book a session
- Brief intro to psychoanalysis and the clinic
- Services overview
- Location highlights (Sumaré, Butantã, online)
- CTA section

### About (Sobre)
- Renata's story and approach
- Training and credentials
- Clinical philosophy

### Services (Atendimento)
- Individual sessions
- Couples sessions
- In-person, remote and hybrid modalities

### Contact (Contato)
- WhatsApp CTA (primary CTA — floating button visible on all pages)
- WhatsApp number: 11 99981-6070
- Email: to be defined — leave a placeholder [EMAIL] in the code
- Location: near Sumaré and Butantã metro stations, São Paulo
- Note: online appointments available nationwide

## Components

### Floating WhatsApp Button
- Visible on every page, fixed bottom-right corner
- Opens WhatsApp chat directly with a pre-filled message
- Pre-filled message: 
  "Olá, Renata! Gostaria de saber mais sobre o atendimento."
- WhatsApp link: 
  https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.
- Style: green WhatsApp brand color, rounded, with subtle shadow
- On mobile: slightly larger for easy tapping

## Ethical Constraints (CFP Guidelines)
- Never promise results, cure or timeframes
- Never expose patient situations even fictionally
- No testimonials from patients
- No before/after framing

## Deploy
- Run: npm run deploy
- GitHub Pages custom domain: renatadruck.com.br
- CNAME file must exist in /public folder

## Commands
Once a React project is initialized (e.g., via Vite or Create React App), update this file with:
- Install: `npm install`
- Dev server: `npm run dev` or `npm start`
- Build: `npm run build`
- Lint: `npm run lint`
- Tests: `npm test`

## Standards
- Use conventional commits

## Development Rules
- Every time a new package or dependency is installed, automatically 
  update README.md with:
  - Package name and version
  - Purpose of the package
  - Any relevant usage notes
- Keep README.md as a living document reflecting the current state 
  of the project
- Never add "Co-Authored-By: Claude" in commit messages

