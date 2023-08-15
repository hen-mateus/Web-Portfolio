import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
    return (
        <div className="container my-5"> 
            <div className="row mt-5">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-12 text-start color-blue roboto-font">
                            <p>Hi, my name is</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-start titulo">
                            <p>Henrique Mateus.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-start color-grey titulo-sec">
                            <p>I build things for the web.</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12 text-start color-grey">
                            <p>Passionate about merging technology and design to create captivating digital experiences. Proficient in programming languages and skilled in crafting visually appealing websites and interfaces. Excited to bring creativity and technical expertise to innovative projects.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-1">
                            <a href="https://www.linkedin.com/in/henmateus/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
                        </div>
                        <div className="col-md-1">
                        <a href="https://github.com/hen-mateus" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src="/images/hero-section.svg" alt="Imagem do Herói" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
