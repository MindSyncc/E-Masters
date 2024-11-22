import { FooterStyle } from "../css/FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <div id="fundodiv">
        {/*informações de contato*/}
        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            <li>
              <a href="">E-mail:</a>
            </li>
            <li>
              <a href="">formulae@gmail.com</a>
            </li>
            <li>
              <a href="">Telefone:</a>
            </li>
            <li>
              <a href="">+55 1111-1111</a>
            </li>
          </ul>
        </div>

        {/*Comunidade*/}
        <div className="footer-col">
          <h4>Comunidade</h4>
          <ul>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Ideias</a>
            </li>
            <li>
              <a href="">Desenvolvedores</a>
            </li>
          </ul>
        </div>

        {/*Links Úteis*/}
        <div className="footer-col">
          <h4>Links Úteis</h4>
          <ul>
            <li>
              <a href="">Termos de Uso</a>
            </li>
            <li>
              <a href="">Políticas de Privacidade</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
            <li>
              <a href="">Suporte</a>
            </li>
          </ul>
        </div>

        {/*Redes Sociais*/}
        <div className="footer-col">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        <div className="direitos">
          <p>Copyright @ 2024 - FórmulaE - Todos os direitos reservados</p>
        </div>

       
      </div>


      
    </FooterStyle>
  );
};

export default Footer;
