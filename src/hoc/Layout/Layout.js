import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    deferredPrompt: null,
  };

  componentDidMount() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      this.setState({ deferredPrompt: event });
      return false;
    });
  }

  promptForInstallHandler = () => {
    this.state.deferredPrompt.prompt();
    this.setState({ deferredPrompt: null });
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
          installPrompt={this.state.deferredPrompt}
          promptForInstall={this.promptForInstallHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
          installPrompt={this.state.deferredPrompt}
          promptForInstall={this.promptForInstallHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
