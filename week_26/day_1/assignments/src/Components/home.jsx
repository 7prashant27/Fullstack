import React from "react";
import {TextField ,Fab} from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  
  handleSubmit = () => {
    console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(event) => this.setState({value:event.target.value})}/>
          <Fab color="primary" aria-label="add" onClick={this.handleSubmit}>
            <AddIcon />
        </Fab>
        </form>
      </div>
    );
  }
}