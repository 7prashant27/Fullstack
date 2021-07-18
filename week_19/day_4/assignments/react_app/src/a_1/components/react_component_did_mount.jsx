import React from "react";

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      isloading: false,
      data: [],
    };
     console.log("constructor Loaded")
  }

  componentDidMount() {
        console.log("componentDidMount")
        this.fetchData()
    
  }

   fetchData = () => {
      this.setState({
          isloading:true
      })
      
      fetch("https://api.github.com/users/" + this.state.user)
      .then((response) => response.json())
      .then((response) => {
  
        const payload = [
          response.avatar_url,
          response.name,
          response.repos_url,
          response.bio,
        ];
  
        this.setState({
            isloading: false,
            user: "",
          data: payload,
        });
      })
      .catch((response) => console.log(response))
     
  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  

  render() {
    console.log("render is called")
    return (
      <div>
            <label style={{margin: "10px"}}>User Name :
            <input name="user" type="text" value={this.state.user} onChange={this.handleChange} />
            <button style={{marginLeft: "10px"}} onClick={this.fetchData}>Search</button>
            </label>
            <br/>
            <hr/>
            <br/>


        {this.state.isloading ? (
            <p>Data loading</p>
         
        ) : (
            <div>
            <img src={this.state.data[0]} alt="profile"></img>
            <p>Name: {this.state.data[1]}</p>
            <label>Repos Url</label>
            <a href={this.state.data[2]}>{this.state.data[2]}</a>
            <p>Bio: {this.state.data[3]}</p>

            
        
          </div>
        )}
      </div>
    );
  }



  componentDidUpdate(){
      console.log("componentDidUpdate")
  }

}

export default Fetch;
