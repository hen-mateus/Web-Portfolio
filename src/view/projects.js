import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Project() {
    return (
        <div className="my-5">
            <div className="col-md-12 titulo">
                <p>Projects</p>
            </div>
            <div className="col-md-12 roboto-font">
                <p>I have been working in web development industry for over 3 years.</p>
            </div>
            <div className="container mt-4 projects-main">
                <div className="row">
                    <div className="col-md-7 project-img">
                        <img src="assets/1.png" alt="Imagem" className="img-fluid" />
                    </div>
                    <div className="col-md-5 ms-2">
                        <div className="mb-4">
                            <p>CAR RENTAL 🚗</p>
                        </div>
                        <div className="mb-4 pe-md-5 ps-md-5">
                            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                        </div>
                        <div className="mb-4 d-flex justify-content-center">
                            <p className='m-2 box-effect'>React</p>
                            <p className='m-2 box-effect'>Node</p>
                        </div>
                        <div className="mb-4">
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none text-reset'>Code <FontAwesomeIcon icon={faGithub} size="xl" /></a>
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none text-reset'>Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}