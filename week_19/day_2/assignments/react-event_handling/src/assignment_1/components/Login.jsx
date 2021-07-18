import React from "react";

const user = "masai";
const userpass = "masai";
export default class LoginComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isAuth: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    if (!this.state.isAuth) {
      const { name, password } = this.state;
      if (name === user && password === userpass) {
        alert("LOGIN SUCCESSFUL");
        this.setState({
          isAuth: true,
        });
      } else {
        alert("Invalid credentials");
      }
    } else {
      this.setState({
        isAuth: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <label>Name:
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        </label>
        <br />
        <label>Password:
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        </label>
        <br />
        <button onClick={this.handleSubmit}>
          {this.state.isAuth ? "Sign Out" : "Sign In"}
        </button>
      </div>
    );
  }
}
