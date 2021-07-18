import React from "react";
import { profileRequest } from "../redux/actions";
import { connect } from "react-redux";
import Style from "./index.module.css";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("hello");
    let { current_user, token, profileRequest } = this.props;

    let payload = {
      username: current_user,
      token,
    };
    profileRequest(payload);
  }

  render() {
    let { user_data, isLoading } = this.props;
    if(!this.props.isAuth){
        return <Redirect to="/login" />
    }
    return (
      <div>

        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <p>Name : {user_data.name}</p>
            <p>Email : {user_data.email}</p>
            <p>Username : {user_data.username}</p>
            <p>Mobile : {user_data.mobile}</p>
            <p>description : {user_data.description}</p>
          </>
        )}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.current_user,
    isLoading: state.isLoading,
    token: state.token,
    user_data: state.user_data,
    isAuth:state.isAuth
  };
};

const mapDispatchToProps = (dispatch) => ({
  profileRequest: (payload) => dispatch(profileRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
