import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { githubRequest,pagination } from "../redux/actions";
import Style from "./index.module.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }


  handleSearch= () => {
    this.props.githubRequest({query:this.state.value, page:1, perpage:10})
  }


  handlePageSearch = (x) => {
    this.props.pagination(x)
    this.props.githubRequest({query:this.state.value, page:x, perpage:5})
  }

  render() {

    let { github_data, count } = this.props

    let totalPage = Math.ceil(count/5)

    if (!this.props.isAuth) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <div className={Style.github_searchbox}>
          <h2>Search GitHub User</h2>
          <input
            type="text"
            value={this.state.value}
            placeholder="User Name"
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <br />
        <br />
        <div>

          {this.props.isLoading ? (
            <div>Loading</div>
          ) : (
            <>

            {
              github_data &&
              github_data.map((elem) => <div>{elem.login}</div>)
            }

            {
            github_data && 
            <div style={{textAlign: "center"}}>
            {new Array(totalPage).fill(0).map((a,i)=>
            <button style={{padding:5, margin:5}}  onClick={()=>this.handlePageSearch(i+1)} key={i}>{i+1}</button>)
            }
            </div>}
            </>

          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    github_data: state.github_data,
    isLoading: state.isLoading,
    count : state.count
  };
};

const mapDispatchToProps = (dispatch) => ({
  githubRequest: (payload) => dispatch(githubRequest(payload)),
  pagination : (payload) => dispatch(pagination(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
