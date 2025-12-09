import { initSmoothScroll as initLenis } from '../js/smoothScroll.js';
import { initHeroAnimations } from '../js/hero.js';
import { initScrollAnimations } from '../js/scrollAnimations.js';
import { initServices } from '../js/services.js';
import { initStats } from '../js/stats.js';
import { initValues } from '../js/values.js';
import { initContact } from '../js/contact.js';
import { initParticles } from '../js/particles.js';
import { initMagneticButtons } from '../js/magnetic.js';

export function initSmoothScroll() {
  initLenis();
}

export function initGlobalAnimations() {
  initParticles();
  initHeroAnimations();
  initScrollAnimations();
  initServices();
  initStats();
  initValues();
  initContact();
  initMagneticButtons();
}
