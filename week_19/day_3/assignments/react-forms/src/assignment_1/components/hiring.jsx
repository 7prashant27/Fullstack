import React from "react";

export default class HiringForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: "",
      age: 0,
      marital_status: false,
      gender: "",
      role_applying_for: "",
      data: [],
    };
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      id: this.state.data.length + 1,
      full_name: this.state.full_name,
      age: this.state.age,
      marital_status: `${this.state.marital_status}`,
      gender: this.state.gender,
      role_applying_for: this.state.role_applying_for,
    };
    console.log(payload);
    this.setState({
      data: [...this.state.data, payload],
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Full Name:
            <input
              name="full_name"
              value={this.state.full_name}
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Age:
            <input
              name="age"
              value={this.state.age}
              type="number"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Marital Status:
            <input
              name="marital_status"
              value={this.state.marital_status}
              type="checkbox"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />
            <label>Male</label>
            <br/>
            <br />
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
            <label>Female</label>
            <br />
            <br />
            <input
              type="radio"
              name="gender"
              value="NA"
              onChange={this.handleChange}
            />
            <label>Do not prefer to reveal</label>
          </label>
          <br />
          <br />
          <label>
            Role Applying for:
            <select name="role_applying_for" onChange={this.handleChange}>
              <option value="">Choose</option>
              <option value="Full_Stack_Developer">Full Stack Developer</option>
              <option value="Android_Developer">Android Developer</option>
              <option value="Front_End_Developer">Front End Developer</option>
            </select>
          </label>
          <br />
          <br />
          <input type="button" value="SUBMIT" onClick={this.handleSubmit} />
        </form>
        <br />
        <br />
        <div>
          <table style={{ border: 1 }}>
            <tbody>
              <tr>
                <td>Sr.No</td>
                <td>Full Name</td>
                <td>Age</td>
                <td>Marital Status</td>
                <td>Gender</td>
                <td>Role Applying for</td>
              </tr>
              {this.state.data.map((item) => (
                <tr key={item.id}>
                  {Object.keys(item).map((element) => (
                    <td key={item.id} >{item[element]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
