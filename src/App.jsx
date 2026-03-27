import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav';
import About from './Components/About';
import Lenis from 'lenis';
import Marquee from './Components/Marquee';
import Marquee1 from './Components/Marquee1';
import Based from './Components/Based';
import Track from './Components/Track';
import Services from './Components/Services';


function Home() {
  return (
    <div className="app-container">
      <Track />
      <Navbar />
      <About />
      <Marquee />
      <Based />
      <Marquee1 />
      <Services />
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App
