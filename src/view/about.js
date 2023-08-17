import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function About() {
    return (
        <div className="custom-container">
            <div className="row">
                <div className="col-md-12 titulo color-grey text-center">
                    <p>About</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                    <img alt="Profile Photo" src="/assets/profilephoto.jpeg" className="img-fluid round-img" />
                </div>
                <div className="col-md-7 mt-4">
                    <div className="text-start titulo-ter">
                        <p>Henrique Mateus</p>
                    </div>
                    <div className="text-start color-blue">
                        <p>Aspiring Full Stack Developer</p>
                    </div>
                    <div className="text-start mt-3">
                        <p>I am a dedicated student with passion for technology and innovation, boasting 6 years of academic experience in multimedia, design and programming. Passionate about merging technology and design to create captivating digital experiences. Proficient in programming languages and skilled in crafting visually appealing websites and interfaces. Excited to bring creativity and technical expertise to innovative projects.</p>
                    </div>
                    <div className="text-start">
                        <p><strong>Specializing in:</strong> Full Stack Development | .NET Application Programming | Web Design</p>
                    </div>
                    <div className="text-start">
                        <p><strong>Studying:</strong> Bachelor in Technology and Design Multimedia at ESTGV, Viseu</p>
                    </div>
                </div>
            </div>
        </div>
    );
}