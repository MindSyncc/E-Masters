import styled from "styled-components";
import corrida_alemanha from "../assets/img/home/secao/img1-alemanha-fe.jpeg";
import corrida_china from "../assets/img/home/secao/img2-china-fe.webp";
import corrida_usa from "../assets/img/home/secao/img3-usa.jpeg";
import corrida_uk from "../assets/img/home/secao/img4-uk-fe.jpg";
import car from "../assets/img/home/secao/recupera-energia.jpg";
import automobile from "../assets/img/home/carrousel/automobile2.jpg";

export const HomeStyle = styled.section`
  button {
    border: none;
  }
  /* Texto de apresentação */
  #banner-logo {
    background: url(${car});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    border-radius: 10px;
  }

  #banner-texto {
    position: relative;
    z-index: 2;
    color: white;
    padding: 20px;
    font-size: 2.5rem;
    text-align: center;
    max-width: 800px;
    margin-top: 50px;
    text-shadow: -2px -1px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000,
      1px -1px 0 #000;
    line-height: 4rem;
  }

  .section-apresentacao {
    padding: 80px 100px;
  }
  .header-apresentacao {
    text-align: center;
    margin-top: 5%;
    font-size: 4rem;
  }

  .horizontal-line {
    border-top: 1px solid black; /* Cor e espessura da linha */
    width: 400px; /* Largura da linha */
    margin: 0 auto; /* Centraliza a linha horizontalmente */
    margin-top: 10px;
    margin-bottom: 40px;
  }

  #texto-apresentacao {
    text-align: justify;
    font-size: 2rem;
    line-height: 20px;
  }

  /* Responsividade para tablet: padrão 768px*/

  @media (max-width: 768px) {
    body {
      overflow-x: hidden;
    }
    #banner-logo {
      background: url(${automobile});
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
      background-size: cover;
      top: 0;
      width: 100%;
      height: 50vh;
    }

    .header-apresentacao {
      font-size: 3.2rem;
    }

    #banner-texto {
      font-size: 1.6rem;
    }

    .mobile-menu {
      display: block;
    }

    .active {
      font-size: 1rem;
    }
  }

  .nav-list.active {
    transform: translateX(0);
    transition: transform 0.3s ease-in;
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .mobile-menu.active .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  .mobile-menu.active .line2 {
    opacity: 0;
  }

  .mobile-menu.active .line3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }

  /*Adequação às telas do celular: tamanho 480px*/
  @media (max-width: 480px) {
    .section-apresentacao {
      padding: 5px;
    }

    .header-apresentacao {
      font-size: 2rem;
    }

    #texto-apresentacao {
      font-size: 1.2rem;
    }

    .mobile-menu div {
      width: 24px;
      height: 1.5px;
      margin: 8px;
      background-color: #fff;
    }

    .logo-container {
      margin: 0;
      padding: 0;
    }
    .active {
      font-size: clamp(0.7rem, 0.8rem, 1.57rem);
    }
  }

  .diferenciais {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  .circulo {
    width: 200px;
    height: 200px;
    background-color: #0c0b49;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .circulo h3 {
    text-align: center;
    color: white;
    margin: 0;
    font-size: 20px;
  }

  .circulo.ativo {
    background-color: #a80101; /* Cor diferente para o círculo ativo */
  }

  /* Responsividade para dispositivos móveis */
  @media (max-width: 480px) {
    .diferenciais {
      flex-direction: row; /* Mantém os círculos em linha */
      justify-content: space-around; /* Espaça os círculos igualmente */
      align-items: center;
    
    }

    .circulo {
      width: 95px;
      height: 95px;
      margin: 5px;
    }

    .circulo h3 {
      font-size: 10px;
    }
  }

  /*Seção Regras e Regulamentos*/

  .secao {
    position: relative;
    display: flex;
    align-items: stretch; /* Estica os itens verticalmente */
    text-align: center;
  }

  .secao-img {
    flex: 0 0 60%; /* 60% da largura da seção para a imagem */
    overflow: hidden;
  }

  .secao-video-img {
    flex: 0 0 47vw; /* 48% da largura da seção para a imagem */
    overflow: hidden;
  }
  .secao-video-img iframe {
    width: 100%;
    height: 100%;
  }

  #button-classificacao {
    background-color: rgb(0, 0, 0);
    color: #fff;
    border-radius: 100px;
    padding: 10px;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 100px;
  }

  .secao-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .secao-texto {
    background-color: #000000;
    color: white;
    flex: 0 0 40%;
    margin: 0;
    position: relative;
    box-sizing: border-box;
    padding: 50px 40px;
  }

  .secao-regras-texto {
    background-color: #000000;
    color: white;
    flex: 0 0 52%;
    margin: 0;
    position: relative;
    box-sizing: border-box;
    padding: 15px 40px;
    height: 68.3vh;
  }

  .secao h1 {
    text-align: center;
    color: white;
    padding-bottom: 20px;
    font-size: 3.5rem;
  }

  .secao p {
    text-align: justify;
    font-weight: 200;
    font-size: 2rem;
    padding-bottom: 30px;
    padding-top: 25px;
  }

  .secao button {
    text-align: center;
    border-radius: 50px;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    margin: 30px 0px;
    font-size: 2rem;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  .secao button:hover {
    background-color: #3b3b3b;
    color: #ffffff;
  }

  /* Resposividade das sections*/

  @media (max-width: 768px) {
    .secao {
      flex-direction: column;
      text-align: center;
    }

    .section-apresentacao {
      padding: 40px 50px;
    }

    .secao-img,
    .secao h1,
    .secao p {
      flex: 0 0 100%; /* Ocupa toda a largura da seção */
    }

    .secao p {
      padding-top: 20px;
      padding-bottom: 0px;
      font-size: 1.6rem;
    }

    .secao h1 {
      font-size: 2.8rem;
    }

    .secao-texto {
      padding: 20px 25px;
    }

    /* Estilos para o botão */
    button {
      border: none;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .secao button {
      font-size: 1.6rem;
    }
  }

  /* Responsividade para dispositivos móveis */
  @media (max-width: 480px) {
    .secao {
      flex-direction: column;
      align-items: center;
    }

    .secao-video-img {
      flex: 0 0 auto;
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }

    .secao-video-img iframe {
      width: 100%;
      height: 30vh;
    }

    .secao-regras-texto {
      flex: 0 0 auto;
      width: 100%;
      padding: 10px 20px;
      height: auto;
      margin-top: -20px;
    }

    .secao h1 {
      font-size: 2.5rem;
    }

    .secao p {
      font-size: 1.5rem;
    }

    .secao button {
      font-size: 1.5rem;
      padding: 10px 15px;
    }
  }

  /*Seções das próximas corridas*/

  .h1-proximas-corridas {
    text-align: center;
    margin-top: 50px;
  }

  .container-botao {
    margin-top: 50px;
    text-align: center;
  }

  #button-calendario {
    background-color: rgb(187, 187, 187);
    color: #000000;
    border-radius: 100px;
    padding: 10px 30px;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 100px;
  }

  #button-calendario:hover {
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
  }

  .container-nextrace {
    width: 100%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .desc {
    color: white;
    font-weight: bold;
    font-size: 5.5rem;
  }

  .card {
    width: 18%; /* Você pode ajustar a largura conforme necessário */
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(#333, #333);
    transition: all 0.5s;
    margin-right: 25px;
  }

  .card:hover {
    background-image: linear-gradient(#331e50, #191322);
  }

  .card .img {
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    background-size: cover;
    background-position: center;
    transition: all 0.5s;
    z-index: 2;
    position: relative;
    opacity: 0.8;
  }

  #card1 .img {
    background-image: url(${corrida_alemanha});
  }

  #card2 .img {
    background-image: url(${corrida_china});
  }

  #card3 .img {
    background-image: url(${corrida_usa});
  }

  #card4 .img {
    background-image: url(${corrida_uk});
  }

  .card .img span {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 100;
    font-style: italic;
    transition: all 0.5s;
  }

  .card:hover .img {
    width: 430px;
    opacity: 1;
  }

  .card:hover .img span {
    font-size: 28px;
  }

  .card .content {
    padding: 0px 20px;
    height: 0;
    opacity: 0;
    transition: all 0.5s;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    transform: translateY(30px);
  }

  .card:hover .content {
    height: 260px;
    padding: 20px;
    opacity: 1;
    transform: translateY(0);
  }

  .card .content p {
    margin: 0;
  }

  .card .content .title {
    font-size: 20px;
    font-weight: 600;
  }

  .card .content .desc {
    font-size: 1.8rem;
    font-weight: 200;
    opacity: 0.8;
    margin-top: 8px;
  }

  /*.card .arrow {
      padding: 15px;
      transform: rotate(-180deg);
      transition: all .5s;
  }*/

  /*.card:hover .arrow {
      transform: rotate(0);
  }*/

  .card .arrow span {
    font-size: 20px;
    color: #dfe9f3;
  }

  /* Estilos para dispositivos móveis */
  @media only screen and (max-width: 480px) {
    .card {
      width: 35%; /* Altera a largura para exibir dois cartões por linha */
      margin-left: 15px;
      grid-template-columns: repeat(2, 1fr); /* 2 colunas com largura igual */
      gap: 15px; /* Espaçamento entre os cards */
   
      
    }
  }

  /* Estilo para a seção de classificação */
  .classificacao {
    max-height: 400px; /* Ajuste a altura conforme necessário */
    overflow-x: auto; /* Barra de rolagem horizontal */
    position: relative;
    text-align: center;
  }

  /* Estilo para a tabela */
  table {
    border-collapse: collapse;
    margin: 20px 0px;
    width: 90%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    margin-left: auto;
    margin-right: auto;
  }

  /* Estilo para as linhas da tabela */
  table tr {
    padding: 0.5rem;
  }

  /* Estilo para o cabeçalho da tabela */
  thead tr {
    background-color: #010f1c;
    font-weight: bold;
  }

  /* Estilo para o corpo da tabela */
  tbody {
    background-color: #dfe9f3;
  }

  tbody tr:nth-child(even) {
    background-color: #54799c;
  }

  /* Estilo para as células da tabela */
  th,
  td {
    border-right: 0.05rem solid #ccd0e8;
    font-size: 1.8rem;
    padding: 1rem;
    text-align: center;
    font-weight: 350;
  }

  thead th {
    color: #ffffff;
    font-size: 2rem;
  }

  .container-botao {
    text-align: center;
  }

  /* Estilo para o botão */
  #button-classificacao {
    background-color: rgb(0, 0, 0);
    color: #fff;
    border-radius: 100px;
    padding: 10px;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 100px;
  }

  #button-classificacao:hover {
    background-color: #989696;
    color: #000000;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    .h1-classificacao {
      text-align: center;
      margin-top: 100px;
    }
    table {
      border: 3px solid #000;
    }
    table thead tr {
      display: none;
    }
    table tr {
      display: block;
    }
    table th,
    table td {
      padding: 0.5rem;
    }
    table td {
      text-align: right;
      display: block;
      font-size: 1.44rem;
    }
    table td::before {
      content: attr(title) ": ";
      float: left;
    }
    tbody tr:nth-child(even) {
      background-color: #000000;
      color: #fff;
    }

    #button-classificacao {
      font-size: 1.44rem;
      margin: 0px 20px;
      margin-bottom: 20px;
    }

    .horizontal-line {
      width: 200px; /* Largura da linha */
    }

    th,
    td {
      border-right: none;
    }
  }

  /*Seção Regras e Regulamentos*/

  .secao {
    position: relative;
    display: flex;
    align-items: stretch; /* Estica os itens verticalmente */
    text-align: center;
  }

  .secao-img {
    flex: 0 0 60%; /* 60% da largura da seção para a imagem */
    overflow: hidden;
  }

  .secao-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .secao-texto {
    background-color: #000000;
    color: white;
    flex: 0 0 40%;
    margin: 0;
    position: relative;
    box-sizing: border-box;
    padding: 50px 40px;
  }

  .secao h1 {
    text-align: center;
    color: white;
    padding-bottom: 20px;
    font-size: 3.5rem;
  }

  .secao p {
    text-align: justify;
    font-weight: 200;
    font-size: 2rem;
    padding-bottom: 30px;
    padding-top: 25px;
  }

  .secao button {
    text-align: center;
    border-radius: 50px;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    margin: 30px 0px;
    font-size: 2rem;
    padding: 10px 20px;
  }

  .secao button:hover {
    background-color: #3b3b3b;
    color: #ffffff;
  }

  /* Resposividade das sections*/

  @media (max-width: 768px) {
    .secao {
      flex-direction: column;
      text-align: center;
    }

    .section-apresentacao {
      padding: 40px 50px;
    }

    .secao-img,
    .secao h1,
    .secao p {
      flex: 0 0 100%; /* Ocupa toda a largura da seção */
    }

    .secao p {
      padding-top: 20px;
      padding-bottom: 0px;
      font-size: 1.6rem;
    }

    .secao h1 {
      font-size: 2.8rem;
    }

    .secao-texto {
      padding: 20px 25px;
    }

    /* Estilos para o botão */
    button {
      border: none;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .secao button {
      font-size: 1.6rem;
    }
  }

  /*Adequação às telas do celular: tamanho 480px*/
  @media (max-width: 480px) {
    .secao p {
      padding-top: 5px;
      font-size: 1.2rem;
    }

    .secao-texto {
      padding: 5px;
    }

    .section-apresentacao {
      padding: 10px;
    }

    .secao h1 {
      font-size: 2.1rem;
      padding-top: 10px;
    }
    button {
      width: auto;
      height: auto;
    }

    .secao button {
      font-size: 1rem;
    }
  }

  /* Estilo para a seção de classificação */
  .classificacao {
    max-height: 400px; /* Ajuste a altura conforme necessário */
    overflow-x: auto; /* Barra de rolagem horizontal */
    position: relative;
    text-align: center;
  }

  /* Estilo para a tabela */
  table {
    border-collapse: collapse;
    margin: 20px 0px;
    width: 90%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    margin-left: auto;
    margin-right: auto;
  }

  /* Estilo para as linhas da tabela */
  table tr {
    padding: 0.5rem;
  }

  /* Estilo para o cabeçalho da tabela */
  thead tr {
    background-color: #010f1c;
    font-weight: bold;
  }

  /* Estilo para o corpo da tabela */
  tbody {
    background-color: #dfe9f3;
  }

  tbody tr:nth-child(even) {
    background-color: #54799c;
  }

  /* Estilo para as células da tabela */
  th,
  td {
    border-right: 0.05rem solid #ccd0e8;
    font-size: 1.8rem;
    padding: 1rem;
    text-align: center;
    font-weight: 350;
  }

  thead th {
    color: #ffffff;
    font-size: 2rem;
  }

  .container-botao {
    text-align: center;
  }

  /* Estilo para o botão */
  #button-classificacao {
    background-color: rgb(0, 0, 0);
    color: #fff;
    border-radius: 100px;
    padding: 10px;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 100px;
  }

  #button-classificacao:hover {
    background-color: #989696;
    color: #000000;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    .h1-classificacao {
      text-align: center;
      margin-top: 100px;
    }
    table {
      border: 3px solid #000;
    }
    table thead tr {
      display: none;
    }
    table tr {
      display: block;
    }
    table th,
    table td {
      padding: 0.5rem;
    }
    table td {
      text-align: right;
      display: block;
      font-size: 1.44rem;
    }
    table td::before {
      content: attr(title) ": ";
      float: left;
    }
    tbody tr:nth-child(even) {
      background-color: #000000;
      color: #fff;
    }

    #button-classificacao {
      font-size: 1.44rem;
      margin: 0px 20px;
      margin-bottom: 20px;
    }

    .horizontal-line {
      width: 200px; /* Largura da linha */
    }

    th,
    td {
      border-right: none;
    }
  }

  /*Seção de noticias*/

  .card-container-news {
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-top: 30px;
  }

  .section-noticias {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }

  .card-news {
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .card-news img {
    max-width: 100%;
    height: auto;
  }

  .card-content-news {
    padding: 20px;
  }

  .card-content-news h2 {
    color: #0078c2;
    font-size: 2.5rem;
    margin-bottom: 6px;
    text-align: justify;
  }

  .card-content-news p {
    color: #222;
    line-height: 1.5;
    font-size: 1.8rem;
  }

  .container-botao-noticias {
    text-align: center;
    margin: 2% 0;
    margin-right: 80px;
  }

  #botao-noticias {
    background-color: #000000;
    border-radius: 20px;
  }

  #botao-noticias:hover {
    background-color: #222;
  }

  @media screen and (max-width: 768px) {
    .card-container-news {
      grid-template-columns: repeat(2, 1fr);
    }
    .card-content-news h2 {
      font-size: 2rem;
    }
    .card-content-news p {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 480px) {
    .card-container-news {
      grid-template-columns: 2fr;
    }
    .card-content-news h2 {
      font-size: 1.5rem;
    }
    .card-content-news p {
      font-size: 1.2rem;
    }
    .container-botao-noticias {
      text-align: center;
      padding: 5px 10px;
    }
    .container-botao-noticias a {
      margin: 0;
      padding: 20px;
      text-align: center;
    }
  }

  /* Estilos básicos para o link de notícias */
  .link-noticias {
    display: inline-block;
    margin-top: 2px;
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    margin-left: 100px;
  }

  .link-noticias:hover {
    background-color: #0056b3;
  }

  .jogos {
    margin-bottom: -40px;
  }

  /*Menu Hamburger*/

  @media (max-width: 1200px) {
    body {
      overflow-x: hidden;
    }

    .logo-container {
      background-color: rgba(217, 217, 217, 0);
      margin: 0;
      padding: 0;
    }

    #logo {
      width: 6.4rem;
      height: auto;
    }

    .nav-list {
      position: absolute;
      top: 6.4rem;
      right: 0;
      width: 50vw;
      height: 100vh;
      background-color: #000000;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform: translateX(100%);
    }

    .navlink a {
      font-size: 1.44rem;
    }

    #header {
      height: 6.4rem;
    }

    .nav-list li {
      margin-left: 0;
      opacity: 0;
    }

    .mobile-menu {
      display: block;
    }

    .container-header #e {
      font-size: 3.2rem;
    }

    .container-header #formula {
      font-size: 2.8rem;
      padding: 10px;
    }

    .active {
      font-size: 1rem;
    }
  }

  .nav-list.active {
    transform: translateX(0);
    transition: transform 0.3s ease-in;
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .mobile-menu.active .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  .mobile-menu.active .line2 {
    opacity: 0;
  }

  .mobile-menu.active .line3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }

  /*Adequação às telas do celular: tamanho 480px*/
  @media (max-width: 480px) {
    #logo {
      width: 4.8rem;
      height: auto;
    }

    #header {
      height: 4.8rem;
    }

    .navlink a {
      font-size: 1.08rem;
    }

    .nav-list {
      width: 70vw;
      top: 4.8rem;
    }

    .container-header #e {
      font-size: 2.4rem;
    }

    .container-header #formula {
      font-size: 2.1rem;
      padding: 10px;
    }

    .mobile-menu div {
      width: 24px;
      height: 1.5px;
      margin: 8px;
      background-color: #fff;
    }

    .logo-container {
      margin: 0;
      padding: 0;
    }
    .active {
      font-size: clamp(0.7rem, 0.8rem, 1.57rem);
    }
  }
`;
