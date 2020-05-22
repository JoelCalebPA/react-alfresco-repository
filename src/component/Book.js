import React from "react";

const Book = ({ book }) => {
  return (
    <div className="col-lg-3">
      <div className="card" htmlstyle="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">
            Autor: {book.author.firstName + " " + book.author.lastName}
          </p>
          <p className="card-text">Categoria: {book.category.name}</p>
          <p className="card-text">Editorial: {book.publisher.name}</p>
          <a href="#" className="btn btn-primary">
            Detalle
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
