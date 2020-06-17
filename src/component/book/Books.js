import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

const Books = () => {
  const books = useSelector((state) => state.book.books);
  const error = useSelector((state) => state.book.error);
  const loading = useSelector((state) => state.book.loading);

  const [author, setAuthor] = useState("");

  const filteredElements = books
    .filter((b) =>
      b.author.name.toLocaleLowerCase().includes(author.toLocaleLowerCase())
    )
    .map((b) => <Book key={b.id} book={b} />);

  return (
    <Fragment>
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto my-1">
            <div className="form-name">
              <label htmlFor="author">Filtrar por Autor</label>
              <input
                className="form-control"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>

      <h2 className="text-center my-5">Lista de Libros</h2>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}

      {loading ? <p className="text-center">Cargando....</p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Categoria</th>
            <th scope="col">Editorial</th>
            <th scope="col">Fecha Publicación</th>
            <th scope="col">ISBN</th>
          </tr>
        </thead>
        <tbody>{filteredElements}</tbody>
      </table>
    </Fragment>
  );
};

export default Books;
