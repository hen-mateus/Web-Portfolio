import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
    return (
        <div className="container custom-container my-5">
            <div className="row mt-4">
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <div className="text-start color-blue roboto-font">
                        <p>Hi, my name is</p>
                    </div> 
                    <div className="text-start titulo">
                        <p>Henrique Mateus.</p>
                    </div>
                    <div className="text-start color-grey titulo-sec">
                        <p>I build things for the web.</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-start color-grey">
                            Passionate about merging technology and design to create captivating digital experiences.
                            Proficient in programming languages and skilled in crafting visually appealing websites and interfaces.
                            Excited to bring creativity and technical expertise to innovative projects.
                        </p>
                    </div>
                    <div className="mt-4 d-flex gap-4">
                        <a href="https://www.linkedin.com/in/henmateus/" target="_blank" className='text-decoration-none nav-link'>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://github.com/hen-mateus" target="_blank" className='text-decoration-none nav-link'>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src="/assets/hero-section.svg" alt="Imagem do Herói" className="img-fluid" />
                </div>
            </div>

        </div>
    );
}
