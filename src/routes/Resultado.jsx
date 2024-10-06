import React, { useEffect, useState } from "react";

const Resultado = () => {
  const [resultados, setResultados] = useState(null);

  // Simulação: Aqui você pode buscar os resultados do backend ou sessionStorage
  useEffect(() => {
    const resultadosSalvos = sessionStorage.getItem("resultados");
    if (resultadosSalvos) {
      setResultados(JSON.parse(resultadosSalvos));
    }
  }, []);

  if (!resultados) {
    return <div>Carregando resultados...</div>; // Mensagem de carregamento
  }

  return (
    <div>
      <h2>Resultados da Corrida</h2>
      
      {/* Resultados da Corrida Principal */}
      <h3>Corrida Principal</h3>
      <p>Total Pontuação da Corrida Principal: {resultados.corridaPrincipal}</p>
      
      {/* Resultados da Corrida Classificatória */}
      <h3>Corrida Classificatória</h3>
      <p>Total Pontuação da Corrida Classificatória: {resultados.corridaClassificatoria}</p>

      {/* Pontuação dos Pilotos */}
      <h3>Pontuação dos Pilotos</h3>
      <ul>
        {resultados.pilotosPontuacao.map((piloto, index) => (
          <li key={index}>
            <strong>{piloto.nome}</strong>:<br />
            Corrida Principal: {piloto.corridaPrincipal} pontos<br />
            Corrida Classificatória: {piloto.corridaClassificatoria} pontos
          </li>
        ))}
      </ul>

      {/* Pontuação da Equipe */}
      <h3>Pontuação da Equipe</h3>
      <p>
        Corrida Principal: {resultados.equipePontuacao.principal} pontos<br />
        Corrida Classificatória: {resultados.equipePontuacao.classificatoria} pontos
      </p>
    </div>
  );
};

export default Resultado;
