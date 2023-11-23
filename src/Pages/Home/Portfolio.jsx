//TODO: dar hover em cima mostra mais do que devia

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={() => window.open('https://github.com/hen-mateus')}>
            <FontAwesomeIcon icon={faGithub} size="2xl" />
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" className="img-transition" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
                {item.langs && item.langs.length > 0 && (
                  <div className="languages-list">
                    {item.langs.map((lang, langIndex) => (
                      <span key={langIndex} className="box-project">{lang}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="portfolio--section--card--buttons">
                <button className="text-sm portfolio--link" onClick={() => window.open(item.githublink, '_blank')}>
                  {item.github}
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </button>
                <button className="text-sm portfolio--link" onClick={() => window.open(item.livelink, '_blank')}>
                  {item.live}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
