import React from 'react';

function Innovation() {
  return (
    <section id="innovation" className="section strategy-section">
      <div className="container">
        <div className="strategy-content">
          <div className="strategy-text">
            <span className="section-label">INNOVATION</span>
            <h2 className="section-title">Research &amp; Security Intelligence</h2>
            <p>
              Our teams continuously monitor emerging threats, regional risk patterns, and
              technology shifts to ensure Charis Eagle Group remains several steps ahead of
              adversaries.
            </p>
            <p>
              From AI-assisted surveillance to integrated command centers, we turn complex
              risk data into clear, actionable protection strategies for every client.
            </p>
          </div>
          <div className="strategy-visual">
            <div className="strategy-circle" id="strategy-circle-innovation">
              <div className="strategy-item">Research</div>
              <div className="strategy-item">Analytics</div>
              <div className="strategy-item">Technology</div>
              <div className="strategy-item">Insight</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
