import React, { useState } from "react";
import { getUser, getTicket, removeUserSession } from "../utils/Commons";
import { getSites } from "./Sites";
import Site from "./Site";

const Dashboard = ({ history }) => {
  const user = getUser();
  const ticket = getTicket();
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };

  const getSitesList = async () => {
    setLoading(true);
    const result = await getSites();
    setSites(result.data);
    setLoading(false);
  }
  
  return (
    <div>
      Welcome {user}!
      <br />
      Your ticket is "{ticket}"
      <br />
      <button
        className="btn btn-info float-right"
        onClick={getSitesList}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Sites List"}
      </button>
      <br />
      <div>
        {sites.map((s) => (
          <Site key={s.node} site={s} />
        ))}
        {sites.length === 0 && <b>No data found to display.</b>}
      </div>
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
};

export default Dashboard;
