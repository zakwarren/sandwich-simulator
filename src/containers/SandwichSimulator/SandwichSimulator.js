import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import * as actions from "../../store/actions/index";

const SandwichSimulator = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const ings = useSelector((state) => state.sandwichSimulator.ingredients);
  const price = useSelector((state) => state.sandwichSimulator.totalPrice);
  const error = useSelector((state) => state.sandwichSimulator.error);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const onIngredientAdded = (ingName) =>
    dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = (ingName) =>
    dispatch(actions.removeIngredient(ingName));
  const onInitIngredients = useCallback(
    () => dispatch(actions.initIngredients()),
    [dispatch]
  );
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = (path) =>
    dispatch(actions.setAuthRedirectPath(path));

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const getIngredientCounts = () => {
    if (!ings) {
      return;
    }
    let ingCounts = {};
    for (let ing of ings) {
      ingCounts[ing.type] = ing.amount;
    }
    return ingCounts;
  };

  const checkNoIngredients = () => {
    const hasNoIngredients = Object.values(ings).every(
      (value) => value.amount === 0
    );
    return hasNoIngredients;
  };

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
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
  let sandwich = error ? <p>ingredients can't be loaded!</p> : <Spinner />;
  if (ingCounts) {
    sandwich = (
      <>
        <Sandwich ingredients={ingCounts} />
        <BuildControls
          controls={ings}
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={!checkNoIngredients()}
          price={price}
          ordered={purchaseHandler}
          isAuth={isAuthenticated}
        />
      </>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ings}
        price={price}
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
};

export default ErrorHandler(SandwichSimulator);
