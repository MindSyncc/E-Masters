import logo from "../assets/img/logo/logo.jpg";
import { HeaderStyle } from "../css/HeaderStyle";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Header = () => {
  const location = useLocation();
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/equipes";
  const mobileMenuRef = useRef(null);
  const navListRef = useRef(null);
  const navLinksRef = useRef([]);

  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = mobileMenu;
      this.navList = navList;
      this.navLinks = navLinks;
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    const navList = navListRef.current;
    const navLinks = navLinksRef.current;

    const mobileNavbar = new MobileNavbar(mobileMenu, navList, navLinks);
    mobileNavbar.init();

    return () => {
      mobileMenu.removeEventListener("click", mobileNavbar.handleClick);
    };
  }, []);

  return (
    <HeaderStyle>
      <section
        className={
          isHome ? "container-header" : "container-header header-not-in-home"
        }
      >
        <header id="header">
          <div className="logo-container">
            <Link to={"/home"}>
              <img src={logo} alt="Formula E Logo" id="logo" />

              <span id="e">E-</span>
              <span id="formula">Masters</span>
            </Link>
          </div>
          <nav className="navbar">
            <div className="mobile-menu" ref={mobileMenuRef}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className="nav-list" ref={navListRef}>
              {[
                "/jogo",
                "/resultados",
                "/regras",
                "/calendário",
                "/pilotos",
                "/equipes",
                "/classificação",
                "/ranking",
                "/notícias",
                
              ].map((path, index) => (
                <li
                  className="navlink"
                  key={index}
                  ref={(el) => (navLinksRef.current[index] = el)}
                >
                  <Link to={path}>
                    {path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </section>
    </HeaderStyle>
  );
};

export default Header;
