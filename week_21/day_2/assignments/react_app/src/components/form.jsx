import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Document from "./document";
import { AppContext } from "../context/ContextProvider";

class From extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.context.form_display ? (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <iframe
                src={this.context.form_link + "/viewform?embedded=true"}
                width="640"
                height="1000"
                frameBorder="2"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
            <div className="col">
              <button
                className="btn btn-warning"
                onClick={this.context.gotoDocumnetCreation}
              >
                Go to Documents 
              </button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <Document />
    );
  }
}

export default From;

From.contextType = AppContext;
