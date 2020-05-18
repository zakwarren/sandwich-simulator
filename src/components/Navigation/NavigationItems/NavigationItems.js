import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Sandwich Simulator
    </NavigationItem>
    {props.isAuth ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {props.isAuth ? (
      <NavigationItem link="/logout">Log out</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Log in</NavigationItem>
    )}
  </ul>
);

export default NavigationItems;
