import React, { useState } from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import "./Book.css";
import AutoSuggest from "../utils/AutoSuggest";

const Books = () => {
  const books = useSelector((state) => state.book.books);
  const error = useSelector((state) => state.book.error);
  const loading = useSelector((state) => state.book.loading);

  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const filteredElements = books
    .filter((b) =>
      b.author.name.toLocaleLowerCase().includes(author.toLocaleLowerCase())
    )
    .map((b) => <Book key={b.id} book={b} />);

  const authors = useSelector((state) => state.author.authors);
  const categories = useSelector((state) => state.category.categories);

  return (
    <div className="books-component">
      <div className="books-filter">
        <div className="col-auto my-1">
          <div className="form-name">
            <label htmlFor="author">Filtrar por Autor</label>
            <AutoSuggest array={authors} value={author} setValue={setAuthor} />
          </div>
          <br />
          <div className="form-name">
            <label htmlFor="category">Filtrar por Categoría</label>
            <AutoSuggest array={categories} value={category} setValue={setCategory} />
          </div>
        </div>
      </div>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}

      {loading ? <p className="text-center">Cargando....</p> : null}

      <div className="books-container">{filteredElements}</div>
    </div>
  );
};

export default Books;
