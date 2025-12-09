import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initValues() {
  const valueCards = document.querySelectorAll('.value-card');

  valueCards.forEach((card, index) => {
    // Staggered entrance animation
    gsap.from(card, {
      scale: 0.8,
      rotation: -5,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Hover rotation effect
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        rotation: 2,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotation: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

