import { createSlice } from '@reduxjs/toolkit';
import { ICartItem } from './types';

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
        productPrice: action.payload.price
      })
      state.totalQuantity =  getTotalQuantity(state.items)
      state.totalPrice =  getTotalPrice(state.items);
    },
    modifyItem(state, action) {
      const modifyedItem = state.items.find(item => item.productId === action.payload.id);
      if (modifyedItem){
        modifyedItem.quantity = action.payload.quantity;
        state.totalQuantity =  getTotalQuantity(state.items)
        state.totalPrice =  getTotalPrice(state.items);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.productId !== action.payload.id);
      state.totalQuantity =  getTotalQuantity(state.items)
      state.totalPrice =  getTotalPrice(state.items);
    },

  }
})

function getTotalQuantity(items: ICartItem[]){
  return items.reduce((acc, item) => acc + item.quantity, 0);
}

function getTotalPrice(items: ICartItem[]){
  return items.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
}


export const { addItem, modifyItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

