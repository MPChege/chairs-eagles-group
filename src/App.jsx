import React from 'react';
import Navbar from './components/Navbar.jsx';
import Preloader from './components/Preloader.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Values from './components/Values.jsx';
import Stats from './components/Stats.jsx';
import Innovation from './components/Innovation.jsx';
import Teamwork from './components/Teamwork.jsx';
import EventDesigner from './components/EventDesigner.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Values />
        <Stats />
        <Innovation />
        <Teamwork />
        <EventDesigner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
