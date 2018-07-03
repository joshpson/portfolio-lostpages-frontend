import React from "react";

const GoogleBook = ({ volumeInfo }) => (
  <div className="card">
    <div className="content">
      <img
        src={volumeInfo.imageLinks.smallThumbnail}
        className="right floated mini ui image"
      />
      <div className="Header">{volumeInfo.title}</div>
      <div className="meta">{volumeInfo.authors}</div>
    </div>
  </div>
);

export default GoogleBook;
