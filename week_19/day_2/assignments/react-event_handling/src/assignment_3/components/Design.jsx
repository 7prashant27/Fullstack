import React from "react";
const data = [
  {
    name: "Agnes",
    dob: "10th December, 1992",
  },
  {
    name: "Mridul",
    dob: "9th Jan, 1991",
  },
  {
    name: "Pranav",
    dob: "27th October, 1992",
  },
];
export default class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentname: "",
      currentdob: "",
    };
  }
  handleCard = (Clickedname, e) => {
    const name = e.target.textContent;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === name) {
        this.setState({
          currentname: data[i].name,
          currentdob: data[i].dob,
        });
      }
    }
  };
  render() {
    return (
      <div>
        <div>
          {data.map((elem) => {
            if (this.state.currentname == elem.name) {
              return (
                <button
                  style={{ background: "green" }}
                  key={elem.name}
                  onClick={(e) => this.handleCard(elem.name, e)}
                >
                  {elem.name}
                </button>
              );
            } else {
              return (
                <button
                  key={elem.name}
                  onClick={(e) => this.handleCard(elem.name, e)}
                >
                  {elem.name}
                </button>
              );
            }
          })}
        </div>

        <div>
          <p>{this.state.currentname}</p>
          <p>{this.state.currentdob}</p>
        </div>
      </div>
    );
  }
}
