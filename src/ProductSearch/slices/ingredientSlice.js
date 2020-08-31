import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  ingredientsLoading: false,
  ingredientsHaveErrors: false,
  ingredients: []
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    getIngredients: state => {
      state.ingredientsLoading = true
    },
    getIngredientsSuccess: (state, { payload }) => {
      state.ingredients = payload
      state.ingredientsHaveErrors = false
      state.ingredientsLoading = false
    },
    getIngredientsFailure: state => {
      state.ingredientsLoading = false
      state.ingredientsHaveErrors = true
    }
  }
});

// Actions
export const { getIngredients, getIngredientsSuccess, getIngredientsFailure } = ingredientsSlice.actions;

// Selector
export const ingredientsSelector = state => state.ingredients;

// Reducer
export default ingredientsSlice.reducer;
