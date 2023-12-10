import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faClose } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from "../../data/index.json";

export default function MyPortfolio() {
  const [modalVet, setModalVet] = useState(null);
  const [modalFood, setModalFood] = useState(null);
  const [modalHack, setModalHack] = useState(null);

  const openModalForVet = (item) => {
    setModalVet(item);
  };

  const openModalForFood = (item) => {
    setModalFood(item);
  };

  const openModalForHack = (item) => {
    setModalHack(item);
  };

  const closeModal = () => {
    setModalVet(null);
    setModalFood(null);
    setModalHack(null);
  };

  const imagesVet = [
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

  const imagesFood = [
    './img/projects/foodmarket/ped1 (1).png',
    './img/projects/foodmarket/ped1 (2).png',
    './img/projects/foodmarket/ped1 (3).png',
    './img/projects/foodmarket/ped1 (4).png'
  ];

  const imagesHack = [
    './img/projects/hackaton/hack (1).png',
    './img/projects/hackaton/hack (2).png',
    './img/projects/hackaton/hack (3).png',
    './img/projects/hackaton/hack (4).png',
    './img/projects/hackaton/hack (5).png'
  ];

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Projetos Recentes</p>
          <h2 className="section--heading">Portfolio</h2>
          <p>Cada um dos projetos oferece a opção de, ao passar o cursor sobre a imagem, visualizar o projeto com um efeito de scroll.</p>
        </div>
        <div>
          <button className="btn btn-github" onClick={() => window.open('https://github.com/hen-mateus')}>
            <FontAwesomeIcon icon={faGithub} size="2xl" />
            Visitar o Meu GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Imagem do projeto que tem uma transição onde mostra as páginas e conteúdos da mesma" className="img-transition" />
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
              {(item.title === "Compra e Venda de Excedente Energético" || item.title === "MovieFlix Dashboard") && (
                  <React.Fragment>
                    <p>*Aguarde ao abrir para que os dados carregam.</p>
                  </React.Fragment>
                )}
              <div className="portfolio--section--card--buttons">
                <button className="text-sm portfolio--link" onClick={() => window.open(item.githublink, '_blank')}>
                  {item.github}
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </button>
                <button className="text-sm portfolio--link" onClick={() => {
                  if (item.title === "VetClinic Manager App") {
                    openModalForVet(item);
                  } else if (item.title === "FoodMarket App") {
                    openModalForFood(item);
                  } else if (item.title === "StudyMentor - 4ª Edicção do HACK4EDU") {
                    openModalForHack(item);
                  } else if (item.livelink) {
                    window.open(item.livelink, '_blank');
                  }
                }}>
                  {item.live}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalVet && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}><FontAwesomeIcon icon={faClose} size="xl" /></span>
            <section id="AboutMe" className="carousel--section">
              <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                  <p className="section--title">Projeto</p>
                  <h1 className="skills-section--heading">
                    VetClinic Manager App</h1>
                  <button className="text-sm portfolio--link" onClick={() => window.open("https://github.com/hen-mateus/VetClinic-Manager-App", '_blank')}>
                    <p>Ver no Github</p>
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </button>
                  <div className="languages-list-car">
                    <span className="box-project">C#</span>
                    <span className="box-project">.NET</span>
                  </div>
                  <div className="description-carousel-container">
                    <div className="description-container">
                      <p className="section--title">Descrição:</p>
                      <p className="hero--section-description">
                        Este projeto foi desenvolvido no âmbito da unidade curricular "Programação Orientada a Objetos". A VetClinic Manager App é uma aplicação de gestão para uma clínica veterinária. Esta solução foi construída utilizando Windows Forms, .NET Framework e C#, seguindo os princípios da Programação Orientada a Objetos.
                      </p>
                      <br />
                      <p className="section--title">Funcionalidades principais incluem:</p>
                      <p className="hero--section-description">
                        <ul><li><strong>Gestão de Pacientes e Proprietários:</strong> Sistema completo para introduzir e listar pacientes (animais) e respetivos proprietários, garantindo uma gestão organizada e acessível da informação.</li>
                          <li><strong>Registo de Veterinários:</strong> Funcionalidade de registar veterinários, permitindo o seguimento preciso das intervenções realizadas por cada profissional.</li>
                          <li><strong>Agendamento de Intervenções:</strong> Capacidade de agendar diferentes tipos de intervenções, como consultas, vacinações e cirurgias, considerando o veterinário, tipo de animal e tipo de intervenção. </li>
                          <li><strong>Cálculo de Custo Pequeno:</strong> Sistema inteligente que calcula os custos das intervenções com base no tipo de animal, peso e tipo de intervenção, proporcionando transparência de custos aos proprietários dos animais. </li>
                          <li><strong>Consultas e Relatórios:</strong> Funcionalidades abrangentes de consulta, incluindo listagens de pacientes, proprietários e intervenções veterinárias, histórico de ocorrências dos animais e cálculos de custo total.</li>
                          <li><strong>Integração de Ficheiros de Texto:</strong> Capacidade de ler e escrever todos os dados em ficheiros de texto, tornando o sistema versátil e acessível.</li>
                        </ul>
                      </p>
                      <p className="section--title">Conclusão:</p>
                      <p className="hero--section-description">
                        Este projeto aprimorou o meu conhecimento no .NET Framework e em C#, demonstrando também o meu compromisso em aplicar a Programação Orientada a Objetos para fornecer soluções eficazes. Esta aplicação é um testemunho do meu empenho em fornecer soluções de software abrangentes e específicas para cada cliente.
                      </p>
                    </div>
                    <div className="carousel-container">
                      <Carousel showThumbs={true} showFullscreenButton={true} infiniteLoop={true}>
                        {imagesVet.map((image, index) => (
                          <div key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      {modalFood && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}><FontAwesomeIcon icon={faClose} size="xl" /></span>
            <section id="AboutMe" className="carousel--section">
              <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                  <p className="section--title">Projeto</p>
                  <h1 className="skills-section--heading">
                    FoodMarket App</h1>
                  <button className="text-sm portfolio--link" onClick={() => window.open("https://github.com/hen-mateus/FoodMarket-App", '_blank')}>
                    <p>Ver no Github</p>
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </button>
                  <div className="languages-list-car">
                    <span className="box-project">C#</span>
                    <span className="box-project">.NET</span>
                  </div>
                  <div className="description-carousel-container">
                    <div className="description-container">
                      <p className="section--title">Descrição:</p>
                      <p className="hero--section-description">
                        Este projeto foi desenvolvido no âmbito da unidade curricular "Programação e Estrutura de Dados".O FoodMarket App é uma aplicação de gestão de uma mercearia. Este projeto, desenvolvido com .NET Framework e C#, tem como objetivo criar uma loja que vende produtos de várias categorias com base em temas específicos, incorporando estruturas de dados, classes e dicionários para uma funcionalidade eficiente.
                      </p>
                      <br />
                      <p className="section--title">Funcionalidades principais incluem:</p>
                      <p className="hero--section-description">
                        <ul><li><strong>Gestão Eficiente de Dados:</strong> Leitura e escrita de todos os dados em ficheiros de texto, garantindo gestão segura e organizada.</li>
                          <li><strong>Gestão de Produto e Cliente:</strong> Adição e remoção de produtos e clientes, bem como a capacidade de adicionar stock de produtos.</li>
                          <li><strong>Registo de Vendas:</strong> Acompanhamento do histórico de vendas e exibição das compras de um cliente específico.</li>
                          <li><strong>Exibição de Produtos:</strong> Visualização dos produtos disponíveis na loja para os clientes.</li>
                          <li><strong>Facilidade de Compra:</strong> Capacidade para um cliente realizar compras em seu nome.</li>
                          <li><strong>Análise Estatística de Negócios:</strong> Determinar a cidade com mais clientes, idade média do cliente, categoria de produto com mais itens e produtos com menor stock.</li>
                          <li><strong>Relatórios Financeiros:</strong> Identificar o produto que gera mais receita, o produto mais caro, a categoria com mais gastos e o cliente que gastou mais dinheiro.</li>
                          <li><strong>Cálculo de Preços Médios:</strong> Calcular os preços médios por categoria de produto.</li>
                          <li><strong>Validação de Inventário:</strong> Verificar a existência de um cliente e de um produto com base no código do produto.</li>
                        </ul>
                      </p>
                      <p className="section--title">Conclusão:</p>
                      <p className="hero--section-description">
                        Este projeto demonstra a minha capacidade de criar soluções tecnológicas funcionais e eficientes, incorporando princípios de programação e estruturas de dados avançadas para enfrentar desafios empresariais complexos.
                      </p>
                    </div>
                    <div className="carousel-container">
                      <Carousel showThumbs={true} showFullscreenButton={true} infiniteLoop={true}>
                        {imagesFood.map((image, index) => (
                          <div key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      {modalHack && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}><FontAwesomeIcon icon={faClose} size="xl" /></span>
            <section id="AboutMe" className="carousel--section">
              <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                  <p className="section--title">Projeto</p>
                  <h1 className="skills-section--heading">
                    StudyMentor - 4ª Edicção do HACK4EDU</h1>
                  <button className="text-sm portfolio--link" onClick={() => window.open("https://github.com/hen-mateus/hack4edu-studymentor", '_blank')}>
                    <p>Ver no Github</p>
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </button>
                  <div className="languages-list-car">
                    <span className="box-project">ChatGPT</span>
                    <span className="box-project">React</span>
                    <span className="box-project">Node.js</span>
                    <span className="box-project">Bootstrap</span>
                    <span className="box-project">Express.js</span>
                  </div>
                  <div className="description-carousel-container">
                    <div className="description-container">
                      <p className="section--title">Descrição:</p>
                      <p className="hero--section-description">
                        O StudyMentor é uma plataforma de IA que disponibiliza um questionário para os utilizadores determinarem o seu perfil de aprendizagem (Perfil Visual, Perfil Auditivo, Perfil Leitor/Escritor ou Perfil Cinestésico). Posteriormente, a inteligência artificial fornece um método de estudo, horário de aprendizagem e recursos educacionais, mais adequados para o perfil do utilizador, baseado no tema enviado pelo chat.
                      </p>
                      <br />
                      <p className="section--title">Funcionalidades principais incluem:</p>
                      <p className="hero--section-description">
                        <ul><li><strong>Métodos de Estudo Personalizados:</strong> Adaptados às necessidades e objetivos de aprendizagem individuais de cada aluno.</li>
                          <li><strong>Otimização do Horário de Estudo:</strong> Identificação dos melhores momentos para a aprendizagem, ajustando-se ao ritmo circadiano do aluno.</li>
                          <li><strong>Recomendação de Recursos de Aprendizagem:</strong> Sugestão de livros, vídeos, cursos online e outros materiais de alta qualidade relacionados a cada tópico de estudo.</li>
                        </ul>
                      </p>
                      <p className="section--title">Benefícios:</p>
                      <p className="hero--section-description">
                        <ul><li><strong>Personalização da Aprendizagem:</strong> Permite a cada aluno criar o seu próprio percurso educacional, maximizando a retenção de informações.</li>
                          <li><strong>Melhoria da Eficiência:</strong> Otimiza o uso do tempo de estudo, reduzindo a fadiga e maximizando a aprendizagem.</li>
                          <li><strong>Redução da Desigualdade Educacional:</strong> Democratiza o acesso à educação de qualidade, garantindo que todos possam beneficiar de aprendizagem personalizada.</li>
                        </ul>
                      </p>
                    </div>
                    <div className="carousel-container">
                      <Carousel showThumbs={true} showFullscreenButton={true} infiniteLoop={true}>
                        {imagesHack.map((image, index) => (
                          <div key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </section>
  );
}