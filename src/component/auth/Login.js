import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/LoginActions";
import { showAlertAction, hideAlertAction } from "../../actions/AlertActions";

const Login = () => {
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const doLogin = (user) => dispatch(loginAction(user));

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      const alert = {
        msg: "Todos los campos son obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }
    dispatch(hideAlertAction());
    const user = { email: email, password: password };
    doLogin(user);
  };

  const alert = useSelector((state) => state.alert.alert);

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Iniciar Sesión
            </h2>

            {alert ? <p className={alert.classes}> {alert.msg} </p> : null}

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Iniciar Sesión
              </button>
            </form>
            <br />
            <Link to={"/newAccount"} className="new-account">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
