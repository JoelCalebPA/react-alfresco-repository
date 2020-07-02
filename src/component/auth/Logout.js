import React, { useEffect } from "react";
import { removeUserSession } from "../../utils/Commons";
import { HOST_URL } from "../../config/axios";

const Logout = () => {
  useEffect(() => {
    removeUserSession();
    window.location = HOST_URL;
  });
  return <div></div>;
};

export default Logout;
