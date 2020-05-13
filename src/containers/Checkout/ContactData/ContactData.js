import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import {
  getIngredientCounts,
  updateObject,
  checkValidity,
} from "../../../utils/utilities";
import ErrorHandler from "../../../hoc/ErrorHandler/ErrorHandler";
import * as actions from "../../../store/actions/index";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          message: "Please enter your name",
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          message: "Please enter a valid email",
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          message: "Please enter a street",
          required: true,
        },
        valid: false,
        touched: false,
      },
      postCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Post Code",
        },
        value: "",
        validation: {
          message: "Please enter a valid post code",
          required: true,
          minLength: 5,
          maxLength: 8,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          message: "Please enter a country",
          required: true,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "fastest",
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
    loading: false,
    canHaveNotifications: false,
  };

  componentDidMount() {
    if ("Notification" in window && "serviceWorker" in navigator) {
      this.setState({ canHaveNotifications: true });
    }
  }

  askForNotificationPermission = () => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        this.displayConfirmNotification();
      }
    });
  };

  displayConfirmNotification = () => {
    if ("serviceWorker" in navigator) {
      var options = {
        body: "You successfully subscribed to our notification service",
        data: { url: "http://localhost:3000/sandwich-simulator/" },
        badge: "/public/logo192.png",
        icon: "/public/logo192.png",
        image: "/public/logo512.png",
        dir: "ltr",
        lang: "en-GB",
        vibrate: [100, 50, 200],
        tag: "confirm-notification",
        renotify: true,
        actions: [
          { action: "confirm", title: "OK" },
          { action: "cancel", title: "Cancel" },
        ],
      };
      navigator.serviceWorker.ready.then((swreg) => {
        swreg.showNotification("Successfully Subscribed!", options);
      });
    }
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.askForNotificationPermission();

    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const ingredients = getIngredientCounts(this.props.ings);
    const order = {
      ingredients: ingredients,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId,
    };

    this.props.onOrder(order, this.props.token);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.orderForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.orderForm[inputIdentifier].validation
        ),
        touched: true,
      }
    );
    const updatedOrderForm = updateObject(this.state.orderForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputId in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputId].valid && formIsValid;
    }

    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <div className={classes.ContactData}>
        <h4>Enter your contact details</h4>
        <form onSubmit={this.orderHandler}>
          {formElements.map((formElement) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              touched={formElement.config.touched}
              shouldValidate={formElement.config.validation}
              invalid={!formElement.config.valid}
              errorMessage={
                formElement.config.validation
                  ? formElement.config.validation.message
                  : null
              }
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
          ))}
          <Button
            btnType="Success"
            clicked={this.orderHandler}
            disabled={!this.state.formIsValid}
          >
            Order
          </Button>
          {this.state.canHaveNotifications ? (
            <p>
              Please accept notifications to receive updates about your order
            </p>
          ) : null}
        </form>
      </div>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }

    return form;
  }
}

ContactData.propTypes = {
  ings: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ings: state.sandwichSimulator.ingredients,
    price: state.sandwichSimulator.totalPrice,
    loading: state.order.loading,
    error: state.order.error,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrder: (orderData, token) =>
      dispatch(actions.purchaseSandwich(orderData, token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(ContactData));
