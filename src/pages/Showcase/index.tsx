import { useSelector } from "react-redux";
import Page from "../../components/UI/Page";
import { IProduct } from "../../store/products/types";
import ProductCard from "../../components/ProductCard";
import './Showcase.css'
import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ICartItem } from "../../store/cart/types";
import { TCartState } from "../../store/cart/cartSlice";

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
      <ul className="show-case">
        {products.map((product: IProduct, index) => (
          <li key={index}>
            <ProductCard
              variant="SHOW-CASE"
              product={product}
              quantity={cart.items.find((item:ICartItem) => item.productId === product.id)?.quantity || 0}
            />

          </li>
        ))}
      </ul>

    </Page>
  );
};

export default Showcase;
 /**
  * <ul className="show-case">
        {products.map((product: IShowcaseProduct, index) => (
          <li key={index}>
            <ProductCard
              page = 'PRODUCTS'
              variant="SHOW-CASE"
              product={product}
            />
          </li>
        ))}
      </ul>

  */
