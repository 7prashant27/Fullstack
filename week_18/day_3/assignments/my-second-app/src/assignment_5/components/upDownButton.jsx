import React from "react"

class ChangeButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        }
    }

    handleAdd=()=>{
      this.setState({value:this.state.value + 1})
    }

    handleReduce=()=>{
        this.setState({value:this.state.value - 1})
    }


    render(){
        return(
            <>
                 <div>Value is : {this.state.value}</div>
                 <button onClick={this.handleAdd}>ADD</button>
                 <button onClick={this.handleReduce}>REDUCE</button>
            </>
        )
    }
}

export default ChangeButton