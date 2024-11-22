import { useState } from "react";
import equipes from "../../lista-equipes.json";

const ModalEquipes = ({
  initialIsOpen,
  nameEquipe,
  descricao,
  pontuacao,
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

      {/* condicional que retorna o conteúdo do popup somente se o estado é "visible"*/}
      {visible && (
        <div id="popup1" className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={toggleInfoVisibility}>
              &times;
            </span>

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
            {/* dots e circles */}

            <div>
              {equipeImages.map((_, index) => {
                return (
                  <span
                    key={index}
                    className="dot"
                    onClick={() => setSlide(index)}
                  ></span>
                );
              })}
            </div>

            <p className="pop-up-text">{descricao}</p>
            <p className="pop-up-text">{pontuacao}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalEquipes;
