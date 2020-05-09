import React from "react";

const Site = ({ site }) => {
  return (
    <div>
      <b>Title: </b>
      {site.title}
      <br />
      <b>Description: </b>
      {site.description}
      <br />
    </div>
  );
};

export default Site;
