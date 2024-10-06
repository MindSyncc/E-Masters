import React, { useEffect, useState } from "react";
import { HomeStyle } from "../css/HomeStyle"; // Estilo para o vídeo e menu
import video from "../assets/video.mp4"; // Caminho do vídeo
import { Link } from "react-router-dom";

const Home = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    // Lógica para os círculos (se necessário)
  }, []);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <HomeStyle>
      <div className="homestyle">
        {/* Vídeo de fundo ocupando toda a tela */}
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Menu centralizado */}
        <div className="menu">
          <Link to="/jogo">Jogar</Link>
          <Link to="/regras">Regras</Link>
          {/* Adicionando Estatísticas com submenu */}
          <div className="submenu-container">
            <button onClick={toggleSubmenu} className="submenu-btn">
              Estatísticas
            </button>
            {submenuOpen && (
              <div className="submenu">
                <Link to="/pilotos">Pilotos</Link>
                <Link to="/equipes">Equipes</Link>
              </div>
            )}
          </div>
          <Link to="/ranking">Ranking</Link>
          <Link to="/calendário">Calendário</Link>
          <Link to="/notícias">Notícias</Link>
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;
