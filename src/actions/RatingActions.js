import {
  GET_BOOK_RATING,
  GET_BOOK_RATING_OK,
  GET_BOOK_RATING_ERROR,
  ADD_BOOK_RATING,
  ADD_BOOK_RATING_OK,
  ADD_BOOK_RATING_ERROR,
} from "../types";

import axiosClient from "../config/axios";
import { getToken } from "../utils/Commons";

export function getRatingAction(bookId) {
  return async (dispatch) => {
    dispatch(getRating());
    try {
      const response = await axiosClient.get("/public/rating/" + bookId);
      dispatch(getRatingOk(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getRatingError());
    }
  };
}

const getRating = () => ({
  type: GET_BOOK_RATING,
  payload: true,
});

const getRatingOk = (ratings) => ({
  type: GET_BOOK_RATING_OK,
  payload: ratings,
});

const getRatingError = () => ({
  type: GET_BOOK_RATING_ERROR,
  payload: true,
});

export function addNewRatingAction(rating) {
  return async (dispatch) => {
    dispatch(addRating());
    try {
      const response = await axiosClient.post("/user/rating/save", rating, {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      });
      console.log(response.data);
      dispatch(addRatingOk(response.data));
    } catch (error) {
      console.log(error);
      dispatch(addRatingError());
    }
  };
}

const addRating = () => ({
  type: ADD_BOOK_RATING,
  payload: true,
});

const addRatingOk = (rating) => ({
  type: ADD_BOOK_RATING_OK,
  payload: rating,
});

const addRatingError = () => ({
  type: ADD_BOOK_RATING_ERROR,
  payload: true,
});
