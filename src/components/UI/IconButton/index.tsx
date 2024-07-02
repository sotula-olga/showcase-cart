import { ReactNode, useState } from 'react';
import './IconButton.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}

const IconButton = ({children, ...props}: IProps) => {
  return (
    <button
      type = 'button'
      className='icon-button'
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton;

