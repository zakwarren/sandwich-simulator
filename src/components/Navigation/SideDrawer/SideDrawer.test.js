import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SideDrawer from "./SideDrawer";
import NavigationItems from "../NavigationItems/NavigationItems";

configure({ adapter: new Adapter() });

describe("<SideDrawer />", () => {
  let wrapper;
  const promptForInstall = jest.fn;

  beforeEach(() => {
    wrapper = shallow(
      <SideDrawer
        isAuth={false}
        open={false}
        closed={jest.fn}
        installPrompt={null}
        promptForInstall={promptForInstall}
      />
    );
  });

  it("should render one <NavigationItems /> element", () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });

  it("should render an install button if install prompt is provided", () => {
    wrapper.setProps({ installPrompt: { test: true } });
    expect(
      wrapper.contains(<button onClick={promptForInstall}>Install</button>)
    ).toEqual(true);
  });
});
