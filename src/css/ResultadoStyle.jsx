import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f0f0f0; /* Cor de fundo opcional */
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  color: #555;
`;

export const PilotoItem = styled.li`
  list-style: none;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

