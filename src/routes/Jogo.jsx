import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JogoStyle } from "../css/JogoStyle";
import { Link } from "react-router-dom";

// Pilotos disponíveis para seleção, agora com imagens
const pilotos = [
  { id: 1, nome: "Buemi", imagem: "src/assets/img/pilotos/buemi.png" },
  { id: 2, nome: "Dacosta", imagem: "src/assets/img/pilotos/dacosta.png" },
  { id: 3, nome: "Dennis", imagem: "src/assets/img/pilotos/dennis.png" },
  { id: 4, nome: "Digrassi", imagem: "src/assets/img/pilotos/digrassi.png" },
  { id: 5, nome: "Fenestraz", imagem: "src/assets/img/pilotos/fenestraz.png" },
  { id: 6, nome: "Frijns", imagem: "src/assets/img/pilotos/frijns.png" },
  { id: 7, nome: "Gunther", imagem: "src/assets/img/pilotos/gunther.png" },
  { id: 8, nome: "Hughes", imagem: "src/assets/img/pilotos/hughes.png" },
  { id: 9, nome: "Lotterer", imagem: "src/assets/img/pilotos/lotterer2.png" },
  { id: 10, nome: "Evans", imagem: "src/assets/img/pilotos/mitch-evans.png" },
  { id: 11, nome: "Mortara", imagem: "src/assets/img/pilotos/mortara.png" },
  { id: 12, nome: "Muller", imagem: "src/assets/img/pilotos/muller.png" },
  { id: 13, nome: "Nato", imagem: "src/assets/img/pilotos/nato.png" },
  {
    id: 14,
    nome: "Cassidy",
    imagem: "src/assets/img/pilotos/nick-cassidy.png",
  },
  { id: 15, nome: "Rast", imagem: "src/assets/img/pilotos/rast2.png" },
  { id: 16, nome: "Rowland", imagem: "src/assets/img/pilotos/rowland.png" },
  { id: 17, nome: "Sam Bird", imagem: "src/assets/img/pilotos/sam-bird.png" },
  {
    id: 18,
    nome: "Sette-Câmara",
    imagem: "src/assets/img/pilotos/sette-camara.png",
  },
  { id: 19, nome: "Ticktum", imagem: "src/assets/img/pilotos/ticktum.png" },
  { id: 20, nome: "Vandoorne", imagem: "src/assets/img/pilotos/vandoorne.png" },
  { id: 21, nome: "Vergne", imagem: "src/assets/img/pilotos/vergne.png" },
  { id: 22, nome: "Wehrlein", imagem: "src/assets/img/pilotos/wehrlein.png" },
];

// Adicionando imagens às equipes
const equipes = [
  {
    id: 1,
    nome: "Andretti",
    imagem: "src/assets/img/equipes/andretti/andretti.jpg",
  },
  {
    id: 2,
    nome: "Cupra",
    imagem: "src/assets/img/equipes/cupra/cupra.jpg",
  },
  { id: 3, nome: "DSPenske", imagem: "src/assets/img/equipes/ds/ds.jpg" },
  {
    id: 4,
    nome: "ERT",
    imagem: "src/assets/img/equipes/ert/ert.jpg",
  },
  {
    id: 5,
    nome: "Jaguar TCS Racing",
    imagem: "src/assets/img/equipes/jaguar/jaguar.jpg",
  },
  {
    id: 6,
    nome: "Nissan",
    imagem: "src/assets/img/equipes/nissan/nissan.jpg",
  },
  {
    id: 7,
    nome: "Maserati MSG Racing",
    imagem: "src/assets/img/equipes/maserati/maserati.jpg",
  },
  {
    id: 8,
    nome: "Mahindra Racing",
    imagem: "src/assets/img/equipes/mahindra/mahindra.jpg",
  },
  {
    id: 9,
    nome: "Porsche",
    imagem: "src/assets/img/equipes/porsche/porsche.jpg",
  },
  {
    id: 10,
    nome: "Envision Racing",
    imagem: "src/assets/img/equipes/envision/envision.jpg",
  },
  {
    id: 11,
    nome: "McLaren",
    imagem: "src/assets/img/equipes/mclaren/mclaren.jpg",
  },
];

const Jogo = () => {
  // Referências e estados para login
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  // Estado para diferenciar entre login e cadastro de usuário
  const [isCadastro, setIsCadastro] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem("usuario")
  ); // Verifica se o usuário está logado ao carregar
  let { id } = useParams();
  const [novoUsuario, setNovoUsuario] = useState({
    id,
    usuario: "",
    senha: "",
  });

  // Função de validação para login
  function validade() {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === usuario.current.value &&
        usuarios[i].senha === senha.current.value
      ) {
        return true;
      }
    }
    return false;
  }

  // Função de envio de login
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (validade()) {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem("usuario", usuario.current.value);
      sessionStorage.setItem("senha", token);
      setIsLoggedIn(true);
      navigate("/jogo");
    } else {
      alert("Usuário/senha inválidos");
    }
  };

  // Função de manipulação para cadastro de usuário
  const handleChangeCadastro = (e) => {
    setNovoUsuario({ ...novoUsuario, [e.target.name]: e.target.value });
  };

  // useEffect para buscar os usuários na API
  useEffect(() => {
    if (isCadastro && id) {
      fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res) => res.json())
        .then((data) => setNovoUsuario(data));
    } else {
      fetch("http://localhost:5000/usuarios/")
        .then((res) => res.json())
        .then((res) => {
          console.log("Usuários carregados:", res); // Verificação de debug
          setUsuarios(res);
        })
        .catch((err) => console.error("Erro ao carregar usuários:", err));
    }
  }, [id, isCadastro]);

  // Função de envio de cadastro de usuário
  const handleSubmitCadastro = (e) => {
    e.preventDefault();

    // Validação de campos vazios
    if (novoUsuario.usuario.trim() === "" || novoUsuario.senha.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const usuarioExistente = usuarios.some(
      (user) => user.usuario.toLowerCase() === novoUsuario.usuario.toLowerCase()
    );

    if (usuarioExistente) {
      alert("Este nome de usuário já existe. Escolha outro.");
      return;
    }

    // Se todas as validações forem bem-sucedidas, continuar com o envio
    let metodo = id ? "put" : "post";

    fetch(`http://localhost:5000/usuarios/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    })
      .then(() => {
        alert("Cadastro realizado com sucesso !!!");
        // Limpar os campos após o sucesso do envio
        setNovoUsuario({
          usuario: "",
          senha: "",
        });

        navigate("/jogo");
        window.location.reload(); // Atualizar a página

        navigate("/jogo", { replace: true });
      })
      .catch((err) => console.error("Erro ao enviar cadastro:", err));
  };

  // Função de logout
  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    setIsLoggedIn(false);
    alert("Você foi deslogado com sucesso!");
    navigate("/home"); // Redirecionar para a página de login
  };

  // Alternar entre login e cadastro
  const toggleCadastro = () => {
    setIsCadastro(!isCadastro);
  };

  const [selectedPilotos, setSelectedPilotos] = useState([]);
  const [selectedEquipe, setSelectedEquipe] = useState(null);
  const [resultados, setResultados] = useState(null);

  // Adiciona ou remove pilotos da seleção
  const handlePilotSelect = (piloto) => {
    setSelectedPilotos((prev) => {
      if (prev.includes(piloto)) {
        return prev.filter((p) => p !== piloto);
      }
      if (prev.length < 3) {
        return [...prev, piloto];
      }
      return prev;
    });
  };

  // Escolhe uma equipe
  const handleEquipeSelect = (equipe) => {
    setSelectedEquipe(equipe);
  };

  const simularResultados = () => {
    return {
      voltaMaisRapida:
        selectedPilotos[Math.floor(Math.random() * selectedPilotos.length)], // Seleciona um piloto aleatório
    };
  };


  const enviarResultados = (resultados) => {
    const usuarioLogado = sessionStorage.getItem("usuario"); // Obtenha o nome ou id do usuário logado
    
    // Busca o usuário existente pelo nome (ou ID) e atualiza os dados
    fetch(`http://localhost:5000/usuarios?usuario=${usuarioLogado}`)
      .then((res) => res.json())
      .then((usuarios) => {
        if (usuarios.length > 0) {
          const usuarioExistente = usuarios[0]; // Assume que só há um usuário com esse nome
  
          // Atualiza os dados do usuário com os resultados
          const usuarioAtualizado = {
            ...usuarioExistente,
            resultados: resultados, // Armazena os resultados no usuário
          };
  
          // Envia a requisição PUT para atualizar o usuário existente
          fetch(`http://localhost:5000/usuarios/${usuarioExistente.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuarioAtualizado),
          })
            .then(() => {
              alert("Resultados enviados e atualizados com sucesso!");
            })
            .catch((err) => {
              console.error("Erro ao atualizar resultados:", err);
              alert("Erro ao atualizar resultados.");
            });
        } else {
          alert("Usuário não encontrado.");
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar usuário:", err);
        alert("Erro ao buscar usuário.");
      });
  };
  












  

  // Função para calcular os pontos
  const calcularPontuacao = () => {
  console.log("Função calcularPontuacao foi chamada");
  if (selectedPilotos.length !== 3) {
    alert("Por favor, selecione 3 pilotos.");
    return;
  }

  if (!selectedEquipe) {
    alert("Por favor, selecione uma equipe.");
    return;
  }

  let totalCorridaPrincipal = 0;
  let totalCorridaClassificatoria = 0;
  let pontosEquipePrincipal = 0;
  let pontosEquipeClassificatoria = 0;
  let pilotosPontuacao = [];

  const resultadosSimulados = simularResultados();
  const usuarioLogado = sessionStorage.getItem("usuario"); // Captura o usuário logado

  selectedPilotos.forEach((piloto, index) => {
    let pontosCorridaPrincipal = 0;
    let pontosCorridaClassificatoria = 0;

    if (index === 0) pontosCorridaPrincipal += 10; // 1º lugar
    else if (index === 1) pontosCorridaPrincipal += 5; // 2º lugar
    else if (index === 2) pontosCorridaPrincipal += 3; // 3º lugar

    if (index === 0) pontosCorridaClassificatoria += 5; // 1º lugar
    else if (index === 1) pontosCorridaClassificatoria += 2.5; // 2º lugar
    else if (index === 2) pontosCorridaClassificatoria += 1.5; // 3º lugar


    if (resultadosSimulados.voltaMaisRapida === piloto) {
      pontosCorridaPrincipal += 10;
    }

    if (resultadosSimulados.voltaMaisRapida === piloto) {
      pontosCorridaClassificatoria += 5;
    }

    pilotosPontuacao.push({
      nome: piloto.nome,
      corridaPrincipal: pontosCorridaPrincipal,
      corridaClassificatoria: pontosCorridaClassificatoria,
    });

    totalCorridaPrincipal += pontosCorridaPrincipal;
    totalCorridaClassificatoria += pontosCorridaClassificatoria;

    if (selectedPilotos.indexOf(piloto) < 2) {
      pontosEquipePrincipal += pontosCorridaPrincipal;
      pontosEquipeClassificatoria += pontosCorridaClassificatoria;
    }
  });

  const resultados = {
    corridaPrincipal: totalCorridaPrincipal,
    corridaClassificatoria: totalCorridaClassificatoria,
    pilotosPontuacao,
    equipePontuacao: {
      principal: pontosEquipePrincipal,
      classificatoria: pontosEquipeClassificatoria,
    },
  };

  // Atualiza os resultados no estado
  setResultados(resultados);

  // Envia os resultados para a rota /resultados
  enviarResultados(resultados);

  sessionStorage.setItem("resultados", JSON.stringify(resultados));
};


  


  

  return (
    <JogoStyle>
      {!isLoggedIn ? (
        !isCadastro ? (
          <section className="container">
            <div className="content first-content">
              <div className="first-column">
                <h2 className="title title-primary">Bem-vindo!</h2>
                <p className="description description-primary">
                  Para se manter conectado conosco
                </p>
                <p className="description description-primary">
                  Faça login com suas informações pessoais
                </p>
              </div>

              <div className="second-column">
                <form className="login-form" onSubmit={handleSubmitLogin}>
                  <span className="title title-second">Faça seu Login</span>
                  <div className="social-media">
                    <ul className="list-social-media">
                      <a className="link-social-media" href="#">
                        <li className="item-social-media facebook">
                          <i className="fab fa-facebook-f"></i>
                        </li>
                      </a>
                      <a className="link-social-media" href="#">
                        <li className="item-social-media">
                          <i className="fab fa-google-plus-g"></i>
                        </li>
                      </a>
                      <a className="link-social-media" href="#">
                        <li className="item-social-media">
                          <i className="fab fa-linkedin-in"></i>
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="form2">
                    <label className="label-input" htmlFor="usuario">
                      <i className="far fa-user icon-modify"></i>
                      <input
                        type="text"
                        className="input-form"
                        id="usuario"
                        ref={usuario}
                        placeholder="Usuário"
                      />
                    </label>

                    <label className="label-input" htmlFor="usuario">
                      <i className="fas fa-lock icon-modify"></i>
                      <input
                        type="password"
                        className="input-form"
                        id="senha"
                        ref={senha}
                        placeholder="Senha"
                      />
                    </label>
                  </div>

                  <div className="login-btn">
                    <button className="btn btn-second" type="submit">
                      Login
                    </button>
                  </div>

                  <ul className="utilidades">
                    <li>
                      <span className="text1">Esqueceu sua senha?</span>
                    </li>
                    <li>
                      <span className="text1">Não possui conta?</span>
                      <span onClick={toggleCadastro} className="link">
                        Criar conta
                      </span>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </section>
        ) : (
          // Formulário de Cadastro com o HTML fornecido
          <div className="container">
            <div className="content first-content">
              <div className="first-column">
                <h2 className="title title-primary">Bem-vindo!</h2>
                <p className="description description-primary">
                  Para se conectar conosco
                </p>
                <p className="description description-primary">
                  Cadastre-se aqui com suas informações
                </p>
              </div>
              <div className="second-column">
                <h2 className="title title-second">Criar conta</h2>
                <div className="social-media">
                  <ul className="list-social-media">
                    <a className="link-social-media" href="#">
                      <li className="item-social-media facebook">
                        <i className="fab fa-facebook-f"></i>
                      </li>
                    </a>
                    <a className="link-social-media" href="#">
                      <li className="item-social-media">
                        <i className="fab fa-google-plus-g"></i>
                      </li>
                    </a>
                    <a className="link-social-media" href="#">
                      <li className="item-social-media">
                        <i className="fab fa-linkedin-in"></i>
                      </li>
                    </a>
                  </ul>
                </div>
                <p className="description description-second">
                  ou utilize seu e-mail para cadastro:
                </p>
                <form className="form" onSubmit={handleSubmitCadastro}>
                  <label className="label-input" htmlFor="usuario">
                    <i className="far fa-user icon-modify"></i>
                    <input
                      type="text"
                      name="usuario"
                      placeholder="Nome"
                      value={novoUsuario.usuario}
                      onChange={handleChangeCadastro}
                    />
                  </label>

                  <label className="label-input" htmlFor="senha">
                    <i className="fas fa-lock icon-modify"></i>
                    <input
                      type="password"
                      name="senha"
                      placeholder="Senha"
                      value={novoUsuario.senha}
                      onChange={handleChangeCadastro}
                    />
                  </label>

                  <button className="btn btn-second" type="submit">
                    Cadastrar-se
                  </button>
                  <ul className="utilidades">
                    <li>
                      <span className="text1">Já possui conta?</span>
                    </li>
                    <li>
                      <span onClick={toggleCadastro} className="link">
                        Clique aqui para entrar
                      </span>
                    </li>
                  </ul>
                </form>
              </div>
            </div>

            <div className="content second-content">
              <div className="first-column">
                <h2 className="title title-primary">Não tem cadastro?</h2>
                <p className="description description-primary">
                  Introduza os seus dados pessoais
                </p>
                <p className="description description-primary">
                  e faça login logo após
                </p>
                <button
                  id="signup"
                  className="btn btn-primary"
                  onClick={toggleCadastro}
                >
                  Cadastrar
                </button>
              </div>
              <div className="second-column">
                <h2 className="title title-second">Faça o seu login</h2>
                <div className="social-media">
                  <ul className="list-social-media">
                    <a className="link-social-media" href="#">
                      <li className="item-social-media">
                        <i className="fab fa-facebook-f"></i>
                      </li>
                    </a>
                    <a className="link-social-media" href="#">
                      <li className="item-social-media">
                        <i className="fab fa-google-plus-g"></i>
                      </li>
                    </a>
                    <a className="link-social-media" href="#">
                      <li className="item-social-media">
                        <i className="fab fa-linkedin-in"></i>
                      </li>
                    </a>
                  </ul>
                </div>
                <p className="description description-second">
                  ou use sua conta de e-mail:
                </p>
                <form className="form" onSubmit={handleSubmitLogin}>
                  <label className="label-input" htmlFor="email">
                    <i className="far fa-user icon-modify"></i>
                    <input type="email" placeholder="Email" ref={usuario} />
                  </label>

                  <label className="label-input" htmlFor="senha">
                    <i className="fas fa-lock icon-modify"></i>
                    <input type="password" placeholder="Password" ref={senha} />
                  </label>

                  <a className="password" href="#">
                    Esqueceu a senha?
                  </a>
                  <button className="btn btn-second" id="loginButton">
                    Entrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      ) : (
        
        <div className="div-pilot">
          <p className="choice">Escolha Seus Pilotos</p>
          <div className="section-pilot">
            {pilotos.map((piloto) => (
              <button
                className="card-button"
                key={piloto.id}
                onClick={() => handlePilotSelect(piloto)}
                style={{
                  backgroundColor: selectedPilotos.includes(piloto)
                    ? "lightgreen"
                    : "white",
                }}
              >
                <img src={piloto.imagem} alt={piloto.nome} />
                {piloto.nome}
              </button>
              
            ))}
          </div>

          <div className="div-pilot">
            <p className="choice">Escolha uma equipe</p>
            <div className="section-car">
              {equipes.map((equipe) => (
                <div
                  className="card-car"
                  key={equipe.id}
                  onClick={() => handleEquipeSelect(equipe)}
                  style={{
                    backgroundColor:
                      selectedEquipe === equipe ? "#71da90" : "white",
                  }}
                >
                  <img src={equipe.imagem} alt={equipe.nome} />
                  <p>{equipe.nome}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="button-game" onClick={calcularPontuacao}>
            Iniciar Corrida
          </button>


          <Link to="/resultados" className="link">
        <button className="button-game">Visualize seus Resultados</button>
          </Link>

          <button className="button-game" onClick={handleLogout}>Logout</button> {/* Botão de logout */}


        </div>
      )}
    </JogoStyle>
  );
};

export default Jogo;