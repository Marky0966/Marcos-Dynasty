(() => {
  'use strict';


  const PEOPLE = {
    mariano: {
      name: 'Mariano Marcos',
      ini: 'MM',
      role: 'Kinatawan ng Ilocos Norte',
      trole: 'Kinatawan, Ilocos Norte',
      years: 'Pumanaw noong 1945',
      relation: 'Ama ni Ferdinand Sr. · Ugat ng pamilya',
      status: 'former',
      first: 'Kinatawan ng Ilocos Norte (2nd District), 1925–1931',
      facts: [
        'Asawa ni Josefa Edralin',
        'Ama nina Ferdinand Sr., Pacifico, Elizabeth, at Fortuna',
        'Ang puwesto niya sa Kongreso ay kalaunang hinawakan ng anak na si Ferdinand Sr.'
      ]
    },
    josefa: {
      name: 'Josefa Edralin Marcos',
      ini: 'JM',
      role: 'Ina ni Ferdinand Sr.',
      trole: 'Ina ni Ferdinand Sr.',
      years: '',
      relation: 'Asawa ni Mariano Marcos · Ugat ng pamilya',
      status: 'private',
      facts: [
        'Asawa ni Mariano Marcos',
        'Nagtapos sa Philippine Normal School',
        'Ina nina Ferdinand Sr., Pacifico, Elizabeth, at Fortuna'
      ]
    },
    ferdinand: {
      name: 'Ferdinand E. Marcos Sr.',
      ini: 'FM',
      role: 'Ika-10 Pangulo ng Pilipinas',
      years: '1917 – 1989',
      relation: 'Asawa ni Imelda Romualdez Marcos · Patriarka',
      status: 'former',
      trole: 'Ika-10 Pangulo',
      first: 'Kinatawan ng Ilocos Norte (2nd District), 1949 — ang dating puwesto ng kanyang ama',
      photo: 'images/ferdinand-marcos-sr.jpg',
      fit: { fx: 0.57, fy: 0.25, fw: 0.25, z: 1.6 },
      facts: [
        'Pangulo ng Pilipinas mula 1965 hanggang 1986',
        'Nagdeklara ng Batas Militar noong Setyembre 1972',
        'Napatalsik sa People Power Revolution noong Pebrero 1986'
      ]
    },
    imelda: {
      name: 'Imelda Romualdez Marcos',
      ini: 'IM',
      role: 'Dating Unang Ginang',
      years: 'Isinilang noong 1929',
      relation: 'Asawa ni Ferdinand Sr.',
      status: 'former',
      trole: 'Dating Unang Ginang',
      first: 'Unang Ginang ng Pilipinas, 1965 (Gobernador ng Metro Manila, 1975)',
      photo: 'images/imelda-marcos.jpg',
      fit: { fx: 0.52, fy: 0.64, fw: 0.45 },
      facts: [
        'Unang Ginang ng Pilipinas, 1965–1986',
        'Gobernador ng Metro Manila, 1975–1986',
        'Kinatawan ng Ilocos Norte (2nd District), 2010–2019'
      ]
    },
    imee: {
      name: 'Imee Marcos',
      ini: 'IM',
      role: 'Senador',
      years: 'Isinilang noong 1955',
      relation: 'Anak nina Ferdinand Sr. at Imelda',
      status: 'active',
      trole: 'Senador',
      first: 'Kinatawan ng Ilocos Norte (2nd District), 1998',
      photo: 'images/imee-marcos.jpg',
      fit: { fx: 0.5, fy: 0.47, fw: 0.49 },
      facts: [
        'Kinatawan ng Ilocos Norte (2nd District), 1998–2007',
        'Gobernador ng Ilocos Norte, 2010–2019',
        'Senador ng Pilipinas mula 2019'
      ]
    },
    bongbong: {
      name: 'Ferdinand “Bongbong” Marcos Jr.',
      ini: 'BM',
      role: 'Ika-17 Pangulo ng Pilipinas',
      years: 'Isinilang noong 1957',
      relation: 'Anak nina Ferdinand Sr. at Imelda',
      status: 'active',
      tname: 'Bongbong Marcos',
      trole: 'Ika-17 Pangulo',
      first: 'Bise Gobernador ng Ilocos Norte, 1980',
      photo: 'images/bongbong-marcos.jpg',
      fit: { fx: 0.5, fy: 0.38, fw: 0.48 },
      facts: [
        'Pangulo ng Pilipinas mula Hunyo 30, 2022',
        'Nanalo noong 2022 na may mahigit 31 milyong boto',
        'Dating Gobernador ng Ilocos Norte, Kinatawan, at Senador (2010–2016)'
      ]
    },
    liza: {
      name: 'Louise “Liza” Araneta Marcos',
      ini: 'LM',
      role: 'Unang Ginang',
      years: '',
      relation: 'Asawa ni Pangulong Bongbong Marcos',
      status: 'active',
      tname: 'Liza Araneta Marcos',
      trole: 'Unang Ginang',
      first: 'Unang Ginang ng Pilipinas, 2022',
      photo: 'images/liza-marcos.jpg',
      fit: { fx: 0.49, fy: 0.34, fw: 0.23 },
      facts: [
        'Unang Ginang ng Pilipinas mula 2022',
        'Abogada ayon sa propesyon'
      ]
    },
    irene: {
      name: 'Irene Marcos Araneta',
      ini: 'IA',
      role: 'Walang posisyon sa gobyerno',
      years: 'Isinilang noong 1960',
      relation: 'Anak nina Ferdinand Sr. at Imelda',
      status: 'private',
      trole: 'Walang posisyon',
      photo: 'images/irene-marcos.jpg',
      fit: { fx: 0.54, fy: 0.45, fw: 0.37 },
      facts: [
        'Isa sa mga anak nina Ferdinand Sr. at Imelda',
        'Walang hawak na posisyon sa gobyerno'
      ]
    },
    tommy: {
      name: 'Tommy Manotoc',
      ini: 'TM',
      role: 'Dating basketball coach',
      years: '',
      relation: 'Asawa ni Sen. Imee Marcos',
      status: 'private',
      trole: 'Dating coach',
      facts: [
        'Golfer at dating propesyonal na basketball coach',
        'Ama nina Borgy, Mike, at Matthew Manotoc',
        'Hiwalay na kay Imee Marcos (legal separation, hindi annulled)'
      ]
    },
    greggy: {
      name: 'Greggy Araneta',
      ini: 'GA',
      role: 'Asawa ni Irene Marcos',
      years: '',
      relation: 'Asawa ni Irene Marcos Araneta',
      status: 'private',
      trole: 'Asawa ni Irene',
      facts: [
        'Asawa ni Irene Marcos Araneta',
        'Ama nina Alfonso at Luis'
      ]
    },
    matthew: {
      name: 'Matthew Manotoc',
      ini: 'MM',
      role: 'Bise Gobernador, Ilocos Norte',
      years: 'Isinilang noong 1988',
      relation: 'Anak ni Sen. Imee Marcos',
      status: 'active',
      trole: 'Bise Gobernador',
      first: 'Gobernador ng Ilocos Norte, 2019',
      photo: 'images/matthew-manotoc.jpg',
      fit: { fx: 0.5, fy: 0.39, fw: 0.46 },
      facts: [
        'Gobernador ng Ilocos Norte, 2019–2025',
        'Bise Gobernador ng Ilocos Norte mula 2025',
        'Humalili sa kanyang ina bilang gobernador noong 2019'
      ]
    },
    sandro: {
      name: 'Sandro Marcos',
      ini: 'SM',
      role: 'Kinatawan, Ilocos Norte (1st District)',
      years: 'Isinilang noong 1994',
      relation: 'Anak ni Pangulong Bongbong Marcos',
      status: 'active',
      trole: 'Kinatawan, Ilocos Norte',
      first: 'Kinatawan ng Ilocos Norte (1st District), 2022',
      photo: 'images/sandro-marcos.jpg',
      fit: { fx: 0.5, fy: 0.35, fw: 0.43 },
      facts: [
        'Kinatawan ng Ilocos Norte (1st District) mula 2022',
        'Muling nahalal noong 2025',
        'Panganay na anak ni Pangulong Bongbong Marcos'
      ]
    }
  };


  const THEMES = {
    ferdinand: { a: '#081433', b: '#1b3a85', acc: '#9dbdff' },  
    imelda:    { a: '#3a0a2a', b: '#9b2a6b', acc: '#ffb7da' },   
    imee:      { a: '#04291f', b: '#0c6b55', acc: '#7cecc8' },   
    bongbong:  { a: '#330812', b: '#9c1f33', acc: '#ffb9a6' },   
    liza:      { a: '#3d2506', b: '#a8690d', acc: '#ffdc94' },  
    irene:     { a: '#141a2b', b: '#3f4d6e', acc: '#c5d0ea' },   
    matthew:   { a: '#04262f', b: '#0f7d8f', acc: '#86eaf9' },  
    sandro:    { a: '#170d47', b: '#4b35b8', acc: '#c9bfff' },   
    mariano:   { a: '#241709', b: '#6e4a1d', acc: '#f1d29a' },   
    josefa:    { a: '#10252b', b: '#35707a', acc: '#b5eaf0' },   
    tommy:     { a: '#1f2406', b: '#6b7a14', acc: '#e2ee8f' },   
    greggy:    { a: '#2b1408', b: '#8a4a1f', acc: '#ffc79a' }   
  };


  const TREE = {
    unit: ['mariano', 'josefa'],
    children: [{
      unit: ['ferdinand', 'imelda'],
      children: [
        { unit: ['imee', 'tommy'],    children: [{ unit: ['matthew'] }] },
        { unit: ['bongbong', 'liza'], children: [{ unit: ['sandro'] }] },
        { unit: ['irene', 'greggy'] }
      ]
    }]
  };


  const ORDER = ['mariano', 'josefa', 'ferdinand', 'imelda', 'imee', 'tommy', 'bongbong', 'liza', 'irene', 'greggy', 'matthew', 'sandro'];

  const STATUS_LABEL = {
    active:  'Kasalukuyang may posisyon',
    former:  'Dating nanungkulan',
    private: 'Walang posisyon sa gobyerno'
  };


  const $  = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE = 'cubic-bezier(.65,0,.25,1)';


  const welcome   = $('#welcome');
  const treeStage = $('#treeStage');
  const treeRoot  = $('#tree');
  const inner     = $('#treeInner');
  const svg       = $('#links');

  let state = 'welcome';        
  let revealed = false;
  let settleTimer = 0;
  let currentId = null;
  let lastFocus = null;


  function Particles(canvas, { count = 70, link = 140 } = {}) {
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, pts = [], raf = 0, running = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(count * Math.min(1, (w * h) / (1280 * 720)));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
        r: Math.random() * 1.5 + .6
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < link) {
            ctx.strokeStyle = `rgba(212,175,55,${(1 - d / link) * .22})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(244,220,143,.75)';
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      if (running && !reduceMotion) raf = requestAnimationFrame(frame);
    }

    return {
      start() { if (running) return; running = true; resize(); frame(); },
      stop()  { running = false; cancelAnimationFrame(raf); },
      resize() { if (running) resize(); }
    };
  }
  const pWelcome = Particles($('#pWelcome'), { count: 80, link: 150 });
  const pTree    = Particles($('#pTree'),    { count: 55, link: 130 });


  (function splitTitle() {
    const t = $('#welcomeTitle');
    const text = t.textContent.trim();
    t.setAttribute('aria-label', text);
    t.textContent = '';
    [...text].forEach((c, i) => {
      const s = el('span', 'ch', c);
      s.style.setProperty('--i', i);
      s.setAttribute('aria-hidden', 'true');
      t.appendChild(s);
    });
  })();

 
  const branches = [];
  const PERSON_EL = {};
  const genCounter = {};

 
  function frameImage(img, fit) {
    const nw = img.naturalWidth, nh = img.naturalHeight, m = Math.min(nw, nh);
    const z  = fit.z || Math.min(2.1, Math.max(1, .52 / fit.fw));
    const dw = (nw / m) * z, dh = (nh / m) * z;
    let left = .5 - fit.fx * dw, top = .46 - fit.fy * dh;
    left = Math.min(0, Math.max(1 - dw, left));
    top  = Math.min(0, Math.max(1 - dh, top));
    Object.assign(img.style, {
      inset: 'auto', objectFit: 'fill', maxWidth: 'none', maxHeight: 'none',
      width: (dw * 100) + '%', height: (dh * 100) + '%',
      left: (left * 100) + '%', top: (top * 100) + '%'
    });
  }

  function buildAvatar(p) {
    const av   = el('div', 'avatar');
    const face = el('div', 'face');
    const ini  = el('span', 'initials', p.ini);
    face.appendChild(ini);
    av.appendChild(face);

    if (p.photo) {                      
      const img = new Image();
      img.alt = p.name;
      img.decoding = 'async';
      img.onload = () => { if (p.fit) frameImage(img, p.fit); face.appendChild(img); ini.style.visibility = 'hidden'; };
      img.src = p.photo;
    }
    return av;
  }

  function buildPerson(id, gen) {
    const p = PEOPLE[id];
    genCounter[gen] = (genCounter[gen] || 0);
    const person = el('div', 'person');
    person.dataset.id = id;
    person.dataset.status = p.status;
    PERSON_EL[id] = person;
    person.style.setProperty('--gen', gen);
    person.style.setProperty('--i', genCounter[gen]++);
    person.tabIndex = 0;
    person.setAttribute('role', 'button');
    person.setAttribute('aria-label', `${p.name} — ${p.role}. Pindutin para sa detalye.`);

    const card = el('div', 'card');
    card.appendChild(buildAvatar(p));
    card.appendChild(el('div', 'name', p.tname || p.name));
    card.appendChild(el('div', 'role', p.trole || p.role));
    person.appendChild(card);

    person.addEventListener('click', () => openProfile(id, person));
    person.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProfile(id, person); }
    });
    return person;
  }

  function buildBranch(node, gen) {
    const branch = el('div', 'branch');
    branch.dataset.gen = gen;
    const unit = el('div', 'unit');

    node.unit.forEach((id, idx) => {
      if (idx > 0) {
        const bond = el('span', 'bond');
        bond.style.setProperty('--gen', gen);
        unit.appendChild(bond);
      }
      unit.appendChild(buildPerson(id, gen));
    });
    branch.appendChild(unit);

    if (node.children && node.children.length) {
      const kids = el('div', 'children');
      node.children.forEach(c => kids.appendChild(buildBranch(c, gen + 1)));
      branch.appendChild(kids);
    }
    branches.push(branch);
    return branch;
  }

  treeRoot.appendChild(buildBranch(TREE, 0));

 
  let paths = [];

  function elbow(px, py, cx, cy, midY) {
    const dx = cx - px;
    if (Math.abs(dx) < 2) return `M${px} ${py} V${cy}`;
    const s = Math.sign(dx);
    const r = Math.max(0, Math.min(16, Math.abs(dx) / 2, midY - py, cy - midY));
    return `M${px} ${py} V${midY - r} Q${px} ${midY} ${px + s * r} ${midY} ` +
           `H${cx - s * r} Q${cx} ${midY} ${cx} ${midY + r} V${cy}`;
  }

  function drawLines(hidden) {
    svg.innerHTML = '';
    paths = [];
    const base = inner.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${base.width} ${base.height}`);

    branches.forEach(b => {
      const kids = b.querySelector(':scope > .children');
      if (!kids) return;
      const unit = b.querySelector(':scope > .unit');
      const bond = unit.querySelector('.bond');

      let px, py;
      if (bond) {                       
        const r = bond.getBoundingClientRect();
        px = r.left + r.width / 2 - base.left;
        py = r.bottom - base.top + 8;
      } else {                           
        const r = unit.getBoundingClientRect();
        px = r.left + r.width / 2 - base.left;
        py = r.bottom - base.top + 6;
      }
      const gen = +b.dataset.gen;
     
      const unitBottom = unit.getBoundingClientRect().bottom - base.top;

      [...kids.children].forEach(cb => {
        const cu = cb.querySelector(':scope > .unit');
        const cr = cu.getBoundingClientRect();
        const cx = cr.left + cr.width / 2 - base.left;
        const cy = cr.top - base.top - 6;

        const midY = (Math.max(unitBottom, py) + cy) / 2;
        const d = elbow(px, py, cx, cy, midY);
        ['glow', 'main'].forEach(kind => {         
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', d);
          if (kind === 'glow') path.setAttribute('class', 'glow');
          svg.appendChild(path);

          if (hidden) {
            const len = path.getTotalLength();
            path.style.strokeDasharray = len;
            path.style.strokeDashoffset = len;
            path.style.transition = reduceMotion
              ? 'none'
              : `stroke-dashoffset 1.1s ${EASE} ${(.5 + gen * 1.1 + .55).toFixed(2)}s`;
          }
          paths.push(path);
        });

       
        const flow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        flow.setAttribute('d', d);
        flow.setAttribute('class', 'flow');
        svg.appendChild(flow);
        const fl = flow.getTotalLength();
        flow.style.strokeDasharray = `14 ${fl + 60}`;
        flow.style.setProperty('--end', `${-(fl + 14)}px`);
        flow.style.animationDelay = `${((paths.length / 2) % 4) * .9}s`;
      });
    });
  }

  function revealLines() {
    revealed = true;
    
    requestAnimationFrame(() => requestAnimationFrame(() => {
      paths.forEach(p => { p.style.strokeDashoffset = 0; });
    }));
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      drawLines(!revealed);
      if (revealed) paths.forEach(p => { p.style.strokeDasharray = 'none'; p.style.strokeDashoffset = 0; p.style.transition = 'none'; });
      pWelcome.resize(); pTree.resize();
    }, 120);
  });

  drawLines(true);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { if (!revealed) drawLines(true); });
  }

  
  function goToTree(x, y) {
    if (state !== 'welcome') return;
    state = 'transition';

    welcome.classList.add('leaving');

    const maxR = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 20;
    treeStage.style.visibility = 'visible';
    pTree.start();

    const anim = treeStage.animate(
      [
        { clipPath: `circle(0px at ${x}px ${y}px)` },
        { clipPath: `circle(${maxR}px at ${x}px ${y}px)` }
      ],
      { duration: reduceMotion ? 1 : 1150, easing: EASE, fill: 'forwards' }
    );

    setTimeout(() => {
      document.body.classList.add('tree-active'); 
      revealLines();
    }, reduceMotion ? 0 : 650);
    clearTimeout(settleTimer);
    settleTimer = setTimeout(() => document.body.classList.add('tree-settled'), reduceMotion ? 0 : 6800);

    anim.onfinish = () => {
      treeStage.style.clipPath = 'none';
      anim.cancel();
      welcome.style.visibility = 'hidden';
      pWelcome.stop();
      state = 'tree';
    };
  }

  welcome.addEventListener('click', e => goToTree(e.clientX, e.clientY));


  function backToWelcome() {
    if (state !== 'tree' || pfState !== 'closed') return;
    state = 'transition';

    welcome.style.visibility = 'visible';
    welcome.classList.remove('leaving');
    pWelcome.start();

    treeStage.style.clipPath = 'circle(150% at 50% 50%)';
    const anim = treeStage.animate(
      [{ clipPath: 'circle(150% at 50% 50%)' }, { clipPath: 'circle(0px at 50% 50%)' }],
      { duration: reduceMotion ? 1 : 950, easing: EASE, fill: 'forwards' }
    );
    anim.onfinish = () => {
      treeStage.style.visibility = 'hidden';
      treeStage.style.clipPath = '';
      anim.cancel();
      document.body.classList.remove('tree-active', 'tree-settled');
      clearTimeout(settleTimer);
      pTree.stop();
      revealed = false;
      drawLines(true);
      state = 'welcome';
    };
  }
  $('#backBtn').addEventListener('click', backToWelcome);

  
  const pf      = $('#profile');
  const pfBgs   = [$('#pfBgA'), $('#pfBgB')];
  const pfSide  = $('#pfSide');
  const pfAv    = $('#pfAv');
  const pfInfo  = $('#pfInfo');
  const pfGhost = $('#pfGhost');
  const pfBadge = $('#pfBadge');
  const pfName  = $('#pName');
  const pfFacts = $('#pfFacts');
  const pfDots  = $('#pfDots');
  const pfClose = $('#pClose');
  const pfNav   = $('#pfNav');

  let pfState  = 'closed';        
  let activeBg = pfBgs[0];

  const T        = ms => (reduceMotion ? 1 : ms);
  const sleep    = ms => new Promise(r => setTimeout(r, ms));
  const SMOOTH   = 'cubic-bezier(.22,.8,.2,1)';
  const SWEEP    = 'cubic-bezier(.65,0,.25,1)';
  const REST     = 'translate(0px, 0px) scale(1)';
  const centerOf = r => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  const reach    = (x, y) => Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 24;
  const flip     = (from, to) =>
    `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width})`;
  const settle   = a => a.finished.catch(() => {});
  const fadeOut  = (els, ms) => els.map(e =>
    e.animate([{ opacity: 1 }, { opacity: 0 }], { duration: T(ms), easing: 'ease-in', fill: 'forwards' }));

  
  ORDER.forEach(id => {
    const b = el('button', 'pf-dot');
    b.type = 'button';
    b.dataset.id = id;
    b.setAttribute('aria-label', PEOPLE[id].name);
    b.addEventListener('click', () => {
      const dir = ORDER.indexOf(id) > ORDER.indexOf(currentId) ? 1 : -1;
      switchTo(id, dir);
    });
    pfDots.appendChild(b);
  });

  function paintBg(layer, id) {
    const t = THEMES[id];
    layer.style.setProperty('--a', t.a);
    layer.style.setProperty('--b', t.b);
  }

  function fillProfile(id) {
    const p = PEOPLE[id], t = THEMES[id];
    currentId = id;

    pf.style.setProperty('--acc', t.acc);
    pfSide.dataset.status = p.status;
    pfAv.replaceChildren(buildAvatar(p));

    $('#pfRelation').textContent = p.relation;
    const nameSpan = el('span');
    nameSpan.textContent = p.name;
    pfName.replaceChildren(nameSpan);
    $('#pfRole').textContent = p.role;
    const yrs = $('#pfYears');
    yrs.textContent = p.years;
    yrs.style.display = p.years ? '' : 'none';

    const rows = p.first ? [{ t: p.first, first: true }, ...p.facts.map(t => ({ t }))] : p.facts.map(t => ({ t }));
    pfFacts.replaceChildren(...rows.map((r, i) => {
      const li = el('li');
      if (r.first) {
        li.className = 'first';
        const tag = el('b'); tag.textContent = 'Unang posisyon sa gobyerno';
        const tx = el('span'); tx.textContent = r.t;
        const ft = el('div', 'ft'); ft.append(tag, tx);
        li.append(ft);
      } else li.textContent = r.t;
      li.style.setProperty('--n', i);
      return li;
    }));

    pfBadge.textContent = STATUS_LABEL[p.status];
    pfGhost.textContent = p.ini;
    [...pfDots.children].forEach(d => d.classList.toggle('on', d.dataset.id === id));
  }

    function restartText(delay) {
    pf.style.setProperty('--d', delay + 's');
    pf.classList.remove('swap');
    void pf.offsetWidth;
    pf.classList.add('swap');
  }

 
  function openProfile(id, personEl) {
    if (pfState !== 'closed' || state !== 'tree') return;
    pfState = 'opening';
    lastFocus = personEl;

    activeBg = pfBgs[0];
    pfBgs[1].style.display = 'none';
    activeBg.style.display = 'block';
    activeBg.style.zIndex = '1';
    activeBg.style.clipPath = '';
    paintBg(activeBg, id);
    fillProfile(id);

    pf.classList.add('open');
    pf.setAttribute('aria-hidden', 'false');
    restartText(.6);

    const from = personEl.querySelector('.avatar').getBoundingClientRect();
    const to   = pfAv.getBoundingClientRect();
    const c    = centerOf(from);
    personEl.classList.add('ghosted');
    pfAv.style.transformOrigin = '0 0';

    const bg = activeBg.animate(
      [{ clipPath: `circle(0px at ${c.x}px ${c.y}px)` },
       { clipPath: `circle(${reach(c.x, c.y)}px at ${c.x}px ${c.y}px)` }],
      { duration: T(1100), easing: SWEEP, fill: 'forwards' });

    const fly = pfAv.animate(
      [{ transform: flip(from, to) }, { transform: REST }],
      { duration: T(1150), easing: SMOOTH, fill: 'both', delay: T(60) });

    Promise.all([settle(bg), settle(fly)]).then(() => {
      activeBg.style.clipPath = 'none';
      bg.cancel();
      fly.cancel();
      pf.classList.add('landed');
      pfState = 'open';
      pfClose.focus({ preventScroll: true });
    });
  }

  
  async function switchTo(id, dir) {
    if (pfState !== 'open' || id === currentId) return;
    pfState = 'switching';

    const nextBg = activeBg === pfBgs[0] ? pfBgs[1] : pfBgs[0];
    paintBg(nextBg, id);
    nextBg.style.clipPath = '';
    nextBg.style.display = 'block';
    nextBg.style.zIndex = '2';
    activeBg.style.zIndex = '1';

    const sweep = nextBg.animate(
      [{ clipPath: dir > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' },
       { clipPath: 'inset(0 0 0 0)' }],
      { duration: T(950), easing: SWEEP, fill: 'forwards' });

    pfAv.style.transformOrigin = '50% 50%';
    const outs  = fadeOut([pfInfo, pfGhost, pfBadge], 300);
    const avOut = pfAv.animate(
      [{ opacity: 1, transform: REST },
       { opacity: 0, transform: `translate(${-dir * 70}px, 0px) scale(.9)` }],
      { duration: T(320), easing: 'ease-in', fill: 'forwards' });

    await sleep(T(330));

    outs.forEach(a => a.cancel());
    avOut.cancel();
    fillProfile(id);
    const avIn = pfAv.animate(
      [{ opacity: 0, transform: `translate(${dir * 70}px, 0px) scale(.9)` },
       { opacity: 1, transform: REST }],
      { duration: T(850), easing: SMOOTH, fill: 'both' });
    restartText(.1);

    await Promise.all([settle(sweep), settle(avIn)]);
    nextBg.style.clipPath = 'none';
    sweep.cancel();
    avIn.cancel();
    activeBg.style.display = 'none';
    activeBg = nextBg;
    pfState = 'open';
  }

  function step(dir) {
    const i = ORDER.indexOf(currentId);
    switchTo(ORDER[(i + dir + ORDER.length) % ORDER.length], dir);
  }


  function closeProfile() {
    if (pfState !== 'open') return;
    pfState = 'closing';

    const personEl = PERSON_EL[currentId];
    const to   = personEl.querySelector('.avatar').getBoundingClientRect();
    const from = pfAv.getBoundingClientRect();
    const c    = centerOf(to);
    personEl.classList.add('ghosted');
    pfAv.style.transformOrigin = '0 0';
    pf.classList.remove('landed');

    const fades = fadeOut([pfInfo, pfGhost, pfBadge, pfClose, pfNav], 380);
    const fly = pfAv.animate(
      [{ transform: REST }, { transform: flip(to, from) }],
      { duration: T(900), easing: SWEEP, fill: 'forwards', delay: T(60) });
    const bg = activeBg.animate(
      [{ clipPath: `circle(${reach(c.x, c.y)}px at ${c.x}px ${c.y}px)` },
       { clipPath: `circle(0px at ${c.x}px ${c.y}px)` }],
      { duration: T(950), easing: SWEEP, fill: 'forwards', delay: T(160) });

    Promise.all([settle(fly), settle(bg)]).then(() => {
      pf.classList.remove('open', 'swap');
      pf.setAttribute('aria-hidden', 'true');
      fades.forEach(a => a.cancel());
      fly.cancel();
      bg.cancel();
      activeBg.style.clipPath = '';
      document.querySelectorAll('.person.ghosted').forEach(e => e.classList.remove('ghosted'));
      pfState = 'closed';
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    });
  }

  pfClose.addEventListener('click', closeProfile);
  $('#pPrev').addEventListener('click', () => step(-1));
  $('#pNext').addEventListener('click', () => step(1));

 
  let sx = 0, sy = 0;
  pf.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  pf.addEventListener('touchend', e => {
    const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (pfState === 'open' && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  }, { passive: true });

 
  document.addEventListener('keydown', e => {
    if (state === 'welcome' && ['Enter', ' ', 'ArrowRight', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      goToTree(innerWidth / 2, innerHeight / 2);
      return;
    }
    if (pfState === 'open') {
      if (e.key === 'Escape') closeProfile();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    }
  });

  
  pWelcome.start();
})();
