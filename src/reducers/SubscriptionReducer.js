import {
  LIST_SUBSCRIPTIONS,
  LIST_SUBSCRIPTIONS_OK,
  LIST_SUBSCRIPTIONS_ERROR,
} from "../types";

const initialState = {
  subscriptions: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_SUBSCRIPTIONS:
      return { ...state, loading: action.payload };
    case LIST_SUBSCRIPTIONS_OK:
      return {
        ...state,
        loading: false,
        error: null,
        subscriptions: action.payload,
      };
    case LIST_SUBSCRIPTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
