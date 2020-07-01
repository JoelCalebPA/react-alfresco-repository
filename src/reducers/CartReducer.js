import {
  GET_USER_CART,
  GET_USER_CART_OK,
  GET_USER_CART_ERROR,
  ADD_ITEM_CART,
  ADD_ITEM_CART_OK,
  ADD_ITEM_CART_ERROR,
  REMOVE_ITEM_CART,
  REMOVE_ITEM_CART_OK,
  REMOVE_ITEM_CART_ERROR,
  UPDATE_ITEM_CART,
  UPDATE_ITEM_CART_OK,
  UPDATE_ITEM_CART_ERROR,
} from "../types";

const initialState = {
  shoppingCart: {},
  cartItem: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_CART:
    case GET_USER_CART:
    case ADD_ITEM_CART:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_ITEM_CART_OK:
    case REMOVE_ITEM_CART_OK:
    case GET_USER_CART_OK:
      return {
        ...state,
        loading: false,
        shoppingCart: action.payload,
      };
    case UPDATE_ITEM_CART_OK:
      return {
        ...state,
        loading: false,
        shoppingCart: state.shoppingCart.cartItems.map((i) =>
          i.id === action.payload.id ? (i = action.payload) : i
        ),
      };
    case GET_USER_CART_ERROR:
    case ADD_ITEM_CART_ERROR:
    case REMOVE_ITEM_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
