import React from "react";

class Login extends React.Component {
  login = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users/1")
      .then(res => res.json())
      .then(user => {
        this.props.setUser(user);
        this.props.history.push("/library");
      });
  };

  render() {
    return (
      <div className="ui raised container segment">
        <form className="ui form" onSubmit={this.login}>
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username..." />
          </div>
          <button className="ui button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
