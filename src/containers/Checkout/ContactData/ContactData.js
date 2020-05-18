import React, { useState, useEffect } from "react";
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

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
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
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [canHaveNotifications, setCanHaveNotification] = useState(false);

  useEffect(() => {
    if ("Notification" in window && "serviceWorker" in navigator) {
      setCanHaveNotification(true);
    }
  }, []);

  const askForNotificationPermission = () => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        displayConfirmNotification();
      }
    });
  };

  const displayConfirmNotification = () => {
    if ("serviceWorker" in navigator) {
      const options = {
        body: "Thank you for your order. Your sandwich will be prepared soon.",
        data: { url: "http://localhost:3000/sandwich-simulator/" },
        badge: "/sandwich-simulator/logo192.png",
        icon: "/sandwich-simulator/logo192.png",
        image: "/sandwich-simulator/logo512.png",
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
        swreg.showNotification("Sandwich ordered!", options);
      });
    }
  };

  const orderHandler = (event) => {
    event.preventDefault();

    askForNotificationPermission();

    const formData = {};
    for (let formElement in orderForm) {
      formData[formElement] = orderForm[formElement].value;
    }
    const ingredients = getIngredientCounts(props.ings);
    const order = {
      ingredients: ingredients,
      price: props.price,
      orderData: formData,
      userId: props.userId,
    };

    props.onOrder(order, props.token);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(orderForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        orderForm[inputIdentifier].validation
      ),
      touched: true,
    });
    const updatedOrderForm = updateObject(orderForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let updatedFormIsValid = true;
    for (let inputId in updatedOrderForm) {
      updatedFormIsValid =
        updatedOrderForm[inputId].valid && updatedFormIsValid;
    }

    setOrderForm(updatedOrderForm);
    setFormIsValid(updatedFormIsValid);
  };

  const formElements = [];
  for (let key in orderForm) {
    formElements.push({
      id: key,
      config: orderForm[key],
    });
  }

  let form = (
    <div className={classes.ContactData}>
      <h4>Enter your contact details</h4>
      <form onSubmit={orderHandler}>
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
            changed={(event) => inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button
          btnType="Success"
          clicked={orderHandler}
          disabled={!formIsValid}
        >
          Order
        </Button>
        {canHaveNotifications ? (
          <p>Please accept notifications to receive updates about your order</p>
        ) : null}
      </form>
    </div>
  );
  if (props.loading) {
    form = <Spinner />;
  }

  return form;
};

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
