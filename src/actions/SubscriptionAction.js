import {
  LIST_SUBSCRIPTIONS,
  LIST_SUBSCRIPTIONS_OK,
  LIST_SUBSCRIPTIONS_ERROR,
} from "../types";

import axiosClient from "../config/axios";
import { getToken } from "../utils/Commons";

export function getSubscriptionsAction() {
  return async (dispatch) => {
    dispatch(getSubscriptions());
    try {
      // enviando el libro a la API
      const response = await axiosClient.get("/admin/subscription/findAll", {
        headers: { Authorization: "Bearer " + getToken() },
      });
      dispatch(getSubscriptionsOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(getSubscriptionsError(true));
    }
  };
}

const getSubscriptions = () => ({
  type: LIST_SUBSCRIPTIONS,
  payload: true,
});

const getSubscriptionsOk = (subscriptions) => ({
  type: LIST_SUBSCRIPTIONS_OK,
  payload: subscriptions,
});

const getSubscriptionsError = (state) => ({
  type: LIST_SUBSCRIPTIONS_ERROR,
  payload: state,
});
