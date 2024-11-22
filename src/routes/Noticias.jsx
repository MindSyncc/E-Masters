import { NoticiasStyle } from "../css/NoticiasStyle";
import React from "react";
import news1 from "../assets/img/home/secao/news1.webp";
import news2 from "../assets/img/home/secao/news2.png";
import news3 from "../assets/img/home/secao/news3.webp";
import news4 from "../assets/img/home/secao/news4.jpg";
import news5 from "../assets/img/home/secao/news5.webp";
import news6 from "../assets/img/home/secao/news6.png";

const Noticias = () => {
  return (
    <NoticiasStyle>
      <h1 className="h1-noticias">Notícias</h1>
      <div className="horizontal-line"></div>
      <section className="section-noticias">
        <div className="card-container-news">
          {[
            {
              image: news1,
              title: "Liberty vai comprar ações da Fórmula E",
              content:
                "A Liberty Global adquiriu o controle acionário de 65% da Fórmula E, em porção vinda da Warner Bros Discovery. O negócio de telecomunicações verá a sua participação na Fórmula E aumentar para 65%, tornando-se assim o acionista controlador da série, sendo os restantes 35% compostos por acionistas minoritários.",
            },
            {
              image: news2,
              title:
                "Dia da Mobilidade Elétrica terá Tesla e carro da Fórmula E",
              content:
                "Neste sábado, 15, acontece o Dia da Mobilidade Elétrica (DME), considerado pela própria organização o maior evento sobre mobilidade elétrica e cidades inteligentes do Brasil. Encontros, discussões e presença de carros elétricos como alguns modelos da Tesla e até um protótipo oficial da Fórmula E estarão no evento, que será na praça Charles Miller, em São Paulo (SP).",
            },
            {
              image: news3,
              title: "Fórmula E lança programa sustentável para crianças",
              content:
                "A Fórmula E anunciou o Driving Force, um novo programa educativo voltado para a sustentabilidade destinado a crianças de 8 a 12 anos. O lançamento tem o objetivo de melhorar o aprendizado e a capacitação em questões ambientais e sociais.",
            },
            {
              image: news4,
              title: "Lola Cars e Fórmula E aumentam parceria até 2030",
              content:
                "A Lola Cars possui mais de 500 vitórias no esporte e ingressará na Fórmula E como fabricante a partir da próxima temporada, para a nova era GEN3 Evo. O foco da montadora inglesa será na eletrificação, hidrogênio e combustíveis sustentáveis.",
            },
            {
              image: news5,
              title:
                "Fórmula E anuncia projetos sociais nas cidades-sede da prova",
              content:
                "O fundo será direcionado para iniciativas que promovam impacto ambiental e social alinhadas à missão da Fórmula E, que é o primeiro evento esportivo do mundo com carbono zero. Chamado de Fórmula E Better Futures, o fundo não se limitará aos finais de semana de corrida, mas buscará combater desigualdades sociais e proteger o meio ambiente, especialmente em ambientes urbanos.",
            },
            {
              image: news6,
              title:
                "Ferrari na Fórmula E? CEO fala sobre negociações com a marca italiana",
              content:
                "O CEO da Fórmula E, Jeff Dodds, deu a entender que a categoria realiza negociações com a Ferrari sobre a possibilidade de a marca italiana se juntar ao campeonato elétrico de alguma forma nos próximos anos. As discussões surgiram no momento em que a Ferrari se prepara para abrir sua primeira linha de eletrificação no próximo mês, onde produzirá suas próprias baterias e sua frota de veículos elétricos.",
            },
          ].map((item, index) => (
            <div className="card-news" key={index}>
              <img src={item.image} alt="" />
              <div className="card-content-news">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </NoticiasStyle>
  );
};

export default Noticias;
