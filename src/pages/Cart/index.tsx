import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IProduct } from "../../store/products/types";
import { ICartItem } from '../../store/cart/types';
import { TCartState } from '../../store/cart/cartSlice';
import Page from '../../components/UI/Page';
import H2 from '../../components/UI/H2';
import ProductCard from '../../components/ProductCard';
import CartTotal from '../../components/CartTotal';

import './Cart.css'


function Cart(){
  const navigation = useNavigate();
  const location = useLocation();
  const products: IProduct[] = useSelector((state: any) => state.products.products);
  const cart: TCartState = useSelector((state: any) => state.cart);

  //effects
  useLayoutEffect(() => {
    if (location.pathname === "/") {
      navigation("/showcase", { replace: true });
    }
  }, [ location.pathname ]);

  //render
  return (
    <Page title="Корзина">
      <ul className="cart">
        {cart.items.map((item: ICartItem, index) => {
          const product = products.find((product:IProduct) => item.productId === product.id);
          if (product){
            return (
              <li key={index}>
                <ProductCard
                  variant="CART"
                  product={product}
                  quantity={item.quantity}
                />
              </li>
            )
          } else
            return null
        })}
      </ul>
      {cart?.totalQuantity > 0 ?
        <CartTotal/>
        :
        <H2>
          Корзина пуста.
        </H2>
      }
    </Page>
  );
};

export default Cart;
