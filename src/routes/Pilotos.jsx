import { useState } from "react";
import { PilotosStyle } from "../css/PilotosStyle";
import equipes from "../../lista-pilotos.json";
import ModalEquipes from "../components/ModalPilotos";
import Carrousel from "../components/Carrousel";

const Pilotos = () => {
  {
    /*imagens para o carrousel - mapeando as imagens dos pilotos diretamente do JSON*/
  }
  let imagens = equipes.map(equipe => equipe.equipeImages[0]);

  return (
    <PilotosStyle>
      <Carrousel delay="3000" slideArr={imagens} />

      <div className="texto-inicio">
        <p>Temporada 23/24</p>
      </div>

      <section id="card-wrapper">
        <div className="box-area">
          {equipes.map((equipe, index) => {
            const { nameEquipe, descricao, equipeId, equipeImages, pontuacao,pontuacaoPorRodada } = equipe;
            return (
              <div className="box" key={nameEquipe}>
                {/* Aqui, exibimos a primeira imagem da lista de imagens fornecidas no JSON */}
                <img
                  src={equipeImages[0]}  // Usando a primeira imagem do array equipeImages
                  id="card-img"
                  alt={`Imagem da equipe ${nameEquipe}`}
                />

                <div className="texto">
                  <h3>{nameEquipe}</h3>
                  <button className="openPopupBtn">
                    Saiba mais sobre o piloto {nameEquipe}
                  </button>

                  <ModalEquipes
                    nameEquipe={nameEquipe}
                    descricao={descricao}
                    pontuacao={pontuacao}
                    pontuacaoPorRodada={pontuacaoPorRodada}
                    initialIsOpen={false}
                    equipeImages={equipeImages}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PilotosStyle>
  );
};

export default Pilotos;
