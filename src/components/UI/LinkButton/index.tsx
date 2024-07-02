import classNames from 'classnames';
import '../Button/Button.css';
import { Link } from 'react-router-dom';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: 'CONTAINED'
  to: string,
  children: string
}

const LinkButton = ({variant, to, children}: IProps) => {
  return (
    <Link  className= {classNames("link", "button", "button_" + variant.toLowerCase())} to = {to}>
      { children }
    </Link>
  );
}

export default LinkButton;

