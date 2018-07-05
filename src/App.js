import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import GoogleApiParser from "./GoogleApiParser";
import Library from "./components/Library";
import Friends from "./components/Friends";
import SearchView from "./components/SearchView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleSearchResult: [],
      books: [],
      friends: [],
      user: null
    };
  }

  setUser = user => {
    this.setState({
      user: user,
      books: user.books,
      friends: user.friends
    });
  };

  postBook = book => {
    delete book["id"];
    book["user_id"] = this.state.user.id;
    fetch(`http://localhost:3000/api/v1/books`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
      .then(res => res.json())
      .then(json =>
        this.setState({
          books: [...this.state.books, json]
        })
      );
  };

  handleSearch = query => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
    )
      .then(res => res.json())
      .then(googleResponse => {
        this.setState({
          googleSearchResult: GoogleApiParser(googleResponse)
        });
      });
  };

  render() {
    return (
      <div className="ui container">
        <Route
          render={props => {
            return (
              <Navbar
                user={this.state.user}
                handleSearch={this.handleSearch}
                history={props.history}
              />
            );
          }}
        />
        <Switch>
          <Route
            path="/login"
            render={props => {
              return <Login setUser={this.setUser} history={props.history} />;
            }}
          />
          <Route
            path="/library"
            render={props => {
              return <Library books={this.state.books} />;
            }}
          />
          <Route
            path="/friends"
            render={props => {
              return <Friends friends={this.state.friends} />;
            }}
          />
          <Route
            path="/search"
            render={props => {
              return (
                <SearchView
                  searchResults={this.state.googleSearchResult}
                  addToLibrary={this.postBook}
                  history={props.history}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
