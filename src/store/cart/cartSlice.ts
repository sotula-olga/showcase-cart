import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "./types";

export type TCartState = {
  totalQuantity: number,
  totalPrice: number,
  items: ICartItem[]
};


const initialState: TCartState = {totalQuantity: 0, totalPrice: 0, items: []};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      console.log(state);
      console.log(action);
      state.items.push(  {
          quantity: 1,
          productId: action.payload.id,

        })
  },
  }
})

export const { addItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

