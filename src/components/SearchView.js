import React from "react";
import GoogleBook from "./GoogleBook";

const SearchView = props => {
  return (
    <div className="ui cards">
      {props.searchResults.map(book => (
        <GoogleBook
          book={book}
          key={book.id}
          addToLibrary={props.addToLibrary}
          history={props.history}
        />
      ))}
    </div>
  );
};

export default SearchView;
