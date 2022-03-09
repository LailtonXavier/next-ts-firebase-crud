import Cliente from '../core/Cliente';
import Botao from './Botao';
import { IconeEdicao, IconeLixo } from './Icones';

// definir uma interface p dizer o que vms receber
// tabela especifica pra clientes
interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps): JSX.Element {

  // verificar se as acoes estao disponiveis
  const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;

  // renderizar cabeçaolho
  function renderizarCabecalho() {
    return (
      <tr>
        <th className='text-left p-4'>Código</th>
        <th className='text-left p-4'>Nome</th>
        <th className='text-left p-4'>Idade</th>
        {exibirAcoes && ( <th className='p-4'>Ações</th> )}
      </tr>
    )
  }

  function renderizarDados() {
    // ele pode vir null, por isso o sinal ?
    // ele so vai chamar o metodo se cliente for preenchido
    // a letra i, se for impar é uma cor, par é outra cor
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
         key={cliente.id}
          className={` 
          ${i % 2 === 0 ?
             'bg-gradient from-purple-600' :
              'bg-gradient-to-b from-purple-100'}
          `}
        >
          <td className='text-left p-4'>{cliente.id}</td>
          <td className='text-left p-4'>{cliente.nome}</td>
          <td className='text-left p-4'>{cliente.idade}</td>
          { exibirAcoes && renderizarAcoes(cliente)}
        </tr>
      )
    })
  }

  // seria nossos botoes
  // vou receber um Cliente, p cada Cliente vou fazer uma ação
  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className='flex justify-center'>
        {/** So renderiza se os dados foram fornecidos */}
        {props.clienteSelecionado && (
        <Botao
         onClick={() => props.clienteSelecionado?.(cliente)}
         tipo='button'
         className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50
         `}
         >
          {IconeEdicao}
        </Botao>
        )}

        {props.clienteExcluido && (
        <Botao
         onClick={() => props.clienteExcluido?.(cliente)}
         tipo='button'
         className={`
          flex justify-center items-center
          text-red-500 rounded-full p-2 m-1
          hover:bg-purple-50
         `}
         >
          {IconeLixo}
        </Botao>
        )}
      </td>
    )
  }

  return (
    <table className='w-full rounded-xl overflow-hidden  mt-4'>
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {renderizarCabecalho()}
      </thead>

      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
}