import React, { useState } from "react";
import { useSelector } from "react-redux";
import Order from "./Order";

const UserOrders = () => {
  const userOrders = useSelector((state) => state.order.orders);
  const selectedOrder = useSelector((state) => state.order.order);
  const [orderItems, setOrderItems] = useState([]);

  return (
    <div className="user-orders-component">
      <div className="user-orders-container">
        <div className="user-orders">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Total</th>
                <th>Número de Tarjeta</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {userOrders &&
                userOrders.map((order) => (
                  <Order
                    key={order.id}
                    order={order}
                    orders={userOrders}
                    setOrders={setOrderItems}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <div className="order-items">
          <ul>
            {selectedOrder.cartItemList &&
              selectedOrder.cartItemList.map((item) => (
                <li key={item.id}>
                  {item.book.title} - x{item.quantity} - S/. {item.subtotal}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
