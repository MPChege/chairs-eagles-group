import React, { useEffect } from 'react';
import { initStats } from '../js/stats.js';

function Stats() {
  useEffect(() => {
    initStats();
  }, []);

  return (
    <section id="stats" className="section stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number" data-target="5000">0</div>
            <div className="stat-label">Clients Protected</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-target="5">0</div>
            <div className="stat-label">Minute Response Time</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-target="1000">0</div>
            <div className="stat-label">Guards Available</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-target="24">0</div>
            <div className="stat-label">Hours Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
