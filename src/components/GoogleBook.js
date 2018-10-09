import React from "react";

const GoogleBook = props => (
  <div className="card">
    <div className="content">
      <img src={props.book.image} className="right mini floated ui image" />
      <div className="header">{props.book.title}</div>
      <div className="meta">{props.book.author}</div>
    </div>
    <div
      className="ui bottom attached button"
      onClick={() => {
        props.addToLibrary(props.book);
        props.history.push("/library");
      }}
    >
      Add to Library
    </div>
  </div>
);

export default GoogleBook;
