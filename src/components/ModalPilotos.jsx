import { useState } from "react";

const ModalPilotos = ({
  initialIsOpen,
  nameEquipe,
  descricao,
  pontuacao,
  pontuacaoPorRodada,
  equipeId,
  equipeImages,
}) => {
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(initialIsOpen);

  const toggleInfoVisibility = () => {
    setVisible(!visible);
  };

  visible
    ? document.body.classList.add("active-pop-up")
    : document.body.classList.remove("active-pop-up");

  return (
    <div className="texto">
      <h3>{nameEquipe}</h3>
      <button className="openPopupBtn" onClick={toggleInfoVisibility}>
        Saiba mais sobre a equipe {nameEquipe}
      </button>

      {visible && (
        <div id="popup1" className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={toggleInfoVisibility}>
              &times;
            </span>

            <div>
              <div className="slideshow-container">
                {equipeImages.map((image, index) => {
                  return (
                    <div key={index} className="mySlides fade">
                      <div
                        className={slide === index ? "visible" : "non-visible"}
                      >{`${index + 1} / 4`}</div>
                      <img
                        src={image}
                        className={slide === index ? "slide" : "slide-hidden"}
                      />
                    </div>
                  );
                })}
              </div>
              <br />
              <p className="pop-up-text">{descricao}</p>
              <p className="pop-up-text">{pontuacao}</p>
            </div>

            {/* Exibe a pontuação de cada rodada em quadradinhos */}
            <div className="pontuacoes-container">
              {pontuacaoPorRodada.map((pontos, index) => (
                <div className="pontuacao-quadrado" key={index}>
                  <p className="rodada-titulo">Rdd {index + 1}</p>
                  <p className="pontuacao-texto">{pontos} pontos</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPilotos;
