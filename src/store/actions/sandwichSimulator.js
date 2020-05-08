import * as actionTypes from "./actionTypes";
import Server from "../../utils/serverApi";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    Server.get("/ingredient-details.json")
      .then((response) => {
        dispatch(setIngredients(response));
      })
      .catch(() => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
