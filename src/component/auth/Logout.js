import React, { useEffect } from "react";
import { removeUserSession } from "../../utils/Commons";

const Logout = ({ history }) => {
  useEffect(() => {
    removeUserSession();
    history.push("/");
  });
  return <div>boi</div>;
};

export default Logout;
