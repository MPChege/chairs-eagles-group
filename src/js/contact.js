import { gsap } from 'gsap';

export function initContact() {
  const contactForm = document.getElementById('contact-form');
  const submitButton = contactForm?.querySelector('.btn-submit');
  const particles = submitButton?.querySelector('.btn-particles');

  // Animate contact icons
  const contactIcons = document.querySelectorAll('.contact-icon');
  contactIcons.forEach((icon, index) => {
    gsap.to(icon, {
      y: -10,
      duration: 2,
      delay: index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  });

  // Form submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Create particle effect
      if (particles && submitButton) {
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.style.position = 'absolute';
          particle.style.width = '4px';
          particle.style.height = '4px';
          particle.style.background = '#C00000';
          particle.style.borderRadius = '50%';
          particle.style.left = '50%';
          particle.style.top = '50%';
          particles.appendChild(particle);

          gsap.to(particle, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => particle.remove()
          });
        }
      }

      // Show success message (you can customize this)
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
}

