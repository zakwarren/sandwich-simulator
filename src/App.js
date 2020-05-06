import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import SandwichSimulator from "./containers/SandwichSimulator/SandwichSimulator";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SandwichSimulator />
        </Layout>
      </div>
    );
  }
}

export default App;
