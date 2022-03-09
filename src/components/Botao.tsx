interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray';
  tipo: 'button' | 'submit' | 'reset';
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps): JSX.Element {

  const { cor, className, children, onClick } = props;

  return (
    <button
    type={props.tipo ?? 'button'}
    onClick={onClick}
    className={className ?? `
        ${cor ? 'mr-1 ml-1 bg-gradient-to-r from-blue-400 to-blue-700' : 
        'bg-gradient-to-r from-gray-400 to-gray-700'
      }
       
      text-white px-4 py-2 rounded-md 
`}>
      {children}
    </button>
  )
}