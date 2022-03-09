interface EntradaProps {
  tipo?: 'text' | 'number'; // option pq embaixo esta por padrao 'text'
  texto: string;
  valor: any; // any pq pode ser um numero ou string
  somenteLeitura?: boolean; // pra n mudar o valor
  valorMudou?: (valor: any) => void;
  className?: string;
}
export default function Entrada(props: EntradaProps): JSX.Element {

  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className='mb-2'>
        {props.texto}
      </label>
      {/* caso n tenha informado o padrao vai ser 'text' */}
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value) }
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${props.somenteLeitura ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  )
}