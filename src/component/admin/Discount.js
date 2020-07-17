import React from "react";

const Discount = ({ discount }) => {
  return (
    <tr>
      <td>{discount.disc}%</td>
      <td>{discount.author}</td>
      <td>{discount.category}</td>
    </tr>
  );
};

export default Discount;
