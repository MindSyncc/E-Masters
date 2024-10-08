import React, { useEffect, useState } from "react";
import {
  Card,
  Title,
  SubTitle,
  PilotoItem,
  Container
} from "../css/ResultadoStyle";

const Resultado = () => {
  const [resultados, setResultados] = useState(null);

  useEffect(() => {
    const resultadosSalvos = sessionStorage.getItem("resultados");
    if (resultadosSalvos) {
      setResultados(JSON.parse(resultadosSalvos));
    }
  }, []);

  if (!resultados) {
    return <div>Carregando resultados...</div>;
  }

  return (
    <Container>
      <Title>Resultados da Corrida</Title>
      
      <Card>
        <SubTitle>Corrida Principal</SubTitle>
        <p style={{fontSize:"1.6rem"}}>Total Pontuação: {resultados.corridaPrincipal}</p>
      </Card>

      <Card>
        <SubTitle>Corrida Classificatória</SubTitle>
        <p style={{fontSize:"1.6rem"}}>Total Pontuação: {resultados.corridaClassificatoria}</p>
      </Card>

      <Card>
        <SubTitle>Pontuação dos Pilotos</SubTitle>
        <ul style={{fontSize:"1.6rem"}}>
          {resultados.pilotosPontuacao.map((piloto, index) => (
            <PilotoItem key={index}>
              <div style={{fontSize:"1.6rem"}}>
                <strong style={{fontSize:"1.6rem"}}>{piloto.nome}</strong>:<br />
                Corrida Principal: {piloto.corridaPrincipal} pontos<br />
                Corrida Classificatória: {piloto.corridaClassificatoria} pontos
              </div>
            </PilotoItem>
          ))}
        </ul>
      </Card>

      <Card>
        <SubTitle>Pontuação da Equipe</SubTitle>
        <p style={{fontSize:"1.6rem"}}>
          Corrida Principal: {resultados.equipePontuacao.principal} pontos<br />
          Corrida Classificatória: {resultados.equipePontuacao.classificatoria} pontos
        </p>
      </Card>
    </Container>
  );
};

export default Resultado;
