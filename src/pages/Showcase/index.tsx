import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IProduct } from '../../store/products/types';
import { ICartItem } from '../../store/cart/types';
import { TCartState } from '../../store/cart/cartSlice';
import Page from '../../components/UI/Page';
import Box from '../../components/UI/Box';
import LinkButton from '../../components/UI/LinkButton';
import ProductCard from '../../components/ProductCard';
import CartTotal from '../../components/CartTotal';

import './Showcase.css'

function Showcase(){
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
    <Page title="Товары">
      <ul className="showcase">
        {products.map((product: IProduct, index) => (
          <li key={index}>
            <ProductCard
              variant="SHOWCASE"
              product={product}
              quantity={cart.items.find((item:ICartItem) => item.productId === product.id)?.quantity || 0}
            />

          </li>
        ))}
      </ul>
      {cart?.totalQuantity > 0 &&
        <Box className="showcase__nav-to-cart-wrapper">
          <CartTotal/>
          <LinkButton variant="CONTAINED" to="/cart">
            Оформить заказ
          </LinkButton>
        </Box>
      }
    </Page>
  );
};

export default Showcase;
