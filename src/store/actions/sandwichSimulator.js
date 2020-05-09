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
    error: null,
  };
};

const fetchIngredientsFailed = (error) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error: error,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    Server.get("/ingredient-details.json")
      .then((response) => {
        if (response.message && response.message === "error") {
          throw new Error(response.data);
        } else {
          dispatch(setIngredients(response));
        }
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed(error));
      });
  };
};
