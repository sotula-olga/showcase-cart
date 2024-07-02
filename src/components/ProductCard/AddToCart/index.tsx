import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/cart/cartSlice';
import Button from '../../UI/Button'

interface IProps {
  id: number,
  price: number
}

const AddToCart = ({  id, price }:IProps) => {
  const dispatch = useDispatch();
  const addProduct = () => {
    console.log('AddProduct')
    dispatch(addItem({id, price}));
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
