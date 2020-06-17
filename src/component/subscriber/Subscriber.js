import React from "react";
import { unsubscribeAction } from "../../actions/UserActions";
import { useDispatch } from "react-redux";

const Subscriber = ({ user }) => {
  const dispatch = useDispatch();

  const doUnsubscribe = (user) => dispatch(unsubscribeAction(user));

  const unsubscribe = (e) => {
    e.preventDefault();

    doUnsubscribe(user);
  };
  return (
    <div>
      <div className="subscription-banner"></div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                CONTENIDO DE SUSCRIPTOR
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <button className="btn btn-danger" onClick={unsubscribe}>
                Eliminar suscripción
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
