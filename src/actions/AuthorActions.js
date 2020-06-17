import {
  LIST_AUTHORS,
  LIST_AUTHORS_OK,
  LIST_AUTHORS_ERROR,
  ADD_AUTHOR,
  ADD_AUTHOR_OK,
  ADD_AUTHOR_ERROR,
} from "../types";

import axiosClient from "../config/axios";
import Swal from "sweetalert2";
import { getToken } from "../utils/Commons";

export function listAuthorsAction() {
  return async (dispatch) => {
    dispatch(listAuthors());
    try {
      const response = await axiosClient.get("/public/author/findAll");
      dispatch(listAuthorsOk(response.data));
    } catch (error) {
      console.log(error);
      dispatch(listAuthorsError());
    }
  };
}

const listAuthors = () => ({
  type: LIST_AUTHORS,
  payload: true,
});

const listAuthorsOk = (authors) => ({
  type: LIST_AUTHORS_OK,
  payload: authors,
});

const listAuthorsError = () => ({
  type: LIST_AUTHORS_ERROR,
  payload: true,
});

export function addNewAuthorAction(author) {
  return async (dispatch) => {
    dispatch(addAuthor());
    try {
      // enviando el autor a la API
      const response = await axiosClient.post("/admin/author/save", author, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      dispatch(addAuthorOk(response.data));
      // alerta
      Swal.fire("Correcto", "El autor se registro correctamente", "success");
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(addAuthorError(true));
      // alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al registrar el Autor, intente de nuevo",
      });
    }
  };
}

const addAuthor = () => ({
  type: ADD_AUTHOR,
  payload: true,
});

const addAuthorOk = (author) => ({
  type: ADD_AUTHOR_OK,
  payload: author,
});

const addAuthorError = (state) => ({
  type: ADD_AUTHOR_ERROR,
  payload: state,
});
