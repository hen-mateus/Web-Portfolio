import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MainSection() {
    const images = [
        './img/projects/vet/poo1.png',
        './img/projects/vet/poo2.png',
        './img/projects/vet/poo (2).png',
        './img/projects/vet/poo (3).png',
        './img/projects/vet/poo (4).png',
        './img/projects/vet/poo (5).png',
        './img/projects/vet/poo (6).png',
        './img/projects/vet/poo (8).png',
        './img/projects/vet/poo (9).png',
        './img/projects/vet/poo (11).png',
        './img/projects/vet/poo (12).png',
        './img/projects/vet/poo (13).png'
    ];
    return (
        <section id="AboutMe" className="carousel--section">
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">Project</p>
                    <h1 className="skills-section--heading">
VetClinic Manager App</h1>
                    <button className="text-sm portfolio--link" onClick={() => window.open("https://github.com/hen-mateus/VetClinic-Manager-App", '_blank')}>
                        <p>View on Github</p>
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </button>
                    <div className="languages-list-car">
                        <span className="box-project">C#</span>
                        <span className="box-project">.NET</span>
                    </div>
                    <div className="description-carousel-container">
                        <div className="description-container">
                            <p className="section--title">Description:</p>
                            <p className="hero--section-description">
                                VetClinic Manager App is a management application for a veterinary clinic. This solution was built using Windows Forms, .NET Framework, and C# and follows Object-Oriented Programming principles.
                            </p>
                            <br />
                            <p className="section--title">Key features include:</p>
                            <p className="hero--section-description">
                                <ul><li><strong>Patient and Owner Management:</strong> We have developed a complete system for entering and listing patients (animals) and their respective owners, ensuring organized and accessible management of information.</li>
                                    <li><strong>Veterinarian Registration:</strong> We have developed a complete system for entering and listing patients (animals) and their respective owners, ensuring organized and accessible management of information.</li>
                                    <li><strong>Intervention Scheduling:</strong> We offer the ability to schedule different types of interventions, such as consultations, vaccinations, and surgeries, considering the veterinarian, animal type, and intervention type.</li>
                                    <li><strong>Small Cost Calculation:</strong> We have developed an intelligent system that calculates intervention costs based on the animal type, weight, and type of intervention, providing cost transparency to animal owners.</li>
                                    <li><strong>Query and Reporting Resources:</strong> We have created comprehensive query features, including patient, owner, and veterinarian intervention listings, animal occurrence history, and total cost calculations.</li>
                                    <li><strong>Text File Integration:</strong> We have implemented the ability to read and write all data to text files, making the system versatile and accessible.</li>
                                </ul>
                            </p>
                            <p className="section--title">Conclusion:</p>
                            <p className="hero--section-description">
                                This project has enhanced my proficiency in .NET Framework and C# and has also demonstrated my commitment to applying Object-Oriented Programming to deliver effective solutions. This application is a testament to my dedication to providing comprehensive, client-specific software solutions.
                            </p>
                        </div>
                        <div className="carousel-container">
                            <Carousel showThumbs={true} showFullscreenButton={true} infiniteLoop={true}>
                                {images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
