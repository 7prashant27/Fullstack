import React from "react";

let trackId = 1

export default class HiringForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: "",
      email: "",
      data: [],
    };
  }

  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
     id: trackId ,
     user_name: this.state.user_name,
     email: this.state.email,
    };
    console.log(payload);
    this.setState({
      data: [...this.state.data, payload],
    });
    trackId++
  };

  removeElement = (eventID,event) => {
        let id = Number(eventID)
        this.setState({
            data: this.state.data.filter(item => item.id !== id)
        })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            User Name:
            <input
              name="user_name"
              value={this.state.user_name}
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              value={this.state.email}
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="button" value="SUBMIT" onClick={this.handleSubmit} />
        </form>

        <div>
          <table style={{ border: 1 }}>
            <thead>
            <tr>
                <td>Sr.No</td>
                <td>User Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) => (
                <tr key={item.id}>
                    
                  {Object.keys(item).map((element,index) => (
                    <td key={index+1}>{item[element]}</td>
                  ))}
                  <button onClick = {(e) => this.removeElement(item.id,e)}>Remove</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
