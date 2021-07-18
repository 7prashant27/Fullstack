import React from "react";
import axios from "axios";
export default class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      data: []
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      q: e.target.value
    });
  };

  handleSubmit = () => {
    axios
      .get("https://api.github.com/search/users?q=" + this.state.q)
      .then((res) => {
        console.log(res.data.items);
        this.setState({
          data: res.data.items
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="enter github username"
          onChange={this.handleChange}
        ></input>
        <br />
        <br />
        <button type="submit" onClick={this.handleSubmit}>
          Search
        </button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {this.state.data.map((elem) => (
            <div style={{ display: "flex", border: "1px solid black" }}>
              <div>
                <img
                  src={elem.avatar_url}
                  height="150px"
                  width="150px"
                  alt="pic"
                  style={{
                    borderRadius: "50%",
                    padding: "4px",
                    border: "1px dashed blue",
                    margin: "4px"
                  }}
                ></img>
              </div>
              <div>
                <h4>{elem.login}</h4>
                <a href={elem.html_url}>{elem.html_url}</a>
                <p>{elem.id}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
