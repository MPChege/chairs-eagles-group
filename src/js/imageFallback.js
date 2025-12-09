export function initImageFallbacks() {
  const images = document.querySelectorAll('img[data-src], img[src]');
  
  const fallbackSVG = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#C00000;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#0033AA;stop-opacity:0.1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <g transform="translate(200,150)">
        <path d="M-30,-20 L0,-40 L30,-20 L20,20 L-20,20 Z" fill="#C00000" opacity="0.3"/>
        <circle cx="0" cy="0" r="15" fill="none" stroke="#0033AA" stroke-width="2" opacity="0.5"/>
      </g>
    </svg>
  `;

  images.forEach(img => {
    const originalSrc = img.src || img.getAttribute('data-src');
    
    img.addEventListener('error', function() {
      // Create a data URL from the SVG
      const svgBlob = new Blob([fallbackSVG], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);
      this.src = url;
      this.style.objectFit = 'cover';
      this.style.background = 'linear-gradient(135deg, rgba(192,0,0,0.1), rgba(0,51,170,0.1))';
    });

    // Lazy load images with data-src
    if (img.hasAttribute('data-src')) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.getAttribute('data-src');
            image.removeAttribute('data-src');
            observer.unobserve(image);
          }
        });
      });
      observer.observe(img);
    }
  });
}

