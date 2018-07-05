import React from "react";

const GoogleApiParser = response => {
  return response.items.map(item => {
    const defaults = {
      title: "N/A",
      authors: ["N/A"],
      imageLinks: {
        smallThumbnail: "http://via.placeholder.com/128x185"
      }
    };
    const safeBook = {
      ...defaults,
      ...item.volumeInfo
    };
    return {
      id: item.id,
      title: safeBook.title,
      image: safeBook.imageLinks.smallThumbnail,
      author: safeBook.authors.join(", ")
    };
  });
};

export default GoogleApiParser;
