import { useEffect, useState } from "react";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    // Função para calcular a pontuação total de cada usuário
    const calcularPontuacao = (usuario) => {
      const { corridaPrincipal, corridaClassificatoria, pilotosPontuacao, equipePontuacao } = usuario.resultados;

      // Somar pontos dos pilotos
      const totalPilotos = pilotosPontuacao.reduce((acc, piloto) => {
        return acc + piloto.corridaPrincipal + piloto.corridaClassificatoria;
      }, 0);

      // Somar os pontos totais: corridaPrincipal + corridaClassificatoria + totalPilotos + pontos da equipe
      const total = corridaPrincipal + corridaClassificatoria + totalPilotos + equipePontuacao.principal + equipePontuacao.classificatoria;

      return total;
    };

    // Função para buscar o arquivo JSON
    const fetchRankingData = async () => {
      try {
        const response = await fetch('/dados.json'); // Caminho relativo para o arquivo na pasta public
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const dados = await response.json();

        // Criar o ranking ordenando pelo total de pontos
        const rankingUsuarios = dados.usuarios.map((usuario) => ({
          usuario: usuario.usuario,
          totalPontuacao: calcularPontuacao(usuario),
        })).sort((a, b) => b.totalPontuacao - a.totalPontuacao); // Ordenar de forma decrescente

        setRanking(rankingUsuarios);
      } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
      }
    };

    fetchRankingData();
  }, []);

  return (
    <div>
      <h1>Ranking de Usuários</h1>
      <ul>
        {ranking.map((usuario, index) => (
          <li key={usuario.usuario}>
            {index + 1}. {usuario.usuario} - {usuario.totalPontuacao} pontos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
