import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitType } from './splitText.js';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimations() {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroButtons = document.querySelector('.hero-buttons');
  const heroBadge = document.querySelector('.hero-badge');

  // Split text for animation
  if (heroTitle) {
    const titleLines = heroTitle.querySelectorAll('.hero-title-line');
    if (titleLines.length > 0) {
      gsap.from(titleLines, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      });
    } else {
      // Fallback if lines don't exist
      gsap.from(heroTitle, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
      });
    }
  }

  // Animate subtitle
  if (heroSubtitle) {
    gsap.from(heroSubtitle, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: 'power3.out'
    });
  }

  // Animate buttons
  if (heroButtons) {
    gsap.from(heroButtons.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 1.5,
      ease: 'power3.out'
    });
  }

  // Animate badge
  if (heroBadge) {
    gsap.from(heroBadge, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      ease: 'back.out(1.7)'
    });
  }

  // Parallax effect on scroll (disabled on mobile for performance)
  if (window.innerWidth >= 768) {
    gsap.to('.hero-content', {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}

