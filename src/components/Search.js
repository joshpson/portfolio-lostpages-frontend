import React from "react";
import GoogleBook from "./GoogleBook";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.searchResult);
    return (
      <div className="ui cards">
        {this.props.searchResult.map(book => (
          <GoogleBook volumeInfo={book.volumeInfo} />
        ))}
      </div>
    );
  }
}

export default Search;
