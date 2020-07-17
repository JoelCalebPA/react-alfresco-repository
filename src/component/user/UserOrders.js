import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import Order from "./Order";
import Invoice from "./Invoice";
import PrintButton from "./PrintButton";

const UserOrders = () => {
  const userOrders = useSelector((state) => state.order.orders);
  const selectedOrder = useSelector((state) => state.order.order);
  const [orderItems, setOrderItems] = useState([]);
  return (
    <div className="user-orders-component">
      <div className="user-orders-container">
        <h2 className="text-center mb-4 font-weight-bold">Ordenes de Compra</h2>
        <div className="user-orders-top">
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
          {/*selectedOrder.cartItemList && (
            <div className="order-items">
              <ul>
                {selectedOrder.cartItemList.map((item) => (
                  <li key={item.id}>
                    {item.book.title} - x{item.quantity} - S/. {item.subtotal}
                  </li>
                ))}
              </ul>
            </div>
          )*/}
        </div>
        {selectedOrder.cartItemList && (
          <Fragment>
            <PrintButton id="toPDF" label="Descargar" />
            <div className="user-orders-bottom">
              <Invoice order={selectedOrder} />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default UserOrders;
