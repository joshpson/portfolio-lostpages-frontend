import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.search);
    this.setState({
      search: ""
    });
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className="ui menu">
        {this.props.user ? (
          <Link to="/" className="header item" value="home">
            Lost Pages
          </Link>
        ) : (
          <Link to="/login" className="header item" value="library">
            Login
          </Link>
        )}

        <Link to="/library" className="item" value="library">
          Library
        </Link>
        <Link to="/friends" className="item" value="friends">
          Friends
        </Link>

        <div className="right menu">
          <div className="item">
            <form
              className="ui transparent icon input"
              onSubmit={this.handleSubmit}
            >
              <input
                type="text"
                placeholder="Find a book..."
                value={this.state.search}
                onChange={this.handleChange}
              />
              <i className="search link icon" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
