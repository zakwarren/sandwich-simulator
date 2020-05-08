import * as actionTypes from "./actionTypes";
import Server from "../../utils/serverApi";

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

const purchaseStart = () => {
  return {
    type: actionTypes.PURCHASE_START,
  };
};

const purchaseSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

const purchaseFail = (error) => {
  return {
    type: actionTypes.PURCHASE_FAIL,
    error: error,
  };
};

export const purchaseSandwich = (orderData) => {
  return (dispatch) => {
    dispatch(purchaseStart());
    Server.post("/orders.json", orderData)
      .then((result) => {
        dispatch(purchaseSuccess(result.id, orderData));
      })
      .catch((error) => {
        dispatch(purchaseFail(error));
      });
  };
};

const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    Server.get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res) {
          fetchedOrders.push({
            ...res[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((error) => {
        dispatch(fetchOrdersFail(error));
      });
  };
};
