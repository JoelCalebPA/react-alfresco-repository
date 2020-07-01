import React, { useEffect } from "react";
import { removeUserSession } from "../../utils/Commons";

const Logout = () => {
  useEffect(() => {
    removeUserSession();
    window.location = "http://localhost:3000"
  });
  return <div></div>;
};

export default Logout;
