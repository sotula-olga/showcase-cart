import './ProducPrice.css';

interface TProps {
  children: number
};

function ProductPrice ({ children }: TProps){
  return (
    <span className="product-price">
      {children}&#8381;
    </span>
  )
};

export default ProductPrice;

