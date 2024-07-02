import './ProductName.css';

interface TProps {
  children: string
};

function ProductName ({ children }: TProps){
  return (
    <span className="product-name">
      {children}
    </span>
  )
};

export default ProductName;

