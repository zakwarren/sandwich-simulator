import * as actionTypes from "./actionTypes";

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

export const purchaseBurger = (orderData) => {
  return (dispatch) => {
    dispatch(purchaseStart());
    // // post order
    //   .post("/orders.json", orderData)
    //   .then((response) => {
    //     dispatch(purchaseSuccess(response.data.name, orderData));
    //   })
    //   .catch((error) => {
    //     dispatch(purchaseFail(error));
    //   });
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
    // // get orders
    //   .get("orders.json")
    //   .then((res) => {
    //     const fetchedOrders = [];
    //     for (let key in res.data) {
    //       fetchedOrders.push({
    //         ...res.data[key],
    //         id: key,
    //       });
    //     }
    //     dispatch(fetchOrdersSuccess(fetchedOrders));
    //   })
    //   .catch((error) => {
    //     dispatch(fetchOrdersFail(error));
    //   });
  };
};
