import React from "react"

import CreateList from "./create_list"


class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            item: "",
            tasks: [],
            list: []
        }
    }


    handleInput = (e) => {
        const {value} = e.target
        this.setState({item : value})
    }

    handleAdd = () => {
        console.log(this.state.item)
        this.state.tasks.push(this.state.item);
        this.setState({list : <CreateList data = {this.state.tasks} /> })
    }

    render(){
        return (
        <div>
            <label> ToDo Item:
                <input 
                    value={this.state.item}
                    onChange={this.handleInput} 
                />
            </label>
            <button onClick={this.handleAdd}>Add</button>
            <br/>
            <div>
                <h1>To Do List</h1>
                <>
                    {this.state.list}
                </>
            </div>

        </div>
    
    )
}
}


export default ToDo