import React from "react";
import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = props.controls.map((igKey) => {
    return (
      <li key={igKey.type}>
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {igKey.label}
        </span>
        : {props.ingredients[igKey.type]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>
        Enjoy this hasty, limp sandwich filled with MSG and your choice of
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
  controls: PropTypes.array.isRequired,
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
};

export default OrderSummary;
