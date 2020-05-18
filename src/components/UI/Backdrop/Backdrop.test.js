import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import classes from "./Backdrop.module.css";
import Backdrop from "./Backdrop";

configure({ adapter: new Adapter() });

describe("<Backdrop />", () => {
  let wrapper;
  const clicked = jest.fn;

  beforeEach(() => {
    wrapper = shallow(<Backdrop clicked={clicked} show={false} />);
  });

  it("should render nothing if show is false", () => {
    expect(wrapper.get(0)).toBeNull();
  });

  it("should render a div with the Backdrop class when show is true", () => {
    wrapper.setProps({ show: true });
    expect(wrapper.hasClass(classes.Backdrop)).toEqual(true);
    expect(
      wrapper.contains(
        <div className={classes.Backdrop} onClick={clicked}></div>
      )
    ).toEqual(true);
  });
});
