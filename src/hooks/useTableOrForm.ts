import { useState } from 'react';

export default function useTableOrForm() {
    // vai iniciar como tabela, mas pode ter dois estado
  const [visivel, setVisivel ] = useState<'tabela' | 'form'>('tabela');

  const exibirForm = () => setVisivel('form');

  const exibirTabela = () => setVisivel('tabela');

  return {
    formVisivel: visivel === 'form',
    tabelaVisivel: visivel === 'tabela',
    exibirForm,
    exibirTabela
  }
}