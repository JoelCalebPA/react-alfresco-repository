import {
  ADD_BOOK,
  ADD_BOOK_OK,
  ADD_BOOK_ERROR,
  LIST_BOOKS,
  LIST_BOOKS_OK,
  LIST_BOOKS_ERROR,
  SELECT_BOOK,
  SELECT_BOOK_OK,
  SELECT_BOOK_ERROR,
  GET_BOOK,
  GET_BOOK_OK,
  GET_BOOK_ERROR,
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";
import { getToken } from "../utils/Commons";

export function addNewBookAction(book) {
  return async (dispatch) => {
    dispatch(addBook());
    try {
      // enviando el libro a la API
      const response = await axiosClient.post("/admin/book/save", book, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      // si no hay error, actualizar el state
      dispatch(addBookOk(response.data));
      // alerta
      Swal.fire("Correcto", "El libro se registro correctamente", "success");
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(addBookError(true));
      // alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al registrar el libro, intente de nuevo",
      });
    }
  };
}

const addBook = () => ({
  type: ADD_BOOK,
  payload: true,
});

const addBookOk = (book) => ({
  type: ADD_BOOK_OK,
  payload: book,
});

const addBookError = (state) => ({
  type: ADD_BOOK_ERROR,
  payload: state,
});

export function listBooksAction() {
  return async (dispatch) => {
    dispatch(listBooks());
    try {
      const response = await axiosClient.get("/public/book/findAll");
      dispatch(listBooksOk(response.data));
    } catch (error) {
      console.log(error);
      dispatch(listBooksError());
    }
  };
}

const listBooks = () => ({
  type: LIST_BOOKS,
  payload: true,
});

const listBooksOk = (books) => ({
  type: LIST_BOOKS_OK,
  payload: books,
});

const listBooksError = () => ({
  type: LIST_BOOKS_ERROR,
  payload: true,
});

export function selectBookAction(book) {
  return async (dispatch) => {
    dispatch(selectBook());
    try {
      dispatch(selectBookOk(book));
    } catch (error) {
      dispatch(selectBookError(error));
    }
  };
}

const selectBook = () => ({
  type: SELECT_BOOK,
  payload: true,
});

const selectBookOk = (book) => ({
  type: SELECT_BOOK_OK,
  payload: book,
});

const selectBookError = () => ({
  type: SELECT_BOOK_ERROR,
  payload: true,
});

export function getBookAction(bookId) {
  return async (dispatch) => {
    dispatch(getBook());
    try {
      const response = await axiosClient.get("/public/book/" + bookId);
      dispatch(getBookOk(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getBookError());
    }
  };
}

const getBook = () => ({
  type: GET_BOOK,
  payload: true,
});

const getBookOk = (book) => ({
  type: GET_BOOK_OK,
  payload: book,
});

const getBookError = () => ({
  type: GET_BOOK_ERROR,
  payload: true,
});
