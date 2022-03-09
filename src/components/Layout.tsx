import Title from './Title'

// meu Title recebe um children, para isso vms criar Interface
// eu falo quais props quero receber nesse component
interface LayoutProps {
  titulo: string
  children: any
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-700 rounded-md
    `}>

        <Title>{props.titulo}</Title>
        <div className='p-6'>
          {props.children}
        </div>
    </div>
  )
}