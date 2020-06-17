import React from "react";

const Book = ({ book }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author.name}</td>
      <td>{book.category.name}</td>
      <td>{book.publisher.name}</td>
      <td>{book.publicationDate}</td>
      <td>{book.isbn}</td>
    </tr>
  );
};

export default Book;
