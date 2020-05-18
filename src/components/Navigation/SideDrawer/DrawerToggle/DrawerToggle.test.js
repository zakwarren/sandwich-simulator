import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import classes from "./DrawerToggle.module.css";
import DrawerToggle from "./DrawerToggle";

configure({ adapter: new Adapter() });

describe("<DrawerToggle />", () => {
  it("should have a DrawerToggle class and contain 4 dive elements", () => {
    const wrapper = shallow(<DrawerToggle clicked={jest.fn} />);
    expect(wrapper.hasClass(classes.DrawerToggle)).toEqual(true);
    expect(wrapper.find("div")).toHaveLength(4);
  });
});
