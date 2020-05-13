import React from "react";
import PropTypes from "prop-types";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      {props.installPrompt ? (
        <button onClick={props.promptForInstall}>Install</button>
      ) : null}
      <NavigationItems isAuth={props.isAuth} />
    </nav>
  </header>
);

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
  installPrompt: PropTypes.object,
  promptForInstall: PropTypes.func.isRequired,
};

export default Toolbar;
