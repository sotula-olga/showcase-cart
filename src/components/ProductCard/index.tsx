import { IProduct } from '../../store/products/types';
import productImage from '../../assets/images/product.jpg';
import './ProductCard.css';

interface TProps {
  variant: "CART" | "SHOW-CASE",
  product: IProduct,
  quantity: number
};

function ProductCard ({ variant, product, quantity }: TProps){
  const {name, price} = product
  return (
    <div className="product-card">
      <img className="product-card__img" src={productImage} alt={name} />
      <span className="product-card__name">{name}</span>
      <span className="product-card__price">{price}&#8381;</span>

   {/*{quantity ?
      (
        <ModifyCart
          count = {quantity}
          maxCount = {maxCount}
          incrementCount={() => changeCount(order_item_id, quantity + 1)}
          decrementCount = {() => changeCount(order_item_id, quantity -1)}
          loading = {loading}
        />
      )
      :
      (
        <AddToCart
          sx = {{}}
          onClick={() => addToCart(id)}
          loading = {loading}
        />
      )
    }*/}
  </div>
  )
};

export default ProductCard;

