import React, { useRef } from 'react';
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

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Router>
      <div className="App inter-font">
        <nav className="navbar navbar-expand-md fixed-top bg-white roboto-font">
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
        <div className="container-fluid py-4">
          <div className="row">
            <Routes>
              <Route
                path="/"
                element={<Hero />}
              />
            </Routes>
            <div ref={aboutRef}>
              <About />
            </div>
            <div className='background-grey' ref={skillsRef}>
              <Skills />
            </div>
            <div ref={projectRef}>
              <Project />
            </div>
            <div ref={contactRef}>
              <Contact />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span className="text-muted">Copyright &copy; 2023. All rights are reserved</span>
            </div>

            <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <div className="col-md-2">
                <a href="https://www.linkedin.com/in/henmateus/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
              </div>
              <div className="col-md-2">
                <a href="https://github.com/hen-mateus" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
