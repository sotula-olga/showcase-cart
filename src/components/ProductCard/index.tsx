import { IProduct } from '../../store/products/types';
import ProductPrice from './ProductPrice';
import ProductName from './ProductName';
import AddToCart from './AddToCart';
import classNames from 'classnames';
import ModifyCart from './ModifyCart';
import RemoveFromCart from './RemoveFromCart';
import noPhoto from '../../assets/images/no-photo.jpg';

import './ProductCard.css';

interface TProps {
  variant: "CART" | "SHOWCASE",
  product: IProduct,
  quantity: number
};

function ProductCard ({ variant, product, quantity }: TProps){
  const { id, name, price, imageUrl, availableQuantity } = product;

  return (
    <div
      className={classNames("product-card", "product-card_" + variant.toLowerCase())}
    >
      <img
        className={classNames("product-card__img", "product-card__img_" + variant.toLowerCase())}
        src={imageUrl || noPhoto} alt={name}
      />
      <div className="product-card__info">
        <ProductName>
          {name}
        </ProductName>
        <ProductPrice>
          {price}
        </ProductPrice>
      </div>
      {quantity ?
        (
          <ModifyCart
            id = {id}
            quantity = {quantity}
            availableQuantity = {availableQuantity}

          />

        )
        :
        (
          <AddToCart
            id = {id}
            price={price}
          />
        )
      }
      {variant === "CART" &&
        <RemoveFromCart id = {id}/>
      }
    </div>
  )
};

export default ProductCard;

