import {
  LIST_PUBLISHERS,
  LIST_PUBLISHERS_OK,
  LIST_PUBLISHERS_ERROR,
  ADD_PUBLISHER,
  ADD_PUBLISHER_OK,
  ADD_PUBLISHER_ERROR,
} from "../types";

const initialState = {
  publishers: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PUBLISHER:
    case LIST_PUBLISHERS:
      return { ...state, loading: action.payload };
    case ADD_PUBLISHER_OK:
      return {
        ...state,
        loading: false,
        error: null,
        publishers: [...state.publishers, action.payload],
      };
    case LIST_PUBLISHERS_OK:
      return {
        ...state,
        loading: false,
        error: null,
        publishers: action.payload,
      };
    case ADD_PUBLISHER_ERROR:
    case LIST_PUBLISHERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
