import {
  UPDATE_USER,
  UPDATE_USER_OK,
  UPDATE_USER_ERROR,
  GET_USER,
  GET_USER_OK,
  GET_USER_ERROR,
  SUBSCRIBE_USER,
  SUBSCRIBE_USER_OK,
  SUBSCRIBE_USER_ERROR,
  UNSUBSCRIBE_USER,
  UNSUBSCRIBE_USER_OK,
  UNSUBSCRIBE_USER_ERROR,
} from "../types";

const initialState = {
  user: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE_USER:
    case UNSUBSCRIBE_USER:
    case GET_USER:
    case UPDATE_USER:
      return { ...state, loading: action.payload };
    case UNSUBSCRIBE_USER_OK:
    case SUBSCRIBE_USER_OK:
    case GET_USER_OK:
    case UPDATE_USER_OK:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    case UNSUBSCRIBE_USER_ERROR:
    case SUBSCRIBE_USER_ERROR:
    case GET_USER_ERROR:
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
