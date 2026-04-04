/* =========================================================
   PORTFOLIO — main.js
   Handles: nav scroll, mobile menu, reveal animations,
            project filters, skill bars, contact form
   ========================================================= */

(() => {
  'use strict';

  // ─── NAV: scroll shadow ───────────────────────────────────
  const nav = document.getElementById('nav');

  const updateNav = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();


  // ─── MOBILE MENU ──────────────────────────────────────────
  const hamburger   = document.getElementById('hamburger');
  const navLinks    = document.querySelector('.nav__links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });


  // ─── REVEAL ON SCROLL ─────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));


  // ─── SKILL BARS ───────────────────────────────────────────
  const skillSection = document.getElementById('about');
  let skillsAnimated = false;

  const buildSkillBars = () => {
    document.querySelectorAll('.skill-bar').forEach(bar => {
      const fill = document.createElement('div');
      fill.className = 'skill-bar__fill';
      bar.appendChild(fill);
    });
  };

  const animateSkillBars = () => {
    if (skillsAnimated) return;
    skillsAnimated = true;

    document.querySelectorAll('.skill-bar').forEach((bar, i) => {
      const level = bar.getAttribute('data-level') || '0';
      const fill  = bar.querySelector('.skill-bar__fill');
      if (!fill) return;

      setTimeout(() => {
        fill.style.width = level + '%';
      }, i * 120);
    });
  };

  buildSkillBars();

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  if (skillSection) skillObserver.observe(skillSection);


  // ─── PROJECT FILTERS ──────────────────────────────────────
  const filterBtns    = document.querySelectorAll('.filter-btn');
  const projectCards  = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cats = card.getAttribute('data-category') || '';

        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('hidden');
          // Re-trigger reveal if needed
          setTimeout(() => card.classList.add('visible'), 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  // ─── CONTACT FORM ─────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  const formStatus  = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      formStatus.className = 'form-status';
      formStatus.textContent = '';

      const data = Object.fromEntries(new FormData(contactForm));

      // Basic validation
      if (!data.name?.trim()) {
        showStatus('Please enter your name.', 'error');
        return;
      }
      if (!isValidEmail(data.email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
      }
      if (!data.message?.trim()) {
        showStatus('Please add a message.', 'error');
        return;
      }

      const submitBtn = contactForm.querySelector('[type="submit"]');
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      // Simulate send (replace with your API / EmailJS / Formspree endpoint)
      await fakeSubmit(data);

      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      contactForm.reset();
      showStatus('Message sent! I\'ll get back to you soon.', 'success');
    });
  }

  function showStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className = 'form-status ' + type;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
  }

  // Send via EmailJS
  function fakeSubmit(data) {
    return emailjs.send('service_3aaozfm', 'template_t3sqg5k', {
      title:   data.project || 'General Inquiry',
      name:    data.name,
      message: `From: ${data.email}\n\n${data.message}`,
    });
  }


  // ─── ACTIVE NAV LINK on scroll ────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--text)'
          : '';
      });
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));


  // ─── SMOOTH ANCHOR OFFSET (account for fixed nav) ─────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

})();
