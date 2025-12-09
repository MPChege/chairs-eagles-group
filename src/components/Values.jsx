import React from 'react';

function Values() {
  return (
    <section id="values" className="section values-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">CORE VALUES</span>
          <h2 className="section-title">The Foundation of Excellence</h2>
        </div>
        <div className="values-grid" id="values-grid">
          <div className="value-card">
            <div className="value-icon">01</div>
            <h3>Integrity</h3>
            <p>Uncompromising honesty and ethical conduct in every interaction and decision we make.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">02</div>
            <h3>Leadership</h3>
            <p>Setting industry standards through innovation, expertise, and forward-thinking strategies.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">03</div>
            <h3>Customer Focus</h3>
            <p>Placing our clients&apos; needs at the center of everything we do, delivering personalized solutions.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">04</div>
            <h3>Innovation</h3>
            <p>Embracing cutting-edge technology and methodologies to stay ahead of evolving security challenges.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">05</div>
            <h3>Teamwork</h3>
            <p>Collaborative excellence through seamless coordination and mutual respect among our team members.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">06</div>
            <h3>Growth</h3>
            <p>Continuous improvement and expansion of our capabilities to serve clients better every day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
