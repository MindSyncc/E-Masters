import styled from "styled-components";

export const PilotosStyle = styled.section`
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
    height: 80vh;
    overflow-y: hidden;
    transition: opacity 0.2s ease-in-out;
    background-color: #0e0e0e;
  }

  .slider .carrousel.active {
    opacity: 1;
  }

  .slider .carrousel img {
    width: 35%;
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
    width: 10%;
    max-height: 90vh;
    overflow-y: auto;
    display: flex; /* Adiciona flexbox para alinhar itens em linha */
    justify-content: flex-start; /* Garante que os itens comecem do início */
    align-items: flex-start; /* Alinha os itens no topo */
  }

  /* Diminuir o tamanho da imagem no modal */
  .popup-content img {
    max-width: 50%; /* Ajuste o tamanho para 50% da largura disponível */
    height: auto; /* Mantém a proporção da imagem */
    object-fit: contain;
    margin-top: 20px; /* Adiciona espaçamento superior */
  }

  .popup-content img {
    max-width: 40%;
    height: auto;
    object-fit: contain;
    margin-right: 20px;
  }

  .popup-content {
    background-color: #120f28;
    color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    position: relative;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    display: flex; /* Adiciona flexbox para alinhar itens em linha */
    justify-content: flex-start; /* Garante que os itens comecem do início */
    align-items: flex-start; /* Alinha os itens no topo */
  }

  .popup-content img {
    max-width: 40%; /* Ajuste o tamanho da imagem conforme necessário */
    height: auto;
    object-fit: contain;
    margin-right: 20px; /* Espaçamento entre a imagem e o texto */
  }

  .pop-up-text {
    font-size: 1.2rem;
    text-align: left; /* Garante que o texto fique alinhado à esquerda */
    flex-grow: 1; /* Faz com que o texto ocupe o espaço restante */
  }

  /* Botão de fechar */
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
    font-size: 1.3rem;
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
    width: 30%;
    min-width: 100%;
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
    .openPopupBtn {
      border-radius: 50px;
      padding: 4px;
      border: none;
      margin-top: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
      
  }

  
  @media (max-width: 480px) {
    .box-area {
      grid-template-columns: repeat(1, 1fr);
    }

   .slider {
    width: 250%;
    height: 100vh;
    margin-left: -300px;
  }

  .texto-inicio{
    margin-top: -150px;
  }
    
  }

  .pontuacoes-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
  }

  .pontuacao-quadrado {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: #20163a;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .rodada-titulo {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .pontuacao-texto {
    font-size: 16px;
    font-weight: normal;
  }
`;
