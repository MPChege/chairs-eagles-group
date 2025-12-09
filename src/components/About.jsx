import React from 'react';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">ABOUT US</span>
          <h2 className="section-title">Excellence in Security Solutions</h2>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional Security Guards"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div className="about-icon">01</div>
            <h3>Company Profile</h3>
            <p>
              Charis Eagle Group Ltd stands as a premier private security firm, delivering
              unparalleled protection services across Kenya and beyond. With a foundation
              built on integrity, innovation, and unwavering commitment, we safeguard what
              matters most to our clients.
            </p>
          </div>
          <div className="about-card">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Executive Protection Services"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div className="about-icon">02</div>
            <h3>Our Vision</h3>
            <p>
              To be Africa&apos;s most trusted and innovative security partner, setting the gold
              standard for excellence in private protection services while maintaining the
              highest levels of professionalism and reliability.
            </p>
          </div>
          <div className="about-card">
            <div className="about-image-wrapper">
              <img
                src="/images/security-team.jpg"
                alt="Security Team"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div className="about-icon">03</div>
            <h3>Our Mission</h3>
            <p>
              To provide world-class security solutions that exceed expectations, ensuring the
              safety and peace of mind of our clients through cutting-edge technology, highly
              trained personnel, and strategic excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
