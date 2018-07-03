import React, { Component } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PageContainer from "./containers/PageContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "library",
      googleSearchResult: [],
      user: {
        username: null,
        books: null,
        lendings: null,
        borrowings: null,
        friends: null
      }
    };
  }

  setUser = user => {
    this.setState({
      user: {
        username: user.username,
        books: user.books,
        lendings: user.lendings,
        borrowings: user.borrowings,
        friends: user.friends
      }
    });
  };

  setPage = e => {
    this.setState({
      page: e.target.value
    });
  };

  handleSearch = query => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
    )
      .then(res => res.json())
      .then(googleResponse => {
        this.setState({
          page: "search",
          googleSearchResult: googleResponse.items
        });
      });
  };

  render() {
    return (
      <div className="ui container">
        {this.state.user.username ? (
          <div className="ui container">
            <Navbar
              setPage={this.setPage}
              username={this.state.user.username}
              handleSearch={this.handleSearch}
            />
            <PageContainer
              currentPage={this.state.page}
              user={this.state.user}
              searchResults={this.state.googleSearchResult}
            />
          </div>
        ) : (
          <Login setUser={this.setUser} />
        )}
      </div>
    );
  }
}

export default App;
