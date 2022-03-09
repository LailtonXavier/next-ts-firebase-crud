import { ReactChild, ReactFragment, ReactPortal } from 'react';

export default function Title(props: { children: boolean | ReactChild | ReactFragment | ReactPortal; }): JSX.Element {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='px-5 py-2 text-2xl'>
        {props.children}
        </h1>
      <hr className='border border-purple-500' />
    </div>
  )
}