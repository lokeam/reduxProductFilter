import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import productsReducer from '../ProductSearch/slices/productSlice';
import ingredientsReducer from '../ProductSearch/slices/ingredientSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  ingredients: ingredientsReducer
})

export default configureStore({
  reducer: rootReducer,
});
