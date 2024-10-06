import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./routes/Error.jsx";
import Home from "./routes/Home.jsx";
import Calendario from "./routes/Calendario.jsx";
import Pilotos from "./routes/Pilotos.jsx";
import Classificacao from "./routes/Classificacao.jsx";
import Equipes from "./routes/Equipes.jsx";
import Regras from "./routes/Regras.jsx";
import Noticias from "./routes/Noticias.jsx";
import Jogo from "./routes/Jogo.jsx";
import RegrasFormulaE from "./routes/RegrasFormulaE.jsx";
import RegrasEmasters from "./routes/RegrasEmasters.jsx";
import Ranking from "./routes/Ranking.jsx";
import TesteApi from './routes/TesteApi.jsx';
import Resultado from './routes/Resultado.jsx'

// Função que cria as rotas

const router = createBrowserRouter([
  {
    //Elementos Pai
    path: "/",
    element: <App />,
    errorElement: <Error />,

    //Elementos Filho
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/calendário", element: <Calendario /> },
      { path: "/pilotos", element: <Pilotos /> },
      { path: "/classificação", element: <Classificacao /> },
      { path: "/equipes", element: <Equipes /> },
      { path: "/regras", element: <Regras /> },
      { path: "/notícias", element: <Noticias /> },
      { path: "/jogo", element: <Jogo /> },
      { path: "/regras-formula-e", element: <RegrasFormulaE /> },
      { path: "/regras-emasters", element: <RegrasEmasters /> },
      { path: "/ranking", element: <Ranking /> },
      {path: "/testeapi", element:<TesteApi/>},
      { path: "/resultados", element:<Resultado/>},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
