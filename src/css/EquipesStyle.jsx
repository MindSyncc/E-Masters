import styled from "styled-components";

export const EquipesStyle = styled.section`
  /* para que o conteúdo fique abaixo do banner */
  position: relative;
  z-index: 5;
  padding-bottom: 30px;
  background-color: rgb(28, 28, 28);

  /* Estilos para o carrousel */
  .slider {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .slider .carrousel {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    height: 100vh;
    overflow-y: hidden;
    transition: opacity 0.2s ease-in-out;
  }

  .slider .carrousel.active {
    opacity: 1;
  }

  .slider .carrousel img {
    width: 100%;
    object-fit: contain;
  }

  .texto-inicio p {
    color: white;
    text-align: center;
    font-size: 3.5rem;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
  }

  #card-wrapper {
    padding: 20px;
  }

  .box-area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin-top: 50px;
  }

  .box {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    transition: transform 0.5s;
  }

  #card-img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: transform 0.5s;
  }

  .texto {
    height: 0;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 60%);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    transition: height 0.5s;
  }
  .texto h3 {
    color: white;
    font-weight: 400;
    margin-bottom: 5px;
    margin-top: 80%;
    font-size: 2rem;
    letter-spacing: 2px;
  }
  .texto a {
    margin-top: 10px;
    color: #262626;
    text-decoration: none;
    font-size: 1rem;
    background: #fff;
    border-radius: 50px;
    text-align: center;
    padding: 5px 15px;
  }
  .box:hover .texto {
    height: 100%;
  }

  /* Estilos para o pop-up */
  .popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10000;
  }

  .popup-content {
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    position: relative;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
  }

  .openPopupBtn {
    background-color: #fff;
    color: #000;
    border-radius: 50px;
    padding: 10px;
    border: none;
    margin-top: 10px;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .openPopupBtn:hover {
    background-color: #8f6161;
  }

  .pop-up-text {
    margin-bottom: 20px;
    font-size: 2rem;
    margin-top: 30px;
  }

  .slideshow-container {
    position: relative;
    margin: auto;
    min-height: 20vw;
    max-width: 600px;
  }

  .slide {
    object-fit: cover;
    width: 100%;
    min-width: 100%;
    max-height: 50vh;
  }

  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

  .dots {
    display: flex;
  }

  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active,
  .dot:hover {
    background-color: #717171;
  }

  /* Fading animation */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  /* Caption text */
  .text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    .box-area {
      grid-template-columns: repeat(2, 1fr);
    }
    .pop-up-text {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    .box-area {
      grid-template-columns: repeat(1, 1fr);
      
    }

    .slider img{
      margin-top: -400px;
    }

    

  }
`;
