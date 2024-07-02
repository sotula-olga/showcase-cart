import { ReactNode } from 'react';
import classNames from 'classnames';

import './Button.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: 'CONTAINED'
  children: ReactNode
}

function Button ( { variant, children, ...props }: IProps) {
  // MARK: Render
  return (
    <button
      type = 'button'
      className = {classNames("button", "button_" + variant.toLowerCase())}
      {...props}
    >
      { children }
    </button>
  );
}

export default Button
