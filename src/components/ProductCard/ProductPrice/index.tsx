import './ProducPrice.css';

interface TProps {
  children: number
};

function ProductPrice ({ children }: TProps){
  return (
    <span className="product-price">
      {children} ₽
    </span>
  )
};

export default ProductPrice;

