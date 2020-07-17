import React from "react";

const Subscription = ({ subscription }) => {
  return (
    <tr>
      <td>{subscription.client.name}</td>
      <td>{subscription.status}</td>
      <td>{subscription.startingDate}</td>
      <td>{subscription.endingDate}</td>
    </tr>
  );
};

export default Subscription;
