import {
  LIST_CATEGORIES,
  LIST_CATEGORIES_OK,
  LIST_CATEGORIES_ERROR,
  ADD_CATEGORY_OK,
  ADD_CATEGORY,
  ADD_CATEGORY_ERROR,
} from "../types";

const initialState = {
  categories: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
    case LIST_CATEGORIES:
      return { ...state, loading: action.payload };
    case ADD_CATEGORY_OK:
      return {
        ...state,
        loading: false,
        error: null,
        categories: [...state.categories, action.payload],
      };
    case LIST_CATEGORIES_OK:
      return {
        ...state,
        loading: false,
        error: null,
        categories: action.payload,
      };
    case ADD_CATEGORY_ERROR:
    case LIST_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
