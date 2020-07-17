import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Login from "./component/auth/Login";
import NewAccount from "./component/auth/NewAccount";
import Books from "./component/book/Books";
import NewBook from "./component/book/NewBook";
import NewAuthor from "./component/author/NewAuthor";
import Start from "./component/layout/Start";

import PrivateRoute from "./utils/PrivateRoute";
import Subscriber from "./component/subscriber/Subscriber";
import User from "./component/user/User";
import Logout from "./component/auth/Logout";
import NewPublisher from "./component/publisher/NewPublisher";
import NewCategory from "./component/category/NewCategory";
import BookDetails from "./component/book/BookDetails";
import Navbar from "./component/layout/Navbar";
import Cart from "./component/user/Cart";
import UserOrders from "./component/user/UserOrders";
import Checkout from "./component/user/Checkout";
import Subscriptions from "./component/admin/Subscriptions";
import Sales from "./component/admin/Sales";
import Discounts from "./component/admin/Discounts";

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
              <PrivateRoute path="/cart" component={Cart} />
              <PrivateRoute path="/checkout" component={Checkout} />
              <PrivateRoute path="/logout" component={Logout} />
              <PrivateRoute path="/userOrders" component={UserOrders} />
              <PrivateRoute path="/newBook" component={NewBook} />
              <PrivateRoute path="/newAuthor" component={NewAuthor} />
              <PrivateRoute path="/newCategory" component={NewCategory} />
              <PrivateRoute path="/newPublisher" component={NewPublisher} />
              <PrivateRoute path="/subscriber" component={Subscriber} />
              <PrivateRoute path="/subscriptions" component={Subscriptions} />
              <PrivateRoute path="/report" component={Sales} />
              <PrivateRoute path="/discount" component={Discounts} />
              <PrivateRoute path="/user" component={User} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
