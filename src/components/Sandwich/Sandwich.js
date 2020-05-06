import React from "react";
import PropTypes from "prop-types";

import classes from "./Sandwich.module.css";
import Ingredient from "./Ingredient/Ingredient";

const Sandwich = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((rootArr, currVal) => {
      return rootArr.concat(currVal);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Sandwich}>
      <Ingredient type="BreadTop" />
      {transformedIngredients}
      <Ingredient type="BreadBottom" />
    </div>
  );
};

Sandwich.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default Sandwich;
