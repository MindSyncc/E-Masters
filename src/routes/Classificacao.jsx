import classificacao from "../../lista-classificacao.json";
import { ClassificacaoStyle } from "../css/ClassificacaoStyle";

const Classificacao = () => {
  return (
    <ClassificacaoStyle className="margin-bottom-100">
      <h1 className="h1-classificacao">Classificação 23/24</h1>
      <div className="horizontal-line"></div>

      <table>
        <thead>
          <tr className="tabela">
            <th title="Posição">Posição</th>
            <th title="Pilotos">Pilotos</th>
            <th title="Pilotos">Equipes</th>
            <th title="Desempenho na Temporada" colSpan="16">
              Desempenho na Temporada
            </th>
            <th title="Pontuação">Pontuação</th>
          </tr>
        </thead>

        <tbody>
          {classificacao.map((posicoes) => {
            const { posicao, nome, equipe, desempenho, pontuacao } = posicoes;
            return (
              <tr key={nome}>
                <td title="Posição">{posicao}</td>
                <td title="Pilotos">{nome}</td>
                <td title="Equipe">{equipe}</td>

                {desempenho.map((valor, index) => (
                  <td key={index} title="Desempenho">
                    {valor}
                  </td>
                ))}

                <td title="Pontuação">{pontuacao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ClassificacaoStyle>
  );
};

export default Classificacao;
