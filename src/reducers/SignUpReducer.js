import { SIGN_UP, SIGN_UP_OK, SIGN_UP_ERROR } from "../types";

const initialState = {
  user: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, loading: action.payload };
    case SIGN_UP_OK:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}