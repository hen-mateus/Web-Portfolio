import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Project() {
    return (
        <div className="container my-5">
            <div className="col-md-12 titulo">
                <p>Projects</p>
            </div>
            <div className="col-md-12 roboto-font">
                <p>I have been working in web development industry for over 3 years.</p>
            </div>
            <div className="container mt-4 projects-main">
                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <p>CAR RENTAL 🚗</p>
                            </div>
                            <div className="col-md-12 mb-2 pe-5 ps-5">
                                <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.  </p>
                            </div>
                            <div className="col-md-12 mb-4 d-flex flex-row justify-content-center">
                                <p className='m-2 box-effect'>React</p>
                                <p className='m-2 box-effect'>Node</p>
                            </div>
                            <div className="col-md-12 mb-4">
                                <a href="https://github.com/hen-mateus" target="_blank" className='p-2'>Code <FontAwesomeIcon icon={faGithub} size="xl" /></a>
                                <a href="https://github.com/hen-mateus" target="_blank" className='p-2'>Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 project-img">
                        <img src="images/hero-section.svg" alt="Imagem" classNames="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}