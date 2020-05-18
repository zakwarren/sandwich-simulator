import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { getIngredientCounts } from "../../utils/utilities";

const Checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  const ingCounts = getIngredientCounts(props.ings);

  let summary = <Redirect to="/" />;
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <div className={classes.Checkout}>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={ingCounts}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Route
          path={props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
  return summary;
};

Checkout.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  ings: PropTypes.array,
  purchased: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ings: state.sandwichSimulator.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
