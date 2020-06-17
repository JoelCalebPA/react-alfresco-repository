import {
  LIST_AUTHORS,
  LIST_AUTHORS_OK,
  LIST_AUTHORS_ERROR,
  ADD_AUTHOR,
  ADD_AUTHOR_OK,
  ADD_AUTHOR_ERROR,
} from "../types";

const initialState = {
  authors: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_AUTHOR:
    case LIST_AUTHORS:
      return { ...state, loading: action.payload };
    case ADD_AUTHOR_OK:
      return {
        ...state,
        loading: false,
        error: null,
        authors: [...state.authors, action.payload],
      };
    case LIST_AUTHORS_OK:
      return {
        ...state,
        loading: false,
        error: null,
        authors: action.payload,
      };
    case ADD_AUTHOR_ERROR:
    case LIST_AUTHORS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
