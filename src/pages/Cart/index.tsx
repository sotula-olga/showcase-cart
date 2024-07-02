import { useSelector } from "react-redux";
import Page from "../../components/UI/Page";
import { IProduct } from "../../store/products/types";
import ProductCard from "../../components/ProductCard";
import './Cart.css'
import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ICartItem } from "../../store/cart/types";
import { TCartState } from "../../store/cart/cartSlice";
import Box from "../../components/UI/Box";
import CartTotal from "../../components/CartTotal";
import LinkButton from "../../components/UI/LinkButton";

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
        <h2>
          Корзина пуста.
        </h2>
      }
    </Page>
  );
};

export default Cart;
