import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Discount from "./Discount";
import {
  getDiscountsAction,
  addDiscountAction,
} from "../../actions/DiscountActions";
import { showAlertAction, hideAlertAction } from "../../actions/AlertActions";

const Discounts = () => {
  const [discount, setDiscount] = useState(0);
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const authors = useSelector((state) => state.author.authors);
  const categories = useSelector((state) => state.category.categories);
  const discounts = useSelector((state) => state.discount.discounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscountsAction());
  }, [dispatch]);

  const addDiscount = (discount) => dispatch(addDiscountAction(discount));

  const submitNewDiscount = (e) => {
    e.preventDefault();

    if (discount.trim() === "") {
      const alert = {
        msg: "El campo descuento es obligatorio",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }

    // validar formulario
    if (author.trim() === "" && category.trim() === "") {
      const alert = {
        msg: "Se debe seleccionar un autor o una categoria",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }
    // si no hay errores
    dispatch(hideAlertAction());
    // crear descuento
    const myDisc = {
      disc: discount,
      author: author,
      category: category,
    };
    addDiscount(myDisc);
  };

  const alert = useSelector((state) => state.alert.alert);

  return (
    <div className="subscriptions-component">
      <div className="subscriptions-container">
        <div className="subscriptions">
          <h2 className="text-center mb-4 font-weight-bold">
            Gestion de Descuentos
          </h2>
          {alert ? <p className={alert.classes}> {alert.msg} </p> : null}
          <form onSubmit={submitNewDiscount}>
            <div className="form-group">
              <label>Descuento (%)</label>
              <input
                type="number"
                className="form-control"
                name="discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Autor</label>
              <select
                className="form-control"
                name="author"
                value={author}
                disabled={category.length}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value=""></option>
                {authors.map((a) => (
                  <option key={a.id} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Categoria</label>
              <select
                className="form-control"
                name="category"
                disabled={author.length}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=""></option>
                {categories.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
              Registrar
            </button>
          </form>
          <br />
          <h4 className="text-center">Lista de Descuentos</h4>
          <br />
          <table>
            <thead>
              <tr>
                <th>Descuento</th>
                <th>Author</th>
                <th>Categoria</th>
              </tr>
            </thead>
            <tbody>
              {discounts &&
                discounts.map((d) => <Discount key={d.id} discount={d} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
