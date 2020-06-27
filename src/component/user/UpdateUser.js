import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAction } from "../../actions/UserActions";
import { showAlertAction, hideAlertAction } from "../../actions/AlertActions";

const UpdateUser = ({ user }) => {
  const alert = useSelector((state) => state.alert.alert);

  const [name, setName] = useState(user.client.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.client.address);

  const dispatch = useDispatch();

  const doUpdate = (user) => dispatch(updateUserAction(user));

  const submitUser = (e) => {
    e.preventDefault();

    if (email.trim() === "" || name.trim() === "") {
      const alert = {
        msg: "El campo nombre y email son obligatorio",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }
    dispatch(hideAlertAction());

    doUpdate({ id: user.id, email: email, address: address });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Actualizar Datos
            </h2>

            {alert ? <p className={alert.classes}> {alert.msg} </p> : null}

            <form onSubmit={submitUser}>
              <div className="form-group">
                <label>Nombres</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  disabled="true"
                  value={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Direción</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
