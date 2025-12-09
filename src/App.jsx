import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Preloader from './components/Preloader.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Inquiry from './components/Inquiry.jsx';
import Stats from './components/Stats.jsx';
import Values from './components/Values.jsx';
import Innovation from './components/Innovation.jsx';
import Teamwork from './components/Teamwork.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import { useTheme } from './hooks/useTheme.js';
import { initSmoothScroll, initGlobalAnimations } from './utils/animations.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    initSmoothScroll();
    initGlobalAnimations();
  }, []);

  return (
    <div data-theme={theme}>
      <Preloader onComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <Navbar />
          <main id="main-content" className="main-content">
            <Hero />
            <About />
            <Services />
            <Inquiry />
            <Stats />
            <Values />
            <Innovation />
            <Teamwork />
            <Contact />
            <Footer />
          </main>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </>
      )}
    </div>
  );
}

export default App;
