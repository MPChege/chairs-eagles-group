import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 20;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        gsap.to('#preloader', {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            onComplete?.();
          },
        });
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div id="preloader" className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          <div className="shield-icon" />
        </div>
        <div className="preloader-text">CHARIS EAGLE GROUP</div>
        <div className="preloader-progress">
          <div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
