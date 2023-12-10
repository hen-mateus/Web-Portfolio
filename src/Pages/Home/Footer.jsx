import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer--container">
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Copyright © 2023. Todos os direitos reservados.</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/henmateus/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </a>
            </li>
            <li>
              <a href="https://github.com/hen-mateus" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
