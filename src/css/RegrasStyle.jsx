import styled from "styled-components";

export const RegrasStyle = styled.section`
  /* styles.css */
  body {
    margin: 0;
    padding: 20px;
    background-color: #b9b9b9;
    font-family: "Roboto Mono", monospace;
  }

  * {
    font-size: 2rem;
  }

  main {
    margin-bottom: 10vh;
    padding: 50px;
  }

  .botao-regras {
    background-color: #191830;
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 20px 18px;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
  }
  .button-container {
    text-align: center;
  }

  .button-1 img,
  .button-2 img {
    width: 50%;
  }

  .botao-regras:hover {
    background-color: #191815;
  }

  h2 {
    color: #6b0b0b;
    margin-top: 20px;
    font-size: 2.5rem;
    text-align: center;
    padding-bottom: 3vh;
  }

  h3 {
    color: #6b0b0b;
    padding-bottom: 3vh;
  }

  p {
    line-height: 1.6;
    font-size: 2rem;
    padding-bottom: 3vh;
    font-weight: 300;
  }

  .rules-list {
    list-style-type: number;
    margin-left: 20px;
    color: #333;
  }

  ul li {
    margin-bottom: 10px;
    font-size: 2rem;
    margin-left: 30px;
  }

  section {
    background: #bdbdbd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 50px;
  }

  section:nth-child(even) {
    background: #eaeaea;
  }

  .regras-h1 {
    text-align: center;
    font-size: 3.5rem;
    padding-top: 10vh;
    padding-bottom: 5vh;
  }

  .rules-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 20px;
  }

  .rule-item {
    background-color: #000;
    border-radius: 20px;
    color: white;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px; /* Largura das seções */
    transition: transform 0.8s ease;
  }

  .rule-item:hover {
    transform: scale(1.1);
  }

  .rule-item img {
    width: 100%; /* Ajusta a imagem para ocupar toda a largura do item */
    border-radius: 10px;
  }

  .text-item {
    margin-top: 20px;
    font-size: 1.8rem;
  }

  .rule-item:hover {
    background-color: #1d1d1d;
  }
`;
