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
        <h1 className="regras-h1">Regras do E-Masters</h1>

        <section>
          <p>
            Escolha 3 pilotos e uma equipe para competir nas duas fases:
            Corrida Principal e Corrida Classificatória. A pontuação será
            determinada pela posição final, desempenho da equipe, voltas
            rápidas, ultrapassagens e outros fatores.
          </p>
        </section>

        <section>
          <h2>--- Corrida Principal ---</h2>
          <ul className="rules-list">
            <li>
               Equipe Vencedora: A soma da pontuação dos dois pilotos da
              equipe define a equipe vencedora. 1ºlugar - 10 pontos 2ºlugar - 5
              pontos 3ºlugar - 3 pontos
            </li>
            <li>
               Cada piloto entre os 3 primeiros que forem acertados o
              jogador ganha 5 pontos. Exemplo: se o jogador acertar 2 dos 3
              primeiros colocados, ele ganha 10 pontos.
            </li>
            <li>
               Vencedor: Acertar o vencedor dobra a pontuação desse piloto.
            </li>
            <li>
               Volta Mais Rápida: Acertar o piloto que faz a volta mais
              rápida concede 10 pontos.
            </li>
            <li>
               Ultrapassagens: Cada ultrapassagem realizada dá 0,5 pontos, e
              cada ultrapassagem sofrida tira 0,2 pontos.
            </li>
          </ul>
        </section>

        <section>
          <h2>--- Corrida Classificatória ---</h2>

          <p>
            <ul className="rules-list">
              <li> Equipe Vencedora: A soma da pontuação dos dois pilotos da equipe define a equipe vencedora. 1ºlugar - 5 pontos 2ºlugar - 2.5 pontos 3ºlugar - 1.5 pontos</li>
              <li>  Cada piloto entre os 3 primeiros que forem acertados o jogador ganha 2.5 pontos. Exemplo: se o jogador acertar 2 dos 3 primeiros colocados, ele ganha 5 pontos.</li>
              <li>  Vencedor: Acertar o  vencedor dobra a pontuação desse piloto.</li>
              <li>  Volta Mais Rápida: Acertar o piloto que faz a volta mais rápida concede 5 pontos.</li>
              <li>Ultrapassagens: Cada ultrapassagem realizada dá 0,5 pontos, e cada ultrapassagem sofrida tira 0,2 pontos.</li>
            </ul>
          </p>
        </section>
      </main>
    </RegrasStyle>
  );
};

export default RegrasFormulaE;
