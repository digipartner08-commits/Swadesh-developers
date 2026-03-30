/* ── HELPERS ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── PROJECT DATA with real images ── */
const PROJECTS = [
  {
    id: 1, name: 'Shivalik Valley', slug: 'shivalik-valley',
    img: 'https://sgroup.homes/images/projects-shivalik-valley.jpg',
    type: 'Residential', location: 'Vadodara, Gujarat', status: 'ready',
    config: '2/3 BHK', area: '900–1800 sq.ft.', units: '120',
    desc: 'A premium residential community nestled in the heart of Vadodara, offering modern living with lush green surroundings and world-class amenities.'
  },
  {
    id: 2, name: 'Shivalik Residency', slug: 'shivalik-residency',
    img: 'https://sgroup.homes/images/projects-shivalik-Residency.jpg',
    type: 'Residential', location: 'Vadodara, Gujarat', status: 'ready',
    config: '2/3/4 BHK', area: '1000–2200 sq.ft.', units: '180',
    desc: 'Elegant residences crafted for families who desire space, comfort, and a prestigious address in the city.'
  },
  {
    id: 3, name: 'Shivalik Lite', slug: 'shivalik-lite',
    img: 'https://sgroup.homes/images/projects-shivalik-lite.jpg',
    type: 'Residential', location: 'Vadodara, Gujarat', status: 'ready',
    config: '1/2 BHK', area: '450–950 sq.ft.', units: '200',
    desc: 'Affordable luxury designed for young professionals and new families — smart homes with premium finishes at accessible prices.'
  },
  {
    id: 4, name: 'Shivalik Row-House', slug: 'shivalik-row-house',
    img: 'https://sgroup.homes/images/projects-shivalik-Row-house.jpg',
    type: 'Row House', location: 'Vadodara, Gujarat', status: 'ongoing',
    config: '3/4 BHK', area: '1800–3200 sq.ft.', units: '60',
    desc: 'Exclusive row houses offering independent living with private gardens, designer interiors, and gated community security.'
  },
  {
    id: 5, name: 'Shivalik Candle', slug: 'shivalik-candle',
    img: 'https://sgroup.homes/images/projects-shivalik-candel.png',
    type: 'Residential', location: 'Vadodara, Gujarat', status: 'ongoing',
    config: '2/3 BHK', area: '850–1600 sq.ft.', units: '150',
    desc: 'A thoughtfully designed residential project that illuminates modern living with smart layouts and contemporary architecture.'
  },
  {
    id: 6, name: 'Shivalik Celebration', slug: 'shivalik-celebration',
    img: 'https://sgroup.homes/images/shivalik-celebration.png',
    type: 'Residential', location: 'Vadodara, Gujarat', status: 'ready',
    config: '2/3/4 BHK', area: '1100–2400 sq.ft.', units: '220',
    desc: 'Celebrate life in grand style with spacious homes, resort-style amenities, and a vibrant community atmosphere.'
  },
  {
    id: 7, name: 'Shivalik Classic', slug: 'shivalik-classic',
    img: 'https://sgroup.homes/images/shivalik-classic.png',
    type: 'Residential', location: 'Vadodara, Gujarat', status: 'ready',
    config: '2/3 BHK', area: '950–1700 sq.ft.', units: '160',
    desc: 'Timeless design meets modern convenience — classic architecture with contemporary comforts for discerning homeowners.'
  },
  {
    id: 8, name: 'Shivalik Crown', slug: 'shivalik-crown',
    img: 'https://sgroup.homes/images/shivalik-crown.png',
    type: 'Luxury', location: 'Vadodara, Gujarat', status: 'upcoming',
    config: '3/4/5 BHK', area: '1500–3500 sq.ft.', units: '90',
    desc: 'The crown jewel of Shivalik projects — ultra-luxury residences with panoramic views, private terraces, and concierge services.'
  },
];

const AMENITIES = [
  { icon: '🏊', name: 'Swimming Pool' },
  { icon: '🏋️', name: 'Fitness Center' },
  { icon: '🌿', name: 'Landscape Gardens' },
  { icon: '🎮', name: 'Clubhouse' },
  { icon: '🏃', name: 'Jogging Track' },
  { icon: '🧘', name: 'Yoga Pavilion' },
  { icon: '🚗', name: 'Smart Parking' },
  { icon: '🔒', name: '24/7 Security' },
  { icon: '⚡', name: 'Power Backup' },
  { icon: '🌊', name: 'Spa & Wellness' },
  { icon: '🎭', name: 'Amphitheatre' },
  { icon: '🏸', name: 'Sports Courts' },
  { icon: '🌳', name: 'Senior Lounge' },
  { icon: '🎠', name: 'Kids Play Area' },
  { icon: '📶', name: 'Smart Home' },
];

/* ── RENDER PROJECTS ── */
function badgeClass(s) {
  return s === 'ongoing' ? 'badge-ongoing' : s === 'ready' ? 'badge-ready' : 'badge-upcoming';
}
function badgeLabel(s) {
  return s === 'ongoing' ? 'Ongoing' : s === 'ready' ? 'Ready to Move' : 'Upcoming';
}

function renderProjects() {
  const grid = $('#projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => `
    <a href="${p.slug}.html" class="project-card">
      <div class="pc-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="pc-img-placeholder" style="display:none">
          <div class="pc-placeholder-icon">🏢</div>
        </div>
      </div>
      <div class="pc-body">
        <div class="pc-type">${p.type}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-loc">◎ ${p.location}</div>
        <div class="pc-specs">
          <div class="pc-spec"><div class="pc-spec-val">${p.config}</div><div class="pc-spec-key">Config</div></div>
          <div class="pc-spec"><div class="pc-spec-val">${p.units}</div><div class="pc-spec-key">Units</div></div>
          <div class="pc-spec"><div class="pc-spec-val">${p.area}</div><div class="pc-spec-key">Area</div></div>
        </div>
        <div class="pc-cta">View Details →</div>
      </div>
    </a>
  `).join('');
}

/* ── RENDER AMENITIES ── */
function renderAmenities() {
  const grid = $('#amenities-grid');
  if (!grid) return;
  grid.innerHTML = AMENITIES.map(a => `
    <div class="am-cell">
      <div class="am-icon-wrap">${a.icon}</div>
      <div class="am-name">${a.name}</div>
    </div>
  `).join('');
}

/* ── PRELOADER (Video Splash) ── */
function initPreloader() {
  const pl = $('#preloader');
  if (!pl) return;
  const video = $('#splash-video');
  document.body.style.overflow = 'hidden';

  function hideSplash() {
    pl.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (video) {
    video.addEventListener('ended', hideSplash);
    // Fallback: if video fails to load, hide quickly
    video.addEventListener('error', () => setTimeout(hideSplash, 500));
    // Safety fallback in case video is very long
    setTimeout(hideSplash, 15000);
  } else {
    setTimeout(hideSplash, 2800);
  }
}

/* ── SCROLL ── */
function updateScroll() {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const sp = $('#scroll-progress');
  if (sp) sp.style.width = (scrolled / total * 100) + '%';
  const nb = $('#navbar');
  if (nb) scrolled > 50 ? nb.classList.add('scrolled') : nb.classList.remove('scrolled');
  const btt = $('#btt');
  if (btt) scrolled > 500 ? btt.classList.add('visible') : btt.classList.remove('visible');
}

/* ── REVEAL ── */
function initReveal() {
  const targets = $$('.reveal-up, .reveal-left, .reveal-right, .reveal-fade');
  if (!targets.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(t => obs.observe(t));
}

/* ── COUNT UP ── */
function countUp(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}
function initCountUps() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { countUp(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  $$('.count-up').forEach(el => obs.observe(el));
}

/* ── HAMBURGER ── */
function initHamburger() {
  const btn = $('#hamburger');
  const links = $('#nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ── CONTACT FORM → WHATSAPP ── */
function initForm() {
  const form = $('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = $('#f-name').value.trim();
    const phone   = $('#f-phone').value.trim();
    const email   = $('#f-email') ? $('#f-email').value.trim() : '';
    const project = $('#f-project') ? $('#f-project').value.trim() : '';
    const budget  = $('#f-budget') ? $('#f-budget').value.trim() : '';
    const message = $('#f-message') ? $('#f-message').value.trim() : '';

    // Validate required fields
    let ok = true;
    if (!name) {
      $('#err-name').textContent = 'Name is required';
      ok = false;
    } else {
      $('#err-name').textContent = '';
    }
    if (!phone || phone.replace(/\D/g, '').length < 10) {
      $('#err-phone').textContent = 'Valid phone required';
      ok = false;
    } else {
      $('#err-phone').textContent = '';
    }
    if (!ok) return;

    // Build WhatsApp message
    let wa = `🏠 *New Enquiry — Swadesh Developer*\n\n`;
    wa += `👤 *Name:* ${name}\n`;
    wa += `📞 *Phone:* ${phone}\n`;
    if (email)   wa += `✉️ *Email:* ${email}\n`;
    if (project) wa += `🏗️ *Interested In:* ${project}\n`;
    if (budget)  wa += `💰 *Budget:* ${budget}\n`;
    if (message) wa += `\n💬 *Message:*\n${message}\n`;
    wa += `\n_Sent from Swadesh Developer Website_`;

    // Show loading on button
    const btn = form.querySelector('button[type=submit]');
    btn.querySelector('.btn-text').style.display = 'none';
    btn.querySelector('.btn-loader').style.display = 'inline';
    btn.disabled = true;

    // Open WhatsApp
    const encoded = encodeURIComponent(wa);
    window.open(`https://wa.me/919512747475?text=${encoded}`, '_blank');

    // Reset form & show success
    setTimeout(() => {
      btn.querySelector('.btn-text').style.display = 'inline';
      btn.querySelector('.btn-loader').style.display = 'none';
      btn.disabled = false;
      $('#form-success').style.display = 'block';
      form.reset();
      setTimeout(() => { $('#form-success').style.display = 'none'; }, 5000);
    }, 800);
  });
}

/* ── GALLERY FILTERS ── */
function initGalleryFilters() {
  const filtersLine = $('#gallery-filters');
  if (!filtersLine) return;
  
  const filters = filtersLine.querySelectorAll('li');
  const items = document.querySelectorAll('.gallery-item');
  
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update active state
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      const target = filter.getAttribute('data-filter');
      
      // Filter items
      items.forEach(item => {
        if (target === 'all' || item.getAttribute('data-category') === target) {
          item.classList.remove('hidden');
          setTimeout(() => item.style.opacity = '1', 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.classList.add('hidden'), 400); // Wait for transition
        }
      });
    });
  });
}

/* ── INIT ── */
// renderProjects();
renderAmenities();
initPreloader();
initHamburger();
initForm();
window.addEventListener('scroll', updateScroll, { passive: true });
updateScroll();
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCountUps();
  initGalleryFilters();
});
