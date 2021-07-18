import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/MoonLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={100}
          color={"#000000"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}




export default AwesomeComponent