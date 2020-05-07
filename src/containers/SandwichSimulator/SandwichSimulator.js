import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class SandwichSimulator extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  getIngredientCounts = () => {
    if (!this.props.ings) {
      return;
    }
    let ingCounts = {};
    for (let ing of this.props.ings) {
      ingCounts[ing.type] = ing.amount;
    }
    return ingCounts;
  };

  checkNoIngredients = () => {
    const hasNoIngredients = Object.values(this.props.ings).every(
      (value) => value === 0
    );
    return hasNoIngredients;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  render() {
    const ingCounts = this.getIngredientCounts();

    const disabledInfo = {
      ...ingCounts,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let sandwich = this.props.error ? (
      <p>ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (ingCounts) {
      sandwich = (
        <>
          <Sandwich ingredients={ingCounts} />
          <BuildControls
            controls={this.props.ings}
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={!this.checkNoIngredients()}
            price={this.props.price}
            ordered={this.purchaseHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {sandwich}
      </>
    );
  }
}

SandwichSimulator.propTypes = {
  history: PropTypes.object.isRequired,
  ings: PropTypes.array,
  price: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ings: state.sandwichSimulator.ingredients,
    price: state.sandwichSimulator.totalPrice,
    error: state.sandwichSimulator.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SandwichSimulator);
