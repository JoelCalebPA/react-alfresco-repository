import {
  LIST_CATEGORIES,
  LIST_CATEGORIES_OK,
  LIST_CATEGORIES_ERROR,
  ADD_CATEGORY,
  ADD_CATEGORY_OK,
  ADD_CATEGORY_ERROR,
} from "../types";

import axiosClient from "../config/axios";
import Swal from "sweetalert2";
import { getToken } from "../utils/Commons";

export function listCategoriesAction() {
  return async (dispatch) => {
    dispatch(listCategories());
    try {
      const response = await axiosClient.get("/public/category/findAll");
      dispatch(listCategoriesOk(response.data));
    } catch (error) {
      console.log(error);
      dispatch(listCategoriesError());
    }
  };
}

const listCategories = () => ({
  type: LIST_CATEGORIES,
  payload: true,
});

const listCategoriesOk = (categories) => ({
  type: LIST_CATEGORIES_OK,
  payload: categories,
});

const listCategoriesError = () => ({
  type: LIST_CATEGORIES_ERROR,
  payload: true,
});

export function addNewCategoryAction(category) {
  return async (dispatch) => {
    dispatch(addCategory());
    try {
      // enviando el autor a la API
      const response = await axiosClient.post("/admin/category/save", category, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      dispatch(addCategoryOk(response.data));
      // alerta
      Swal.fire("Correcto", "La categoria se registro correctamente", "success");
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(addCategoryError(true));
      // alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al registrar la categoria, intente de nuevo",
      });
    }
  };
}

const addCategory = () => ({
  type: ADD_CATEGORY,
  payload: true,
});

const addCategoryOk = (category) => ({
  type: ADD_CATEGORY_OK,
  payload: category,
});

const addCategoryError = (state) => ({
  type: ADD_CATEGORY_ERROR,
  payload: state,
});
