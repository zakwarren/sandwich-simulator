export const getIngredientCounts = (ingredientArray) => {
  if (!ingredientArray) {
    return;
  }
  let ingCounts = {};
  for (let ing of ingredientArray) {
    ingCounts[ing.type] = ing.amount;
  }
  return ingCounts;
};
