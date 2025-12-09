import React from 'react';

function Teamwork() {
  return (
    <section id="strategy" className="section strategy-section">
      <div className="container">
        <div className="strategy-content">
          <div className="strategy-text">
            <span className="section-label">STRATEGY</span>
            <h2 className="section-title">Our Strategic Approach</h2>
            <p>
              At Charis Eagle Group Ltd, our strategy is built on four pillars: Research,
              Innovation, Teamwork, and Growth. We continuously invest in understanding
              emerging security threats, developing innovative solutions, fostering
              collaborative excellence, and expanding our capabilities to provide unmatched
              protection services.
            </p>
            <p>
              Our research-driven approach ensures we stay ahead of potential risks, while our
              commitment to innovation allows us to leverage the latest technologies. Through
              teamwork, we create seamless security operations, and our focus on growth
              enables us to scale our services to meet the evolving needs of our clients.
            </p>
          </div>
          <div className="strategy-visual">
            <div className="strategy-circle" id="strategy-circle">
              <div className="strategy-item">Research</div>
              <div className="strategy-item">Innovation</div>
              <div className="strategy-item">Teamwork</div>
              <div className="strategy-item">Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teamwork;
