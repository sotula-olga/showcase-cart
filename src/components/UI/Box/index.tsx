import { ReactNode } from "react";

import './Box.css';
import classNames from "classnames";

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
