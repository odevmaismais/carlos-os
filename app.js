/* ===== Carlos.OS — Application Engine ===== */

// ========== DATA ==========
const PROJECTS = [
  {
    id: 'verum-global',
    name: 'Verum Sales Global',
    company: 'Cantu Inc',
    status: 'LEAD',
    category: 'software',
    desc: 'Plataforma global de vendas multi-tenant com integração SAP, OMS distribuído e arquitetura DDD.',
    detail: {
      overview: 'Liderança técnica na expansão internacional do Verum Sales, transformando o produto em uma plataforma global multi-tenant. Responsável pela arquitetura, padrões de código e evolução do time.',
      stack: ['C#/.NET', 'MongoDB', 'Redis', 'RabbitMQ', 'SignalR', 'Azure Key Vault', 'SAP Integration', 'CI/CD'],
      highlights: [
        'Arquitetura multi-tenant com isolamento por tenant no MongoDB',
        'Integração bidirecional com SAP para gestão de pedidos',
        'OMS (Order Management System) distribuído com mensageria RabbitMQ',
        'Padrões DDD aplicados em domínios complexos de vendas',
        'CI/CD pipelines otimizados com deploys em 8 minutos',
        'Gestão de secrets com Azure Key Vault em múltiplos ambientes'
      ]
    }
  },
  {
    id: 'verum-sales',
    name: 'Verum Sales',
    company: 'Cantu Inc',
    status: 'PROD',
    category: 'software',
    desc: 'CRM proprietário com microsserviços, real-time e monitoramento avançado.',
    detail: {
      overview: 'Desenvolvimento sênior de CRM proprietário para gestão de vendas com comunicação em tempo real e arquitetura orientada a eventos.',
      stack: ['C#/.NET', 'Hangfire', 'RabbitMQ', 'DataDog', 'SignalR', 'SQL Server', 'Microsserviços'],
      highlights: [
        'Arquitetura de microsserviços com comunicação via RabbitMQ',
        'Jobs distribuídos com Hangfire para processamento assíncrono',
        'Real-time updates via SignalR para dashboard de vendas',
        'Monitoramento e observabilidade completa com DataDog',
        'APIs RESTful com padrões de resiliência (retry, circuit breaker)'
      ]
    }
  },
  {
    id: 'erp-udop',
    name: 'ERP Interno UDOP',
    company: 'UDOP',
    status: 'PROD',
    category: 'software',
    desc: 'Sistema ERP interno com reconhecimento facial, otimização de performance e redesign UX.',
    detail: {
      overview: 'Desenvolvimento e evolução de ERP interno com foco em performance, usabilidade e integração de recursos avançados de identificação.',
      stack: ['C#/.NET', 'SQL Server', 'OpenCV', 'Reconhecimento Facial', 'REST APIs'],
      highlights: [
        'Integração de reconhecimento facial para controle de ponto',
        'Otimização de queries SQL reduzindo tempo de resposta em 70%',
        'Redesign completo de UX para módulos críticos',
        'Melhoria de performance geral do sistema existente'
      ]
    }
  },
  {
    id: 'central-leiloes',
    name: 'Central Leilões Platform',
    company: 'Central Leilões',
    status: 'PROD',
    category: 'automacao',
    desc: 'Plataforma completa de leilões com site, app, transmissão ao vivo e sistema de dados.',
    detail: {
      overview: 'Desenvolvimento full-stack de plataforma de leilões digitais com streaming ao vivo e análise de dados em tempo real.',
      stack: ['Web', 'Mobile', 'Streaming', 'Data Pipeline', 'REST APIs'],
      highlights: [
        'Sistema de leilões com lances em tempo real',
        'Transmissão ao vivo integrada à plataforma web',
        'App mobile para participação remota em leilões',
        'Pipeline de dados para análise de tendências e precificação',
        'Integração com sistemas de pagamento para arrematação instantânea'
      ]
    }
  },
  {
    id: 'global-websites',
    name: 'Global WebSites Solutions',
    company: 'Global WebSites',
    status: 'MULTI',
    category: 'software',
    desc: 'Múltiplos projetos: websites, e-commerce, sistemas de pagamento, reservas e sistemas sob medida.',
    detail: {
      overview: 'Desenvolvimento de soluções web diversificadas para diferentes segmentos, incluindo e-commerce, reservas e integrações com gateways de pagamento.',
      stack: ['PHP', 'JavaScript', 'MySQL', 'WordPress', 'E-commerce', 'Payment Gateways'],
      highlights: [
        'Plataformas de e-commerce com integração de múltiplos meios de pagamento',
        'Sistemas de reserva online para hotelaria e turismo',
        'Websites institucionais com CMS customizado',
        'Integrações com gateways de pagamento nacionais e internacionais',
        'Sistemas sob medida para necessidades específicas de cada cliente'
      ]
    }
  },
  {
    id: 'jogos-educativos',
    name: 'Jogos Educativos VR/AR',
    company: 'Netbil Educacional',
    status: 'SHIP',
    category: 'automacao',
    desc: 'Desenvolvimento de jogos educativos interativos com Unity, Blender, VR e AR.',
    detail: {
      overview: 'Criação de experiências educativas imersivas usando tecnologias de realidade virtual e aumentada para plataformas de ensino.',
      stack: ['Unity', 'C#', 'Blender', 'VR/AR', '3D Modeling', 'Game Design'],
      highlights: [
        'Jogos educativos interativos para diferentes faixas etárias',
        'Experiências em Realidade Virtual para aprendizagem imersiva',
        'Aplicações de Realidade Aumentada para material didático',
        'Modelagem 3D com Blender para assets de jogos',
        'Design de mecânicas de jogo voltadas para engajamento educacional'
      ]
    }
  }
];

const TIMELINE = [
  {
    period: 'Nov 2024 — Presente',
    company: 'Cantu Inc',
    role: 'Lead Developer / Tech Lead',
    desc: 'Liderança técnica do Verum Sales e do Verum Sales Global, com arquitetura multi-tenant, integração SAP e OMS, DDD, CI/CD, performance e formação do time técnico.',
    tags: ['Tech Lead', 'DDD', 'Multi-tenant', 'SAP', 'OMS', 'Azure'],
    current: true
  },
  {
    period: 'Abr 2022 — Presente',
    company: 'Cantu Inc',
    role: 'Desenvolvedor Sênior de Software',
    desc: 'Evolução do Verum Sales CRM com microsserviços, Hangfire, RabbitMQ, DataDog, SignalR, gestão interna de arquivos e integrações ligadas a operações comerciais.',
    tags: ['C#/.NET', 'Microsserviços', 'RabbitMQ', 'DataDog', 'SignalR'],
    current: false
  },
  {
    period: 'Out 2021 — Abr 2022',
    company: 'UDOP',
    role: 'Desenvolvedor de Software',
    desc: 'Atuação no ERP interno com reestruturação de fluxos, melhorias de usabilidade, reconhecimento facial para controle de ponto e otimização de banco de dados.',
    tags: ['ERP', 'Reconhecimento Facial', 'SQL Server', 'UX', 'Performance'],
    current: false
  },
  {
    period: 'Fev 2021 — Out 2021',
    company: 'Central Leilões',
    role: 'Desenvolvedor Full-Stack',
    desc: 'Desenvolvimento de soluções para site, app, dados operacionais e apoio à transmissão ao vivo de leilões digitais.',
    tags: ['Full-Stack', 'Streaming', 'Mobile', 'Dados'],
    current: false
  },
  {
    period: 'Abr 2019 — Jan 2020',
    company: 'Global WebSites',
    role: 'Desenvolvedor Web',
    desc: 'Entrega de websites institucionais, e-commerces, integrações de pagamento, reservas hoteleiras, sistemas educacionais e soluções web sob medida.',
    tags: ['E-commerce', 'PHP', 'JavaScript', 'MySQL', 'Pagamentos'],
    current: false
  },
  {
    period: 'Nov 2017 — Jul 2018',
    company: 'Netbil Educacional',
    role: 'Desenvolvedor de Jogos e Experiências Imersivas',
    desc: 'Criação de jogos educativos, experiências com Unity e Blender, projetos em VR/AR e liderança de iniciativas interativas de produto.',
    tags: ['Unity', 'VR/AR', 'Blender', 'Game Dev', 'Educação'],
    current: false
  }
];

const SKILLS = {
  'Backend & Arquitetura': [
    { name: 'C# / .NET', level: 95 },
    { name: 'DDD / Clean Arch', level: 90 },
    { name: 'Microsserviços', level: 88 },
    { name: 'REST APIs', level: 92 },
    { name: 'SQL Server', level: 85 },
    { name: 'MongoDB', level: 82 },
  ],
  'Mensageria & Infra': [
    { name: 'RabbitMQ', level: 85 },
    { name: 'Redis', level: 80 },
    { name: 'Docker', level: 78 },
    { name: 'CI/CD Pipelines', level: 85 },
    { name: 'Azure', level: 80 },
    { name: 'DataDog', level: 75 },
  ],
  'Frontend & Geral': [
    { name: 'JavaScript/TS', level: 85 },
    { name: 'React', level: 78 },
    { name: 'HTML/CSS', level: 88 },
    { name: 'SignalR/WS', level: 82 },
    { name: 'Unity/C#', level: 70 },
    { name: 'Blender/3D', level: 65 },
  ],
  'Liderança': [
    { name: 'Tech Lead', level: 90 },
    { name: 'Code Review', level: 92 },
    { name: 'Mentoria', level: 85 },
    { name: 'Arquitetura', level: 90 },
    { name: 'Documentação', level: 80 },
    { name: 'Planejamento', level: 85 },
  ]
};

const TERMINAL_COMMANDS = {
  help: () => `<span class="info">Comandos disponíveis:</span>
  help          — Mostra esta ajuda
  about         — Sobre Carlos Welter Batista
  skills        — Lista de habilidades
  projects      — Lista de projetos
  timeline      — Trajetória profissional
  contact       — Informações de contato
  stack         — Stack técnico atual
  whoami        — Identidade do sistema
  uname         — Informações do sistema
  clear         — Limpa o terminal
  date          — Data atual
  echo [texto]  — Repete o texto
  ls            — Lista arquivos do desktop
  cat [arquivo] — Lê um arquivo
  neofetch      — Info do sistema estilizado
  sudo          — Tenta escalar privilégios
  exit          — Fecha o terminal`,

  about: () => `<span class="info">╔══════════════════════════════════════════╗
║  Carlos Welter Batista                   ║
║  Tech Lead e Arquiteto de Software       ║
╚══════════════════════════════════════════╝</span>

Construtor de sistemas autorais com foco em software,
automação, arquitetura e liderança técnica.

Especialista em C#/.NET, microsserviços, DDD e
sistemas distribuídos de alta performance.

<span class="warn">▸ +10 anos de experiência em desenvolvimento</span>
<span class="warn">▸ Liderança técnica em projetos internacionais</span>
<span class="warn">▸ Arquitetura de soluções escaláveis</span>`,

  skills: () => {
    let out = '<span class="info">// Competencias.sys — Mapa de Competências</span>\n\n';
    for (const [cat, items] of Object.entries(SKILLS)) {
      out += `<span class="warn">[${cat}]</span>\n`;
      for (const s of items) {
        const bar = '█'.repeat(Math.round(s.level / 5)) + '░'.repeat(20 - Math.round(s.level / 5));
        out += `  ${s.name.padEnd(18)} ${bar} ${s.level}%\n`;
      }
      out += '\n';
    }
    return out;
  },

  projects: () => {
    let out = '<span class="info">// Projetos/ — Explorador de Cases</span>\n\n';
    for (const p of PROJECTS) {
      out += `<span class="cmd">[${p.status}]</span> ${p.name}\n`;
      out += `       <span class="result">${p.company} — ${p.desc}</span>\n\n`;
    }
    return out;
  },

  timeline: () => {
    let out = '<span class="info">// Trajetoria.log — Trajetória</span>\n\n';
    for (const t of TIMELINE) {
      const marker = t.current ? '<span class="cmd">●</span>' : '○';
      out += `${marker} <span class="warn">${t.period}</span>\n`;
      out += `  ${t.company} — ${t.role}\n`;
      out += `  <span class="result">${t.desc}</span>\n\n`;
    }
    return out;
  },

  contact: () => `<span class="info">// Contato.mod — Canais de Comunicação</span>

  ✉️  carloswelterbatista@gmail.com
  💼  linkedin.com/in/odevmaismais
  🐙  github.com/odevmaismais

<span class="warn">Disponível para projetos, consultorias e oportunidades.</span>`,

  stack: () => `<span class="info">// Stack Técnico Atual</span>

<span class="warn">[Runtime]</span>     C# / .NET 8
<span class="warn">[Banco]</span>      MongoDB + Redis + SQL Server
<span class="warn">[Mensageria]</span> RabbitMQ
<span class="warn">[Real-time]</span>  SignalR
<span class="warn">[Monitor]</span>    DataDog
<span class="warn">[Cloud]</span>      Azure (Key Vault, DevOps)
<span class="warn">[CI/CD]</span>      Azure DevOps Pipelines
<span class="warn">[Arch]</span>       DDD, Microsserviços, Multi-tenant`,

  whoami: () => '<span class="cmd">carlos@carlos-os</span> — Tech Lead e Arquiteto de Software',

  uname: () => `Carlos.OS v1.0.0 (Build 2026.03)
Kernel: CarlosKernel 1.0-autoral
Architecture: retro-os-static-ui
Platform: Web/Static`,

  clear: () => '__CLEAR__',

  date: () => `<span class="info">${new Date().toLocaleString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>`,

  ls: () => `<span class="info">📁 Conteúdo de C:\\Carlos.OS\\Desktop\\</span>

  👤  Sobre_Mim.exe
  📁  Projetos/
  ⚙️  Competencias.sys
  📋  Trajetoria.log
  🏗️  Arquitetura.sys
  ✉️  Contato.mod
  📄  Curriculo.pdf
  ▶_  Terminal
  🔒  .secrets/`,

  neofetch: () => `<span class="cmd">        ██████╗  ██████╗ ███████╗</span>
<span class="cmd">       ██╔════╝ ██╔═══██╗██╔════╝</span>    <span class="warn">carlos</span>@<span class="warn">carlos-os</span>
<span class="cmd">       ██║      ██║   ██║███████╗</span>    ──────────────────
<span class="cmd">       ██║      ██║   ██║╚════██║</span>    <span class="info">OS:</span> Carlos.OS v1.0.0
<span class="cmd">       ╚██████╗ ╚██████╔╝███████║</span>    <span class="info">Role:</span> Tech Lead
<span class="cmd">        ╚═════╝  ╚═════╝ ╚══════╝</span>    <span class="info">Stack:</span> C#/.NET, DDD, Azure
                                    <span class="info">XP:</span> +10 anos
                                    <span class="info">Uptime:</span> desde 2014
                                    <span class="info">Shell:</span> carlos-terminal
                                    <span class="info">Theme:</span> retro-dark-autoral`,

  sudo: () => '<span class="error">❌ Acesso negado. Você precisa enviar um e-mail para carloswelterbatista@gmail.com primeiro. 😉</span>',

  exit: () => '__EXIT__',
};

// ========== STATE ==========
let windowZIndex = 10;
let openWindows = {};
let activeWindowId = null;
let isMobile = window.innerWidth < 768;
let terminalHistory = [];
let terminalHistoryIdx = -1;
let bootComplete = false;

// ========== BOOT ==========
const bootLines = [
  { text: 'Carregando Carlos.OS Kernel v1.0.0...', type: 'ok' },
  { text: 'Inicializando subsistema de memória...', type: '' },
  { text: '[OK] Módulo de experiência carregado', type: 'ok' },
  { text: '[OK] Competencias.sys montado com sucesso', type: 'ok' },
  { text: 'Verificando integridade de projetos... 6 encontrados', type: '' },
  { text: '[OK] Trajetoria.log sincronizado', type: 'ok' },
  { text: '[OK] Arquitetura.sys inicializado', type: 'ok' },
  { text: 'Compilando interface desktop...', type: '' },
  { text: '[WARN] Easter eggs detectados no sistema', type: 'warn' },
  { text: '[OK] Contato.mod disponível', type: 'ok' },
  { text: '[OK] Terminal pronto para comandos', type: 'ok' },
  { text: '', type: '' },
  { text: 'Carlos.OS pronto. Bem-vindo.', type: 'ok' },
];

function startBoot() {
  const container = document.getElementById('boot-lines');
  const progress = document.getElementById('boot-progress');
  let i = 0;
  const total = bootLines.length;

  function addLine() {
    if (bootComplete) return;
    if (i >= total) {
      setTimeout(finishBoot, 600);
      return;
    }
    const line = bootLines[i];
    const el = document.createElement('div');
    el.className = 'line ' + line.type;
    el.textContent = line.text;
    container.appendChild(el);
    container.scrollTop = container.scrollHeight;
    progress.style.width = ((i + 1) / total * 100) + '%';
    i++;
    setTimeout(addLine, 180 + Math.random() * 120);
  }

  addLine();
}

function finishBoot() {
  if (bootComplete) return;
  bootComplete = true;
  const bootScreen = document.getElementById('boot-screen');
  bootScreen.style.opacity = '0';
  bootScreen.style.transition = 'opacity 0.4s ease';
  setTimeout(() => {
    bootScreen.classList.add('hidden');
    if (isMobile) {
      document.getElementById('mobile-mode').classList.remove('hidden');
      initMobile();
    } else {
      document.getElementById('desktop').classList.remove('hidden');
    }
  }, 400);
}

function skipBoot() {
  finishBoot();
}

document.getElementById('boot-skip').addEventListener('click', skipBoot);
document.addEventListener('keydown', function bootKey(e) {
  if (!bootComplete) {
    skipBoot();
    document.removeEventListener('keydown', bootKey);
  }
});

// ========== CLOCK ==========
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const el = document.getElementById('taskbar-clock');
  if (el) el.textContent = time;
  const mel = document.getElementById('mobile-clock');
  if (mel) mel.textContent = time;
}
setInterval(updateClock, 10000);
updateClock();

// ========== WINDOW MANAGEMENT ==========
function getWindowContent(type) {
  switch (type) {
    case 'sobre': return getSobreContent();
    case 'projetos': return getProjetosContent();
    case 'skills': return getSkillsContent();
    case 'timeline': return getTimelineContent();
    case 'architecture': return getArchitectureContent();
    case 'contact': return getContactContent();
    case 'resume': return getResumeContent();
    case 'terminal': return getTerminalContent();
    default: return '<p>Conteúdo não encontrado.</p>';
  }
}

function getWindowTitle(type) {
  const titles = {
    sobre: 'Sobre_Mim.exe',
    projetos: 'Projetos/',
    skills: 'Competencias.sys',
    timeline: 'Trajetoria.log',
    architecture: 'Arquitetura.sys',
    contact: 'Contato.mod',
    resume: 'Curriculo.pdf',
    terminal: 'Terminal — carlos@carlos-os'
  };
  return titles[type] || type;
}

function getWindowSize(type) {
  const vw = window.innerWidth;
  const vh = window.innerHeight - 44;
  const sizes = {
    sobre: { w: Math.min(520, vw - 40), h: Math.min(480, vh - 40) },
    projetos: { w: Math.min(600, vw - 40), h: Math.min(520, vh - 40) },
    skills: { w: Math.min(560, vw - 40), h: Math.min(500, vh - 40) },
    timeline: { w: Math.min(520, vw - 40), h: Math.min(540, vh - 40) },
    architecture: { w: Math.min(620, vw - 40), h: Math.min(520, vh - 40) },
    contact: { w: Math.min(460, vw - 40), h: Math.min(420, vh - 40) },
    resume: { w: Math.min(540, vw - 40), h: Math.min(540, vh - 40) },
    terminal: { w: Math.min(640, vw - 40), h: Math.min(420, vh - 40) },
  };
  return sizes[type] || { w: 500, h: 400 };
}

function openWindow(type) {
  // If already open, focus it
  if (openWindows[type]) {
    focusWindow(type);
    const win = openWindows[type].element;
    if (win.classList.contains('minimized')) {
      win.classList.remove('minimized');
      updateTaskbar();
    }
    return;
  }

  const size = getWindowSize(type);
  const offsetIndex = Object.keys(openWindows).length;
  const columnOffset = (offsetIndex % 3) * 44;
  const rowOffset = Math.floor(offsetIndex / 3) * 32;
  const x = Math.min(180 + columnOffset, window.innerWidth - size.w - 20);
  const y = Math.min(32 + rowOffset, window.innerHeight - 44 - size.h - 20);

  const win = document.createElement('div');
  win.className = 'window';
  win.id = 'window-' + type;
  win.style.left = x + 'px';
  win.style.top = y + 'px';
  win.style.width = size.w + 'px';
  win.style.height = size.h + 'px';
  win.style.zIndex = ++windowZIndex;

  const isTerminal = type === 'terminal';
  win.innerHTML = `
    <div class="window-header" data-window-id="${type}">
      <span class="window-title">${getWindowTitle(type)}</span>
      <div class="window-controls">
        <button class="window-ctrl minimize" data-action="minimize" data-window="${type}" aria-label="Minimizar"></button>
        <button class="window-ctrl maximize" data-action="maximize" data-window="${type}" aria-label="Maximizar"></button>
        <button class="window-ctrl close" data-action="close" data-window="${type}" aria-label="Fechar"></button>
      </div>
    </div>
    <div class="window-body ${isTerminal ? 'terminal-body' : ''}" id="body-${type}">
      ${getWindowContent(type)}
    </div>
    <div class="window-resize" data-window="${type}"></div>
  `;

  document.getElementById('windows-container').appendChild(win);
  openWindows[type] = { element: win, minimized: false };

  // Setup drag
  setupWindowDrag(win, type);
  // Setup resize
  setupWindowResize(win, type);

  // Focus on click
  win.addEventListener('mousedown', () => focusWindow(type));

  // Setup controls
  win.querySelectorAll('.window-ctrl').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      const wType = btn.dataset.window;
      if (action === 'close') closeWindow(wType);
      else if (action === 'minimize') minimizeWindow(wType);
      else if (action === 'maximize') maximizeWindow(wType);
    });
  });

  focusWindow(type);
  updateTaskbar();

  // Terminal init
  if (isTerminal) {
    initTerminal();
  }
}

function closeWindow(type) {
  if (openWindows[type]) {
    openWindows[type].element.remove();
    delete openWindows[type];
    updateTaskbar();
    // Set active to last window
    const keys = Object.keys(openWindows);
    if (keys.length > 0) focusWindow(keys[keys.length - 1]);
    else activeWindowId = null;
  }
}

function minimizeWindow(type) {
  if (openWindows[type]) {
    openWindows[type].element.classList.add('minimized');
    openWindows[type].minimized = true;
    updateTaskbar();
  }
}

function maximizeWindow(type) {
  if (openWindows[type]) {
    openWindows[type].element.classList.toggle('maximized');
  }
}

function focusWindow(type) {
  if (openWindows[type]) {
    Object.entries(openWindows).forEach(([id, data]) => {
      if (id === type) data.element.classList.remove('inactive');
      else data.element.classList.add('inactive');
    });
    openWindows[type].element.style.zIndex = ++windowZIndex;
    activeWindowId = type;
    updateTaskbar();
  }
}

function setupWindowDrag(win, type) {
  const header = win.querySelector('.window-header');
  let startX, startY, startLeft, startTop;
  let isDragging = false;

  header.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('window-ctrl')) return;
    if (win.classList.contains('maximized')) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = win.offsetLeft;
    startTop = win.offsetTop;
    focusWindow(type);
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    win.style.left = (startLeft + dx) + 'px';
    win.style.top = (startTop + dy) + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

function setupWindowResize(win, type) {
  const handle = win.querySelector('.window-resize');
  let startX, startY, startW, startH;
  let isResizing = false;

  handle.addEventListener('mousedown', (e) => {
    if (win.classList.contains('maximized')) return;
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startW = win.offsetWidth;
    startH = win.offsetHeight;
    e.preventDefault();
    e.stopPropagation();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const w = Math.max(360, startW + (e.clientX - startX));
    const h = Math.max(280, startH + (e.clientY - startY));
    win.style.width = w + 'px';
    win.style.height = h + 'px';
  });

  document.addEventListener('mouseup', () => {
    isResizing = false;
  });
}

// ========== TASKBAR ==========
function updateTaskbar() {
  const container = document.getElementById('taskbar-apps');
  container.innerHTML = '';
  for (const [type, data] of Object.entries(openWindows)) {
    const btn = document.createElement('button');
    btn.className = 'taskbar-app' + (activeWindowId === type && !data.minimized ? ' active' : '');
    btn.textContent = getWindowTitle(type);
    btn.addEventListener('click', () => {
      if (data.minimized) {
        data.element.classList.remove('minimized');
        data.minimized = false;
        focusWindow(type);
      } else if (activeWindowId === type) {
        minimizeWindow(type);
      } else {
        focusWindow(type);
      }
      updateTaskbar();
    });
    container.appendChild(btn);
  }
}

// ========== START MENU ==========
const startBtn = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');

startBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  startMenu.classList.toggle('hidden');
  startBtn.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!startMenu.contains(e.target) && e.target !== startBtn) {
    startMenu.classList.add('hidden');
    startBtn.classList.remove('active');
  }
});

document.querySelectorAll('.start-menu-item[data-window]').forEach(item => {
  item.addEventListener('click', () => {
    openWindow(item.dataset.window);
    startMenu.classList.add('hidden');
    startBtn.classList.remove('active');
  });
});

// ========== DESKTOP ICONS ==========
document.querySelectorAll('.desktop-icon[data-window]').forEach(icon => {
  icon.addEventListener('dblclick', () => openWindow(icon.dataset.window));
  icon.addEventListener('click', () => openWindow(icon.dataset.window));
});

// ========== WINDOW CONTENTS ==========
function getSobreContent() {
  return `
    <div class="about-header">
      <div class="about-avatar">CW</div>
      <div class="about-info">
        <h2>Carlos Welter Batista</h2>
        <div class="role">Tech Lead e Arquiteto de Software</div>
        <div class="location">📍 Brasil</div>
      </div>
    </div>
    <p class="about-text">
      Construtor de sistemas autorais com foco em software, automação, arquitetura e liderança técnica. 
      Transformo problemas complexos em soluções escaláveis, sempre buscando o equilíbrio entre 
      excelência técnica e entrega de valor.
    </p>
    <p class="about-text">
      Atuo como Tech Lead na Cantu Inc, liderando a evolução do Verum Sales Global — 
      uma plataforma multi-tenant de vendas com integração SAP, arquitetura DDD e 
      comunicação em tempo real. Minha trajetória inclui desde jogos educativos em VR/AR 
      até sistemas ERP e plataformas de leilões digitais.
    </p>
    <div class="about-stats">
      <div class="stat-card">
        <span class="stat-value">+10</span>
        <span class="stat-label">Anos de XP</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">6+</span>
        <span class="stat-label">Empresas</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">15+</span>
        <span class="stat-label">Projetos</span>
      </div>
    </div>
  `;
}

function getSkillsContent() {
  let html = '';
  for (const [cat, items] of Object.entries(SKILLS)) {
    html += `<div class="skills-category"><h3>${cat}</h3>`;
    for (const s of items) {
      const cls = s.level >= 85 ? 'high' : s.level >= 75 ? 'mid' : 'low';
      html += `
        <div class="skill-bar">
          <span class="skill-name">${s.name}</span>
          <div class="skill-track"><div class="skill-fill ${cls}" style="width:${s.level}%"></div></div>
          <span class="skill-pct">${s.level}%</span>
        </div>
      `;
    }
    html += '</div>';
  }
  return html;
}

function getTimelineContent() {
  let html = '';
  for (const t of TIMELINE) {
    html += `
      <div class="timeline-entry ${t.current ? 'current' : ''}">
        <div class="timeline-period">${t.period}</div>
        <div class="timeline-company">${t.company}</div>
        <div class="timeline-role">${t.role}</div>
        <div class="timeline-desc">${t.desc}</div>
        <div class="timeline-tags">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      </div>
    `;
  }
  return html;
}

function getProjetosContent() {
  let html = `
    <div class="projects-nav">
      <button class="project-filter active" data-filter="all">Todos</button>
      <button class="project-filter" data-filter="software">Software</button>
      <button class="project-filter" data-filter="automacao">Automação</button>
    </div>
    <div class="projects-grid" id="projects-list">
  `;
  for (const p of PROJECTS) {
    html += `
      <div class="project-card" data-category="${p.category}" data-project="${p.id}">
        <div class="project-card-header">
          <h4>${p.name}</h4>
          <span class="project-status">${p.status}</span>
        </div>
        <p>${p.desc}</p>
        <div class="timeline-tags">${p.detail.stack.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `;
  }
  html += '</div>';
  return html;
}

function showProjectDetail(projectId) {
  const p = PROJECTS.find(pr => pr.id === projectId);
  if (!p) return;
  const body = document.getElementById('body-projetos');
  if (!body) return;
  body.innerHTML = `
    <div class="project-detail">
      <button class="project-back-btn" id="project-back">← Voltar aos projetos</button>
      <h3>${p.name}</h3>
      <div class="project-detail-section">
        <h4>Visão Geral</h4>
        <p>${p.detail.overview}</p>
      </div>
      <div class="project-detail-section">
        <h4>Stack Técnico</h4>
        <div class="timeline-tags">${p.detail.stack.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <div class="project-detail-section">
        <h4>Destaques</h4>
        <ul>${p.detail.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
      </div>
    </div>
  `;
  document.getElementById('project-back').addEventListener('click', () => {
    body.innerHTML = getProjetosContent();
    setupProjectInteractions();
  });
}

function setupProjectInteractions() {
  // Filter buttons
  document.querySelectorAll('.project-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.project-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project click
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      showProjectDetail(card.dataset.project);
    });
  });
}

function getArchitectureContent() {
  return `
    <div class="arch-diagram">
      <div class="arch-layer">
        <div class="arch-layer-label">PRESENTATION</div>
        <div class="arch-boxes">
          <div class="arch-box highlight">HTML/CSS/JS</div>
          <div class="arch-box highlight">Janela Interativa</div>
          <div class="arch-box">Terminal Simulado</div>
        </div>
      </div>
      <div class="arch-arrow">▼</div>
      <div class="arch-layer">
        <div class="arch-layer-label">APPLICATION / DOMAIN (DDD)</div>
        <div class="arch-boxes">
          <div class="arch-box warm">Commands</div>
          <div class="arch-box warm">Queries</div>
          <div class="arch-box warm">Domain Events</div>
          <div class="arch-box warm">Aggregates</div>
        </div>
      </div>
      <div class="arch-arrow">▼</div>
      <div class="arch-layer">
        <div class="arch-layer-label">INFRASTRUCTURE</div>
        <div class="arch-boxes">
          <div class="arch-box cool">MongoDB</div>
          <div class="arch-box cool">Redis Cache</div>
          <div class="arch-box cool">RabbitMQ</div>
          <div class="arch-box cool">Azure KV</div>
        </div>
      </div>
      <div class="arch-arrow">▼</div>
      <div class="arch-layer">
        <div class="arch-layer-label">EXTERNAL INTEGRATIONS</div>
        <div class="arch-boxes">
          <div class="arch-box">SAP ERP</div>
          <div class="arch-box">DataDog</div>
          <div class="arch-box">CI/CD Pipeline</div>
        </div>
      </div>
    </div>

    <div class="arch-section">
      <h3>Princípios de Arquitetura</h3>
      <div class="arch-principle">
        <div class="arch-principle-icon">🧱</div>
        <div>
          <h4>Domain-Driven Design</h4>
          <p>Modelagem de domínios complexos com fronteiras claras, linguagem ubíqua e estruturas capazes de sustentar produtos de vendas em evolução contínua.</p>
        </div>
      </div>
      <div class="arch-principle">
        <div class="arch-principle-icon">🔄</div>
        <div>
          <h4>Arquitetura Orientada a Eventos</h4>
          <p>Comunicação assíncrona via RabbitMQ entre serviços e processos críticos, favorecendo desacoplamento, resiliência e consistência eventual.</p>
        </div>
      </div>
      <div class="arch-principle">
        <div class="arch-principle-icon">🏢</div>
        <div>
          <h4>Isolamento Multi-tenant</h4>
          <p>Estratégias de segregação por tenant, controle de configuração e proteção de segredos com foco em escalabilidade e segurança operacional.</p>
        </div>
      </div>
      <div class="arch-principle">
        <div class="arch-principle-icon">📊</div>
        <div>
          <h4>Observabilidade</h4>
          <p>Monitoramento completo com DataDog: métricas, logs e traces distribuídos. Alertas proativos para degradação de performance.</p>
        </div>
      </div>
    </div>
  `;
}

function getContactContent() {
  return `
    <div class="contact-grid">
      <a href="mailto:carloswelterbatista@gmail.com" class="contact-card" target="_blank" rel="noopener noreferrer">
        <div class="contact-card-icon">✉️</div>
        <div class="contact-card-info">
          <h4>E-mail</h4>
          <p>carloswelterbatista@gmail.com</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/odevmaismais/" class="contact-card" target="_blank" rel="noopener noreferrer">
        <div class="contact-card-icon">💼</div>
        <div class="contact-card-info">
          <h4>LinkedIn</h4>
          <p>linkedin.com/in/odevmaismais</p>
        </div>
      </a>
      <a href="https://github.com/odevmaismais" class="contact-card" target="_blank" rel="noopener noreferrer">
        <div class="contact-card-icon">🐙</div>
        <div class="contact-card-info">
          <h4>GitHub</h4>
          <p>github.com/odevmaismais</p>
        </div>
      </a>
    </div>
    <div class="contact-message">
      <h4>💬 Mensagem Rápida</h4>
      <p>
        Disponível para oportunidades de Tech Lead, consultoria em arquitetura 
        de software e projetos desafiadores. Se você busca alguém que constrói 
        sistemas com propósito e excelência técnica, vamos conversar.
      </p>
    </div>
  `;
}

function getResumeContent() {
  return `
    <div class="resume-section">
      <h3>👤 Perfil</h3>
      <p class="about-text">Tech Lead e Arquiteto de Software com mais de 10 anos de experiência em produtos, integrações e sistemas escaláveis. Especialista em C#/.NET, DDD, microsserviços, mensageria e liderança técnica.</p>
      <p><a href="./Carlos_Welter_Batista_Curriculo.pdf" class="resume-download" target="_blank" rel="noopener noreferrer">Baixar currículo em PDF</a></p>
    </div>

    <div class="resume-section">
      <h3>💼 Experiência</h3>
      ${TIMELINE.map(t => `
        <div class="resume-item">
          <h4>${t.company} — ${t.role}</h4>
          <div class="period">${t.period}</div>
          <p>${t.desc}</p>
        </div>
      `).join('')}
    </div>

    <div class="resume-section">
      <h3>🛠️ Competências Principais</h3>
      <div class="timeline-tags" style="gap:6px">
        ${['C#/.NET', 'DDD', 'Microsserviços', 'MongoDB', 'Redis', 'RabbitMQ', 'SignalR', 'Azure', 'SQL Server', 'Docker', 'CI/CD', 'JavaScript', 'TypeScript', 'Tech Leadership', 'SAP/OMS'].map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="resume-section">
      <h3>🎓 Formação & Certificações</h3>
      <div class="resume-item">
        <h4>Base sólida em engenharia de software</h4>
        <p>Trajetória construída entre desenvolvimento web, jogos, produtos empresariais, integrações críticas e liderança técnica.</p>
      </div>
    </div>
  `;
}

function getTerminalContent() {
  return `
    <div class="terminal-output" id="terminal-output"><span class="info">Carlos.OS Terminal v1.0.0
Digite 'help' para ver os comandos disponíveis.
</span></div>
    <div class="terminal-input-line">
      <span class="terminal-prompt">carlos@os:~$</span>
      <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" spellcheck="false" autofocus>
    </div>
  `;
}

function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  if (!input) return;

  input.focus();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      if (!cmd) return;

      terminalHistory.push(cmd);
      terminalHistoryIdx = terminalHistory.length;

      // Echo command
      output.innerHTML += `<span class="cmd">carlos@os:~$ ${escapeHtml(cmd)}</span>\n`;

      // Process command
      const parts = cmd.split(' ');
      const command = parts[0].toLowerCase();
      const args = parts.slice(1).join(' ');

      let result;
      if (command === 'echo') {
        result = `<span class="result">${escapeHtml(args)}</span>`;
      } else if (command === 'cat') {
        result = handleCat(args);
      } else if (TERMINAL_COMMANDS[command]) {
        result = TERMINAL_COMMANDS[command]();
      } else {
        result = `<span class="error">Comando não encontrado: '${escapeHtml(command)}'
Digite 'help' para ver os comandos disponíveis.</span>`;
      }

      if (result === '__CLEAR__') {
        output.innerHTML = '';
      } else if (result === '__EXIT__') {
        closeWindow('terminal');
      } else {
        output.innerHTML += result + '\n\n';
      }

      input.value = '';
      output.scrollTop = output.scrollHeight;
      const body = document.getElementById('body-terminal');
      if (body) body.scrollTop = body.scrollHeight;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (terminalHistoryIdx > 0) {
        terminalHistoryIdx--;
        input.value = terminalHistory[terminalHistoryIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (terminalHistoryIdx < terminalHistory.length - 1) {
        terminalHistoryIdx++;
        input.value = terminalHistory[terminalHistoryIdx];
      } else {
        terminalHistoryIdx = terminalHistory.length;
        input.value = '';
      }
    }
  });

  // Click anywhere in terminal body focuses input
  const body = document.getElementById('body-terminal');
  if (body) {
    body.addEventListener('click', () => input.focus());
  }
}

function handleCat(filename) {
  const files = {
    'sobre_mim.exe': '<span class="info">Carlos Welter Batista — Tech Lead e Arquiteto de Software\nConstrutor de sistemas autorais.</span>',
    'skills.sys': TERMINAL_COMMANDS.skills(),
    'competencias.sys': TERMINAL_COMMANDS.skills(),
    'timeline.log': TERMINAL_COMMANDS.timeline(),
    'trajetoria.log': TERMINAL_COMMANDS.timeline(),
    'contact.mod': TERMINAL_COMMANDS.contact(),
    'contato.mod': TERMINAL_COMMANDS.contact(),
    'resume.pdf': '<span class="info">Para visualizar o currículo completo, abra Curriculo.pdf no desktop ou baixe o PDF real pelo botão interno.</span>',
    '.secrets/easter.txt': '<span class="warn">🥚 Parabéns! Você encontrou um easter egg.\n\n"O código mais elegante é aquele que resolve o problema\nque ninguém sabia que existia." — Carlos.OS</span>',
    '.secrets/konami.txt': '<span class="warn">🎮 Dica: existe um easter egg de teclado neste sistema.\nTente a sequência clássica...</span>',
  };

  if (!filename) return '<span class="error">Uso: cat [nome_do_arquivo]</span>';
  const key = filename.toLowerCase();
  return files[key] || `<span class="error">Arquivo não encontrado: ${escapeHtml(filename)}</span>`;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========== QUICK MODE ==========
function enterQuickMode() {
  document.getElementById('desktop').classList.add('hidden');
  document.getElementById('quick-mode').classList.remove('hidden');
  populateQuickMode();
}

function exitQuickMode() {
  document.getElementById('quick-mode').classList.add('hidden');
  if (isMobile) {
    document.getElementById('mobile-mode').classList.remove('hidden');
  } else {
    document.getElementById('desktop').classList.remove('hidden');
  }
}

function populateQuickMode() {
  // Skills
  const skillsGrid = document.getElementById('qm-skills-grid');
  skillsGrid.innerHTML = '';
  for (const [cat, items] of Object.entries(SKILLS)) {
    const card = document.createElement('div');
    card.className = 'qm-skill-card';
    card.innerHTML = `<h4>${cat}</h4><ul>${items.map(s => `<li>${s.name} — ${s.level}%</li>`).join('')}</ul>`;
    skillsGrid.appendChild(card);
  }

  // Projects
  const projGrid = document.getElementById('qm-projects-grid');
  projGrid.innerHTML = '';
  for (const p of PROJECTS) {
    const card = document.createElement('div');
    card.className = 'qm-project-card';
    card.innerHTML = `
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <div class="timeline-tags">${p.detail.stack.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    projGrid.appendChild(card);
  }

  // Timeline
  const timelineContent = document.getElementById('qm-timeline-content');
  timelineContent.innerHTML = getTimelineContent();
}

document.getElementById('quick-mode-btn').addEventListener('click', enterQuickMode);
document.getElementById('quick-mode-start').addEventListener('click', () => {
  startMenu.classList.add('hidden');
  startBtn.classList.remove('active');
  enterQuickMode();
});
document.getElementById('qm-back').addEventListener('click', exitQuickMode);

// ========== MOBILE ==========
function initMobile() {
  const appsContainer = document.getElementById('mobile-apps');
  const apps = [
    { id: 'sobre', icon: '👤', name: 'Sobre_Mim' },
    { id: 'projetos', icon: '📁', name: 'Projetos' },
    { id: 'skills', icon: '⚙️', name: 'Competências' },
    { id: 'timeline', icon: '📋', name: 'Trajetória' },
    { id: 'architecture', icon: '🏗️', name: 'Arquitetura' },
    { id: 'contact', icon: '✉️', name: 'Contato' },
    { id: 'resume', icon: '📄', name: 'Currículo' },
    { id: 'terminal', icon: '▶_', name: 'Terminal' },
  ];

  appsContainer.innerHTML = '';
  for (const app of apps) {
    const btn = document.createElement('button');
    btn.className = 'mobile-app';
    btn.innerHTML = `<div class="mobile-app-icon">${app.icon}</div><span>${app.name}</span>`;
    btn.addEventListener('click', () => openMobilePanel(app.id, app.name));
    appsContainer.appendChild(btn);
  }

  // Dock items
  document.querySelectorAll('.mobile-dock-item[data-mwindow]').forEach(btn => {
    btn.addEventListener('click', () => {
      const names = { sobre: 'Sobre_Mim', projetos: 'Projetos', terminal: 'Terminal', contact: 'Contato' };
      openMobilePanel(btn.dataset.mwindow, names[btn.dataset.mwindow] || btn.dataset.mwindow);
    });
  });

  // Quick mode from mobile
  document.getElementById('mobile-qm-btn').addEventListener('click', () => {
    document.getElementById('mobile-mode').classList.add('hidden');
    enterQuickMode();
  });
}

function openMobilePanel(type, title) {
  const panel = document.getElementById('mobile-panel');
  const panelTitle = document.getElementById('mobile-panel-title');
  const panelContent = document.getElementById('mobile-panel-content');

  panelTitle.textContent = title;

  if (type === 'terminal') {
    panelContent.innerHTML = `<div class="terminal-body" style="min-height:100%;padding:12px">` + getTerminalContent() + `</div>`;
    panel.classList.remove('hidden');
    setTimeout(initTerminal, 50);
  } else {
    panelContent.innerHTML = getWindowContent(type);
    panel.classList.remove('hidden');
    if (type === 'projetos') {
      setTimeout(setupProjectInteractions, 50);
    }
  }
}

document.getElementById('mobile-back').addEventListener('click', () => {
  document.getElementById('mobile-panel').classList.add('hidden');
});

// ========== EVENT DELEGATION FOR PROJECTS ==========
document.addEventListener('click', (e) => {
  // Project filter and card clicks (for dynamically created content in windows)
  const filter = e.target.closest('.project-filter');
  if (filter && filter.closest('.window-body')) {
    document.querySelectorAll('.project-filter').forEach(b => b.classList.remove('active'));
    filter.classList.add('active');
    const f = filter.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
    });
    return;
  }

  const card = e.target.closest('.project-card');
  if (card && card.dataset.project) {
    showProjectDetail(card.dataset.project);
    return;
  }
});

// Setup project interactions after window opens
const origOpen = openWindow;
const _openWindow = openWindow;

// Observer for project setup
const observer = new MutationObserver(() => {
  const projBody = document.getElementById('body-projetos');
  if (projBody && projBody.querySelector('.project-filter')) {
    setupProjectInteractions();
  }
});
observer.observe(document.body, { childList: true, subtree: true });

// ========== KONAMI CODE EASTER EGG ==========
let konamiIndex = 0;
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      konamiIndex = 0;
      showEasterEgg();
    }
  } else {
    konamiIndex = 0;
  }
});

function showEasterEgg() {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:999;background:rgba(13,15,18,0.95);display:flex;align-items:center;justify-content:center;cursor:pointer;';
  overlay.innerHTML = `
    <div style="text-align:center;font-family:var(--font-pixel);padding:24px;">
      <div style="font-size:48px;margin-bottom:20px;">🎮</div>
      <div style="font-size:16px;color:#6FE26F;margin-bottom:12px;">KONAMI CODE ACTIVATED!</div>
      <div style="font-size:12px;color:#8FA1AF;max-width:400px;line-height:1.6;">
        "O melhor código é aquele que você não precisa escrever.<br>
        Mas quando precisa, que seja com propósito."<br><br>
        — Carlos.OS Philosophy
      </div>
      <div style="font-size:10px;color:#5C6B78;margin-top:20px;">Clique para fechar</div>
    </div>
  `;
  overlay.addEventListener('click', () => overlay.remove());
  document.body.appendChild(overlay);
}

// ========== RESPONSIVE HANDLING ==========
function checkMobile() {
  const wasMobile = isMobile;
  isMobile = window.innerWidth < 768;
  
  if (isMobile !== wasMobile && bootComplete) {
    if (isMobile) {
      document.getElementById('desktop').classList.add('hidden');
      document.getElementById('quick-mode').classList.add('hidden');
      document.getElementById('mobile-mode').classList.remove('hidden');
      initMobile();
    } else {
      document.getElementById('mobile-mode').classList.add('hidden');
      document.getElementById('quick-mode').classList.add('hidden');
      document.getElementById('desktop').classList.remove('hidden');
    }
  }
}

window.addEventListener('resize', checkMobile);

// ========== INIT ==========
startBoot();
