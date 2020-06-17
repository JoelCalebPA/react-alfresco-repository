import React, { useState, useEffect } from "react";
import Book from "./Book";
import axios from "axios";
import { setUserSession } from "../utils/Commons";

const Catalog = ({ history }) => {
  const author = useFormInput("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (books.length === 0) {
      axios.get("http://localhost:8080/api/book/findAll").then((response) => {
        setBooks(response.data);
      });
    }
  });

  const getBooksByAuthor = () => {
    setUserSession("boi", "iob");
    setLoading(true);
    axios
      .get("http://localhost:8080/api/book/findByAuthor/" + author.value)
      .then((response) => {
        setLoading(false);
        setBooks(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong. Please try again later.");
        axios.get("http://localhost:8080/api/book/findAll").then((response) => {
          setBooks(response.data);
        });
      });
  };

  return (
    <div>
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto my-1">
            <input
              className="form-control"
              type="text"
              {...author}
              autoComplete="new-password"
            />
          </div>
          <div className="col-auto my-1">
            <button
              className="btn btn-primary"
              onClick={getBooksByAuthor}
              disabled={loading}
            >
              Buscar por autor
            </button>
          </div>
        </div>
      </form>
      <br />
      <div className="container">
        <div className="row justify-content-md">
          {books.map((b) => (
            <Book key={b.id} book={b} />
          ))}
        </div>
      </div>
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

export default Catalog;
