import { RegrasStyle } from "../css/RegrasStyle";
import seta from "../assets/img/home/secao/seta.png";
import imgSustentabilidade from "../assets/img/home/secao/sustentabilidade.webp";
import imgBateria from "../assets/img/home/secao/bateria-potencia.avif";
import imgEnergia from "../assets/img/home/secao/recupera-energia.png";
import imgFan from "../assets/img/home/secao/fanboost1.1.png";
import { useState } from "react";

const RegrasFormulaE = () => {
  const [show, setShow] = useState([false, false, false, false]); // Array de estado

  const toggleShowVisibility = (index) => {
    const updatedShow = [...show];
    updatedShow[index] = !updatedShow[index];
    setShow(updatedShow);
  };

  return (
    <RegrasStyle className="margin-bottom-100">
      <main>
        <h1 className="regras-h1">Regras da Fórmula E</h1>

        <section>
          <h2>Campeonato e Classificação</h2>
          <p>
            O Campeonato Mundial de Fórmula E da ABB FIA possui dois títulos
            separados: um para os pilotos e outro para as equipes.
          </p>
          <ul className="rules-list">
            <li>
              <strong>Campeonato de Pilotos:</strong> Ganha o piloto que
              acumular mais pontos ao longo da temporada.
            </li>
            <li>
              <strong>Campeonato de Equipes:</strong> Decidido pela soma dos
              pontos dos dois pilotos de cada equipe durante a temporada.
            </li>
          </ul>
        </section>

        <section>
          <h2>Sistema de Pontuação</h2>
          <p>
            A Fórmula E utiliza um sistema padrão de pontuação, onde pontos são
            concedidos aos 10 primeiros colocados em cada corrida.
          </p>
          <ul>
            <li>1º lugar: 25 pontos</li>
            <li>2º lugar: 18 pontos</li>
            <li>3º lugar: 15 pontos</li>
            <li>4º lugar: 12 pontos</li>
            <li>5º lugar: 10 pontos</li>
            <li>6º lugar: 8 pontos</li>
            <li>7º lugar: 6 pontos</li>
            <li>8º lugar: 4 pontos</li>
            <li>9º lugar: 2 pontos</li>
            <li>10º lugar: 1 ponto</li>
          </ul>
          <h3>Pontos adicionais:</h3>
          <ul>
            <li>
              <strong>Pole position:</strong> 3 pontos extras para o piloto que
              largar na frente.
            </li>
            <li>
              <strong>Volta mais rápida:</strong> 1 ponto extra, se o piloto
              terminar entre os 10 primeiros.
            </li>
          </ul>
        </section>

        <section>
          <h2>Formato do Dia de Corrida</h2>
          <h3>Treinos</h3>
          <p>
            Cada evento tem duas sessões de treino de 30 minutos, sendo uma na
            sexta-feira e outra no sábado.
          </p>
          <p>
            As equipes também devem utilizar ao menos dois pilotos novatos ao
            longo da temporada nesses treinos.
          </p>

          <h3>Qualificação</h3>
          <p>
            A qualificação é dividida em duas fases: a fase de grupos e o duelo
            eliminatório. Os melhores tempos avançam, e o vencedor final larga
            da pole position.
          </p>

          <h3>E-Prix</h3>
          <p>
            A corrida, chamada E-Prix, começa com uma largada parada. O número
            de voltas é pré-determinado, mas voltas extras podem ser adicionadas
            em caso de interrupções como o Safety Car.
          </p>
          <p>
            Durante a corrida, os pilotos podem ativar o ATTACK MODE, ganhando
            50 kW de potência extra ao sair da linha de corrida ideal.
          </p>
        </section>

        <section>
          <h2>Eventos de Dois Dias (Double-header)</h2>
          <p>
            Em alguns eventos, as corridas ocorrem em dois dias consecutivos,
            com uma programação espelhada. O segundo dia tem apenas uma sessão
            de treino de 45 minutos.
          </p>
        </section>

        <section>
          <h2>Pneus e Alocação</h2>
          <p>
            Todos os carros usam pneus fornecidos pela Hankook. Cada piloto pode
            utilizar até quatro pneus dianteiros e quatro traseiros novos por
            evento.
          </p>
        </section>

        <section>
          <h2>Carregamento de Baterias</h2>
          <p>
            É proibido carregar os carros durante a qualificação e a corrida,
            mas o carregamento é permitido entre as sessões e nos treinos.
          </p>
        </section>

        <section>
          <h2>Licença para Participar (e-Licence)</h2>
          <p>
            Os pilotos precisam obter uma e-Licence, que é semelhante a uma
            carteira de motorista, para participar da Fórmula E. Eles devem
            acumular ao menos 20 pontos no sistema de pontos da FIA.
          </p>
        </section>
      </main>
    </RegrasStyle>
  );
};

export default RegrasFormulaE;
