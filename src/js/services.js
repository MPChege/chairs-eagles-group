import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initServices() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    const icon = card.querySelector('.service-icon');
    
    // Hover animation
    card.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        y: -10,
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  });

  // Carousel for additional services (if needed)
  const carousel = document.getElementById('services-carousel');
  if (carousel) {
    // Carousel implementation can be added here
  }
}

