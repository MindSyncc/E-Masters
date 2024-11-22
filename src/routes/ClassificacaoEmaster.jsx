import { useEffect, useState } from "react";
import classificacao from "../../lista-classificacao.json";
import { ClassificacaoStyle } from "../css/ClassificacaoStyle";

const Classificacao = () => {
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
    <ClassificacaoStyle className="margin-bottom-100">
      <h1 className="h1-classificacao">Classificação 23/24</h1>
      <div className="horizontal-line"></div>

      <h1 className="h1-classificacao">Classificação 23/24</h1>
      <div className="horizontal-line"></div>

      <table>
        <thead>
          <tr className="tabela">
            <th title="Posição">Posição</th>
            <th title="Jogador">Jogador</th>
            <th title="Pontuação">Pontuação</th>
          </tr>
        </thead>

        <tbody>
          {ranking.map((usuario, index) => (
            <tr key={usuario.usuario}>
              <td title="Posição">{index + 1}</td>
              <td title="Jogador">{usuario.usuario}</td>
              <td title="Pontuação">{usuario.totalPontuacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ClassificacaoStyle>
  );
};

export default Classificacao;
