import React, { useState, Fragment } from "react";
import { isSubscriber } from "../../utils/Commons";
import UpdateUser from "./UpdateUser";
import { useDispatch, useSelector } from "react-redux";
import { subscribeAction } from "../../actions/UserActions";
import Subscriber from "../subscriber/Subscriber";
import DigitalContent from "../subscriber/DigitalContent";

const User = () => {
  const user = useSelector((state) => state.user.user);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showSubscriberForm, setShowSubscriberForm] = useState(false);
  const [showDigitalContent, setShowDigitalContent] = useState(false);

  const dispatch = useDispatch();

  const handleShowUpdateForm = () => {
    setShowUpdateForm(true);
    setShowSubscriberForm(false);
    setShowDigitalContent(false);
  };
  const handleShowSubscribeForm = () => {
    setShowUpdateForm(false);
    setShowSubscriberForm(true);
    setShowDigitalContent(false);
  };
  const handleShowDigitalContent = () => {
    setShowUpdateForm(false);
    setShowSubscriberForm(false);
    setShowDigitalContent(true);
  };

  const doSubscribe = (user) => dispatch(subscribeAction(user));

  const subscribe = (e) => {
    e.preventDefault();

    doSubscribe(user);
  };

  return (
    <div>
      <div className="header">
        <button className="btn btn-primary" onClick={handleShowUpdateForm}>
          Actualizar datos
        </button>
        {isSubscriber() && (
          <Fragment>
            <button
              className="btn btn-primary"
              onClick={handleShowSubscribeForm}
            >
              Suscripcion
            </button>
            <button
              className="btn btn-primary"
              onClick={handleShowDigitalContent}
            >
              Contenido Digital
            </button>
          </Fragment>
        )}
      </div>
      {!isSubscriber() && (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-danger" onClick={subscribe}>
                  Suscribete aquí
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showUpdateForm && <UpdateUser user={user} />}
      {isSubscriber() && (
        <Fragment>
          {showSubscriberForm && <Subscriber user={user} />}
          {showDigitalContent && <DigitalContent />}
        </Fragment>
      )}
    </div>
  );
};

export default User;
