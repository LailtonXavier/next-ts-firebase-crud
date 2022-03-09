import { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';
import ClienteRepositorio from '../core/ClienteRepositorio';

export default function Home() {

  // pegando nossos metodos, porderia pegar as regras de dento do core
  // a partir do repositorio eu posso ter a lista dos clientes
  const repo: ClienteRepositorio = new ColecaoCliente();

  // criar um estado Cliente Vario e ele vai armazenar Cliente <>
  // significa q ele é o cliente selecionado no meu Formulario
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());

  // preencher nosssos dados do cliente
  const [clientes, setClientes] = useState<Cliente[]>([]);

  // dois possiveis estados, dois opcoes e por padrao
  const [ visivel, setVisivel ] = useState<'tabela' | 'form'>('tabela');

  // aqui estamos preenchendo nosso array de clientes
  // apagar pq criei um array de clientes vazio
  // const clientes = [
  //   new Cliente('Lailton', 22, '1'),
  //   new Cliente('Nando', 82, '2'),
  //   new Cliente('Jose', 32, '3'),
  //   new Cliente('Mari', 12, '4'),
  // ]

  // 
  // qnd inicializar um component
  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes)
      setVisivel('tabela');
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel('form');
  }

  async function clienteExcluido(cliente: Cliente) {
    // console.log(cliente.nome);    
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    // console.log(cliente);
    await repo.salvar(cliente);
    // setVisivel('tabela'); // tirar e colocar metodo ObterTodos();
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-400
      text-yellow-200
    `}>
      <Layout titulo='Conteudo Simples'>
        
        {visivel === 'tabela' ? (

        <>
          <div className=' flex justify-end'>
            <Botao tipo='button' cor="green" onClick={novoCliente} >
                Novo Cliente
              </Botao>
          </div>

          <Tabela        
            clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
            /> 
        </>
        ) : (
          <Formulario
           cliente={cliente}
           cancelado={() => setVisivel('tabela')}
           clienteMudou={salvarCliente}
           />
        )}
      </Layout>
    </div>
  )
}
