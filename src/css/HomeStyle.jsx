import styled from "styled-components";
import corrida_alemanha from "../assets/img/home/secao/img1-alemanha-fe.jpeg";
import corrida_china from "../assets/img/home/secao/img2-china-fe.webp";
import corrida_usa from "../assets/img/home/secao/img3-usa.jpeg";
import corrida_uk from "../assets/img/home/secao/img4-uk-fe.jpg";
import car from "../assets/img/home/secao/recupera-energia.jpg";
import automobile from "../assets/img/home/carrousel/automobile2.jpg";

export const HomeStyle = styled.section`
/* HomeStyle.css */

/* HomeStyle.css */
.homestyle {
  position: relative;
  width: 100%;
  height: 100vh; /* Ocupar toda a altura da tela */
  overflow: hidden; /* Evitar que o conteúdo exceda a tela */
}

.homestyle video {
  position: absolute;
  top: 50%;
  left: 50%;

  width: auto;
  height: auto;
  object-fit: cover; /* Cobre a tela mantendo a proporção */
  transform: translate(-50%, -50%); /* Centralizar o vídeo */
  z-index: -1; /* Coloca o vídeo atrás do conteúdo */
}

.homestyle::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor preta com 50% de transparência */
  z-index: 0; /* Camada logo acima do vídeo */
}

.menu {
  position: absolute;
  top: 55%;
  left: 20%;
  transform: translate(-50%, -50%); /* Centraliza o menu */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu a ,.homestyle .submenu-btn{
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  margin: 1rem;
  background-color: rgb(135, 6, 6);
  transition: background-color 0.3s ease;
  border: none;
  border: 1px solid #802626; 
  border-radius: 3px;
  

}

.menu a:hover {
  background-color: rgba(0, 0, 0, 0.8); /* Fundo mais escuro ao passar o mouse */
}

.submenu-container {
  position: relative;
}

.submenu {
  position: absolute;
  top: 0;
  left: 100%; /* Posiciona o submenu à direita do botão */
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.submenu a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.submenu a:hover {
  background-color: black;
}
`;
