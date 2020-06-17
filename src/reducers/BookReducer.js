import {
  ADD_BOOK,
  ADD_BOOK_OK,
  ADD_BOOK_ERROR,
  LIST_BOOKS,
  LIST_BOOKS_OK,
  LIST_BOOKS_ERROR,
} from "../types";

const initialState = {
  books: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
    case LIST_BOOKS_ERROR:
    case ADD_BOOK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
