import {
  GET_CLIENT_ORDERS,
  GET_CLIENT_ORDERS_OK,
  GET_CLIENT_ORDERS_ERROR,
  CHECKOUT,
  CHECKOUT_OK,
  CHECKOUT_ERROR,
  SELECTED_ORDER,
  SELECTED_ORDER_OK,
  SELECTED_ORDER_ERROR,
} from "../types";

const initialState = {
  orders: [],
  order: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECTED_ORDER:
    case GET_CLIENT_ORDERS:
    case CHECKOUT:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CLIENT_ORDERS_OK:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case CHECKOUT_OK:
      return {
        ...state,
        loading: false,
        order: action.payload,
        orders: [...state.orders, action.payload],
      };
    case SELECTED_ORDER_OK:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case SELECTED_ORDER_ERROR:
    case GET_CLIENT_ORDERS_ERROR:
    case CHECKOUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
