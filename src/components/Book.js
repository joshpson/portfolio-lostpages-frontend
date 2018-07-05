import React from "react";

const PersonalBook = ({ book }) => (
  <div className="card">
    <div className="content">
      <img src={book.image} className="right floated ui image" />
      <div className="header">{book.title}</div>
      <div className="meta">{book.author}</div>
    </div>
  </div>
);

export default PersonalBook;
