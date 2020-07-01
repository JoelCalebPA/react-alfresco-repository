import {
  GET_BOOK_RATING,
  GET_BOOK_RATING_OK,
  GET_BOOK_RATING_ERROR,
  ADD_BOOK_RATING,
  ADD_BOOK_RATING_OK,
  ADD_BOOK_RATING_ERROR,
} from "../types";

const initialState = {
  comments: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK_RATING:
    case GET_BOOK_RATING:
      return { ...state, loading: action.payload };
    case GET_BOOK_RATING_OK:
      return {
        ...state,
        loading: false,
        error: null,
        comments: action.payload,
      };
    case ADD_BOOK_RATING_OK:
      return {
        ...state,
        loading: false,
        error: null,
        comments: [...state.comments, action.payload],
      };
    case ADD_BOOK_RATING_ERROR:
    case GET_BOOK_RATING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
