import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IShowcaseProduct } from "interfaces/Product";


export interface ICartItem {
  id: number,
  quantity: number,
  product: IShowcaseProduct
};

export interface ICart {
  id: number,
  quantity: number,
  price: number,
  items: ICartItem[],
};

export type TCartState = {
  cart: ICart | null
}

const initialState: TCartState = {cart: null};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload
    },
  }
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer

