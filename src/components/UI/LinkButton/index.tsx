import { Link } from 'react-router-dom';
import classNames from 'classnames';

import '../Button/Button.css';

interface IProps extends React.HTMLAttributes<HTMLElement>{
  variant: 'CONTAINED'
  to: string,
  children: string
}

const LinkButton = ({variant, to, children}: IProps) => {
  return (
    <Link
      className= {classNames("link", "button", "button_" + variant.toLowerCase())} to = {to}
    >
      { children }
    </Link>
  );
}

export default LinkButton;

