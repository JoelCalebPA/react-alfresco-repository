import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../utils/Commons";

const Admin = ({ history }) => {
  const title = useFormInput("");
  const author = useFormInput("");
  const category = useFormInput("");
  const publisher = useFormInput("");
  const publicationDate = useFormInput("");
  const isbn = useFormInput("");
  const active = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSaveBook = () => {
    setUserSession("boi", "iob");
    let headers = {
      "Content-Type": "application/json",
    };
    setError(null);
    setLoading(true);
    axios
      .post(
        "http://144.202.41.61:8080/library/api/book/save",
        {
          title: title.value,
          author: { id: author.value },
          category: { id: category.value },
          publisher: { id: publisher.value },
          publicationDate: publicationDate.value,
          isbn: isbn.value,
          active: active.value,
        },
        headers
      )
      .then((response) => {
        setLoading(false);
        history.push("/books");
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      Registrar Libro
      <br />
      <br />
      <form className="my-form">
        <div className="form-group row">
          <label htmlFor="title">Título</label>
          <input
            className="form-control mx-sm-3"
            id="title"
            type="text"
            {...title}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="author">Autor</label>
          <input
            className="form-control mx-sm-3"
            id="author"
            type="text"
            {...author}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="category">Categoria</label>
          <input
            className="form-control mx-sm-3"
            id="category"
            type="text"
            {...category}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="publisher">Editorial</label>
          <input
            className="form-control mx-sm-3"
            id="publisher"
            type="text"
            {...publisher}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="publicationDate">Fecha Publicación</label>
          <input
            className="form-control mx-sm-3"
            id="publicationDate"
            type="text"
            {...publicationDate}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="isbn">ISBN</label>
          <input
            className="form-control mx-sm-3"
            id="isbn"
            type="text"
            {...isbn}
          />
        </div>
      </form>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <input
        className="btn btn-primary mb-2"
        type="button"
        value={loading ? "Loading..." : "Registrar"}
        onClick={handleSaveBook}
        disabled={loading}
      />
      <br />
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
};

export default Admin;
