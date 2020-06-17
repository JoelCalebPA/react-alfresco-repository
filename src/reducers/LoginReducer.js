import { LOGIN, LOGIN_OK, LOGIN_ERROR } from "../types";

const initialState = {
  user: {},
  token: "",
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: action.payload };
    case LOGIN_OK:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
