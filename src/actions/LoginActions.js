import { LOGIN, LOGIN_OK, LOGIN_ERROR } from "../types";

import axiosClient from "../config/axios";
import Swal from "sweetalert2";
import { setUserSession } from "../utils/Commons";

export function loginAction(user) {
  return async (dispatch) => {
    dispatch(login());
    try {
      const response = await axiosClient.post("/auth/login", user);
      dispatch(loginOK(response.data));
      const roles = response.data.user.roles;
      let role = {};
      const roleAdmin = roles.find((role) => role.name === "ADMIN");
      const roleSubscriber = roles.find((role) => role.name === "SUBSCRIBER");
      const roleUser = roles.find((role) => role.name === "USER");

      if (roleAdmin) {
        role = roleAdmin;
      } else if (roleSubscriber) {
        role = roleSubscriber;
      } else {
        role = roleUser;
      }

      setUserSession(
        response.data.accessToken,
        response.data.user.email,
        role.name
      );
      window.location = "http://localhost:3000";
    } catch (error) {
      console.log(error);
      dispatch(loginError(error));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al iniciar sesión, intente de nuevo",
      });
    }
  };
}

const login = () => ({
  type: LOGIN,
  payload: true,
});

const loginOK = (data) => ({
  type: LOGIN_OK,
  payload: {
    user: data.user,
    token: data.accessToken,
  },
});

const loginError = (state) => ({
  type: LOGIN_ERROR,
  payload: state,
});
