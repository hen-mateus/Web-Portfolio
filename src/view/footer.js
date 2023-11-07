import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  // Coloque o conteúdo do rodapé aqui
  return (
    <div className="container-fluid background-grey">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top color-white custom-container">
            <div className="col-md-4 d-flex align-items-center">
              <span>Copyright &copy; 2023. All rights are reserved</span>
            </div>
            <div className="nav col-md-4 justify-content-end d-flex">
              <div className="col-md-2">
                <a href="https://www.linkedin.com/in/henmateus/" target="_blank" rel="noreferrer" className='text-decoration-none nav-link color-white'><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
              </div>
              <div className="col-md-2">
                <a href="https://github.com/hen-mateus" target="_blank" rel="noreferrer" className='text-decoration-none nav-link color-white'><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
              </div>
            </div>
          </footer>
        </div>
  );
}

export default Footer;
