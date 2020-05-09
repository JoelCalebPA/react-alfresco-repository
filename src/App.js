import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";

import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";

import { getTicket, removeUserSession, setUserSession } from "./utils/Commons";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const ticket = getTicket();
    if (!ticket) {
      return;
    }

    axios
      .get(`http://207.246.78.28:8080/alfresco/s/api/login/ticket/${ticket}`)
      .then((response) => {
        setUserSession(response.data.data.ticket, "boi");
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getTicket()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
            <small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">
              Dashboard
            </NavLink>
            <small>(Access with token only)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
