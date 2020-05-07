import React from "react";
import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = props.ingredients.map((igKey) => {
    return (
      <li key={igKey.type}>
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {igKey.label}
        </span>
        : {igKey.amount}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>
        Behold the glory of this dry, dejected sandwich with your choice of
        ingredients:
      </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
};

export default OrderSummary;
