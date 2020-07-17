import React from "react";

const Sale = ({ sale }) => {
  return (
    <tr>
      <td>{sale.quantity}</td>
      <td>{sale.book.title}</td>
    </tr>
  );
};

export default Sale;
