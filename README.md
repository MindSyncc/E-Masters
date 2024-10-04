# E-Masters - Jogo de Fórmula E

E-Masters é um jogo interativo onde os jogadores escolhem pilotos e equipes da Fórmula E para competir em corridas fictícias. Os participantes são desafiados a prever os vencedores, as posições finais e outros fatores de desempenho, acumulando pontos em duas fases de corrida: a Corrida Principal e a Corrida Classificatória.

## Funcionalidades Principais
- Escolha de 10 pilotos e 1 equipe para participar nas corridas.
- Sistema de pontuação baseado em fatores como: posições finais, voltas rápidas, ultrapassagens e mais.
- Simulação de Corrida Principal e Corrida Classificatória.
- Regras detalhadas e fatores de pontuação para cada tipo de corrida.

## Tecnologias Utilizadas
- **React.js**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **CSS**: Para estilização do jogo.
- **JavaScript**: Para controle da lógica do jogo, simulação das corridas e cálculo da pontuação.

## Instalação

### Pré-requisitos
- **Node.js**: Certifique-se de ter o Node.js instalado. [Instalar Node.js](https://nodejs.org/)
- **npm**: Gerenciador de pacotes.

### Instruções
1. Clone este repositório:

```bash
git clone https://github.com/MindSyncc/Site_Challenge2.git
```

2. Navegue até o diretório do projeto:

```bash
cd e_masters_site
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O aplicativo estará disponível em http://localhost:3000 no seu navegador.

## Como Jogar

1. Selecione 10 pilotos e 1 equipe para competir.
2. Acompanhe as duas fases: **Corrida Principal** e **Corrida Classificatória**.
3. A pontuação é calculada com base nos seguintes critérios:
   - **Posições finais**
   - **Voltas rápidas**
   - **Ultrapassagens e ultrapassagens sofridas**
   - **Penalidades por desqualificação**
4. Acumule pontos e veja seus resultados após cada corrida.


## Regras do Jogo

### Corrida Principal

- **Equipe Vencedora**: A soma da pontuação dos dois pilotos da equipe define a equipe vencedora.
  - 1º lugar: 10 pontos
  - 2º lugar: 5 pontos
  - 3º lugar: 3 pontos
  - 4º lugar: 2 pontos
  - 5º lugar: 1 ponto

- **Acerto de Posições**: Cada colocação correta rende 10 pontos.
  - Exemplo: Se o jogador acertar o 1º, o 3º e o 9º lugar, acumula 30 pontos.

- **Acerto de Pilotos no Top 10**: Cada piloto entre os 10 primeiros acertado dá 5 pontos.

- **Vencedor**: Acertar o vencedor dobra a pontuação desse piloto.

- **Desqualificação**: Escalar um piloto desqualificado resulta em -5 pontos.

- **Volta Mais Rápida**: Acertar o piloto da volta mais rápida concede 10 pontos.

- **Ultrapassagens**: Cada ultrapassagem realizada dá 0,5 pontos, e cada ultrapassagem sofrida tira 0,2 pontos.

### Corrida Classificatória

- **Equipe Vencedora**: A soma da pontuação dos dois pilotos define a equipe vencedora.
  - 1º lugar: 5 pontos
  - 2º lugar: 2,5 pontos
  - 3º lugar: 1,5 pontos
  - 4º lugar: 1 ponto
  - 5º lugar: 0,5 ponto

- **Acerto de Posições**: Cada colocação correta rende 5 pontos.

- **Acerto de Pilotos no Top 10**: Cada piloto acertado entre os 10 primeiros dá 2,5 pontos.

- **Vencedor**: Acertar o vencedor dobra a pontuação desse piloto.

- **Desqualificação**: Escalar um piloto desqualificado resulta em -2,5 pontos.

- **Volta Mais Rápida**: Acertar o piloto da volta mais rápida concede 5 pontos.

- **Ultrapassagens**: Cada ultrapassagem realizada dá 0,5 pontos, e cada ultrapassagem sofrida tira 0,2 pontos.

### Link do repositório do projeto

**https://github.com/MindSyncc/Site_Challenge2​**

### Integrantes do projeto

**Fernando Carlos Colque Huaranca​**  
​
**Heloísa Fleury Jardim**  
​
**Juan Fuentes Rufino**  
**Julia Carolina Ferreira Silva**  
**Pedro Henrique Silva Batista**  
