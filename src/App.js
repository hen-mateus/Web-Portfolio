import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import About from './view/about';
import Contact from './view/contact';
import Hero from './view/hero-section';
import Project from './view/projects';
import Skills from './view/skills';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import './fonts.css';

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
        <nav className="navbar navbar-expand-md fixed-top bg-white roboto-font" style={{ boxShadow: navbarShadowStyle }}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/images/logo-02.png" alt="Logo" className="img-fluid" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => scrollToSection(aboutRef)}
                  >
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => scrollToSection(projectRef)}
                  >
                    Projects
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => scrollToSection(contactRef)}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <Routes>
              <Route
                path="/"
                element={<Hero />}
              />
            </Routes>
            <div className='container my-5' ref={aboutRef}>
              <About />
            </div>
            <div className='container background-grey my-5' ref={skillsRef}>
              <Skills />
            </div>
            <div className='container my-5' ref={projectRef} >
              <Project />
            </div>
            <div className='container background-grey' ref={contactRef}>
              <Contact />
            </div>
          </div>
        </div>
        <div className="container-fluid background-grey">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top color-white">
            <div className="col-md-4 d-flex align-items-center">
              <span>Copyright &copy; 2023. All rights are reserved</span>
            </div>
            <div className="nav col-md-4 justify-content-end d-flex">
              <div className="col-md-2">
                <a href="https://www.linkedin.com/in/henmateus/" target="_blank" className='text-decoration-none text-reset'><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
              </div>
              <div className="col-md-2">
                <a href="https://github.com/hen-mateus" target="_blank" className='text-decoration-none text-reset'><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
