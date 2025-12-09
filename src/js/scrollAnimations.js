import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitType } from './splitText.js';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Animate section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    const split = new SplitType(title, { types: 'words' });
    
    gsap.from(split.words, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Fade up animations for cards (reduced on mobile)
  const cards = document.querySelectorAll('.about-card, .service-card, .value-card');
  const isMobile = window.innerWidth < 768;
  
  cards.forEach((card, index) => {
    gsap.from(card, {
      y: isMobile ? 30 : 50,
      opacity: 0,
      duration: isMobile ? 0.5 : 0.8,
      delay: isMobile ? index * 0.05 : index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Parallax for sections (disabled on mobile for performance)
  if (window.innerWidth >= 768) {
    gsap.utils.toArray('.section').forEach(section => {
      gsap.to(section, {
        y: (i, el) => {
          return -el.offsetHeight * 0.1;
        },
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  // Animate stats section
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    gsap.from('.stat-card', {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: statsSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }
}

