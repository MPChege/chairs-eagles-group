import React from 'react';

function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-logo">
          <span className="header-logo-mark">CE</span>
          <div className="header-logo-text">
            <span>Charis Eagle</span>
            <span>Group Ltd</span>
          </div>
        </div>
        <nav className="site-nav">
          <button className="nav-toggle" aria-label="Toggle navigation">
            <span />
            <span />
          </button>
          <ul className="nav-list">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#inquiry">Security Brief</a></li>
            <li><a href="#stats">Stats</a></li>
            <li><a href="#values">Values</a></li>
            <li><a href="#strategy">Strategy</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
