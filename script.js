// Theme toggle (light / dark), persisted per visitor
(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  let saved = null;
  try { saved = localStorage.getItem('aeg-theme'); } catch (e) {}

  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      const next = isLight ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('aeg-theme', next); } catch (e) {}
    });
  }
})();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal-on-scroll for cards and timeline items
const revealTargets = document.querySelectorAll(
  '.project-card, .skill-card, .tl-item, .about-facts, .about-text'
);

if ('IntersectionObserver' in window) {
  revealTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
