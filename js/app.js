const portfolioData = [
  {
    title: "Shaumly - Puasa Sunnah",
    desc: "Pengingat puasa sunnah & qadha Ramadhan yang simpel dan ringan. Catat, lacak, dan jadwalkan puasa sunnah kamu dengan mudah.",
    type: "app", status: "done",
    image: "images/shaumly_home.webp",
    link: "https://play.google.com/store/apps/details?id=com.tapisdev.shaumly"
  },
  {
    title: "Adaba: Parenting Islami",
    desc: "Aplikasi parenting islami untuk tumbuh kembang anak muslim dan keluarga. Panduan lengkap mendidik anak sesuai ajaran Islam.",
    type: "app", status: "done",
    image: "images/adaba_home.webp",
    link: "https://play.google.com/store/apps/details?id=com.tapisdev.adaba"
  },
  {
    title: "QuizNesia",
    desc: "Tebak lagu, logat, dan budaya daerah! Game kuis edukatif 100% lokal Indonesia yang seru dan menambah wawasan.",
    type: "app", status: "done",
    image: "images/quiznesia_gameplay.webp",
    link: "https://play.google.com/store/apps/details?id=com.tapisdev.logatnesia"
  },
  {
    title: "Sikap Lampung",
    desc: "Aplikasi absensi harian untuk Pemprov Lampung. Sistem kehadiran digital yang efisien dan terintegrasi.",
    type: "app", status: "done",
    image: "images/sikap_mockup.jpg",
    link: "https://play.google.com/store/apps/details?id=com.diskominfotik.sikaplampung&hl=en"
  },
  {
    title: "Website Resmi Provinsi Lampung",
    desc: "Portal resmi Pemerintah Provinsi Lampung. Website informasi publik yang modern dan responsif.",
    type: "web", status: "done",
    image: "images/lampungprov.jpg",
    link: "https://lampungprov.go.id/home"
  },
  {
    title: "Translate Bahasa Lampung",
    desc: "Aplikasi penerjemah Bahasa Lampung. Jembatan digital untuk melestarikan bahasa daerah.",
    type: "app", status: "done",
    image: "images/translate_lampung.jpg",
    link: "https://play.google.com/store/apps/details?id=com.tapisdev.kamerabahasalampung&hl=id"
  },
  {
    title: "Kadita: Queen of The Southern Sea",
    desc: "Game aksi-petualangan sinematik berbasis budaya maritim Nusantara. Angkat mitologi Kadita/Roro Kidul dan perjuangan rakyat melawan kolonialisme di lautan dengan eksplorasi laut, pertempuran epik, dan pengalaman naratif yang emosional.",
    type: "game", status: "dev",
    image: "images/kadita/Main Menu.PNG",
    link: "https://www.youtube.com/watch?v=TQmhGV0w8VY",
    gallery: ["images/kadita/KaditaLookingShip.PNG","images/kadita/ScreenShot00000.png","images/kadita/ScreenShot00020.png","images/kadita/Main Menu.PNG"]
  },
  {
    title: "TrustKerja - Marketplace Tukang",
    desc: "Platform marketplace untuk menghubungkan pencari jasa dengan tukang terpercaya. Sedang dalam tahap pengembangan.",
    type: "app", status: "dev",
    image: "images/trust_kerja/trustkerja_home.png",
    link: "#"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio('all','all');
  initNavigation();
  initCounters();
  initScrollAnimations();
});

function renderPortfolio(typeFilter, statusFilter) {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  let items = portfolioData;
  if (typeFilter !== 'all') items = items.filter(i => i.type === typeFilter);
  if (statusFilter !== 'all') items = items.filter(i => i.status === statusFilter);

  grid.innerHTML = items.map((item, idx) => `
    <div class="group portfolio-card" style="animation-delay:${idx*80}ms">
      <div class="relative overflow-hidden rounded-2xl bg-white border border-[#EEEBE3] hover:border-[#C9A227]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#C9A227]/5 hover:-translate-y-2">
        <div class="aspect-video overflow-hidden">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" onerror="this.src='images/app_dev3.png'">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
        </div>
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="px-3 py-1 text-xs font-bold rounded-full ${item.status==='done'?'bg-emerald-500/90 text-white':'bg-amber-500/90 text-white'}">
            ${item.status==='done'?'✓ Done':'⚡ In Dev'}
          </span>
          <span class="px-3 py-1 text-xs font-bold rounded-full bg-white/80 backdrop-blur text-[#2D2D2A] border border-white/40">
            ${item.type==='app'?'📱 App':item.type==='game'?'🎮 Game':'🌐 Web'}
          </span>
        </div>
        <div class="p-5 relative">
          <h3 class="text-lg font-bold text-[#2D2D2A] mb-2 group-hover:text-[#C9A227] transition-colors">${item.title}</h3>
          <p class="text-sm text-[#6B6964] leading-relaxed mb-4 line-clamp-2">${item.desc}</p>
          <div class="flex gap-2">
            ${item.link && item.link !== '#' ? `<a href="${item.link}" target="_blank" class="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#C9A227] hover:bg-[#A8841F] text-white transition-all">
              ${item.type==='game'?'Watch Gameplay':'View Project'} <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>` : '<span class="text-xs text-[#8A8883] italic">Coming soon</span>'}
            ${item.gallery ? `<button onclick="openGallery(${idx})" class="px-4 py-2 text-xs font-semibold rounded-lg border border-[#EEEBE3] text-[#6B6964] hover:bg-[#F5F3ED] transition-all">Gallery</button>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function setFilter(type, el) {
  document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('active'); b.style.background=''; b.style.color=''; });
  el.classList.add('active');
  const statusEl = document.querySelector('.status-btn.active');
  const status = statusEl ? statusEl.dataset.status : 'all';
  renderPortfolio(type, status);
}
function setStatusFilter(status, el) {
  document.querySelectorAll('.status-btn').forEach(b => { b.classList.remove('active'); b.style.background=''; b.style.color=''; });
  el.classList.add('active');
  const typeEl = document.querySelector('.filter-btn.active');
  const type = typeEl ? typeEl.dataset.type : 'all';
  renderPortfolio(type, status);
}

function openGallery(idx) {
  const item = portfolioData[idx];
  if (!item.gallery) return;
  const modal = document.getElementById('gallery-modal');
  const container = document.getElementById('gallery-images');
  container.innerHTML = item.gallery.map(src => `<img src="${src}" alt="${item.title}" class="rounded-xl w-full">`).join('');
  document.getElementById('gallery-title').textContent = item.title;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeGallery() {
  document.getElementById('gallery-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger) hamburger.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { target.scrollIntoView({ behavior:'smooth', block:'start' }); if (mobileMenu) mobileMenu.classList.add('hidden'); }
    });
  });
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (nav) {
      if (window.scrollY > 50) { nav.classList.add('bg-white/95','backdrop-blur-xl','shadow-md','border-b','border-[#EEEBE3]'); }
      else { nav.classList.remove('bg-white/95','backdrop-blur-xl','shadow-md','border-b','border-[#EEEBE3]'); }
    }
    document.querySelectorAll('section[id]').forEach(s => {
      const link = document.querySelector(`nav a[href="#${s.id}"]`);
      if (link) {
        if (window.scrollY+100 >= s.offsetTop && window.scrollY+100 < s.offsetTop+s.offsetHeight) link.classList.add('text-[#C9A227]');
        else link.classList.remove('text-[#C9A227]');
      }
    });
  });
}

function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target, target = +el.dataset.target;
        let current = 0; const step = target / 60;
        const timer = setInterval(() => { current += step; if (current >= target) { current = target; clearInterval(timer); } el.textContent = Math.floor(current) + (el.dataset.suffix||''); }, 25);
        observer.unobserve(el);
      }
    });
  }, {threshold: 0.5});
  document.querySelectorAll('.counter').forEach(c => observer.observe(c));
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate-in'); observer.unobserve(entry.target); } });
  }, {threshold: 0.1});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
