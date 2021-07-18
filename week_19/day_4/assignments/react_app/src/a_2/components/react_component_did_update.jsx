import React from "react";

export default class Mount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "",
      id: "",
      data: null,
    };
  }
  componentDidMount() {
    let dataarray = localStorage.getItem("data");
    dataarray = JSON.parse(dataarray) || [];
    this.setState({
      data: dataarray,
      id: dataarray.length + 1,
    });
  }

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.data));
    console.log(this.state.data);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let temp = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      role: this.state.role,
    };
    console.log(temp);

    this.setState({
      data: [...this.state.data, temp],
      name: "",
      email: "",
      role: "",
      id: this.state.id + 1,
    });
  };
  render() {
    return (
      <div>
        <label>ID: {this.state.id}</label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
        </label>
        <br />
        Role:
        <select name="role" onChange={this.handleChange}>
          <option value="FullStack Developer">FullStack Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Android Developer">Android Developer</option>
        </select>
        <input type="button" value="SUBMIT" onClick={this.handleSubmit} />
      </div>
    );
  }
}
