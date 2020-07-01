import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../../utils/Commons";
import { checkoutAction } from "../../actions/OrderAction";
import { hideAlertAction, showAlertAction } from "../../actions/AlertActions";

const Checkout = () => {
  const shopping = useSelector((state) => state.cart.shoppingCart);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");

  const loading = useSelector((state) => state.author.loading);
  const error = useSelector((state) => state.author.error);
  const alert = useSelector((state) => state.alert.alert);

  const dispatch = useDispatch();

  const doCheckout = (order) => dispatch(checkoutAction(order));

  const checkDaFout = () => {
    if (
      cardNumber.trim() === "" ||
      expiryMonth.trim() === "" ||
      expiryYear.trim() === "" ||
      cvc.trim() === ""
    ) {
      const alert = {
        msg: "Todos los campos son obligatorio",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }
    dispatch(hideAlertAction(alert));
    const order = {
      payment: {
        cardNumber: cardNumber,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
        cvc: cvc,
      },
      token: getToken(),
    };
    doCheckout(order);
  };

  return (
    <div className="order-component">
      <div className="order-container">
        <div className="order-form">
          <fieldset>
            <legend>Datos de Tarjeta de Crédito:</legend>
            <div className="order-form-field">
              <label htmlFor="cardNumber">Numero de tarjeta</label>
              <input
                id="cardNumber"
                name="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="order-form-field">
              <label htmlFor="expiryMonth">Mes de vencimiento</label>
              <input
                id="expiryMonth"
                name="expiryMonth"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
              />
            </div>
            <div className="order-form-field">
              <label htmlFor="expiryYear">Año de vencimiento</label>
              <input
                id="expiryYear"
                name="expiryYear"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
              />
            </div>
            <div className="order-form-field">
              <label htmlFor="cvc">CVC</label>
              <input
                id="cvc"
                name="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
            {alert ? <p className={alert.classes}> {alert.msg} </p> : null}
            <button onClick={checkDaFout}>Confirmar Compra</button>
          </fieldset>
        </div>
        <div className="order-cart">
          <ul>
            {shopping.cartItems &&
              shopping.cartItems.map((item) => (
                <li key={item.id}>
                  {item.book.title} - S/. {item.subtotal}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
