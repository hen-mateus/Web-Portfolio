import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import './fonts.css';

import About from './view/about';
import Contact from './view/contact';
import Hero from './view/hero-section';
import Project from './view/projects';
import Skills from './view/skills';
import Navbar from './view/navbar';
import Footer from './view/footer';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const navbarShadowStyle = navbarShadow ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none';

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Atualize o estado com base na posição de rolagem
      if (window.scrollY > 0) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    // Adicione um ouvinte de evento para a rolagem da janela
    window.addEventListener('scroll', handleScroll);

    // Remova o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className={`App inter-font ${navbarShadow ? 'navbar-shadow' : ''}`}>
        <Navbar
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
          scrollToSection={scrollToSection}
          navbarShadowStyle={navbarShadowStyle}
        />
        <div className="container-fluid mt-5">
          <div className="row">
            <Routes>
              <Route
                path="/"
                element={<Hero />}
              />
            </Routes>
            <div className='container background-grey my-5' ref={skillsRef}>
              <Skills />
            </div>
            <div className='container my-5' ref={aboutRef}>
              <About />
            </div>
            <div className='container my-5' ref={projectRef} >
              <Project />
            </div>
            <div className='container background-grey' ref={contactRef}>
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
