/* ==========================================================================
   Saurav Prajapati — Full Stack & PHP Laravel Portfolio Interactions
   ========================================================================== */

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  // ------------------------------------------------------------------------
  // 1. Project & Case Study Data (Tailored to Full Stack & PHP Laravel)
  // ------------------------------------------------------------------------
  const marqueeProjects = [
    {
      title: 'Trisha Neuro Clinic',
      category: 'PHP • Laravel • JS • Admin Panel',
      image: 'images/trisha-neuro.jpg',
      url: 'https://trishaneuro.com/',
    },
    {
      title: 'FertiCore IVF Centre',
      category: 'PHP • Laravel • Full Stack • Admin Panel',
      image: 'images/ferticore-ivf.jpg',
      url: 'https://www.fcicenter.com/',
    },
    {
      title: 'Care Rare India',
      category: 'Core PHP • NGO & Charity Platform',
      image: 'images/care-rare-india.jpg',
      url: 'https://carerareindia.org/',
    },
    {
      title: 'PortraitCulture',
      category: 'HTML5 • CSS3 • JavaScript',
      image: 'images/portrait-culture.jpg',
      url: 'https://portraitculture.com/',
    },
    {
      title: 'Laravel Multi-Vendor Store',
      category: 'Laravel • E-Commerce Platform',
      accent: 'from-purple-900/60 via-[#16161c] to-[#0f1015]',
      badge: 'LARAVEL + BLADE + AJAX',
      metrics: ['Orders: 14.2k', 'Vendors: 120+'],
    },
    {
      title: 'SaaS CRM & Lead Pipeline',
      category: 'PHP • Laravel • REST API',
      accent: 'from-fuchsia-900/50 via-[#16161c] to-[#0f1015]',
      badge: 'PHP + MYSQL + JQUERY',
      metrics: ['Active Leads: 8,450', 'API: 42ms'],
    },
    {
      title: 'Invoice & Payroll Engine',
      category: 'Enterprise HR & Admin Panel',
      accent: 'from-amber-900/45 via-[#16161c] to-[#0f1015]',
      badge: 'LARAVEL + RBAC',
      metrics: ['Payrolls: Automated', 'CRUD: Modular'],
    },
    {
      title: 'Real-Time API Gateway',
      category: 'Node.js & REST APIs',
      accent: 'from-indigo-900/55 via-[#16161c] to-[#0f1015]',
      badge: 'NODE.JS + MYSQL',
      metrics: ['Endpoints: 60+', 'Auth: Token'],
    },
    {
      title: 'Travel & Tour Enquiry CMS',
      category: 'Booking & AJAX Dashboard',
      accent: 'from-cyan-900/45 via-[#16161c] to-[#0f1015]',
      badge: 'PHP + BLADE + AJAX',
      metrics: ['Packages: 60+', 'Enquiries: Auto'],
    },
    {
      title: 'School ERP & Fee System',
      category: 'Role & Permission Portal',
      accent: 'from-violet-900/55 via-[#16161c] to-[#0f1015]',
      badge: 'LARAVEL + AUTH',
      metrics: ['Roles: 5', 'Reports: Ready'],
    },
  ];

  const selectedProjects = [
    {
      number: '01',
      title: 'Trisha Neuro Development Clinic',
      category: 'PHP • Laravel • JS • Admin Panel',
      description:
        'A full-stack healthcare & neuro-rehabilitation web platform for adults and paediatric therapy, featuring online appointment booking ("Book Now"), dynamic therapy services, gallery, blog, patient reviews, and a complete Laravel Admin Panel.',
      contributions: [
        'Built the dynamic website and custom Admin Panel using PHP, Laravel, Blade, MySQL, JavaScript, and AJAX.',
        'Implemented end-to-end appointment booking, therapy service management, blog, gallery, and review CRUD modules.',
        'Added secure admin authentication, role-based access, form validations, and responsive cross-device UI.',
      ],
      technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery & AJAX', 'Blade', 'MySQL', 'Admin Panel'],
      image: 'images/trisha-neuro.jpg',
      liveUrl: 'https://trishaneuro.com/',
      hasLiveSite: true,
    },
    {
      number: '02',
      title: 'FertiCore IVF Centre',
      category: 'PHP • Laravel • Full Stack • Admin Panel',
      description:
        'A full-stack fertility & IVF healthcare platform built with PHP, Laravel, Blade, JavaScript, and MySQL, featuring doctor profiles, IVF & infertility treatment pages, patient reviews, blog CMS, appointment booking, and a dedicated Admin Panel.',
      contributions: [
        'Developed the full-stack Laravel web application and Admin Panel for managing services, doctors, blogs, and reviews.',
        'Built "Get Appointment" enquiry & booking workflows with server-side validation and MySQL persistence.',
        'Implemented responsive UI, AJAX form interactions, SEO-friendly dynamic routes, and quick Call/WhatsApp actions.',
      ],
      technologies: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'jQuery & AJAX', 'MySQL', 'Admin Panel'],
      image: 'images/ferticore-ivf.jpg',
      liveUrl: 'https://www.fcicenter.com/',
      hasLiveSite: true,
    },
    {
      number: '03',
      title: 'Care Rare India',
      category: 'Core PHP • NGO & Charity Web Platform',
      description:
        'A full-featured nonprofit and charity web platform built purely with Core PHP, MySQL, HTML5, CSS3, JavaScript, and AJAX—supporting awareness programs, resource centres, keyword search, volunteer registration, and donation enquiry flows.',
      contributions: [
        'Engineered the complete backend and dynamic page templates using Core PHP without external frameworks.',
        'Built "Donate Now", program showcase, resource centre, keyword search, and contact/join workflows.',
        'Implemented WhatsApp chat integration, responsive UI layouts, and clean server-side form handling.',
      ],
      technologies: ['Core PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'jQuery & AJAX'],
      image: 'images/care-rare-india.jpg',
      liveUrl: 'https://carerareindia.org/',
      hasLiveSite: true,
    },
    {
      number: '04',
      title: 'PortraitCulture Studio',
      category: 'HTML5 • CSS3 • JavaScript',
      description:
        'A luxury portrait photography studio website crafted purely with semantic HTML5, modern CSS3, and vanilla JavaScript—showcasing business headshots, executive portfolios, customized family wall art, interactive gallery sliders, and consultation booking CTAs.',
      contributions: [
        'Developed the responsive, editorial layout purely using custom HTML5, CSS3, and JavaScript.',
        'Built smooth hero carousel controls, gallery showcases, and mobile-first navigation menus.',
        'Optimized image presentation, typography hierarchy, and consultation call-to-action flows.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      image: 'images/portrait-culture.jpg',
      liveUrl: 'https://portraitculture.com/',
      hasLiveSite: true,
    },
    {
      number: '05',
      title: 'Multi-Vendor E-Commerce Platform',
      category: 'PHP • Laravel • Blade & AJAX',
      description:
        'A full-featured marketplace built with PHP, Laravel, Blade, jQuery/AJAX, and MySQL supporting independent seller storefronts, cart & checkout, coupon engines, and role-based admin panels.',
      contributions: [
        'Architected multi-vendor product catalog, SKU variants, and inventory management in MySQL.',
        'Built AJAX-powered live product filtering, cart updates, and server-side form validations.',
        'Implemented authentication systems and role & permission management for sellers and admins.',
      ],
      technologies: ['PHP', 'Laravel', 'Blade', 'MySQL', 'jQuery & AJAX', 'REST APIs'],
      mockup: {
        header: 'store.saurav.dev/admin/orders',
        kpi1: { label: 'Monthly GMV', val: '₹18.4L' },
        kpi2: { label: 'Active Vendors', val: '128' },
        kpi3: { label: 'API Status', val: '99.9%' },
        rows: ['ORD-9042 • Paid via UPI • Dispatched', 'ORD-9041 • Payment Verified • Packed', 'ORD-9040 • Vendor Payout Settled'],
      },
    },
    {
      number: '06',
      title: 'Enterprise Invoice & Payroll System',
      category: 'Admin Panel • CRUD & Billing',
      description:
        'Automated payroll, attendance, tax calculation, and client invoicing platform engineered with Laravel, Eloquent ORM, MySQL, and interactive Blade/jQuery dashboards.',
      contributions: [
        'Designed optimized relational MySQL schemas for salary structures, deductions, and invoices.',
        'Built modular CRUD modules, automated monthly salary processing, and PDF payslip exports.',
        'Configured role & permission management for HR managers, finance teams, and employees.',
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'jQuery & AJAX', 'JavaScript'],
      mockup: {
        header: 'payroll.enterprise.local/dashboard',
        kpi1: { label: 'Employees', val: '340' },
        kpi2: { label: 'Cycle Status', val: 'Cleared' },
        kpi3: { label: 'Invoices Sent', val: '1,210' },
        rows: ['Payroll Run #2026-11 • 340 Payslips Ready', 'GST Invoice #INV-448 • ₹1,45,000 Paid', 'Tax Summary Exported (CSV / PDF)'],
      },
    },
    {
      number: '07',
      title: 'CRM & REST API Automation Hub',
      category: 'Laravel • Node.js • REST APIs',
      description:
        'A custom client relationship management platform featuring lead pipelines, automated follow-up webhooks, activity logs, and secure REST APIs powered by Laravel & Node.js.',
      contributions: [
        'Built RESTful API endpoints with token authentication and third-party API integrations.',
        'Implemented interactive lead stages with JavaScript, jQuery, AJAX, and strict validation.',
        'Optimized MySQL queries and dashboard reporting metrics for fast daily operations.',
      ],
      technologies: ['Laravel', 'Node.js', 'REST APIs', 'MySQL', 'JavaScript', 'jQuery & AJAX'],
      mockup: {
        header: 'crm.saurav.dev/pipeline',
        kpi1: { label: 'Pipeline Value', val: '₹42.8L' },
        kpi2: { label: 'Conversion', val: '31.4%' },
        kpi3: { label: 'API Latency', val: '38ms' },
        rows: ['Stage: Qualified • Acme Logistics (₹4.5L)', 'Webhook: Lead Synced via REST API', 'Daily Follow-up Tasks Updated'],
      },
    },
  ];

  const caseStudies = [
    {
      id: '01',
      badge: 'LARAVEL & NODE.JS BACKEND',
      phase: 'CASE STUDY 01 // CRM & REST APIS',
      title: 'Multi-Role Laravel CRM',
      highlight: 'Unified lead pipeline, role & permission management, and REST APIs.',
      description:
        'Designed and delivered a scalable CRM allowing teams to manage leads, assign executives, enforce role-based access control, and monitor conversions in real time.',
      contributions: [
        'Structured clean Eloquent models, authentication middleware, and RBAC permission guards.',
        'Built RESTful APIs integrating Laravel backend workflows with Node.js webhook services.',
        'Improved dashboard load speeds using indexed MySQL queries and AJAX partial updates.',
      ],
      tags: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'REST APIs', 'jQuery & AJAX'],
      metrics: [
        { label: 'Response Time', value: '< 45ms Avg' },
        { label: 'Architecture', value: 'Laravel MVC' },
        { label: 'Security', value: 'Auth + RBAC' },
      ],
      urlLabel: 'crm.saurav.dev',
    },
    {
      id: '02',
      badge: 'E-COMMERCE & ADMIN PANEL',
      phase: 'CASE STUDY 02 // MARKETPLACE CORE',
      title: 'Multi-Vendor Checkout Core',
      highlight: 'Vendor dashboards, inventory control, and interactive Blade + AJAX UX.',
      description:
        'Built an end-to-end marketplace backend handling concurrent checkouts, dynamic pricing rules, order tracking, and role-based vendor administration.',
      contributions: [
        'Used database transactions and validated CRUD workflows for reliable order management.',
        'Integrated external payment & notification APIs with structured webhook handling.',
        'Delivered smooth product filtering and cart updates using Blade, JavaScript, and jQuery AJAX.',
      ],
      tags: ['PHP', 'Laravel', 'Blade', 'MySQL', 'JavaScript', 'jQuery & AJAX'],
      metrics: [
        { label: 'Transactions', value: 'ACID Safe' },
        { label: 'Frontend', value: 'Blade + AJAX' },
        { label: 'Scale', value: '120+ Vendors' },
      ],
      urlLabel: 'store.saurav.dev',
    },
    {
      id: '03',
      badge: 'ENTERPRISE HR & BILLING',
      phase: 'CASE STUDY 03 // PAYROLL & API',
      title: 'Automated Payroll & Billing',
      highlight: 'Automated monthly salary runs, invoicing, and secure role-based access.',
      description:
        'Engineered a high-reliability HR & billing platform streamlining attendance import, salary calculation, PDF payslips, and client invoice tracking.',
      contributions: [
        'Built modular CRUD operations, server-side form validations, and automated PDF exports.',
        'Implemented granular role & permission controls for HR, Finance, and Admin users.',
        'Exposed clean JSON REST APIs documented via Postman for seamless external integration.',
      ],
      tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Blade', 'jQuery'],
      metrics: [
        { label: 'Modules', value: 'Modular CRUD' },
        { label: 'Security', value: 'Role Based' },
        { label: 'Output', value: 'GST + PDF Ready' },
      ],
      urlLabel: 'payroll.saurav.dev',
    },
  ];

  // ------------------------------------------------------------------------
  // 2. Render Dual-Row Marquee Cards
  // ------------------------------------------------------------------------
  function createMarqueeCard(item) {
    const innerVisual = item.image
      ? `<img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover object-top pointer-events-none group-hover:scale-105 transition-transform duration-500" />`
      : `<div class="w-full h-full bg-gradient-to-br ${item.accent} mockup-grid-bg p-5 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
            </div>
            <span class="px-2.5 py-0.5 rounded-full border border-white/15 bg-black/40 text-[10px] font-mono text-purple-300 tracking-wider">
              ${item.badge}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-2.5 my-auto opacity-85">
            <div class="rounded-xl bg-black/40 border border-white/10 p-3">
              <div class="text-[10px] font-mono text-[#D7E2EA]/50 uppercase">Metric 01</div>
              <div class="text-xs sm:text-sm font-semibold text-white mt-0.5">${item.metrics[0]}</div>
            </div>
            <div class="rounded-xl bg-black/40 border border-white/10 p-3">
              <div class="text-[10px] font-mono text-[#D7E2EA]/50 uppercase">Status</div>
              <div class="text-xs sm:text-sm font-semibold text-purple-300 mt-0.5">${item.metrics[1]}</div>
            </div>
          </div>
          <div class="h-10"></div>
        </div>`;

    return `
      <div class="group relative w-[260px] sm:w-[420px] h-[175px] sm:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-xl">
        ${innerVisual}
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
          <span class="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-purple-400 font-semibold">${item.category}</span>
          <h4 class="text-white font-bold uppercase tracking-tight text-sm sm:text-lg">${item.title}</h4>
        </div>
      </div>
    `;
  }

  const row1El = document.getElementById('marquee-row-1');
  const row2El = document.getElementById('marquee-row-2');
  if (row1El && row2El) {
    const row1Items = [...marqueeProjects, ...marqueeProjects, ...marqueeProjects];
    const reversed = marqueeProjects.slice().reverse();
    const row2Items = [...reversed, ...reversed, ...reversed];
    row1El.innerHTML = row1Items.map(createMarqueeCard).join('');
    row2El.innerHTML = row2Items.map(createMarqueeCard).join('');
  }

  // ------------------------------------------------------------------------
  // 3. Render Selected Projects (Sticky Stacking Cards)
  // ------------------------------------------------------------------------
  const projectsStackEl = document.getElementById('projects-stack');
  if (projectsStackEl) {
    projectsStackEl.innerHTML = selectedProjects
      .map((project, index) => {
        const topOffset = index * (window.innerWidth < 640 ? 10 : 20);
        const contribsHtml = project.contributions
          .map(
            (c) => `
            <li class="flex items-start gap-1.5 text-[11px] sm:text-xs text-[#D7E2EA]/75 leading-snug">
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <span>${c}</span>
            </li>`
          )
          .join('');

        const techHtml = project.technologies
          .map(
            (t) =>
              `<span class="px-2 sm:px-2.5 py-0.5 rounded-md border border-white/10 bg-white/5 text-[10px] sm:text-[11px] font-mono text-[#D7E2EA]">${t}</span>`
          )
          .join('');

        const headerActionHtml = project.hasLiveSite
          ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-block no-underline">
              <button type="button" class="pill-outline-btn group rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 py-2 sm:px-8 sm:py-3 text-[11px] sm:text-sm hover:bg-[#D7E2EA]/10 flex items-center justify-center gap-2 cursor-pointer select-none">
                <span>Live Project</span>
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </button>
            </a>`
          : `<a href="#contact" class="inline-block no-underline">
              <button type="button" class="pill-outline-btn group rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 py-2 sm:px-8 sm:py-3 text-[11px] sm:text-sm hover:bg-[#D7E2EA]/10 flex items-center justify-center gap-2 cursor-pointer select-none">
                <span>Request Demo</span>
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </button>
            </a>`;

        const previewHtml = project.image
          ? `<div class="lg:col-span-7 h-[155px] sm:h-[300px] md:h-[360px] rounded-[18px] sm:rounded-[36px] overflow-hidden border border-white/15 bg-[#141414] shadow-xl group relative">
              <img src="${project.image}" alt="${project.title}" loading="lazy" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              ${
                project.hasLiveSite
                  ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider hover:bg-purple-600 transition-colors">Visit Site ↗</a>`
                  : ''
              }
            </div>`
          : (() => {
              const rowsHtml = project.mockup.rows
                .map(
                  (r) => `
                  <div class="flex items-center justify-between px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-mono text-[#D7E2EA]/80 gap-2">
                    <span class="truncate">${r}</span>
                    <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                  </div>`
                )
                .join('');

              return `<div class="lg:col-span-7 h-[175px] sm:h-[300px] md:h-[360px] rounded-[18px] sm:rounded-[36px] overflow-hidden border border-white/15 bg-[#141414] shadow-xl group relative p-3 sm:p-6 flex flex-col justify-between mockup-grid-bg">
                  <div class="flex items-center justify-between border-b border-white/10 pb-2 sm:pb-3 gap-2">
                    <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500"></span>
                      <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400"></span>
                      <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <span class="text-[9px] sm:text-xs font-mono text-[#D7E2EA]/60 bg-black/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10 truncate max-w-[170px] sm:max-w-none">
                      ${project.mockup.header}
                    </span>
                  </div>

                  <div class="grid grid-cols-3 gap-1.5 sm:gap-2.5 my-1.5 sm:my-3">
                    <div class="rounded-lg sm:rounded-xl bg-black/50 border border-white/10 p-1.5 sm:p-3">
                      <span class="text-[8px] sm:text-[10px] font-mono uppercase text-[#D7E2EA]/50 block truncate">${project.mockup.kpi1.label}</span>
                      <span class="text-[11px] sm:text-lg font-bold text-white">${project.mockup.kpi1.val}</span>
                    </div>
                    <div class="rounded-lg sm:rounded-xl bg-black/50 border border-purple-500/30 p-1.5 sm:p-3">
                      <span class="text-[8px] sm:text-[10px] font-mono uppercase text-[#D7E2EA]/50 block truncate">${project.mockup.kpi2.label}</span>
                      <span class="text-[11px] sm:text-lg font-bold text-purple-300">${project.mockup.kpi2.val}</span>
                    </div>
                    <div class="rounded-lg sm:rounded-xl bg-black/50 border border-white/10 p-1.5 sm:p-3">
                      <span class="text-[8px] sm:text-[10px] font-mono uppercase text-[#D7E2EA]/50 block truncate">${project.mockup.kpi3.label}</span>
                      <span class="text-[11px] sm:text-lg font-bold text-emerald-400">${project.mockup.kpi3.val}</span>
                    </div>
                  </div>

                  <div class="space-y-1 sm:space-y-2 group-hover:translate-y-[-2px] transition-transform duration-500">
                    ${rowsHtml}
                  </div>
                </div>`;
            })();

        return `
          <div class="sticky h-[88svh] sm:h-[88vh] min-h-[540px] sm:min-h-[600px] flex items-start justify-center" style="top: calc(${topOffset}px + clamp(1.25rem, 5vw, 5.5rem));">
            <div class="stack-card-inner w-full max-w-6xl rounded-[24px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3.5 sm:p-6 md:p-8 shadow-[0_-15px_50px_rgba(0,0,0,0.95)] flex flex-col gap-3 sm:gap-6" data-stack-index="${index}">
              <!-- Card Header -->
              <div class="flex flex-wrap items-center justify-between gap-2 sm:gap-4 border-b border-[#D7E2EA]/15 pb-2.5 sm:pb-4">
                <div class="flex items-center gap-3 sm:gap-6 min-w-0">
                  <span class="font-black text-[#D7E2EA] text-[clamp(1.6rem,5vw,80px)] leading-none select-none shrink-0">${project.number}</span>
                  <div class="flex flex-col min-w-0">
                    <span class="text-[9px] sm:text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold truncate">${project.category}</span>
                    <h3 class="font-bold uppercase text-sm sm:text-xl md:text-2xl text-[#D7E2EA] tracking-wide truncate">${project.title}</h3>
                  </div>
                </div>
                <div class="flex items-center gap-2 sm:gap-3 shrink-0">
                  ${headerActionHtml}
                </div>
              </div>

              <!-- Card Body -->
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 flex-1 min-h-0 items-center">
                <div class="lg:col-span-5 flex flex-col justify-between h-full gap-2 sm:gap-3 py-0.5 sm:py-1">
                  <p class="text-[#D7E2EA]/80 text-[11px] sm:text-sm font-light leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">${project.description}</p>
                  <div class="flex flex-col gap-1 sm:gap-1.5 pt-1 border-t border-white/10">
                    <span class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-purple-400 font-semibold">Key Contributions:</span>
                    <ul class="space-y-0.5 sm:space-y-1">${contribsHtml}</ul>
                  </div>
                  <div class="flex flex-wrap gap-1 sm:gap-1.5 pt-1 sm:pt-2">${techHtml}</div>
                </div>

                <!-- Project Preview -->
                ${previewHtml}
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // ------------------------------------------------------------------------
  // 4. Render Horizontal Case Studies
  // ------------------------------------------------------------------------
  const caseTrackEl = document.getElementById('case-track');
  if (caseTrackEl) {
    caseTrackEl.innerHTML = caseStudies
      .map((cs) => {
        const contribsHtml = cs.contributions
          .map(
            (c) => `
            <li class="flex items-start gap-1.5 text-xs text-[#D7E2EA]/75">
              <svg class="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <span>${c}</span>
            </li>`
          )
          .join('');

        const tagsHtml = cs.tags
          .map(
            (t) =>
              `<span class="px-2.5 py-0.5 rounded-md border border-white/10 bg-white/5 text-[11px] font-mono text-[#D7E2EA]">${t}</span>`
          )
          .join('');

        const metricsHtml = cs.metrics
          .map(
            (m) => `
            <div class="flex flex-col">
              <span class="text-[10px] uppercase tracking-wider text-[#D7E2EA]/50 font-mono">${m.label}</span>
              <span class="text-xs sm:text-sm font-semibold text-white tracking-tight mt-0.5">${m.value}</span>
            </div>`
          )
          .join('');

        const ctaBtn =
          cs.id === '03'
            ? `<a href="#contact" class="inline-block no-underline">
                <button type="button" class="cta-gradient-btn rounded-full px-6 py-2.5 text-xs text-white font-medium uppercase tracking-widest cursor-pointer select-none">Contact Me</button>
              </a>`
            : '';

        return `
          <div class="w-screen h-full flex-shrink-0 px-4 sm:px-12 md:px-20 flex items-center relative select-none">
            <span class="absolute right-4 sm:right-16 bottom-2 sm:bottom-0 font-black text-[22vw] leading-none text-white/[0.03] select-none pointer-events-none">${cs.id}</span>
            <div class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-14 items-center z-10">
              <div class="lg:col-span-7 flex flex-col justify-center gap-2.5 sm:gap-4">
                <div class="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span class="px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">${cs.badge}</span>
                  <span class="text-[10px] sm:text-sm font-mono uppercase tracking-widest text-[#D7E2EA]/50">${cs.phase}</span>
                </div>
                <h3 class="hero-heading font-black uppercase text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05]">${cs.title}</h3>
                <p class="text-white text-xs sm:text-base md:text-lg font-medium tracking-wide">${cs.highlight}</p>
                <p class="text-[#D7E2EA]/70 text-[11px] sm:text-sm font-light leading-snug sm:leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none">${cs.description}</p>
                <div class="flex flex-col gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                  <span class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-purple-400 font-semibold">Key Highlights &amp; Contributions:</span>
                  <ul class="space-y-0.5 sm:space-y-1">${contribsHtml}</ul>
                </div>
                <div class="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">${tagsHtml}</div>
                <div class="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-2 sm:pt-3 border-t border-white/10 max-w-xl">
                  <div class="flex flex-wrap items-center gap-4 sm:gap-6">${metricsHtml}</div>
                  <div class="flex items-center gap-2 sm:gap-3">
                    <a href="#contact" class="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-500/40 bg-purple-500/10 text-white text-[11px] sm:text-xs font-mono uppercase tracking-wider hover:bg-purple-600 transition-colors">
                      <span>Case Study</span>
                    </a>
                    ${ctaBtn}
                  </div>
                </div>
              </div>

              <div class="lg:col-span-5 hidden lg:flex justify-center items-center">
                <div class="relative w-full max-w-[440px] aspect-square max-h-[420px] rounded-[44px] overflow-hidden border border-white/15 bg-[#141414] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group p-6 flex flex-col justify-between mockup-grid-bg">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono text-purple-300 uppercase tracking-widest">${cs.urlLabel}</span>
                    <span class="text-xs font-black px-2.5 py-1 rounded-full bg-white/15 text-white tracking-widest">${cs.id} / 03</span>
                  </div>

                  <div class="my-auto rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs space-y-2">
                    <div class="text-purple-400">// Laravel Production Architecture</div>
                    <div class="text-[#D7E2EA]/80">Route::middleware(['auth:sanctum', 'role:admin'])</div>
                    <div class="text-emerald-400 pl-3">-&gt;group(fn () =&gt; ApiController::class);</div>
                    <div class="pt-2 border-t border-white/10 flex justify-between text-[11px] text-[#D7E2EA]/60">
                      <span>Cache: Redis</span>
                      <span>DB: MySQL 8</span>
                      <span>PHP 8.3</span>
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/75">
                    <span>Production Architecture</span>
                    <span class="text-purple-400">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // ------------------------------------------------------------------------
  // 5. Character-by-Character Bio Setup
  // ------------------------------------------------------------------------
  const aboutTextEl = document.getElementById('about-reveal-text');
  const charSpans = [];
  if (aboutTextEl) {
    const rawText = aboutTextEl.getAttribute('data-text') || '';
    const words = rawText.split(' ');
    const fragment = document.createDocumentFragment();

    words.forEach((word) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'inline-block whitespace-nowrap mr-[0.3em]';
      for (const ch of word) {
        const chSpan = document.createElement('span');
        chSpan.className = 'char-reveal-span';
        chSpan.textContent = ch;
        if (prefersReducedMotion) chSpan.style.opacity = '1';
        wordSpan.appendChild(chSpan);
        charSpans.push(chSpan);
      }
      fragment.appendChild(wordSpan);
    });
    aboutTextEl.appendChild(fragment);
  }

  // ------------------------------------------------------------------------
  // 6. Scroll Reveal Observer (.reveal-el)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-el');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // ------------------------------------------------------------------------
  // 7. Hero Magnetic Centerpiece Tracking
  // ------------------------------------------------------------------------
  const magnetEl = document.getElementById('hero-magnet');
  if (magnetEl && !prefersReducedMotion) {
    const padding = 150;
    const strength = 3.2;

    window.addEventListener(
      'mousemove',
      (e) => {
        const rect = magnetEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        if (
          e.clientX >= rect.left - padding &&
          e.clientX <= rect.right + padding &&
          e.clientY >= rect.top - padding &&
          e.clientY <= rect.bottom + padding
        ) {
          const dx = (e.clientX - cx) / strength;
          const dy = (e.clientY - cy) / strength;
          magnetEl.style.transition = 'transform 0.3s ease-out';
          magnetEl.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        } else {
          magnetEl.style.transition = 'transform 0.6s ease-in-out';
          magnetEl.style.transform = 'translate3d(0px, 0px, 0)';
        }
      },
      { passive: true }
    );

    document.addEventListener('mouseleave', () => {
      magnetEl.style.transition = 'transform 0.6s ease-in-out';
      magnetEl.style.transform = 'translate3d(0px, 0px, 0)';
    });
  }

  // ------------------------------------------------------------------------
  // 8. Cursor Flair Effect (Below #about Section)
  // ------------------------------------------------------------------------
  const flairLayer = document.getElementById('cursor-flair-layer');
  const aboutSection = document.getElementById('about');
  if (
    flairLayer &&
    aboutSection &&
    !prefersReducedMotion &&
    window.matchMedia('(pointer: fine)').matches
  ) {
    const flairTokens = [
      { content: '✦', color: 'text-purple-300 bg-purple-400/10 border-purple-300/30' },
      { content: '</>', color: 'text-cyan-200 bg-cyan-400/10 border-cyan-200/30' },
      { content: '{ }', color: 'text-[#D7E2EA] bg-white/10 border-white/30' },
      { content: '<?=', color: 'text-fuchsia-200 bg-fuchsia-400/10 border-fuchsia-200/30' },
      { content: '=>', color: 'text-amber-200 bg-amber-400/10 border-amber-200/30' },
    ];

    const pool = Array.from({ length: 10 }, (_, idx) => {
      const token = flairTokens[idx % flairTokens.length];
      const span = document.createElement('span');
      span.className = `about-cursor-flair ${token.color}`;
      span.textContent = token.content;
      flairLayer.appendChild(span);
      return span;
    });

    let lastX = 0;
    let lastY = 0;
    let active = false;
    let cursorIdx = 0;

    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      if (e.clientY < aboutSection.getBoundingClientRect().top) {
        active = false;
        return;
      }
      if (active && Math.hypot(e.clientX - lastX, e.clientY - lastY) < 85) return;

      lastX = e.clientX;
      lastY = e.clientY;
      active = true;

      const node = pool[cursorIdx % pool.length];
      node.style.left = `${e.clientX}px`;
      node.style.top = `${e.clientY}px`;
      node.style.setProperty('--flair-rotation', `${Math.random() * 720 - 360}deg`);
      node.style.animation = 'none';
      void node.offsetWidth; // trigger reflow
      node.style.animation = 'about-flair 1050ms both';
      cursorIdx += 1;
    });
  }

  // ------------------------------------------------------------------------
  // 9. Scroll-Driven Animations Loop (Marquee, Bio Reveal, Stack Cards, Case Study)
  // ------------------------------------------------------------------------
  const marqueeSection = document.getElementById('marquee-showcase');
  const projectsSection = document.getElementById('projects');
  const stackCards = Array.from(document.querySelectorAll('.stack-card-inner'));
  const caseSection = document.getElementById('case-study');
  const caseSlideNum = document.getElementById('case-slide-num');
  const caseProgressBar = document.getElementById('case-progress-bar');

  let ticking = false;

  function onScrollUpdate() {
    ticking = false;
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const scrollY = window.scrollY;

    // A) Dual-row Marquee
    if (marqueeSection && row1El && row2El && !prefersReducedMotion) {
      const rect = marqueeSection.getBoundingClientRect();
      const topAbs = rect.top + scrollY;
      const speed = vw < 640 ? 0.14 : 0.28;
      const baseShift = vw < 640 ? 60 : 180;
      const offset = (scrollY - topAbs + vh) * speed;
      row1El.style.transform = `translateX(${offset - baseShift}px)`;
      row2El.style.transform = `translateX(${-(offset - baseShift)}px)`;
    }

    // B) Character-by-character About Bio Reveal
    if (aboutTextEl && charSpans.length && !prefersReducedMotion) {
      const rect = aboutTextEl.getBoundingClientRect();
      const totalTravel = vh * 0.7 + rect.height;
      const progress = clamp((vh - rect.top) / totalTravel, 0, 1);
      const totalChars = charSpans.length;
      for (let i = 0; i < totalChars; i++) {
        const start = i / totalChars;
        const end = Math.min(1, start + 0.08);
        const op = progress <= start ? 0.2 : progress >= end ? 1 : 0.2 + ((progress - start) / (end - start)) * 0.8;
        charSpans[i].style.opacity = op.toFixed(2);
      }
    }

    // C) Selected Projects Sticky Stack Subtle Scale (All viewports)
    if (projectsSection && stackCards.length && !prefersReducedMotion) {
      const rect = projectsSection.getBoundingClientRect();
      const scrollable = Math.max(1, projectsSection.offsetHeight - vh);
      const progress = clamp(-rect.top / scrollable, 0, 1);
      const total = stackCards.length;
      stackCards.forEach((card, i) => {
        const targetScale = 1 - (total - 1 - i) * 0.02;
        const start = (i / total) * 0.85;
        const localP = clamp((progress - start) / (1 - start), 0, 1);
        const scale = 1 - (1 - targetScale) * localP;
        card.style.transform = `scale(${scale.toFixed(4)})`;
      });
    }

    // D) Horizontal Case Studies Track (All viewports)
    if (caseSection && caseTrackEl) {
      const rect = caseSection.getBoundingClientRect();
      const scrollable = Math.max(1, caseSection.offsetHeight - vh);
      const progress = clamp(-rect.top / scrollable, 0, 1);
      caseTrackEl.style.transform = `translate3d(${-progress * 200}vw, 0, 0)`;
      if (caseProgressBar) {
        caseProgressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
      }
      if (caseSlideNum) {
        const slide = progress < 0.35 ? '01' : progress < 0.7 ? '02' : '03';
        if (caseSlideNum.textContent !== slide) caseSlideNum.textContent = slide;
      }
    }
  }

  function requestTick() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScrollUpdate);
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  onScrollUpdate();

  // ------------------------------------------------------------------------
  // 10. Light / Dark Theme Toggle, Back to Top & Dynamic Copyright Year
  // ------------------------------------------------------------------------
  const themeBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const themeLabel = document.getElementById('theme-toggle-label');

  function applyTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    if (sunIcon && moonIcon && themeLabel) {
      if (next === 'light') {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        themeLabel.textContent = 'Dark';
      } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        themeLabel.textContent = 'Light';
      }
    }
  }

  applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // ------------------------------------------------------------------------
  // 11. Ambient Floating PHP & Laravel Keywords in Background Air
  // ------------------------------------------------------------------------
  const ambientLayer = document.getElementById('ambient-keyword-layer');
  if (ambientLayer) {
    const keywords = [
      'PHP 8+',
      'Laravel',
      '<?php',
      'Eloquent ORM',
      'php artisan',
      'Route::get()',
      'Blade',
      'MySQL',
      'REST API',
      'Node.js',
      'jQuery & AJAX',
      'Middleware',
      'Controller',
      'Composer',
      'Sanctum',
      '@extends',
    ];

    const frag = document.createDocumentFragment();
    keywords.forEach((word, i) => {
      const el = document.createElement('span');
      el.className = 'ambient-keyword text-[10px] sm:text-xs';
      el.textContent = word;

      const leftPct = ((i * 17 + 4) % 86) + 3;
      const duration = 16 + (i % 5) * 3;
      const delay = -((i * 2.1) % duration);
      const sway = (i % 2 === 0 ? 1 : -1) * (16 + (i % 4) * 10);
      const opacity = 0.44 + (i % 3) * 0.08;

      el.style.left = `${leftPct}%`;
      el.style.setProperty('--kw-duration', `${duration}s`);
      el.style.setProperty('--kw-delay', `${delay.toFixed(1)}s`);
      el.style.setProperty('--kw-sway', `${sway}px`);
      el.style.setProperty('--kw-opacity', opacity.toFixed(2));
      el.style.setProperty('--kw-rot-start', `${(i % 2 === 0 ? -1 : 1) * 4}deg`);
      el.style.setProperty('--kw-rot-mid', `${(i % 2 === 0 ? 1 : -1) * 5}deg`);
      el.style.setProperty('--kw-rot-end', `${(i % 2 === 0 ? -1 : 1) * 3}deg`);

      if (prefersReducedMotion) {
        el.style.bottom = `${10 + ((i * 13) % 80)}%`;
      }
      frag.appendChild(el);
    });
    ambientLayer.appendChild(frag);
  }
})();
