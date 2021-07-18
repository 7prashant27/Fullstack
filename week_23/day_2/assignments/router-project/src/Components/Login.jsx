import React from "react"
import { AppContext } from "../Context/AppContextProvider";

export default class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
      };
    }


    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    render() {
        const {email,password} = this.state
        return (
    
          <div>
            <form>
            <label>UserName:</label>
              <input
                name="email"
                type = "text"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label>Password:</label>
              <input
                name="password"
                type = "text"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input type="button" value="SUBMIT" onClick={() => this.context.authUser(email,password)}/>
            </form>
          </div>
        );
      }
    }
    
    Login.contextType = AppContext;