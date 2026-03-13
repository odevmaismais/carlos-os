# Carlos.OS — Portfólio Interativo

Sistema operacional retrô autoral como portfólio de Carlos Welter Batista — Tech Lead e Arquiteto de Software.

## Como Rodar Localmente

```bash
cd /home/user/workspace/carlos-os
npx serve . -l 3000 --single
# Ou qualquer servidor HTTP estático: python3 -m http.server 3000
```

Abra `http://localhost:3000` no navegador.

## O que foi implementado (MVP)

### Core
- **Boot screen** animado com log de sistema e barra de progresso (pular com qualquer tecla/clique)
- **Desktop interativo** com ícones, fundo escuro com gradientes sutis
- **Sistema de janelas** com drag, resize, minimize, maximize, close, z-index stacking
- **Barra de tarefas** com botão Carlos.OS, apps abertos e relógio
- **Menu Iniciar** com avatar, lista de apps e acesso ao modo rápido

### Janelas (8 total)
- **Sobre_Mim.exe** — bio, stats (+10 anos XP, 6+ empresas, 15+ projetos)
- **Projetos/** — explorador com filtros (Todos/Software/Automação), 6 projetos com visão detalhada
- **Competencias.sys** — barras de progresso coloridas em 4 categorias
- **Trajetoria.log** — trajetória profissional cronológica com tags
- **Arquitetura.sys** — diagrama de camadas e princípios arquiteturais ligados à atuação do Carlos
- **Contato.mod** — cards de contato (email, LinkedIn, GitHub) + mensagem
- **Curriculo.pdf** — currículo em formato de janela com link para PDF real
- **Terminal** — 15+ comandos (help, about, neofetch, ls, cat, skills, projects, timeline, etc.)

### Funcionalidades extras
- **Modo Rápido** — versão single-page scrollável com todas as seções
- **Versão mobile** — grid de apps, painéis fullscreen, dock inferior
- **Easter eggs** — Konami Code (↑↑↓↓←→←→BA), `cat .secrets/easter.txt`
- **Responsivo** — detecta mobile automaticamente (< 768px)

### Terminal commands
`help`, `about`, `skills`, `projects`, `timeline`, `contact`, `stack`, `whoami`, `uname`, `date`, `ls`, `cat`, `neofetch`, `echo`, `sudo`, `clear`, `exit`

## Stack
- HTML/CSS/JS puro (zero dependências, zero build step)
- Google Fonts: Silkscreen (pixel), JetBrains Mono, Inter
- Deploy estático — qualquer servidor serve

## Paleta
- Fundo: #0D0F12 → #151A1F → #1D242B
- Primária (verde): #6FE26F
- Secundária quente: #E6B35A
- Secundária fria: #5BA4D6
- Texto: #D7E0E7 / #8FA1AF

## O que ficou para depois (v2)
- Som opcional / efeitos de áudio
- Animações de scroll/parallax no modo rápido
- Mais easter eggs (matrix rain, game mode)
- Dark/light mode toggle (atualmente só dark)
- Refinar ainda mais o currículo em PDF real
- Integração com API GitHub para projetos ao vivo
- Transições de janela mais sofisticadas
- CRT scanline shader opcional
- Blog/notas técnicas como janela adicional
- PWA / service worker para offline
