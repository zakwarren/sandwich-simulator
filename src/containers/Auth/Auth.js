import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import classes from "./Auth.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../utils/utilities";

const Auth = (props) => {
  const [authForm, setAuthForm] = useState({
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
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        message: "Please enter a valid password",
        required: true,
        minLength: 8,
      },
      valid: false,
      touched: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  const { buildingSandwich, authRedirectPath, onSetAuthRedirectPath } = props;
  useEffect(() => {
    if (!buildingSandwich && authRedirectPath !== "/") {
      onSetAuthRedirectPath();
    }
  }, [buildingSandwich, authRedirectPath, onSetAuthRedirectPath]);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true,
      }),
    });

    let updatedFormIsValid = true;
    for (let inputId in updatedControls) {
      updatedFormIsValid = updatedControls[inputId].valid && updatedFormIsValid;
    }

    setAuthForm(updatedControls);
    setFormIsValid(updatedFormIsValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignUp);
  };

  const switchAuthModeHandler = () => {
    setIsSignUp((prevSignUp) => !prevSignUp);
  };

  const formElements = [];
  for (let key in authForm) {
    formElements.push({
      id: key,
      config: authForm[key],
    });
  }

  let form = formElements.map((formElement) => (
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
  ));

  if (props.loading) {
    form = <Spinner />;
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p className={classes.ErrorMessage}>{props.error.message}</p>
    );
  }

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }

  return (
    <div className={classes.Auth}>
      {authRedirect}
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button
          btnType="Success"
          clicked={submitHandler}
          disabled={!formIsValid}
        >
          Submit
        </Button>
      </form>
      <Button btnType="Danger" clicked={switchAuthModeHandler}>
        Switch to {isSignUp ? "sign in" : "sign up"}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buildingSandwich: state.sandwichSimulator.building,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
