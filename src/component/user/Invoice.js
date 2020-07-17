import React from "react";
import "./Invoice.css";
import { useSelector, useDispatch } from "react-redux";

import Page from "./Page";

const Invoice = ({ order }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="invoice-box">
      <Page singleMode={true} id="toPDF">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr className="top">
                <td colSpan="2">
                  <table>
                    <tbody>
                      <tr>
                        <td className="title">
                          <img
                            src={`${process.env.PUBLIC_URL}/img/logo.png`}
                            style={{ width: "100%", maxWidth: "300px" }}
                            alt={"hey"}
                          />
                        </td>
                        <td>
                          Orden #: {order.id}
                          <br />
                          Fecha: {order.orderDate}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr className="information">
                <td colSpan="2">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          OnBook, Inc.
                          <br />
                          12345 Sunny Road
                          <br />
                          Sunnyville, CA 12345
                        </td>
                        {user.id && (
                          <td>
                            Acme Corp.
                            <br />
                            {user.client.name}
                            <br />
                            {user.email}
                          </td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="heading">
                <td>Libro</td>
                <td>Sub Total</td>
              </tr>

              {order.cartItemList &&
                order.cartItemList.map((i) => (
                  <tr className="item" key={i.id}>
                    <td>{i.quantity} | {i.book.title}</td>
                    <td>S/. {i.subtotal}</td>
                  </tr>
                ))}

              <tr className="total">
                <td></td>
                <td>Total: S/. {order.orderTotal}</td>
              </tr>
            </tbody>
          </table>
      </Page>
    </div>
  );
};

export default Invoice;
