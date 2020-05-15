import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Orders, mapStateToProps } from "./Orders";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

configure({ adapter: new Adapter() });

describe("<Orders />", () => {
  describe("mapStateToProps", () => {
    it("should map the state to props correctly", () => {
      const order = {
        orders: [{ id: 1, ingredients: {}, price: 42 }],
        loading: false,
        error: false,
      };
      const auth = { token: "token", userId: 1 };
      const appState = { order: order, auth: auth };
      const props = { ...order, ...auth };
      const componentState = mapStateToProps(appState);

      expect(componentState).toEqual(props);
    });
  });

  describe("display", () => {
    let wrapper;

    beforeEach(() => {
      const orders = [{ id: 1, ingredients: {}, price: 42 }];
      wrapper = shallow(
        <Orders
          orders={orders}
          loading={false}
          error={false}
          onFetchOrders={jest.fn()}
          token="token"
          userId={1}
        />
      );
    });

    it("should render one <Order /> element when passed one order object", () => {
      expect(wrapper.find(Order)).toHaveLength(1);
    });

    it("should render one <Spinner /> element when loading", () => {
      wrapper.setProps({ loading: true });
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });
  });
});
