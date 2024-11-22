import styled from "styled-components";

export const NoticiasStyle = styled.section`
  .h1-noticias {
    font-size: 3rem;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 10px;
  }
  #header {
    background-color: black;
  }

  /* Nome da fonte importada: Josefin Sans */
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");
  /* Nome da fonte importada: Roboto Mono */
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");

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
    margin-bottom: 5vh;
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
      margin-right: 100px;
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

  /*Rodapé*/

  footer {
    /*background-color: #333;*/
    color: #fff;
    padding: -80px 0px;
  }

  .rede {
    margin-top: 12px;
    font-size: 1.5rem;
  }

  /*.container {
  width: 80%;
  margin: -260px 700px;
}*/

  .footer-contact {
    max-width: 400px;
  }

  .footer-contact h3 {
    margin-bottom: 10px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #ff6600;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #ff8533;
  }

  #fundodiv {
    font-family: "Roboto", sans-serif;
    background-color: rgb(32, 32, 32);
    margin-top: 30px;
    padding: 5% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul {
    margin-top: 20px;
  }

  .footer-col {
    flex: 1 1 200px; /* Base flex grow e shrink para responsividade */
    margin-top: -30px; /* Reduz a margem superior para mover o footer-col mais para cima */
    padding: 30px;
    color: white;
    font-size: 1.5rem;
  }

  .footer-col ul {
    list-style: none;
  }

  .footer-col h4 {
    font-size: 2rem;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 15px;
    font-weight: 500;
    position: relative;
  }

  .footer-col h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #220404;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }

  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  .footer-col ul li a {
    font-size: 1.8rem;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
    font-weight: 200;
  }

  .footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
  }

  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
  }

  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
  }

  .direitos {
    color: #ffffff;
    text-align: center;
    margin-top: 40px;
    width: 100%;
  }

  .direitos p {
    font-size: 1.8rem;
  }

  /* Media Queries para responsividade */
  @media (max-width: 768px) {
    #fundodiv {
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .footer-col {
      margin-top: 0;
      padding: 0;
      text-align: center;
    }

    .footer-col ul li a {
      font-size: 1.6rem;
    }

    .footer-col h4 {
      font-size: 1.8rem;
    }
    .direitos p {
      font-size: 1.6rem;
    }
  }
`;
