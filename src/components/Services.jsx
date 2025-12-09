import React from 'react';

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">SERVICES</span>
          <h2 className="section-title">Comprehensive Security Solutions</h2>
        </div>
        <div className="services-grid" id="services-grid">
          <div className="service-card">
            <div className="service-image-wrapper">
              <img
                src="/images/executive-protection-service.jpg"
                alt="Executive Protection"
                className="service-image"
                loading="lazy"
              />
            </div>
            <div className="service-icon">01</div>
            <h3>Executive Protection</h3>
            <p>
              Elite personal security for high-profile individuals and corporate executives,
              ensuring their safety in all environments.
            </p>
            <div className="service-hover-effect" />
          </div>
          <div className="service-card">
            <div className="service-image-wrapper">
              <img
                src="/images/patrol-vehicles.jpg"
                alt="Patrol Vehicles"
                className="service-image"
                loading="lazy"
              />
            </div>
            <div className="service-icon">02</div>
            <h3>Patrol Services</h3>
            <p>
              24/7 mobile patrol units equipped with advanced technology to monitor and protect
              your assets around the clock.
            </p>
            <div className="service-hover-effect" />
          </div>
          <div className="service-card">
            <div className="service-image-wrapper">
              <img
                src="/images/cctv-monitoring.jpg"
                alt="CCTV Monitoring"
                className="service-image"
                loading="lazy"
              />
            </div>
            <div className="service-icon">03</div>
            <h3>CCTV Monitoring</h3>
            <p>
              State-of-the-art surveillance systems with real-time monitoring and intelligent
              threat detection capabilities.
            </p>
            <div className="service-hover-effect" />
          </div>
          <div className="service-card">
            <div className="service-image-wrapper">
              <img
                src="/images/corporate-security.jpg"
                alt="Corporate Security"
                className="service-image"
                loading="lazy"
              />
            </div>
            <div className="service-icon">04</div>
            <h3>Corporate Security</h3>
            <p>
              Comprehensive security solutions for businesses, including access control,
              perimeter security, and incident response.
            </p>
            <div className="service-hover-effect" />
          </div>
          <div className="service-card">
            <div className="service-image-wrapper">
              <img
                src="/images/event-security.jpg"
                alt="Event Security"
                className="service-image"
                loading="lazy"
              />
            </div>
            <div className="service-icon">05</div>
            <h3>Event Security</h3>
            <p>
              Professional security services for corporate events, conferences, and high-profile
              gatherings with crowd management expertise.
            </p>
            <div className="service-hover-effect" />
          </div>
          <div className="service-card">
            <div className="service-image-wrapper">
              <img
                src="/images/rapid-response.jpg"
                alt="Rapid Response Team"
                className="service-image"
                loading="lazy"
              />
            </div>
            <div className="service-icon">06</div>
            <h3>Rapid Response</h3>
            <p>
              Emergency response teams ready to deploy within minutes, providing immediate
              security intervention when needed.
            </p>
            <div className="service-hover-effect" />
          </div>
        </div>
        <div className="services-carousel" id="services-carousel">
          <div className="carousel-track" id="carousel-track" />
        </div>
      </div>
    </section>
  );
}

export default Services;
