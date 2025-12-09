import { initPreloader } from './preloader.js';
import { initSmoothScroll } from './smoothScroll.js';
import { initHeroAnimations } from './hero.js';
import { initScrollAnimations } from './scrollAnimations.js';
import { initServices } from './services.js';
import { initStats } from './stats.js';
import { initValues } from './values.js';
import { initContact } from './contact.js';
import { initParticles } from './particles.js';
import { initMagneticButtons } from './magnetic.js';
import { initTheme } from './theme.js';
import { initImageFallbacks } from './imageFallback.js';
import { initInquiry } from './inquiry.js';
import { initNav } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initSmoothScroll();
  initParticles();
  initHeroAnimations();
  initScrollAnimations();
  initServices();
  initStats();
  initValues();
  initContact();
  initMagneticButtons();
  initTheme();
  initImageFallbacks();
  initInquiry();
  initNav();
});

