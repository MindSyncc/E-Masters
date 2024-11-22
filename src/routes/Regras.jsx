import React from "react";
import { useNavigate } from "react-router-dom";
import { RegrasStyle } from "../css/RegrasStyle";
import bateria from "../assets/img/home/secao/recupera-energia.jpg";
import regras from "../assets/img/home/secao/jogos.webp";

const RegrasFormulaE = () => {
  const navigate = useNavigate();

  // Funções para redirecionar
  const handleRegrasFormulaE = () => {
    navigate("/regras-formula-e");
  };

  const handleRegrasEMasters = () => {
    navigate("/regras-emasters");
  };

  return (
    <RegrasStyle>
      <main>
        <h1 className="regras-h1">Regras de Corrida</h1>
        <div className="rules-container">
          <div className="rule-item" onClick={handleRegrasFormulaE}>
            <img src={bateria} alt="Regras da Fórmula E" />
            <p className="text-item">Regras da Fórmula E</p>
          </div>
          <div className="rule-item" onClick={handleRegrasEMasters}>
            <img src={regras} alt="Regras do eMasters" />
            <p className="text-item">Regras do E-Masters</p>
          </div>
        </div>
      </main>
    </RegrasStyle>
  );
};

export default RegrasFormulaE;
