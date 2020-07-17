import React from "react";
import "./Book.css";
import { selectBookAction } from "../../actions/BookActions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Book = ({ book }) => {
  /*<tr>
      <td>{book.title}</td>
      <td>{book.author.name}</td>
      <td>{book.category.name}</td>
      <td>{book.publisher.name}</td>
      <td>{book.publicationDate}</td>
      <td>{book.isbn}</td>
    </tr>*/

  const history = useHistory();
  const dispatch = useDispatch();

  const redirectDetails = (book) => {
    dispatch(selectBookAction(book));
    history.push(`/book/${book.id}`);
  };

  return (
    <div className="books-card">
      <img
        src={`${process.env.PUBLIC_URL}/img/libros/${book.isbn}.jpg`}
        style={{ width: "100%", height: "300px" }}
        alt="boi"
      />
      <div className="container">
        <p className="card-title">
          <b>{book.title}</b>
        </p>
        <p className="card-description">{book.author.name}</p>
        <p>
          <button onClick={() => redirectDetails(book)}>Detalles</button>
        </p>
      </div>
    </div>
  );
};

export default Book;
