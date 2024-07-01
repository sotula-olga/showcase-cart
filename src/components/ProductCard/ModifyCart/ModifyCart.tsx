import { CircularProgress, IconButton } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

import '../ProductCard.css';

interface IProps {
  count: number,
  maxCount: number,
  incrementCount: any,
  decrementCount: any,
  loading: boolean
}

const ModifyCart = ({  count, maxCount, incrementCount, decrementCount, loading }:IProps) => {
  return (
    <div className="product-card__button-wrapper">
    <IconButton
      size="small"
      className="product-card__change-button"
      onClick={decrementCount}
      sx={{ color: "inherit" }}
    >
      {count === 1 ? <DeleteOutlineOutlinedIcon fontSize="small" /> : <RemoveRoundedIcon fontSize="small" />}
    </IconButton>

    { loading ? <CircularProgress size={20} /> : <span>{count} шт</span>}

    <IconButton
      size="small"
      className="product-card__change-button"
      disabled={count === maxCount}
      onClick={incrementCount}
      sx={{ color: "inherit" }}
    >
      <AddRoundedIcon/>
    </IconButton>
  </div>
  )
}

export default ModifyCart
