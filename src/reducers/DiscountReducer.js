import {
    LIST_DISCOUNTS,
    LIST_DISCOUNTS_OK,
    LIST_DISCOUNTS_ERROR,
    ADD_DISCOUNT_OK,
    ADD_DISCOUNT,
    ADD_DISCOUNT_ERROR,
  } from "../types";
  
  const initialState = {
    discounts: [],
    error: null,
    loading: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_DISCOUNT:
      case LIST_DISCOUNTS:
        return { ...state, loading: action.payload };
      case ADD_DISCOUNT_OK:
        return {
          ...state,
          loading: false,
          error: null,
          discounts: [...state.discounts, action.payload],
        };
      case LIST_DISCOUNTS_OK:
        return {
          ...state,
          loading: false,
          error: null,
          discounts: action.payload,
        };
      case ADD_DISCOUNT_ERROR:
      case LIST_DISCOUNTS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  