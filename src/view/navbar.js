import React from 'react';

function Navbar({ aboutRef, projectRef, contactRef, scrollToSection, navbarShadowStyle}) {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-white roboto-font" style={{ boxShadow: navbarShadowStyle }}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="/assets/logo.png" alt="Logo" className="img-fluid" />
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
  );
}

export default Navbar;
