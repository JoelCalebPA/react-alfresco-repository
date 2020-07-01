import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedOrderAction } from "../../actions/OrderAction";

const Order = ({ order, orders, setOrderItems }) => {
  const dispatch = useDispatch();
  const showOrderProducts = () => {
    dispatch(setSelectedOrderAction(order));
  };
  return (
    <tr>
      <td>{order.orderDate}</td>
      <td>S/. {order.orderTotal}</td>
      <td>{order.payment.cardNumber}</td>
      <td>
        <button onClick={showOrderProducts}>Ver productos</button>
      </td>
    </tr>
  );
};

export default Order;
