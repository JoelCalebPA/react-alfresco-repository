import React, { Fragment } from "react";
import { getUser, isAdmin, isSubscriber } from "../../utils/Commons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Shopping
        </Link>

        <ul className="right">
          <li>
            <NavLink activeClassName="active" to="/">
              Inicio
            </NavLink>
          </li>
          {getUser() ? (
            <Fragment>
              {isAdmin() ? (
                <Fragment>
                  <li>
                    <NavLink activeClassName="active" to="/newBook">
                      Registrar Libro
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/newAuthor">
                      Registrar Autor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/newCategory">
                      Registrar Categoria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/newPublisher">
                      Registrar Editorial
                    </NavLink>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li>
                    <NavLink activeClassName="active" to="/user">
                      Cuenta
                    </NavLink>
                  </li>
                  {isSubscriber() && (
                    <li>
                      <NavLink activeClassName="active" to="/subscriber">
                        Suscriptor
                      </NavLink>
                    </li>
                  )}
                </Fragment>
              )}
              <li>
                <NavLink activeClassName="active" to="/logout">
                  <i className="material-icons">logout</i>
                </NavLink>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <NavLink activeClassName="active" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/newAccount">
                  Registrarse
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
