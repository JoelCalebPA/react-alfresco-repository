import {
  GET_USER_CART,
  GET_USER_CART_OK,
  GET_USER_CART_ERROR,
  ADD_ITEM_CART,
  ADD_ITEM_CART_OK,
  ADD_ITEM_CART_ERROR,
  REMOVE_ITEM_CART,
  REMOVE_ITEM_CART_OK,
  REMOVE_ITEM_CART_ERROR,
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";
import { getToken } from "../utils/Commons";

export function getClientCartAction() {
  return async (dispatch) => {
    dispatch(getClientCart());
    try {
      // enviando el libro a la API
      const response = await axiosClient.post(
        "/user/getShoppingCart",
        { token: getToken() },
        {
          headers: { Authorization: "Bearer " + getToken() },
        }
      );
      // si no hay error, actualizar el state
      console.log(response.data);
      dispatch(getClientCartOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(getClientCartError(true));
    }
  };
}

const getClientCart = () => ({
  type: GET_USER_CART,
  payload: true,
});

const getClientCartOk = (shoppingCart) => ({
  type: GET_USER_CART_OK,
  payload: shoppingCart,
});

const getClientCartError = (state) => ({
  type: GET_USER_CART_ERROR,
  payload: state,
});

export function addItemToCartAction(item) {
  return async (dispatch) => {
    dispatch(addItemToCart());
    try {
      // enviando el libro a la API
      const response = await axiosClient.post("/user/cart/addItem", item, {
        headers: { Authorization: "Bearer " + getToken() },
      });
      // si no hay error, actualizar el state
      dispatch(addItemToCartOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(addItemToCartError(true));
      // alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al registrar el libro, intente de nuevo",
      });
    }
  };
}

const addItemToCart = () => ({
  type: ADD_ITEM_CART,
  payload: true,
});

const addItemToCartOk = (items) => ({
  type: ADD_ITEM_CART_OK,
  payload: items,
});

const addItemToCartError = (state) => ({
  type: ADD_ITEM_CART_ERROR,
  payload: state,
});

export function removeItemFromCartAction(itemId) {
  return async (dispatch) => {
    dispatch(removeItemToCart());
    try {
      // enviando el libro a la API
      const response = await axiosClient.post(
        "/user/cart/removeItem",
        { cartItemId: itemId },
        {
          headers: { Authorization: "Bearer " + getToken() },
        }
      );

      // si no hay error, actualizar el state
      dispatch(removeItemToCartOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(removeItemCartError(true));
      // alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al registrar el libro, intente de nuevo",
      });
    }
  };
}

const removeItemToCart = () => ({
  type: REMOVE_ITEM_CART,
  payload: true,
});

const removeItemToCartOk = (shoppingCart) => ({
  type: REMOVE_ITEM_CART_OK,
  payload: shoppingCart,
});

const removeItemCartError = (state) => ({
  type: REMOVE_ITEM_CART_ERROR,
  payload: state,
});
