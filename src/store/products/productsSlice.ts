import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./types";
import { products } from "./productsData";

export type TProductsState = {
  products: IProduct[],
}

const initialState: TProductsState = {
  products: products,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductList(state, action) {
      state.products = action.payload
    },
  }
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer
