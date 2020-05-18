import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import SandwichSimulator from "./containers/SandwichSimulator/SandwichSimulator";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";

const Orders = lazy(() => import("./containers/Orders/Orders"));
const Checkout = lazy(() => import("./containers/Checkout/Checkout"));

const App = (props) => {
  const { onTryAutoSignIn } = props;

  useEffect(() => {
    onTryAutoSignIn();
  }, [onTryAutoSignIn]);

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={SandwichSimulator} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" render={(props) => <Checkout {...props} />} />
        <Route path="/orders" render={() => <Orders />} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={SandwichSimulator} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
