import React from "react";

const PersonalBook = ({ book }) => (
  <div className="card">
    <div className="content">
      <img src={book.cover_img} className="right floated mini ui image" />
      <div className="Header">{book.name}</div>
      <div className="meta">{book.author}</div>
      <div className="description">This should be a description!</div>
    </div>
  </div>
);

export default PersonalBook;
