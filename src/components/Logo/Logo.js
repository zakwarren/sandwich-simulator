import React from "react";

import logoImg from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={logoImg} alt="Logo" />
  </div>
);

export default Logo;
