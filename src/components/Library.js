import React from "react";
import PersonalBook from "./Book";

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.books.map(book => (
          <PersonalBook book={book} key={book.id} />
        ))}
      </div>
    );
  }
}

export default Library;
