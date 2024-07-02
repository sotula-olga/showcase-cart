import { useSelector } from 'react-redux';
import { TCartState } from '../../store/cart/cartSlice';

import './CartTotal.css';

function CartTotal(){
  const cart: TCartState = useSelector((state: any) => state.cart);

  return(
    <div>
      <div>
        <span>
          Товаров:
        </span>
        <span className="cart-total__value">
          {cart.totalQuantity}
        </span>
      </div>
      <div>
        <span>
          К оплате:
        </span>
        <span className="cart-total__value">
          {cart.totalPrice} ₽
        </span>
      </div>
    </div>
  )
}

export default CartTotal;
