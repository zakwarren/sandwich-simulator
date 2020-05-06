import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import SandwichSimulator from "./containers/SandwichSimulator/SandwichSimulator";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={SandwichSimulator} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
