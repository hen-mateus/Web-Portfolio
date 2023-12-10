import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Bem vindo!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Henrique Mateus</span>
          </h1>
          <p className="hero--section-description">
            Entusiasta do Desenvolvimento Web e apaixonado por aprimorar constantemente as minhas habilidades.
            Competências sólidas em tecnologias como React, Node.js, HTML, CSS, JavaScript, PostgreSQL e Express.
            Motivado pela constante evolução da tecnologia, busco expandir conhecimentos e adquirir experiência prática na área.
          </p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/henmateus/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </button>
          </a>
          <a href="https://github.com/hen-mateus" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </button>
          </a>
        </div>
        <div>
          <a href="/HenriqueMateus_Curriculo.pdf" download="HenriqueMateus_Curriculo.pdf">
            <button className="btn btn-primary btn-cv">
              <h3>Download CV</h3>
            </button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/profile_photo.png" alt="Imagem de Henrique Mateus a sorrir e de braços cruzados, com uma camisola de fecho e gola alta cinzenta, com alguns elementos relacionados com web development, dentro de um retângulo de cor azul claro." />
      </div>
    </section>
  );
}
