import React from "react";
import { useSelector } from "react-redux";
import "./User.css";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);

  const history = useHistory();

  const goToCheckout = () => {
    if (shoppingCart.total > 0) {
      history.push("/checkout");
    }
  };

  return (
    <div className="cart-component">
      <div className="cart-container">
        <h2>Carrito</h2>
        <table>
          <thead>
            <tr>
              <th>Libro</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.cartItems &&
              shoppingCart.cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            <tr>
              <td></td>
              <td>Total a Pagar:</td>
              <td>S/. {shoppingCart.total}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={goToCheckout}>Comprar</button>
      </div>
    </div>
  );
};

export default Cart;
