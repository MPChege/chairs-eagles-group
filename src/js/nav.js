import { lenis } from './smoothScroll.js';

export function initNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

  if (!navToggle || !navList || !navLinks.length) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    if (isOpen) {
      navList.classList.add('open');
    } else {
      navList.classList.remove('open');
    }
  });

  function closeNav() {
    navToggle.classList.remove('open');
    navList.classList.remove('open');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;

      event.preventDefault();
      const section = document.querySelector(targetId);
      if (!section) return;

      // Close nav on mobile
      closeNav();

      const offset = -80;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(section, { offset });
      } else if (section.scrollIntoView) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}


