import * as actionTypes from "./actionTypes";

const INGREDIENT_DETAILS = [
  { type: "Lettuce", label: "Limp Lettuce", price: 0.5, order: 1, amount: 0 },
  { type: "Tomato", label: "Tired Tomato", price: 0.6, order: 2, amount: 0 },
  { type: "Bacon", label: "Bitter Bacon", price: 0.7, order: 3, amount: 0 },
  { type: "Cheese", label: "Could be Cheese", price: 0.4, order: 4, amount: 0 },
  { type: "Meat", label: "Mystery Meat", price: 1.3, order: 5, amount: 0 },
];

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
    // // get ingredients
    //   .get("/ingredients.json")
    //   .then((response) => {
    //     dispatch(setIngredients(response.data));
    //   })
    //   .catch(() => {
    //     dispatch(fetchIngredientsFailed());
    //   });
    try {
      dispatch(setIngredients(INGREDIENT_DETAILS));
    } catch (error) {
      dispatch(fetchIngredientsFailed());
    }
  };
};
