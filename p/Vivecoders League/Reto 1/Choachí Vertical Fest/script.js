/* =============================================
   CHOACHÍ VERTICAL FEST 2027 · JS v2
   Countdown, Scroll Reveal, Dark Mode,
   Lightbox, Rope Climber, Nav, Ripple
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ══════════════════════════════════════════
  // 1. DARK MODE TOGGLE
  // ══════════════════════════════════════════
  const html        = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');

  const savedTheme = localStorage.getItem('cvf-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  const applyTheme = () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('cvf-theme', next);
  };

  if (themeToggle) themeToggle.addEventListener('click', applyTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', applyTheme);


  // ══════════════════════════════════════════
  // 2. NAV SCROLL STATE
  // ══════════════════════════════════════════
  const nav = document.getElementById('nav');

  const handleNavScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  // ══════════════════════════════════════════
  // 3. MOBILE MENU
  // ══════════════════════════════════════════
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mmLinks    = document.querySelectorAll('.mm-link');

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mmLinks.forEach(l => l.addEventListener('click', closeMenu));


  // ══════════════════════════════════════════
  // 4. SMOOTH SCROLL
  // ══════════════════════════════════════════
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = nav.offsetHeight + 16;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });


  // ══════════════════════════════════════════
  // 5. SCROLL REVEAL  (multi-animation types)
  // ══════════════════════════════════════════
  const revealEls = document.querySelectorAll('.reveal-item');

  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => revealObs.observe(el));


  // ══════════════════════════════════════════
  // 6. COUNTDOWN TIMER
  // ══════════════════════════════════════════
  // Festival target: September 5, 2027 at 8:00 AM Colombia time (UTC-5)
  const festivalDate = new Date('2027-09-05T08:00:00-05:00');

  const pad = n => String(n).padStart(2, '0');

  const updateCountdown = () => {
    const now  = new Date();
    const diff = festivalDate - now;

    if (diff <= 0) {
      document.getElementById('cd-days').textContent  = '000';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-mins').textContent  = '00';
      document.getElementById('cd-secs').textContent  = '00';
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent  = String(days).padStart(3, '0');
    document.getElementById('cd-hours').textContent = pad(hours);
    document.getElementById('cd-mins').textContent  = pad(mins);
    document.getElementById('cd-secs').textContent  = pad(secs);
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);


  // ══════════════════════════════════════════
  // 7. HERO PARALLAX
  // ══════════════════════════════════════════
  const heroContent = document.querySelector('.hero__content');
  const heroBg      = document.querySelector('.hero__bg');

  const handleParallax = () => {
    const sy = window.scrollY;
    if (sy < window.innerHeight) {
      if (heroContent) heroContent.style.transform = `translateY(${sy * 0.18}px)`;
      if (heroBg)      heroBg.style.transform      = `translateY(${sy * 0.08}px)`;
    }
  };
  window.addEventListener('scroll', handleParallax, { passive: true });


  // ══════════════════════════════════════════
  // 8. ROPE CLIMBER SCROLL ANIMATION
  // ══════════════════════════════════════════
  const ropePath = document.getElementById('ropePath');
  const climber  = document.getElementById('climber');
  const frameA   = document.getElementById('frameA');
  const frameB   = document.getElementById('frameB');

  let lastScrollY   = 0;
  let animFrame     = 0;      // 0 = A visible, 1 = B visible
  let stepsSinceLast = 0;     // cuántos px ha subido desde el último toggle
  const STEP_PX     = 60;     // cada cuántos px de scroll alterna el frame
  let bobOffset     = 0;      // oscilación vertical suave
  let bobDir        = 1;

  // Partículas de magnesio
  const ropeTrack = document.getElementById('ropeTrack');
  const createChalkPuff = (topPx) => {
    if (!ropeTrack) return;
    const puff = document.createElement('div');
    puff.style.cssText = `
      position:absolute; right:14px; top:${topPx - 10}px;
      width:10px; height:10px; border-radius:50%;
      background:rgba(255,255,255,0.55); pointer-events:none;
      animation: chalkPuff 0.7s ease-out forwards;
    `;
    ropeTrack.appendChild(puff);
    setTimeout(() => puff.remove(), 750);
  };

  // Inyectar keyframe de polvo
  const chalkStyle = document.createElement('style');
  chalkStyle.textContent = `
    @keyframes chalkPuff {
      0%   { transform: scale(0.3) translateY(0);   opacity: 0.8; }
      60%  { transform: scale(1.8) translateY(-8px); opacity: 0.4; }
      100% { transform: scale(2.5) translateY(-18px);opacity: 0; }
    }
  `;
  document.head.appendChild(chalkStyle);

  const updateRope = () => {
    const scrollY   = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const pct       = Math.min(Math.max(scrollY / maxScroll, 0), 1);

    // ── Cuerda: dibujar progresivamente ──
    if (ropePath) {
      const total  = 4000;
      ropePath.style.strokeDashoffset = total - total * pct * 0.96;
    }

    // ── Posición vertical del escalador ──
    const minTop = 72;
    const maxTop = window.innerHeight - 100;
    const baseTop = minTop + pct * (maxTop - minTop);

    // Oscilación suave tipo "rebote de cuerda"
    bobOffset += bobDir * 0.4;
    if (Math.abs(bobOffset) > 3) bobDir *= -1;

    if (climber) {
      climber.style.top = `${baseTop + bobOffset}px`;
    }

    // ── Alternar frames según cuánto se ha scrolleado ──
    const delta = Math.abs(scrollY - lastScrollY);
    stepsSinceLast += delta;

    if (stepsSinceLast >= STEP_PX) {
      stepsSinceLast = 0;
      animFrame = animFrame === 0 ? 1 : 0;

      if (frameA && frameB) {
        if (animFrame === 0) {
          frameA.style.display = '';
          frameB.style.display = 'none';
        } else {
          frameA.style.display = 'none';
          frameB.style.display = '';
        }
        // Pequeña nube de magnesio al "agarrar"
        createChalkPuff(baseTop);
      }
    }

    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', updateRope, { passive: true });
  updateRope();


  // ══════════════════════════════════════════
  // 9. GALLERY LIGHTBOX
  // ══════════════════════════════════════════
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose   = document.getElementById('lbClose');
  const lbPrev    = document.getElementById('lbPrev');
  const lbNext    = document.getElementById('lbNext');
  const lbBackdrop = document.getElementById('lbBackdrop');

  const galleryItems = [...document.querySelectorAll('.gallery-item')];
  let currentIdx = 0;

  const openLightbox = (idx) => {
    currentIdx = idx;
    const img  = galleryItems[idx].querySelector('img');
    const cap  = galleryItems[idx].querySelector('.gallery-item__overlay span');
    lbImg.src        = img ? img.src : '';
    lbCaption.textContent = cap ? cap.textContent : '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  const navLightbox = (dir) => {
    currentIdx = (currentIdx + dir + galleryItems.length) % galleryItems.length;
    const img = galleryItems[currentIdx].querySelector('img');
    const cap = galleryItems[currentIdx].querySelector('.gallery-item__overlay span');
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = img ? img.src : '';
      lbCaption.textContent = cap ? cap.textContent : '';
      lbImg.style.opacity = '1';
    }, 120);
  };

  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  if (lbClose)   lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbPrev)    lbPrev.addEventListener('click', () => navLightbox(-1));
  if (lbNext)    lbNext.addEventListener('click', () => navLightbox(1));

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });

  lbImg.style.transition = 'opacity 0.12s ease';


  // ══════════════════════════════════════════
  // 10. CARD TILT (3D hover effect)
  // ══════════════════════════════════════════
  const tiltCards = document.querySelectorAll('.card, .ticket-card, .sponsor-logo');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x    = (e.clientX - rect.left) / rect.width  - 0.5;
      const y    = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
      card.style.transition = 'transform 0.08s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1)';
    });
  });


  // ══════════════════════════════════════════
  // 11. STATS COUNTER
  // ══════════════════════════════════════════
  const statNums = document.querySelectorAll('.stat__num');

  const countUp = el => {
    const raw   = el.textContent.replace(/[^\d]/g, '');
    const final = parseInt(raw, 10);
    if (isNaN(final) || final === 0) return;
    const suffix = el.textContent.replace(/[\d]/g, '');
    let step = 0;
    const steps = 40;
    const timer = setInterval(() => {
      step++;
      el.textContent = Math.min(Math.round((final / steps) * step), final) + suffix;
      if (step >= steps) clearInterval(timer);
    }, 1200 / steps);
  };

  const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { countUp(e.target); statsObs.unobserve(e.target); } });
  }, { threshold: 0.5 });

  statNums.forEach(s => statsObs.observe(s));


  // ══════════════════════════════════════════
  // 12. RIPPLE ON BUTTONS
  // ══════════════════════════════════════════
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `@keyframes ripple{to{width:260px;height:260px;opacity:0}}`;
  document.head.appendChild(rippleStyle);

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect   = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;border-radius:50%;width:0;height:0;
        left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;
        background:rgba(255,255,255,0.28);
        transform:translate(-50%,-50%) scale(0);
        animation:ripple 0.55s ease-out forwards;
        pointer-events:none;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // ══════════════════════════════════════════
  // 13. MODAL DE COMPRA
  // ══════════════════════════════════════════
  const cardInput = document.getElementById('cardNumber');
  if (cardInput) {
    cardInput.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 16);
      e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
    });
  }

  window.openModal = (ticketName, ticketPrice) => {
    document.getElementById('modalTicketName').textContent  = ticketName;
    document.getElementById('modalTicketPrice').textContent = ticketPrice;
    document.getElementById('buyForm').style.display        = '';
    document.getElementById('modalSuccess').classList.remove('visible');
    document.getElementById('modalBackdrop').classList.add('open');
    document.getElementById('buyModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = () => {
    document.getElementById('modalBackdrop').classList.remove('open');
    document.getElementById('buyModal').classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      const f = document.getElementById('buyForm');
      if (f) f.reset();
    }, 350);
  };

  window.handlePurchase = (e) => {
    e.preventDefault();
    const btn  = document.querySelector('.modal__submit');
    const text = document.getElementById('submitText');
    btn.disabled   = true;
    text.textContent = 'Procesando...';
    setTimeout(() => {
      const name = document.getElementById('modalTicketName').textContent;
      document.getElementById('successTicket').textContent = name;
      document.getElementById('buyForm').style.display     = 'none';
      document.getElementById('modalSuccess').classList.add('visible');
      btn.disabled     = false;
      text.textContent = 'Confirmar compra';
    }, 1800);
  };

});
