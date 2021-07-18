import React from "react";

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: 0,
      timer: false
    };
  }


  componentDidMount(){

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){
    clearInterval(this.timerId)
    alert("component unmounted")
  }



  handleSubmit = (e) => {
    e.preventDefault();

    this.timerId = setInterval(() => {
        if(this.state.count === 0){
            clearInterval(this.timerId)
            alert("CountDown Has Ended")
        }
        else{this.setState({
            count: this.state.count-1
        })}
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      count: e.target.value,
      time: e.target.value
    });
  };

  render() {
    return (
      <>
        <label>
          Time in Seconds
          <input
            type="number"
            value={this.state.time}
            name="time"
            onChange={this.handleChange}
          />
        </label>

        <input type="button" value="SUBMIT" onClick={this.handleSubmit} />

    <h2>Seconds Left : {this.state.count}</h2>
      </>
    );
  }
}
