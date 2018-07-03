import React from "react";

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
    e.target.reset();
  };

  render() {
    return (
      <div className="ui secondary pointing menu">
        <span className="item">{this.props.username}</span>
        <button className="item" value="library" onClick={this.props.setPage}>
          Library
        </button>
        <button className="item" value="friends" onClick={this.props.setPage}>
          Friends
        </button>
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
