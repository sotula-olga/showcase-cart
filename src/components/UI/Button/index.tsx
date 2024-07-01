import classNames from "classnames";
import { ReactNode } from "react";

import './Button.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: 'CONTAINED'
  children: ReactNode
}

function Button ( { variant, children, ...props }: IProps) {
  // MARK: Render
  return (
    <button
      className = {classNames("button", "button_" + variant.toLowerCase())}
      {...props}
    >
      { children }
    </button>
  );
}

export default Button
