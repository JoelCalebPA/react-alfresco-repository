import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Book.css";
import { useParams, useHistory } from "react-router-dom";
import { getBookAction } from "../../actions/BookActions";
import {
  getRatingAction,
  addNewRatingAction,
} from "../../actions/RatingActions";
import Rating from "./Rating";
import { getToken } from "../../utils/Commons";
import { addItemToCartAction } from "../../actions/CartAction";

const BookDetails = () => {
  const selectedBook = useSelector((state) => state.book.selectedBook);
  const user = useSelector((state) => state.user.user);
  const ratings = useSelector((state) => state.rating.comments);

  const [comment, setComment] = useState("");
  const { id } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedBook == null) {
      dispatch(getBookAction(id));
    }
    dispatch(getRatingAction(id));
  }, [id, dispatch, selectedBook, ratings]);

  const addNewRating = (rating) => dispatch(addNewRatingAction(rating));

  const addRating = () => {
    const rating = {
      book: id,
      client: user.client.id,
      clientName: user.client.name,
      comment: comment,
    };
    addNewRating(rating);
  };

  const addItemToCart = (item) => dispatch(addItemToCartAction(item));

  const addToCart = () => {
    const item = {
      bookId: selectedBook.id,
      quantity: 1,
      token: getToken(),
    };
    addItemToCart(item);
    history.push("/cart");
  };

  return (
    <div className="book-details-component">
      <div className="book-details-container">
        <div className="book-details-top">
          <div className="book-image">
            {selectedBook && (
              <img
                src={`${process.env.PUBLIC_URL}/img/libros/${selectedBook.isbn}.jpg`}
                style={{ height: "400px" }}
                alt="boi"
              />
            )}
          </div>
          <div className="book-spec">
            <h4>
              <p>Datos </p>
            </h4>
            {selectedBook && (
              <Fragment>
                <p>Título: {selectedBook.title}</p>
                <p>Author: {selectedBook.author.name}</p>
                <p>Precio: S/ {selectedBook.price}</p>
              </Fragment>
            )}
            {getToken() && (
              <button onClick={addToCart}>Agregar al Carrito</button>
            )}
          </div>
        </div>
        <div className="book-details-bottom">
          <div className="book-abstract">
            <h4>Introducción</h4>
            {selectedBook && (
              <Fragment>
                <p>{selectedBook.description}</p>
              </Fragment>
            )}
          </div>

          <div className="book-ratings">
            <h4>Comentarios</h4>
            {ratings ? (
              ratings.map((r) => <Rating key={r.id} rating={r} />)
            ) : (
              <div>No hay Comentarios</div>
            )}
          </div>
          {getToken() && (
            <div className="insert-rating">
              <input
                type="textarea"
                name="comment"
                value={comment}
                maxLength="255"
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={addRating}>Comentar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
