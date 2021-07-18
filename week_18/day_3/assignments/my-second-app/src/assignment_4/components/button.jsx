import React from "react"

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={

            value:"MASAI"

        }
    }

    handleClick=()=>{ 

    this.setState({value:"MASAI SCHOOL"})

   }

    render(){
        return(
            <div>
                <div>{this.state.value}</div>
                <button onClick={this.handleClick}>{this.props.label}</button>
            </div>
            
        )
    }

}


export default Button