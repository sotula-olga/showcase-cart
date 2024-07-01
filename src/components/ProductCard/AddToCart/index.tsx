import { ReactNode } from "react"
import Button from "../../UI/Button"
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cart/cartSlice";

interface IProps {
  id: number
}

const AddToCart = ({  id }:IProps) => {
  const dispatch = useDispatch();
  const addProduct = () => {
    console.log('AddProduct')
    dispatch(addItem({id}));
  }

  return (
    <Button
      variant = "CONTAINED"
      onClick={() => addProduct()}
    >
      В корзину
    </Button>
  )
}

export default AddToCart
