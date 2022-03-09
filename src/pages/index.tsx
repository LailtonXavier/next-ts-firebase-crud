import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import useClientes from '../hooks/useClientes';

export default function Home() {

  const {
    cliente,
    clientes,
    excluirCliente,
    salvarCliente,
    selecionarCliente,
    novoCliente,
    tabelaVisivel,
    exibirTabela

  } = useClientes();
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-400
      text-yellow-200
    `}>
      <Layout titulo='Conteudo Simples'>
        
        {tabelaVisivel ? (

        <>
          <div className=' flex justify-end'>
            <Botao tipo='button' cor="green" onClick={novoCliente} >
                Novo Cliente
              </Botao>
          </div>

          <Tabela        
            clientes={clientes}
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}
            /> 
        </>
        ) : (
          <Formulario
           cliente={cliente}
           cancelado={exibirTabela}
           clienteMudou={salvarCliente}
           />
        )}
      </Layout>
    </div>
  )
}
