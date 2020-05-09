import React, { useState } from "react";
import axios from "axios";
import { setUserSession, getTicket, getUser } from "../utils/Commons";

const Login = ({ history }) => {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://207.246.78.28:8080/alfresco/s/api/login", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.data.ticket, username.value);
        history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      Login
      <br />
      <br />
      <div>
        Username
        <br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password
        <br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <input
        type="button"
        value={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
      <br />
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
};

export default Login;
