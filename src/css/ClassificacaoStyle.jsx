import styled from "styled-components";

export const ClassificacaoStyle = styled.section`
  overflow-x: auto; /* Barra de rolagem horizontal */
  position: relative;
  text-align: center;

  .h1-classificacao {
    font-size: 4rem;
    margin: 5%;
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
`;
