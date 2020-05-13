import React from "react";
import PropTypes from "prop-types";

import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Closed];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          {props.installPrompt ? (
            <button onClick={props.promptForInstall}>Install</button>
          ) : null}
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool,
  closed: PropTypes.func.isRequired,
  installPrompt: PropTypes.object,
  promptForInstall: PropTypes.func.isRequired,
};

export default SideDrawer;
