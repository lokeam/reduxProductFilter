import { createSlice, createSelector } from '@reduxjs/toolkit';

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

// Async Fetch
export function fetchIngredients() {
  return async dispatch => {
    dispatch( getIngredients() );

    try {
      const response = await fetch('https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data/ingredients.json');
      const data = await response.json();

      //console.log('ingredientSlice, data: ', data);
      dispatch(getIngredientsSuccess(data));
    } catch(error) {
      dispatch(getIngredientsFailure);
    }
  }
}

export const filteredIngredientSelector = createSelector(ingredientsSelector, function (ingredientsObj, input) {
  return input;
}, function (ingredients, input) {

  if (!ingredients.ingredientsLoading) {
    console.log('ingredients slice, filteredIngredientSelector, ingredients, ',ingredients);
    let ingredientsArr = ingredients.ingredients;

    return ingredientsArr.filter(function (item) {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
  }
});