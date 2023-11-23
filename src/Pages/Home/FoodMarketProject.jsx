import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MainSection() {
    const images = [
        './img/projects/foodmarket/ped1 (1).png',
        './img/projects/foodmarket/ped1 (2).png',
        './img/projects/foodmarket/ped1 (3).png',
        './img/projects/foodmarket/ped1 (4).png'
    ];
    return (
        <section id="AboutMe" className="carousel--section">
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">Project</p>
                    <h1 className="skills-section--heading">
                        FoodMarket App</h1>
                    <button className="text-sm portfolio--link" onClick={() => window.open("https://github.com/hen-mateus/FoodMarket-App", '_blank')}>
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
                                FoodMarket App is a grocery store management application. This project, developed using .NET Framework and C#, aims to create a store that sells products from various categories based on specific themes, incorporating data structures, classes and dictionaries for efficient functionality.
                            </p>
                            <br />
                            <p className="section--title">Key features include:</p>
                            <p className="hero--section-description">
                                <ul><li><strong>Efficient Data Management:</strong> Reading and writing all data to text files, ensuring secure and organized management.</li>
                                    <li><strong>Product and Customer Management:</strong> Adding and removing products and customers, as well as the ability to add product stock.</li>
                                    <li><strong>Sales Analysis:</strong> Tracking sales history and displaying purchases of a specific customer.</li>
                                    <li><strong>Product Exploration:</strong> Viewing the products available in the store for customers.</li>
                                    <li><strong>Ease of Purchase:</strong> The ability for a customer to make purchases under their name.</li>
                                    <li><strong>Business Statistics:</strong> Determining the city with the most customers, average customer age, product category with the most items, and products with the lowest stock.</li>
                                    <li><strong>Financial Reports:</strong> Identifying the product generating the most revenue, the most expensive product, the category with the highest spending and the customer who spent the most money.</li>
                                    <li><strong>Product Category Evaluation:</strong> Calculating the average prices per product category.</li>
                                    <li><strong>Availability Check:</strong> Checking the existence of a customer and a product based on the product code.</li>
                                </ul>
                            </p>
                            <p className="section--title">Conclusion:</p>
                            <p className="hero--section-description">
                                This project demonstrates my ability to create functional and efficient technological solutions, incorporating principles of programming and advanced data structures to address complex business challenges.
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
