import './H1.css';

interface IProps {
  children: string
}

function H1({ children }:IProps){
  return (
    <h1
      className="h1"
    >
      {children}
    </h1>
  );
}

export default H1;
