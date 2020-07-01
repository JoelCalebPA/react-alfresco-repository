import {
  CHECKOUT,
  CHECKOUT_OK,
  CHECKOUT_ERROR,
  GET_CLIENT_ORDERS,
  GET_CLIENT_ORDERS_OK,
  GET_CLIENT_ORDERS_ERROR,
  SELECTED_ORDER,
  SELECTED_ORDER_OK,
  SELECTED_ORDER_ERROR,
} from "../types";

import axiosClient from "../config/axios";
import Swal from "sweetalert2";
import { getToken } from "../utils/Commons";

export function getClientOrdersAction() {
  return async (dispatch) => {
    dispatch(getClientOrders());
    try {
      // enviando el libro a la API
      const response = await axiosClient.post(
        "/user/orders",
        { token: getToken() },
        {
          headers: { Authorization: "Bearer " + getToken() },
        }
      );
      // si no hay error, actualizar el state
      dispatch(getClientOrdersOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(getClientOrdersError(true));
    }
  };
}

const getClientOrders = () => ({
  type: GET_CLIENT_ORDERS,
  payload: true,
});

const getClientOrdersOk = (orders) => ({
  type: GET_CLIENT_ORDERS_OK,
  payload: orders,
});

const getClientOrdersError = (state) => ({
  type: GET_CLIENT_ORDERS_ERROR,
  payload: state,
});

export function checkoutAction(order) {
  return async (dispatch) => {
    dispatch(checkout());
    try {
      // enviando el autor a la API
      const response = await axiosClient.post("/user/checkout", order, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      dispatch(checkoutOk(response.data));
      // alerta
      Swal.fire("Correcto", "La compra se realizo correctamente", "success");
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(checkoutError(true));
      // alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al realizar la compra, intente de nuevo",
      });
    }
  };
}

const checkout = () => ({
  type: CHECKOUT,
  payload: true,
});

const checkoutOk = (order) => ({
  type: CHECKOUT_OK,
  payload: order,
});

const checkoutError = (state) => ({
  type: CHECKOUT_ERROR,
  payload: state,
});

export function setSelectedOrderAction(order) {
  return async (dispatch) => {
    dispatch(setSelectedOrder());
    try {
      // enviando el libro a la API
      // si no hay error, actualizar el state
      dispatch(setSelectedOrderOk(order));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(setSelectedOrderError(true));
    }
  };
}

const setSelectedOrder = () => ({
  type: SELECTED_ORDER,
  payload: true,
});

const setSelectedOrderOk = (order) => ({
  type: SELECTED_ORDER_OK,
  payload: order,
});

const setSelectedOrderError = (state) => ({
  type: SELECTED_ORDER_ERROR,
  payload: state,
});
