import { CircularProgress, IconButton } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { IShowcaseProduct } from 'interfaces/Product';
import cardImage from "assets/images/product1.jpg";
import Icon from 'components/basic/Icons/Icons';
import Button from "components/UI/Button";
import Tooltip from "components/UI/Tooltip";

import '../ProductCard.css'


interface IProps {
  product: IShowcaseProduct,
  changeCount: any,
  loading: boolean
}

const CartItem = ({ product, changeCount, loading }:IProps) => {
  const { id, name, description, price, cashback, order_item_id, quantity, maxCount } = product;
  return (
<div className="product-card product-card_variant_cart">
      <div className="product-card__info-wrapper">
        <img className="product-card__img product-card__img_variant_cart" src={cardImage} alt={name} />
        <span className="product-card__name product-card__name_variant_cart">{name}</span>
      </div>
      <div className="product-card__button-wrapper product-card__button-wrapper--shrink product-card__button-wrapper--center">
        <IconButton
          size="small"
          className="product-card__change-button"
          onClick={() => changeCount(order_item_id, quantity - 1)}
          sx={{ color: "inherit" }}
        >
          {quantity === 1 ? <DeleteOutlineOutlinedIcon fontSize="small" /> : <RemoveRoundedIcon fontSize="small" />}
        </IconButton>

        { loading ? <CircularProgress size={20} /> : <span>{quantity} шт</span>}

        <IconButton
          size="small"
          className="product-card__change-button"
          disabled={quantity === maxCount}
          onClick={() => changeCount(order_item_id, quantity + 1)}
          sx={{ color: "inherit" }}
        >
          <AddRoundedIcon />
        </IconButton>
      </div>

      <div className="product-card__price-wrapper">
        <span className="product-card__price">{price}&#8381; / {price}PV</span>
        <Tooltip title="Возврат в личный объем" placement="bottom-start" arrow>
          <span className="product-card__cashback">
            <Icon id="CashbackIcon" />{cashback} PV
          </span>
        </Tooltip>
      </div>

      <Tooltip title="Удалить из корзины" arrow>
        <IconButton
          onClick={() => changeCount(order_item_id, 0)}
          sx={{
            color: "var(--black-text-main)",
            "&:hover":
            {
              color: "var(--error)"
            }
          }}
        >
          {loading ? <CircularProgress size={20} /> : <DeleteOutlineOutlinedIcon />}
        </IconButton>
      </Tooltip>
    </div>
)
}

export default CartItem


