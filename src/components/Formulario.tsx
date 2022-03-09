import { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

interface FormProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormProps): JSX.Element {
  // O form vai receber um cliente: se o cliente tiver setado e id
  // eu estou modificando algo que já existe
  // se n tiver setado ou n tiver ID é cliente novo

    // option pq se n tiver ID
  const id = props.cliente?.id;

  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id && (
        <Entrada
          somenteLeitura
          texto='Código'
          tipo='number'
          valor={id}
          className='mb-5'
         />
      )}

      <Entrada 
        texto='Nome' 
        tipo='text' 
        valor={nome}
        valorMudou={setNome}
        className='mb-5'
        />

      <Entrada 
        texto='idade' 
        tipo='number' 
        valor={idade}
        valorMudou={setIdade}
      />

      <div className='flex justify-end mt-7'>
        <Botao tipo='button' cor='blue'
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>

        <Botao tipo='button' onClick={props.cancelado} >
          Cancelar
        </Botao>
      </div>
    </div>

  )
}