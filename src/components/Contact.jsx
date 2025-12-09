import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">CONTACT</span>
          <h2 className="section-title">Get in Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">HQ</div>
              <div>
                <h3>Location</h3>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">TEL</div>
              <div>
                <h3>Phone</h3>
                <p>+254 XXX XXX XXX</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">MAIL</div>
              <div>
                <h3>Email</h3>
                <p>info@chariseaglegroup.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form" id="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required />
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <span>Send Message</span>
              <div className="btn-particles" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
