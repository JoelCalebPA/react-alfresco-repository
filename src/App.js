import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./component/auth/Login";
import NewAccount from "./component/auth/NewAccount";
import Books from "./component/book/Books";
import NewBook from "./component/book/NewBook";
import NewAuthor from "./component/author/NewAuthor";
import Start from "./component/layout/Start";

import { getUser, isSubscriber, isAdmin } from "./utils/Commons";
import PrivateRoute from "./utils/PrivateRoute";
import Subscriber from "./component/subscriber/Subscriber";
import User from "./component/user/User";
import Logout from "./component/auth/Logout";
import NewPublisher from "./component/publisher/NewPublisher";
import NewCategory from "./component/category/NewCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Start />
          <div>
            <div className="header">
              <NavLink exact activeClassName="active" to="/">
                <img alt="" src="img/logo.png" height="65px" />
                Inicio
              </NavLink>
              {getUser() ? (
                <Fragment>
                  {isAdmin() ? (
                    <Fragment>
                      <NavLink activeClassName="active" to="/newBook">
                        Registrar Libro
                      </NavLink>
                      <NavLink activeClassName="active" to="/newAuthor">
                        Registrar Autor
                      </NavLink>
                      <NavLink activeClassName="active" to="/newCategory">
                        Registrar Categoria
                      </NavLink>
                      <NavLink activeClassName="active" to="/newPublisher">
                        Registrar Editorial
                      </NavLink>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <NavLink activeClassName="active" to="/user">
                        Cuenta
                      </NavLink>
                      {isSubscriber() ? (
                        <NavLink activeClassName="active" to="/subscriber">
                          Suscriptor
                        </NavLink>
                      ) : (
                        <div></div>
                      )}
                    </Fragment>
                  )}

                  <NavLink activeClassName="active" to="/logout">
                    Logout
                  </NavLink>
                </Fragment>
              ) : (
                <Fragment>
                  <NavLink activeClassName="active" className="nav-item" to="/login">
                    Login
                  </NavLink>
                  <NavLink activeClassName="active" className="nav-item" to="/newAccount">
                    Registrarse
                  </NavLink>
                </Fragment>
              )}
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Books} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/newAccount" component={NewAccount} />
                <PrivateRoute path="/logout" component={Logout} />
                <PrivateRoute path="/newBook" component={NewBook} />
                <PrivateRoute path="/newAuthor" component={NewAuthor} />
                <PrivateRoute path="/newCategory" component={NewCategory} />
                <PrivateRoute path="/newPublisher" component={NewPublisher} />
                <PrivateRoute path="/subscriber" component={Subscriber} />
                <PrivateRoute path="/user" component={User} />
              </Switch>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
