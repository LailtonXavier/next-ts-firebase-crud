import { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Cliente from '../core/Cliente';
import ClienteRepositorio from '../core/ClienteRepositorio';
import useTableOrForm from './useTableOrForm';

export default function useClientes () {

  // pegando meu novo hook
  const {
    exibirForm,
    exibirTabela,
    formVisivel,
    tabelaVisivel,
  } = useTableOrForm();
  
  // pegando nossos metodos, porderia pegar as regras de dento do core
  // a partir do repositorio eu posso ter a lista dos clientes
  const repo: ClienteRepositorio = new ColecaoCliente();

  // criar um estado Cliente Vario e ele vai armazenar Cliente <>
  // significa q ele é o cliente selecionado no meu Formulario
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());

  // preencher nosssos dados do cliente
  const [clientes, setClientes] = useState<Cliente[]>([]);

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
      exibirTabela();
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirForm();
  }

  async function excluirCliente(cliente: Cliente) {
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
    exibirForm();
  }

  return {
    cliente,
    clientes,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    novoCliente,
    tabelaVisivel,
    exibirTabela,
  }

}