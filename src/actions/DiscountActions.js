import {
  LIST_DISCOUNTS,
  LIST_DISCOUNTS_OK,
  LIST_DISCOUNTS_ERROR,
  ADD_DISCOUNT,
  ADD_DISCOUNT_OK,
  ADD_DISCOUNT_ERROR,
} from "../types";

import axiosClient from "../config/axios";
import { getToken } from "../utils/Commons";

export function getDiscountsAction() {
  return async (dispatch) => {
    dispatch(getDiscounts());
    try {
      // enviando el libro a la API
      const response = await axiosClient.get("/admin/discount/findAll", {
        headers: { Authorization: "Bearer " + getToken() },
      });
      dispatch(getDiscountsOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(getDiscountsError(true));
    }
  };
}

const getDiscounts = () => ({
  type: LIST_DISCOUNTS,
  payload: true,
});

const getDiscountsOk = (discounts) => ({
  type: LIST_DISCOUNTS_OK,
  payload: discounts,
});

const getDiscountsError = (state) => ({
  type: LIST_DISCOUNTS_ERROR,
  payload: state,
});

export function addDiscountAction(discount) {
  return async (dispatch) => {
    dispatch(addDiscount());
    try {
      // enviando el libro a la API
      const response = await axiosClient.post(
        "/admin/discount/save",
        discount,
        {
          headers: { Authorization: "Bearer " + getToken() },
        }
      );
      dispatch(addDiscountOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(addDiscountError(true));
    }
  };
}

const addDiscount = () => ({
  type: ADD_DISCOUNT,
  payload: true,
});

const addDiscountOk = (discount) => ({
  type: ADD_DISCOUNT_OK,
  payload: discount,
});

const addDiscountError = (state) => ({
  type: ADD_DISCOUNT_ERROR,
  payload: state,
});
