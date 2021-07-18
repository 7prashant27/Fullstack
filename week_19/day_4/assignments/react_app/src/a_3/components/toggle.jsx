import React from "react"

import CountDown from "./react_component_will_unmount.jsx"


export default class AppCountDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    toggle = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render(){
        return (
            
            <div>
                {this.state.show && <CountDown />}
                
                <button onClick={this.toggle}> {this.state.show ? "Hide" : "Show"}</button>
            </div>
        )
    }
}