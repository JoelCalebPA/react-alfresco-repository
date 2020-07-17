import React from "react";
import "./tachyons.min.css";
const Page = ({ children, singleMode, id }) => (
  <div
    id={id}
    className="center pa4"
    style={{ width: "210mm"}}
  >
    {children}
  </div>
);

export default Page;
