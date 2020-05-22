import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Home from "./component/Home";

import PublicRoute from "./utils/PublicRoute";
import Books from "./component/Books";
import Admin from "./component/Admin";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">
              Inicio
            </NavLink>
            <NavLink activeClassName="active" to="/books">
              Libros
            </NavLink>
            <small>(Acceso abierto)</small>
            <NavLink activeClassName="active" to="/admin">
              Administrador
            </NavLink>
            <small>(Acceso ...)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/books" component={Books} />
              <PublicRoute path="/admin" component={Admin} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
