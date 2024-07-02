import { BsDashCircle, BsPlusCircle, BsTrash } from "react-icons/bs";
import IconButton from '../../UI/IconButton';
import './ModifyCard.css';
import { useDispatch } from "react-redux";
import { modifyItem, removeItem } from "../../../store/cart/cartSlice";

interface IProps {
  id: number,
  quantity: number,
  availableQuantity: number,
}

const ModifyCart = ({  id, quantity, availableQuantity }:IProps) => {
  const dispatch = useDispatch();

  const modifyProduct = (quantity: number) => {
    dispatch(modifyItem({id, quantity}));
  }

  const removeProduct = () => {
    dispatch(removeItem({id}));
  }

  return (
    <div className="modify-card">
      {quantity === 1 ?
      <IconButton
        onClick={() => removeProduct()}>
        <BsTrash size="24px"/>
      </IconButton>
      :
      <IconButton
        onClick={() => modifyProduct(quantity - 1)}>
        <BsDashCircle size="24px"/>
      </IconButton>
      }

      {<span>{quantity} шт</span>}

      <IconButton
        disabled = {quantity === availableQuantity ? true : false}
        onClick={() => modifyProduct(quantity + 1)}>
        <BsPlusCircle size="24px"/>
      </IconButton>
    </div>
  )
}

export default ModifyCart
