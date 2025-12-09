import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initStats() {
  const statNumbers = document.querySelectorAll('.stat-number');

  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2;
    let current = 0;
    const increment = target / (duration * 60); // 60fps

    ScrollTrigger.create({
      trigger: stat,
      start: 'top 80%',
      onEnter: () => {
        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          
          // Format number with + for large numbers
          if (target >= 1000) {
            stat.textContent = Math.floor(current).toLocaleString() + '+';
          } else {
            stat.textContent = Math.floor(current);
          }
        }, 1000 / 60);
      },
      once: true
    });
  });
}

