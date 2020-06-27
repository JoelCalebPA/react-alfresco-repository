import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

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
import BookDetails from "./component/book/BookDetails";
import Navbar from "./component/layout/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Start />
          <Navbar />
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={Books} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/book/:id" component={BookDetails} />
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
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
