import React, { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import "./Book.css";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const selectedBook = useSelector((state) => state.book.selectedBook);

  const [book, setBook] = useState(selectedBook);
  const { id } = useParams();

  useEffect(() => {
    if (book == null) {
      const booki = {
        title: "fuck u boi",
        description: "b*tch",
        author: { name: "stfu b*tch" },
      };
      console.log(id);
      setBook(booki);
    }
  }, [book, id]);

  return (
    <div className="book-details-component">
      <div className="book-details-container">
        <div className="book-details-top">
          <div className="book-image">
            <img
              src={`${process.env.PUBLIC_URL}/img/lib1.jpg`}
              style={{ height: "100%" }}
              alt="boi"
            />
          </div>
          <div className="book-spec">
            {book && (
              <Fragment>
                <p>{book.title}</p>
                <p>{book.author.name}</p>
                <p>Precio: 100</p>
              </Fragment>
            )}
          </div>
        </div>
        <div className="book-details-bottom">
          <div className="book-abstract">
            {book && (
              <Fragment>
                <p>{book.description}</p>
              </Fragment>
            )}
          </div>
          <div className="book-footer">
            <p>Comentarios</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
