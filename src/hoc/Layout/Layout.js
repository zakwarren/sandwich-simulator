import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", getInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", getInstallPrompt);
    };
  }, []);

  const getInstallPrompt = (event) => {
    event.preventDefault();
    setDeferredPrompt(event);
    return false;
  };

  const promptForInstallHandler = () => {
    deferredPrompt.prompt();
    setDeferredPrompt(null);
  };

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
        installPrompt={deferredPrompt}
        promptForInstall={promptForInstallHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={showSideDrawer}
        closed={sideDrawerCloseHandler}
        installPrompt={deferredPrompt}
        promptForInstall={promptForInstallHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
