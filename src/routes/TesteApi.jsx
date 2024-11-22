import React, { useState, useEffect } from 'react';

const TesteAPi=()=> {
  // Declarar um estado para armazenar os dados da API
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usar o useEffect para fazer a chamada à API
  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchData = async () => {
      try {
        // Adicionar a url da api
        const response = await fetch('https://viacep.com.br/ws/01001000/json/');
        
        // Verifica se a resposta foi bem sucedida
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }

        const json = await response.json(); // Converter resposta para JSON
        setData(json); // Atualizar o estado com os dados
        setLoading(false); // Terminar o carregamento
      } catch (error) {
        setError(error.message); // Lidar com erro
        setLoading(false);
      }
    };

    fetchData(); // Chamar a função
  }, []); // O array vazio [] faz o useEffect ser executado apenas uma vez

  // Renderizando os dados no JSX
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1 style={{fontSize:" 2rem", lineHeight:"2"}}>Dados da API</h1>
{/*       <pre style={{ fontSize: "2rem" }}>{JSON.stringify(data, null, 2)}</pre> */}
      <p style={{fontSize:" 2rem"}}>Cep: {data.cep}</p>
      <p style={{fontSize:" 2rem", lineHeight:"2"}}>Rua: {data.logradouro}</p>
      <p style={{fontSize:" 2rem"}}>Bairro: {data.bairro}</p>
    </div>
  );
}

export default TesteAPi;
