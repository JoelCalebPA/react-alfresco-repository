import { SIGN_UP, SIGN_UP_OK, SIGN_UP_ERROR } from "../types";

import axiosClient from "../config/axios";
import Swal from "sweetalert2";

export function signUpAction(user) {
  return async (dispatch) => {
    dispatch(signUp());
    try {
      const response = await axiosClient.post("/auth/signup", user);
      dispatch(signUpOk(response.data));

      Swal.fire("Correcto", "Registro OK", "success");
    } catch (error) {
      console.log(error);
      dispatch(signUpError(error));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "El correo ya esta registrado por otro usuario",
      });
    }
  };
}

const signUp = () => ({
  type: SIGN_UP,
  payload: true,
});

const signUpOk = (data) => ({
  type: SIGN_UP_OK,
  payload: data,
});

const signUpError = (state) => ({
  type: SIGN_UP_ERROR,
  payload: state,
});
