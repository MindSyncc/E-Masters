import { HomeStyle } from "../css/HomeStyle";
import pilotos from "../assets/img/home/secao/pilotos.jpg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const circulos = document.querySelectorAll(".circulo");
    const textos = document.querySelectorAll(".texto");

    const handleClick = (circulo) => {
      const idCirculo = circulo.id.replace("circulo-", "");
      circulos.forEach((c) => c.classList.remove("ativo"));
      circulo.classList.add("ativo");
      textos.forEach((t) => {
        t.classList.remove("ativo");
        t.style.display = "none";
      });
      const textoAtivo = document.getElementById(`texto-${idCirculo}`);
      textoAtivo.classList.add("ativo");
      textoAtivo.style.display = "block";
    };

    circulos.forEach((circulo) => {
      circulo.addEventListener("click", () => handleClick(circulo));
    });

    return () => {
      circulos.forEach((circulo) => {
        circulo.removeEventListener("click", () => handleClick(circulo));
      });
    };
  }, []);
  return (
    <HomeStyle className="margin-bottom-100">
      <div id="banner-logo" className="banner-container">
        <div className="banner-box" />
        <p id="banner-texto">
          No E-Masters, você escolhe pilotos e uma equipe para competir em duas
          fases: Corrida Principal e Corrida Classificatória. Acumule pontos
          acertando posições, voltas rápidas, ultrapassagens e lidere sua equipe
          até a vitória. Misturando estratégia e conhecimento, o jogo coloca
          você no coração da Fórmula E. Quem será o campeão?
        </p>
      </div>
      

      <section className="section-apresentacao">
        <h1 className="header-apresentacao">Nossos Diferenciais</h1>

        <div className="horizontal-line"></div>

        <section className="diferenciais">
          <div className="circulo ativo" id="circulo-informacao">
            <h3>Informações</h3>
          </div>

          <div className="circulo" id="circulo-experiencia">
            <h3>Experiências</h3>
          </div>

          <div className="circulo" id="circulo-recompensas">
            <h3>Recompensas</h3>
          </div>

          <div className="texto ativo" id="texto-informacao">
            <h2>
              Explore todas as informações essenciais da Fórmula E em um só
              lugar.
            </h2>
            <p>
              Desde classificações de corridas até detalhes técnicos dos carros
              e atualizações de equipes, mantemos você atualizado para que não
              perca nenhum detalhe.
            </p>
          </div>

          <div
            className="texto"
            id="texto-experiencia"
            style={{ display: "none" }}
          >
            <h2>
              Aprofunde-se na experiência da Fórmula E com nossas análises
              detalhadas de cada corredor.
            </h2>

            <p>
              Navegue pelos dados de desempenho individual, análises
              estatísticas e históricos de corridas para fazer suas próprias
              avaliações informadas antes de jogar.
            </p>
          </div>

          <div
            className="texto"
            id="texto-recompensas"
            style={{ display: "none" }}
          >
            <h2>
              Participe da emoção das corridas da Fórmula E com a chance de
              ganhar prêmios emocionantes.
            </h2>

            <p>
              Acerte os resultados das corridas, colocações ou desempenhos
              individuais e seja recompensado por sua precisão e conhecimento da
              modalidade mais eletrizante do automobilismo.
            </p>
          </div>
        </section>
      </section>

      {/*Seção das regras*/}
      <section className="secao regras">
        <div className="secao-video-img">
          <iframe
            src="https://www.youtube.com/embed/mE5c5jA2zis?si=3fc4lEIYIjzK5OGE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="secao-regras-texto">
          <h1 className="header-apresentacao">A Corrida</h1>
          <p>
            A Fórmula E é um campeonato mundial de automobilismo dedicado
            exclusivamente a carros de corrida elétricos. Fundada em 2014 pela
            Federação Internacional de Automobilismo (FIA), a Fórmula E tem como
            objetivo promover a inovação tecnológica e a sustentabilidade no
            esporte a motor, ao mesmo tempo em que oferece uma competição
            emocionante e de alta intensidade.
          </p>
          <Link to={"/regras"}>
            <button type="button">Regras e Regulamentos</button>
          </Link>
        </div>
      </section>

      <h1 className="header-apresentacao">Próximas Corridas</h1>
      <div className="horizontal-line"></div>

      <section>
        <div className="container-nextrace">
          <div className="card" id="card1">
            <div className="img">
              <span>Fórmula E</span>
            </div>
            <div className="content">
              <span className="title"></span>
              <p className="desc">Alemanha</p>
              <p className="desc">Data: 11 de maio de 2024</p>
              <p className="desc">Berlim</p>
              <p className="desc">Berlim E-Prix I</p>
              <div className="container-botao">
                <Link to={"/calendário"}>
                  <button id="button-calendario" type="button">
                    Calendário
                  </button>
                </Link>
              </div>
            </div>
            <div className="arrow">
              <span>Rodada 2</span>
            </div>
          </div>

          <div className="card" id="card2">
            <div className="img">
              <span>Fórmula E</span>
            </div>
            <div className="content">
              <span className="title"></span>
              <p className="desc">China</p>
              <p className="desc">Data: 25 de maio de 2024</p>
              <p className="desc">Xangai</p>
              <p className="desc">Xangai E-Prix II</p>
              <div className="container-botao">
                <Link to={"/calendário"}>
                  <button id="button-calendario" type="button">
                    Calendário
                  </button>
                </Link>
              </div>
            </div>
            <div className="arrow">
              <span>Rodada 3</span>
            </div>
          </div>

          <div className="card" id="card3">
            <div className="img">
              <span>Fórmula E</span>
            </div>
            <div className="content">
              <span className="title"></span>
              <p className="desc">Estados Unidos</p>
              <p className="desc">Data: 29 de junho de 2024</p>
              <p className="desc">Portland</p>
              <p className="desc">Portland E-Prix I</p>
              <div className="container-botao">
                <Link to={"/calendário"}>
                  <button id="button-calendario" type="button">
                    Calendário
                  </button>
                </Link>
              </div>
            </div>
            <div className="arrow">
              <span>Rodada 4</span>
            </div>
          </div>

          <div className="card" id="card4">
            <div className="img">
              <span>Fórmula E</span>
            </div>
            <div className="content">
              <span className="title"></span>
              <p className="desc">Reino Unido</p>
              <p className="desc">Data: 20 de julho</p>
              <p className="desc">Londres</p>
              <p className="desc">Londres E-Prix I</p>
              <div className="container-botao">
                <Link to={"/calendário"}>
                  <button id="button-calendario" type="button">
                    Calendário
                  </button>
                </Link>
              </div>
            </div>
            <div className="arrow">
              <span>Rodada 5</span>
            </div>
          </div>
        </div>
      </section>

      {/*Seção dos pilotos*/}
      <section className="secao pilotos">
        <div className="secao-img">
          <img src={pilotos} alt="Pilotos" />
        </div>

        <div className="secao-texto">
          <h1>Pilotos</h1>
          <p>
            A Fórmula E é uma categoria de automobilismo com carros elétricos,
            focada em sustentabilidade e tecnologia. Desde 2014, atrai diversos
            pilotos talentosos, que enfrentam desafios únicos, como o
            gerenciamento de energia das baterias, equilibrando velocidade e
            eficiência. A Fórmula E promove diversidade com pilotos de várias
            nacionalidades e iniciativas inclusivas, sendo pioneiros de um
            futuro sustentável no automobilismo.
          </p>
          <Link to="/pilotos">
            <button type="button">Pilotos</button>
          </Link>
        </div>
      </section>

      {/*Seção de Classificação*/}

      <h1 className="header-apresentacao">Classificação 23/24</h1>
      <div className="horizontal-line"></div>
      <section className="secao classificacao">
        <table>
          <thead>
            <tr className="tabela">
              <th title="Posição">Posição</th>
              <th title="Pilotos">Pilotos</th>
              <th title="Desempenho na Temporada" colSpan="16">
                Desempenho na Temporada
              </th>
              <th title="Pontuação">Pontuação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td title="Posição">1</td>
              <td title="Pilotos">Cassidy</td>
              <td title="Desempenho">16</td>
              <td title="Desempenho">15</td>
              <td title="Desempenho">26</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">4</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">15</td>
              <td title="Desempenho">19</td>
              <td title="Desempenho">26</td>
              <td title="Desempenho">19</td>
              <td title="Desempenho">15</td>
              <td title="Desempenho">12</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Pontuação">167</td>
            </tr>

            <tr>
              <td title="Posição">2</td>
              <td title="Pilotos">Wehrlein</td>
              <td title="Desempenho">28</td>
              <td title="Desempenho">4</td>
              <td title="Desempenho">6</td>
              <td title="Desempenho">15</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">26</td>
              <td title="Desempenho">13</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">12</td>
              <td title="Desempenho">18</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Pontuação">132</td>
            </tr>

            <tr>
              <td title="Posição">3</td>
              <td title="Pilotos">Evans</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">1</td>
              <td title="Desempenho">18</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">13</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">25</td>
              <td title="Desempenho">12</td>
              <td title="Desempenho">8</td>
              <td title="Desempenho">25</td>
              <td title="Desempenho">10</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Desempenho">0</td>
              <td title="Pontuação">131</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="container-botao">
        <Link to="/classificação">
          <button id="button-classificacao" type="button">
            Clique aqui e confira a classificação completa
          </button>
        </Link>
      </div>

      {/*Seção das equipes*/}

      <section className="secao equipes">
        <div className="secao-img">
          <img src="src/assets/img/home/secao/equipes.jpg" alt="Equipes" />
        </div>

        <div className="secao-texto">
          <h1>Equipes</h1>
          <p>
            As equipes da Fórmula E são compostas por fabricantes renomados e
            times independentes, todos focados na inovação e sustentabilidade.
            Marcas como Audi, BMW, Mercedes-Benz e Nissan trazem sua expertise
            tecnológica para desenvolver veículos elétricos de alta performance.
            Cada equipe trabalha intensamente no desenvolvimento de baterias,
            motores e software de gerenciamento de energia, tornando a Fórmula E
            um campo de prova para futuras tecnologias automotivas. A
            diversidade das equipes e suas abordagens criativas impulsionam a
            evolução contínua da categoria, promovendo um futuro mais
            sustentável no automobilismo.
          </p>
          <Link to="/equipes">
            <button type="button">Equipes</button>
          </Link>
        </div>
      </section>

      <h1 className="header-apresentacao">Notícias Relacionadas</h1>
      <div className="horizontal-line"></div>

      {/*Seção das noticias*/}

      <section className="section-noticias">
        <div className="card-container-news">
          <div className="card-news">
            <img src="src/assets/img/home/secao/noticia1-fe.jpg" alt="" />

            <div className="card-content-news">
              <h2>
                Brasil encanta e recebe abertura da Fórmula E pela primeira vez
                na história
              </h2>
              <p>
                A Fórmula E oficializou nesta terça-feira (11) o calendário da
                temporada 2024/25, que voltará a ser realizada em dois anos
                diferentes e compreende o maior número de corridas da história
                da categoria, com 17 provas.
              </p>
            </div>
          </div>

          <div className="card-news">
            <img src="src/assets/img/home/secao/noticia2-fe.png" alt="" />

            <div className="card-content-news">
              <h2>Fórmula E e FIA revelam novo carro de corrida</h2>
              <p>
                O GEN3 Evo totalmente elétrico será capaz de ir de 0 a 60 mp/h
                ou 96 km/h em apenas 1,82s. O desempenho é 30% mais rápido que
                um carro de F1 e 36% na comparação com o atual modelo, usado nos
                E-Prix da décima edição do Mundial.
              </p>
            </div>
          </div>

          <div className="card-news">
            <img src="src/assets/img/home/secao/noticia3-fe.webp" alt="" />

            <div className="card-content-news">
              <h2>
                Fórmula E 'desafia' velocidade da F1 e explica parceria com
                clube paulista
              </h2>
              <p>
                "Nossos carros estão ficando muito mais rápidos. Então, para
                mostrarmos nosso potencial, em alguns circuitos de rua não temos
                como fazer isso", disse o CEO
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="container-botao-noticias">
        <Link to="/notícias">
          <a id="botao-noticias" href="noticias.html" class="link-noticias">
            Ver mais notícias relacionadas &rarr;
          </a>
        </Link>
      </div>
    </HomeStyle>
  );
};

export default Home;
