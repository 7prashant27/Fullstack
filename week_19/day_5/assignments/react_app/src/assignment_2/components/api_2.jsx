// dependencies

import React from "react";
import axios from "axios";

//components

import Toggle from "./toggle";
import AwesomeComponent from "./spinner";

// CSS

import Styles from "./github_user_search.module.css";

export default class API extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      data: [],
      isLoading: false,
      loading_src: "",
      load_text: "",
    };
  }

  // for handelling inputs

  handleChange = (e) => {
    this.setState({
      q: e.target.value,
    });
  };

  // for handelling submit and makeing xhr request

  handleSubmit = async () => {
    this.setState({
      isLoading: true,
    });
    this.load(true);

    await axios
      .get("https://api.github.com/search/users?q=" + this.state.q)
      .then((res) => {
        console.log(res.data)
        this.setState({
          data: res.data.items,
        });
      })
      .catch((error) => console.log(error));

    this.setState({
      isLoading: false,
    });
    this.load(false);
  };

  load = (flag) => {
    console.log(flag);
    if (flag) {
      let count_for_loading_img = 0;
      let src_arr = ["loading_1.png", "loading_2.png", "loading_3.png"];
      let count_for_loding_text = 0;
      let loading_arr = [
        "l",
        "lo",
        "loa",
        "load",
        "loadi",
        "loadin",
        "loading",
        "loading.",
        "loading..",
        "loading...",
        "loading....",
        "loading....",
      ];

      this.timerId = setInterval(() => {
        count_for_loding_text++;
        if (count_for_loding_text > 11) {
          count_for_loding_text = 0;
        }

        this.setState({
          load_text: loading_arr[count_for_loding_text],
        });
      }, 30);

      this.timerId = setInterval(() => {
        count_for_loading_img++;
        if (count_for_loading_img > 2) {
          count_for_loading_img = 0;
        }
        this.setState({
          loading_src: src_arr[count_for_loading_img],
        });
      }, 100);
    } else {
      clearInterval(this.timerId);
    }
  };

  render() {
    return (
      <div className={Styles.main_container}>
        {/* Search Area */}

        <div className={Styles.search_div}>
          <label>
            User Name:
            <input type="text" onChange={this.handleChange}></input>
            <button type="submit" onClick={this.handleSubmit}>
              Search
            </button>
          </label>
        </div>

        {/* end */}

        {/* display area starts */}

        <div className={Styles.search_result_div}>
          {/* if loading */}
          {this.state.isLoading ? (
            <div>
              <p>{this.state.load_text}</p>
              <img
                src={this.state.loading_src}
                style={{ width: "100px", height: "100px" }}
              ></img>
              {/* {this.state.isLoading && <AwesomeComponent/> } */}
            </div>
            
          ) : this.state.data.length == 0 ? (
            // if no data found

            <div>
              <p>No Data to Display</p>
            </div>

          ) : (
            // to display data

            this.state.data.map((elem) => (
              <>
              <div className={Styles.user_card}>
                <div className={Styles.img_div}>
                  <img
                    className={Styles.user_img}
                    src={elem.avatar_url}
                    alt="pic"
                  ></img>
                </div>
                <div className={Styles.contant_div}>
                  <h4>Name:{elem.login}</h4>
                  <label>Link To Profile</label>
                  <br />
                  <a href={elem.html_url}>{elem.html_url}</a>
                  <p>ID:{elem.id}</p><br />
                 
                </div>

                <Toggle
                    followers_url={elem.followers_url}
                    following_url={elem.following_url.split("{")[0]}
                  />
              </div>
              </>
            ))
          )}
        </div>

        {/* end */}
      </div>
    );
  }
}
