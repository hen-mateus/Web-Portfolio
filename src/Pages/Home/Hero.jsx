import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Henrique Mateus</span>
          </h1>
          <p className="hero--section-description">
            Passionate about merging technology and design to create captivating digital experiences.
            Proficient in programming languages and skilled in crafting visually appealing websites and interfaces.
            Excited to bring creativity and technical expertise to innovative projects.
          </p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/henmateus/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faLinkedin} size="2xl"  />
            </button>
          </a>
          <a href="https://github.com/hen-mateus" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faGithub} size="2xl"/>
            </button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
