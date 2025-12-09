import Lenis from 'lenis';

let lenis;

export function initSmoothScroll() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Update GSAP ScrollTrigger when Lenis scrolls
  lenis.on('scroll', () => {
    if (window.ScrollTrigger) {
      ScrollTrigger.update();
    }
  });
}

export { lenis };

