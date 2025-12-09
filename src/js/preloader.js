import { gsap } from 'gsap';

export function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.querySelector('.preloader-progress-bar');
  const mainContent = document.getElementById('main-content');

  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // Animate progress bar
      gsap.to(progressBar, {
        width: '100%',
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          // Fade out preloader
          gsap.to(preloader, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
              preloader.classList.add('hidden');
              mainContent.style.opacity = '0';
              gsap.to(mainContent, {
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          });
        }
      });
    } else {
      progressBar.style.width = progress + '%';
    }
  }, 100);
}

