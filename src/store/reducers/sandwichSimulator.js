import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const addIngredient = (state, action) => {
  const ing = state.ingredients.find(
    (ing) => ing.type === action.ingredientName
  );
  const updatedIng = updateObject(ing, { amount: ing.amount + 1 });
  const updatedArr = [...state.ingredients].map((item) => {
    return item.type === action.ingredientName ? updatedIng : item;
  });
  const newState = {
    ingredients: updatedArr,
    totalPrice: state.totalPrice + updatedIng.price,
  };
  return updateObject(state, newState);
};

const removeIngredient = (state, action) => {
  const ing = state.ingredients.find(
    (ing) => ing.type === action.ingredientName
  );
  const updatedIng = updateObject(ing, { amount: ing.amount - 1 });
  const updatedArr = [...state.ingredients].map((item) => {
    return item.type === action.ingredientName ? updatedIng : item;
  });
  const newState = {
    ingredients: updatedArr,
    totalPrice: state.totalPrice - updatedIng.price,
  };
  return updateObject(state, newState);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: initialState.totalPrice,
    error: false,
  });
};

const fetchIngredientsFailed = (state) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state);
    default:
      return state;
  }
};

export default reducer;