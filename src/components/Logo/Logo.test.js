import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import logoImg from "../../assets/images/logo.png";
import classes from "./Logo.module.css";
import Logo from "./Logo";

configure({ adapter: new Adapter() });

describe("<Logo />", () => {
  it("should have a logo class and contain an img element", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.hasClass(classes.Logo)).toEqual(true);
    expect(wrapper.contains(<img src={logoImg} alt="Logo" />)).toEqual(true);
  });
});
