import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewAuthorAction } from "../../actions/AuthorActions";
import { showAlertAction, hideAlertAction } from "../../actions/AlertActions";

const NewAuthor = ({ history }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const loading = useSelector((state) => state.author.loading);
  const error = useSelector((state) => state.author.error);
  const alert = useSelector((state) => state.alert.alert);

  // usar dispatch para llamar actions
  const dispatch = useDispatch();

  const addAuthor = (author) => dispatch(addNewAuthorAction(author));

  const submitNewAuthor = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      const alert = {
        msg: "El campo nombre es obligatorio",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }
    dispatch(hideAlertAction());

    const author = { name: name, description: description };

    addAuthor(author);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Registrar Autor
            </h2>

            {alert ? <p className={alert.classes}> {alert.msg} </p> : null}

            <form onSubmit={submitNewAuthor}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Registrar
              </button>
            </form>

            {loading ? <p>Cargando...</p> : null}

            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAuthor;
