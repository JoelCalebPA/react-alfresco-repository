import {
  LIST_PUBLISHERS,
  LIST_PUBLISHERS_OK,
  LIST_PUBLISHERS_ERROR,
  ADD_PUBLISHER,
  ADD_PUBLISHER_ERROR,
  ADD_PUBLISHER_OK,
} from "../types";

import axiosClient from "../config/axios";
import { getToken } from "../utils/Commons";
import Swal from "sweetalert2";

export function listPublishersAction() {
  return async (dispatch) => {
    dispatch(listPublishers());
    try {
      const response = await axiosClient.get("/public/publisher/findAll");
      dispatch(listPublishersOk(response.data));
    } catch (error) {
      console.log(error);
      dispatch(listPublishersError());
    }
  };
}

const listPublishers = () => ({
  type: LIST_PUBLISHERS,
  payload: true,
});

const listPublishersOk = (publishers) => ({
  type: LIST_PUBLISHERS_OK,
  payload: publishers,
});

const listPublishersError = () => ({
  type: LIST_PUBLISHERS_ERROR,
  payload: true,
});


export function addNewPublisherAction(publisher) {
  return async (dispatch) => {
    dispatch(addPublisher());
    try {
      // enviando el autor a la API
      const response = await axiosClient.post("/admin/publisher/save", publisher, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      dispatch(addPublisherOk(response.data));
      // alerta
      Swal.fire("Correcto", "La editorial se registro correctamente", "success");
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(addPublisherError(true));
      // alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al registrar la editorial, intente de nuevo",
      });
    }
  };
}

const addPublisher = () => ({
  type: ADD_PUBLISHER,
  payload: true,
});

const addPublisherOk = (publisher) => ({
  type: ADD_PUBLISHER_OK,
  payload: publisher,
});

const addPublisherError = (state) => ({
  type: ADD_PUBLISHER_ERROR,
  payload: state,
});