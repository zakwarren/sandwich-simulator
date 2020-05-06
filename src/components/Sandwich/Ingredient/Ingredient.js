import React from "react";
import PropTypes from "prop-types";

import classes from "./Ingredient.module.css";

const Ingredient = (props) => <div className={classes[props.type]}></div>;

Ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Ingredient;
