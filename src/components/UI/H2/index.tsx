import './H2.css';

interface IProps {
  children: string
}

function H2({ children }:IProps){
  return (
    <h2
      className="h2"
    >
      {children}
    </h2>
  );
}

export default H2;
