import { IProduct } from '../../store/products/types';
import noPhoto from '../../assets/images/no-photo.jpg';
import ProductPrice from './ProductPrice';
import './ProductCard.css';
import ProductName from './ProductName';
import AddToCart from './AddToCart';
import classNames from 'classnames';

interface TProps {
  variant: "CART" | "SHOW-CASE",
  product: IProduct,
  quantity: number
};

function ProductCard ({ variant, product, quantity }: TProps){
  const { id, name, price, imageUrl, availableQuantity } = product
  return (
    <div className={classNames("product-card", "product-card_" + variant.toLowerCase()) }>
      <img className="product-card__img" src={imageUrl || noPhoto} alt={name} />
      <ProductName>
        {name}
      </ProductName>
      <ProductPrice>
        {price}
      </ProductPrice>

    {quantity ?
      (
        null

      )
      :
      (
        <AddToCart
          id = {id}
        />
      )
    }
  </div>
  )
};

export default ProductCard;

/**
 <ModifyCart
          count = {quantity}
          maxCount = {maxCount}
          incrementCount={() => changeCount(order_item_id, quantity + 1)}
          decrementCount = {() => changeCount(order_item_id, quantity -1)}
          loading = {loading}
        />
 */
