import React, { Component } from "react";
import PropTypes from "prop-types";

import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_DETAILS = [
  { type: "Lettuce", label: "Limp Lettuce", price: 0.5 },
  { type: "Tomato", label: "Tired Tomato", price: 0.6 },
  { type: "Bacon", label: "Bitter Bacon", price: 0.7 },
  { type: "Cheese", label: "Could be Cheese", price: 0.4 },
  { type: "Meat", label: "Mystery Meat", price: 1.3 },
];

class SandwichSimulator extends Component {
  state = {
    ingredients: {
      Lettuce: 0,
      Tomato: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
    totalPrice: 4,
    noIngredients: true,
    purchasing: false,
    loading: false,
    error: false,
  };

  checkNoIngredients = (ingredients) => {
    const hasNoIngredients = Object.values(ingredients).every(
      (value) => value === 0
    );
    this.setState({ noIngredients: hasNoIngredients });
  };

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;

    let cost = 0;
    INGREDIENT_DETAILS.forEach((ing) => {
      if (ing.type === type) {
        cost = ing.price;
      }
    });
    const newPrice = this.state.totalPrice + cost;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.checkNoIngredients(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;

    let cost = 0;
    INGREDIENT_DETAILS.forEach((ing) => {
      if (ing.type === type) {
        cost = ing.price;
      }
    });
    const newPrice = this.state.totalPrice - cost;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.checkNoIngredients(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + encodeURIComponent(this.state.totalPrice));
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let sandwich = this.state.error ? (
      <p>ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      sandwich = (
        <>
          <Sandwich ingredients={this.state.ingredients} />
          <BuildControls
            controls={INGREDIENT_DETAILS}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={!this.state.noIngredients}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          controls={INGREDIENT_DETAILS}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
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
};

export default SandwichSimulator;
