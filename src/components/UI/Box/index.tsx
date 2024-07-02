import { ReactNode } from 'react';
import classNames from 'classnames';

import './Box.css';


interface IProps {
  className?: string
  children?: ReactNode
}

const Box = ({ className, children } : IProps ) => {

  return (
    <div
      className={classNames("box", className)}
    >
      {children}
    </div>
  );
}

export default Box;
