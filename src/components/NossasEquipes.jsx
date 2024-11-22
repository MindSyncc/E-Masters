import { useEffect } from "react";
import { HomeStyle } from "../css/HomeStyle";

const Home = () => {
  useEffect(() => {
    const circulos = document.querySelectorAll(".circulo");
    const textos = document.querySelectorAll(".texto");

    const handleClick = (circulo) => {
      const idCirculo = circulo.id.replace("circulo-", "");
      circulos.forEach((c) => c.classList.remove("ativo"));
      circulo.classList.add("ativo");
      textos.forEach((t) => {
        t.classList.remove("ativo");
        t.style.display = "none";
      });
      const textoAtivo = document.getElementById(`texto-${idCirculo}`);
      textoAtivo.classList.add("ativo");
      textoAtivo.style.display = "block";
    };

    circulos.forEach((circulo) => {
      circulo.addEventListener("click", () => handleClick(circulo));
    });

    return () => {
      circulos.forEach((circulo) => {
        circulo.removeEventListener("click", () => handleClick(circulo));
      });
    };
  }, []);

  return <HomeStyle className="margin-bottom-100"></HomeStyle>;
};

export default Home;
