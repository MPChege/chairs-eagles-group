import React from 'react';

function Inquiry() {
  return (
    <section id="inquiry" className="section inquiry-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">SECURITY BRIEF</span>
          <h2 className="section-title">Design Your Protection Plan</h2>
        </div>
        <div className="inquiry-grid">
          <form className="inquiry-form" id="inquiry-form">
            <div className="inquiry-field">
              <label htmlFor="inquiry-type">What do you need protected?</label>
              <select id="inquiry-type">
                <option value="executive">Executive / VIP Protection</option>
                <option value="corporate">Corporate Premises</option>
                <option value="residential">Residential Property</option>
                <option value="event">Event or Activation</option>
                <option value="transport">Secure Transport &amp; Logistics</option>
              </select>
            </div>
            <div className="inquiry-field inquiry-field-inline">
              <div>
                <label htmlFor="inquiry-locations">Number of locations</label>
                <input type="range" id="inquiry-locations" min="1" max="5" defaultValue="1" />
                <div className="inquiry-range-value">
                  <span id="inquiry-locations-value">1</span> site
                </div>
              </div>
              <div>
                <label htmlFor="inquiry-urgency">Urgency level</label>
                <select id="inquiry-urgency">
                  <option value="standard">Standard (within 7 days)</option>
                  <option value="priority">Priority (48–72 hours)</option>
                  <option value="critical">Critical (same day)</option>
                </select>
              </div>
            </div>
            <div className="inquiry-field">
              <label>Coverage window</label>
              <div className="inquiry-pills" id="inquiry-coverage">
                <button type="button" data-value="day">Daytime</button>
                <button type="button" data-value="night">Night</button>
                <button type="button" data-value="24-7" className="active">
                  24/7
                </button>
              </div>
            </div>
            <div className="inquiry-field">
              <label>What matters most?</label>
              <div className="inquiry-pills inquiry-pills-multi" id="inquiry-priorities">
                <button type="button" data-value="discreet">
                  Discreet presence
                </button>
                <button type="button" data-value="visible">
                  Visible deterrence
                </button>
                <button type="button" data-value="technology">
                  Technology &amp; monitoring
                </button>
                <button type="button" data-value="response">Rapid response</button>
              </div>
            </div>
            <button type="button" className="btn btn-secondary" id="inquiry-to-contact">
              Send this brief to the contact form
            </button>
          </form>
          <div className="inquiry-summary" id="inquiry-summary">
            <h3>Your tailored security brief</h3>
            <p className="inquiry-summary-intro">
              Answer a few quick questions and we will generate a concise brief our team can
              act on immediately.
            </p>
            <ul className="inquiry-summary-list" id="inquiry-summary-list">
              <li>Protection focus: Executive / VIP Protection</li>
              <li>Coverage: 1 site, 24/7 presence</li>
              <li>Urgency: Standard (within 7 days)</li>
              <li>Priority: Discreet presence with rapid response readiness</li>
            </ul>
            <p className="inquiry-summary-footnote">
              When you send your message, this brief will be attached so our operations team can
              respond with a precise proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inquiry;
