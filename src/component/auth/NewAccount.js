import React, { useState } from "react";
import { showAlertAction, hideAlertAction } from "../../actions/AlertActions";
import { signUpAction } from "../../actions/SignUpAction";
import { useDispatch, useSelector } from "react-redux";

const NewAccount = () => {
  const [user, saveUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const signUp = (user) => dispatch(signUpAction(user));

  const onSubmit = (e) => {
    e.preventDefault();

    // validar que no haya campos vacios
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      const alert = {
        msg: "Todos los campos son obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }

    dispatch(hideAlertAction());

    signUp({
      name: name,
      email: email,
      password: password,
    });
  };

  const alert = useSelector((state) => state.alert.alert);

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Registrarse</h2>
            {alert ? <p className={alert.classes}> {alert.msg} </p> : null}
            <form onSubmit={onSubmit}>
              <div className="form-name">
                <label htmlFor="name">Nombres y Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
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
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
