import React, { Fragment } from "react";
import { getUser, isAdmin, isSubscriber } from "../../utils/Commons";
import { Link } from "react-router-dom";
import "./Layout.css";

const Navbar = () => {
  return (
    <nav className="layout-navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {getUser() ? (
          <Fragment>
            {isAdmin() ? (
              <Fragment>
                <li>
                  <Link to="/newBook">Registrar Libro</Link>
                </li>
                <li>
                  <Link to="/newAuthor">Registrar Autor</Link>
                </li>
                <li>
                  <Link to="/newCategory">Registrar Categoria</Link>
                </li>
                <li>
                  <Link to="/newPublisher">Registrar Editorial</Link>
                </li>
                <li>
                  <Link to="/subscriptions">Suscriptores</Link>
                </li>
                <li>
                  <Link to="/report">Ventas</Link>
                </li>
                <li>
                  <Link to="/discount">Descuentos</Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link to="/user">Cuenta</Link>
                </li>
                <li>
                  <Link to="/userOrders">Pedidos</Link>
                </li>
                {isSubscriber() && (
                  <li>
                    <Link to="/subscriber">Suscriptor</Link>
                  </li>
                )}
              </Fragment>
            )}
            <li className="navbar-item-right">
              <Link to="/logout">
                <i className="material-icons">logout</i>
              </Link>
            </li>
            <li className="navbar-item-right">
              <Link to="/cart">
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
            <li className="navbar-item-right">
              <Link to="#">{getUser()}</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li className="navbar-item-right">
              <Link to="/newAccount">Registrarse</Link>
            </li>
            <li className="navbar-item-right">
              <Link to="/login">Login</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
