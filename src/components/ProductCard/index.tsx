import { IProduct } from '../../store/products/types';
import noPhoto from '../../assets/images/no-photo.jpg';
import ProductPrice from './ProductPrice';
import './ProductCard.css';
import ProductName from './ProductName';
import AddToCart from './AddToCart';
import classNames from 'classnames';
import ModifyCart from './ModifyCart';

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
        />
      )
    }
  </div>
  )
};

export default ProductCard;

