import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="MySkills">
      <div className="skills--container">
        <p className="section--title white-text">Skills</p>
        <h2 className="skills--section--heading">Tecnologias e Programas</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <a key={index} href={item.link} target="_blank" className="skill-tooltip" title={item.name}>
            <img src={item.src} alt="Corrente de Produtos" className="skills--section--img" />
            <span className="tooltip-text">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}