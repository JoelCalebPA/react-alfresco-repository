import {
  UPDATE_USER,
  UPDATE_USER_OK,
  UPDATE_USER_ERROR,
  GET_USER,
  GET_USER_OK,
  GET_USER_ERROR,
  SUBSCRIBE_USER,
  SUBSCRIBE_USER_OK,
  SUBSCRIBE_USER_ERROR,
  UNSUBSCRIBE_USER,
  UNSUBSCRIBE_USER_OK,
  UNSUBSCRIBE_USER_ERROR,
} from "../types";

import axiosClient from "../config/axios";
import Swal from "sweetalert2";
import { getToken, setUserRole } from "../utils/Commons";

export function updateUserAction(user) {
  return async (dispatch) => {
    dispatch(updateUser());
    try {
      // enviando el autor a la API
      const response = await axiosClient.post("/user/update", user, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      dispatch(updateUserOk(response.data));
      // alerta
      Swal.fire("Correcto", "El usuario se actualizo correctamente", "success");
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(updateUserError(true));
      // alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al actualizar usuario, intente de nuevo",
      });
    }
  };
}

const updateUser = () => ({
  type: UPDATE_USER,
  payload: true,
});

const updateUserOk = (user) => ({
  type: UPDATE_USER_OK,
  payload: user,
});

const updateUserError = (state) => ({
  type: UPDATE_USER_ERROR,
  payload: state,
});

export function getUserAction(user) {
  return async (dispatch) => {
    dispatch(getUser());
    try {
      // enviando el autor a la API
      const response = await axiosClient.post("/user/find", user, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      dispatch(getUserOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(getUserError(error));
    }
  };
}

const getUser = () => ({
  type: GET_USER,
  payload: true,
});

const getUserOk = (user) => ({
  type: GET_USER_OK,
  payload: user,
});

const getUserError = (state) => ({
  type: GET_USER_ERROR,
  payload: state,
});

export function subscribeAction(user) {
  return async (dispatch) => {
    dispatch(subscribeUser());
    try {
      // enviando el autor a la API
      const response = await axiosClient.post("/user/subscribe", user, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      setUserRole("SUBSCRIBER");
      Swal.fire("Correcto", "Suscripción registrada", "success");
      dispatch(subscribeUserOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(subscribeUserError(error));
    }
  };
}

const subscribeUser = () => ({
  type: SUBSCRIBE_USER,
  payload: true,
});

const subscribeUserOk = (user) => ({
  type: SUBSCRIBE_USER_OK,
  payload: user,
});

const subscribeUserError = (state) => ({
  type: SUBSCRIBE_USER_ERROR,
  payload: state,
});

export function unsubscribeAction(user) {
  return async (dispatch) => {
    dispatch(unsubscribeUser());
    try {
      // enviando el autor a la API
      const response = await axiosClient.post("/user/unsubscribe", user, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      setUserRole("USER");
      Swal.fire("Correcto", "Suscripción eliminada", "success");
      dispatch(unsubscribeUserOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(unsubscribeUserError(error));
    }
  };
}

const unsubscribeUser = () => ({
  type: UNSUBSCRIBE_USER,
  payload: true,
});

const unsubscribeUserOk = (user) => ({
  type: UNSUBSCRIBE_USER_OK,
  payload: user,
});

const unsubscribeUserError = (state) => ({
  type: UNSUBSCRIBE_USER_ERROR,
  payload: state,
});
