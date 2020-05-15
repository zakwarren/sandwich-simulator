import React from "react";
// import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Spinner from "./Spinner";
import classes from "./Spinner.module.css";

configure({ adapter: new Adapter() });

describe("<Spinner />", () => {
  it("renders as expected", () => {
    // const tree = renderer.create(<Spinner />).toJSON();
    // expect(tree).toMatchSnapshot();
    const wrapper = shallow(<Spinner />);
    expect(wrapper.contains("Loading...")).toEqual(true);
    expect(wrapper.hasClass(classes.Loader)).toEqual(true);
  });
});
