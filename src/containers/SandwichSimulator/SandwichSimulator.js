import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import * as actions from "../../store/actions/index";

const SandwichSimulator = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const { onInitIngredients } = props;
  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const getIngredientCounts = () => {
    if (!props.ings) {
      return;
    }
    let ingCounts = {};
    for (let ing of props.ings) {
      ingCounts[ing.type] = ing.amount;
    }
    return ingCounts;
  };

  const checkNoIngredients = () => {
    const hasNoIngredients = Object.values(props.ings).every(
      (value) => value.amount === 0
    );
    return hasNoIngredients;
  };

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    props.onInitPurchase();
    props.history.push("/checkout");
  };

  const ingCounts = getIngredientCounts();

  const disabledInfo = {
    ...ingCounts,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;
  let sandwich = props.error ? (
    <p>ingredients can't be loaded!</p>
  ) : (
    <Spinner />
  );
  if (ingCounts) {
    sandwich = (
      <>
        <Sandwich ingredients={ingCounts} />
        <BuildControls
          controls={props.ings}
          ingredientAdded={props.onIngredientAdded}
          ingredientRemoved={props.onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={!checkNoIngredients()}
          price={props.price}
          ordered={purchaseHandler}
          isAuth={props.isAuthenticated}
        />
      </>
    );
    orderSummary = (
      <OrderSummary
        ingredients={props.ings}
        price={props.price}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {sandwich}
    </>
  );
};

SandwichSimulator.propTypes = {
  history: PropTypes.object.isRequired,
  ings: PropTypes.array,
  price: PropTypes.number.isRequired,
  error: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ings: state.sandwichSimulator.ingredients,
    price: state.sandwichSimulator.totalPrice,
    error: state.sandwichSimulator.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(SandwichSimulator));
