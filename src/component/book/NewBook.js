import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewBookAction } from "../../actions/BookActions";
import { showAlertAction, hideAlertAction } from "../../actions/AlertActions";

const NewBook = () => {
  // state del componente
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState({});
  const [category, setCategory] = useState({});
  const [publisher, setPublisher] = useState({});
  const [publicationDate, setPublicationDate] = useState("");
  const [isbn, setIsbn] = useState("");

  // usar dispatch para llamar actions
  const dispatch = useDispatch();
  // llamar el dispatch de agregar libro
  const addBook = (book) => dispatch(addNewBookAction(book));

  const submitNewBook = (e) => {
    e.preventDefault();

    // validar formulario
    if (title.trim() === "") {
      const alert = {
        msg: "El campo titulo es obligatorio",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlertAction(alert));
      return;
    }
    // si no hay errores
    dispatch(hideAlertAction());
    // crear libro
    const book = {
      title: title,
      author: { id: author, name: "" },
      category: { id: category, name: "" },
      publisher: { id: publisher, name: "" },
      publicationDate: publicationDate,
      isbn: isbn,
    };
    addBook(book);
  };

  // llenar combos de autores, categorias y editoriales
  const authors = useSelector((state) => state.author.authors);
  const categories = useSelector((state) => state.category.categories);
  const publishers = useSelector((state) => state.publisher.publishers);

  const error = useSelector((state) => state.book.error);
  const loading = useSelector((state) => state.book.loading);

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Libro
            </h2>

            {alert ? <p className={alert.classes}> {alert.msg} </p> : null}

            <form onSubmit={submitNewBook}>
              <div className="form-group">
                <label>Título Libro</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Autor</label>
                <select
                  className="form-control"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                  <option value=""></option>
                  {authors.map((a) => (
                    <option key={a.id} value={a.id}>
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=""></option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Editorial</label>
                <select
                  className="form-control"
                  name="publisher"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                >
                  <option value=""></option>
                  {publishers.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Fecha Publicación</label>
                <input
                  type="date"
                  className="form-control"
                  name="publicationDate"
                  value={publicationDate}
                  onChange={(e) => setPublicationDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>ISBN</label>
                <input
                  type="text"
                  className="form-control"
                  name="isbn"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Registrar
              </button>
            </form>

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

export default NewBook;
