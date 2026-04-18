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
import Road from './Pages/Road';
import Footer from './Components/Footer';
import Tic from './Pages/Tic';
import Sea from './Pages/Sea';
import Air from './Pages/Air';
import Customs from './Pages/Customs';
import Warehousing from './Pages/Warehousing';
import ScrollToTop from './Components/ScrollToTop';
import Banner from './Components/Banner';
import Projects from './Pages/Projects';
import Aboutus from './Pages/Aboutus';


function Home() {
  return (
    <div className="app-container">
      <Track />
      <Navbar />
      <About />
      <Marquee />
      <Based />
      <Services />
      <Banner />
      <Footer />
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

    window.lenis = lenis;

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/road" element={<Road />} />
        <Route path='/tic' element={<Tic />} />
        <Route path='/sea' element={<Sea />} />
        <Route path='/air' element={<Air />} />
        <Route path='/customs' element={<Customs />} />
        <Route path='/warehousing' element={<Warehousing />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<Aboutus />} />
      </Routes>
    </Router>
  );
}


export default App
