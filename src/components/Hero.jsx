import React, { useEffect } from 'react';
import { initHeroAnimations } from '../js/hero.js';

function Hero() {
  useEffect(() => {
    initHeroAnimations();
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <canvas id="particle-canvas" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-panel">
          <div className="hero-badge">ELITE PRIVATE SECURITY</div>
          <h1 className="hero-title">
            <span className="hero-title-line">CHARIS EAGLE GROUP</span>
            <span className="hero-title-line">PROTECTING WHAT MATTERS</span>
          </h1>
          <p className="hero-subtitle">
            Discreet, high‑readiness protection for leaders, assets, and events across Kenya—planned
            by specialists, active 24/7.
          </p>
          <div className="hero-buttons">
            <a href="#inquiry" className="btn btn-primary magnetic">
              Build My Security Brief
            </a>
            <a href="#services" className="btn btn-secondary magnetic">
              Explore Services
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-mouse" />
      </div>
    </section>
  );
}

export default Hero;
