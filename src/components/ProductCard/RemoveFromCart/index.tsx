import { useDispatch } from 'react-redux';
import { removeItem } from '../../../store/cart/cartSlice';
import { BsTrash } from 'react-icons/bs';
import IconButton from '../../UI/IconButton';


interface IProps {
  id: number,
}

const RemoveFromCart = ({  id }:IProps) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(removeItem({id}));
  }

  return (
    <IconButton
      onClick={() => removeProduct()}>
      <BsTrash size="24px"/>
    </IconButton>
  )
}

export default RemoveFromCart
