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

const initialState = {
  books: [],
  error: null,
  loading: false,
  selectedBook: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOK:
    case SELECT_BOOK:
    case LIST_BOOKS:
    case ADD_BOOK:
      return {
        ...state,
        loading: action.payload,
      };
    case LIST_BOOKS_OK:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case ADD_BOOK_OK:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
      };
    case GET_BOOK_ERROR:
    case SELECT_BOOK_ERROR:
    case LIST_BOOKS_ERROR:
    case ADD_BOOK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_BOOK_OK:
    case SELECT_BOOK_OK:
      return {
        ...state,
        loading: false,
        selectedBook: action.payload,
      };
    default:
      return state;
  }
}
