import React, { useEffect } from "react";
import Subscription from "./Subscription";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsAction } from "../../actions/SubscriptionAction";
import "./Admin.css";

const Subscriptions = () => {
  const subscriptions = useSelector(
    (state) => state.subscription.subscriptions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptionsAction());
  }, [dispatch]);

  return (
    <div className="subscriptions-component">
      <div className="subscriptions-container">
        <div className="subscriptions">
          <h2 className="text-center mb-4 font-weight-bold">
            Lista de Suscriptores
          </h2>
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Estado</th>
                <th>Fecha de Inicio</th>
                <th>Fecha de Fin</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions &&
                subscriptions.map((s) => (
                  <Subscription key={s.id} subscription={s} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
