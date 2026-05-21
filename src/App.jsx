import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AcademicLearning from './components/AcademicLearning';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark font-body antialiased selection:bg-brand-soft selection:text-brand-dark relative">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <AcademicLearning />
        <Strengths />
        <Contact />
      </main>

      <Footer />
      
      {/* Scroll Progress Indicator (Optional enhancement) */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div id="scroll-progress" className="h-full bg-brand-accent w-0 transition-all duration-150 ease-out"></div>
      </div>
    </div>
  );
}

// Simple vanilla JS for scroll progress
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      scrollProgress.style.width = scrolled;
    }
  });
}

export default App;
