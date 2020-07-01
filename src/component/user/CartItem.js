import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCartAction } from "../../actions/CartAction";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeImteFromShoppingCart = (id) =>
    dispatch(removeItemFromCartAction(id));

  const removeFromCart = () => {
    removeImteFromShoppingCart(item.id);
  };

  return (
    <tr>
      <td>{item.book.title}</td>
      <td>{item.quantity}</td>
      <td>S/. {item.subtotal}</td>
      <td>
        <button onClick={removeFromCart}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
