import styled from "styled-components";

export const CalendarioStyle = styled.section`
  .calendar-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .calendar-container h1 {
    font-size: 3rem;
  }

  #calendar p,
  #calendar h3 {
    font-size: 2rem;
  }

  #calendar h3 {
    color: #6a6666;
  }

  h1 {
    margin-bottom: 20px;
    margin-top: 40px;
  }

  .event {
    margin: 10px 0;
    padding: 10px;
    background-color: #eaeaea;
    border-radius: 5px;
  }

  .event h3 {
    margin: 5px 0;
  }

  .event p {
    margin: 0;
  }

  #comprar-ingresso {
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
    border-radius: 12px;
  }

  #comprar-ingresso:hover {
    background-color: #0c004e;
  }

  .comprar {
    text-align: center;
  }
`;
