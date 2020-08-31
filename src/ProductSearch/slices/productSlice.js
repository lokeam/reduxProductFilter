import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  productsLoading: false,
  productsHaveErrors: false,
  products: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: state => {
      state.productsLoading = true
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload
      state.hasErrors = false
      state.productsLoading = false
    },
    getProductsFailure: state => {
      state.productsLoading = false
      state.productsHaveErrors = true
    },
  },
});

// Actions
export const { getProducts, getProductsSuccess, getProductsFailure } = productsSlice.actions;

// Selector
export const productsSelector = state => state.products;

// Reducer
export default productsSlice.reducer;
