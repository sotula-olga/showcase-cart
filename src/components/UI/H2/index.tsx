import "./H2.css";

interface IProps {
  children: string
}

function H2({ children }:IProps){
  return (
    <h1
      className="h1"
    >
      {children}
    </h1>
  );
}

export default H2;
