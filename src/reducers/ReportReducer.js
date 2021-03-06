import {
    REPORT,
    REPORT_OK,
    REPORT_ERROR,
  } from "../types";
  
  const initialState = {
    report: [],
    error: null,
    loading: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case REPORT:
        return { ...state, loading: action.payload };
      case REPORT_OK:
        return {
          ...state,
          loading: false,
          error: null,
          report: action.payload,
        };
      case REPORT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  