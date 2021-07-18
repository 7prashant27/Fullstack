import React from "react";

export default class Mount extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            role:'',
            id:'',
        }
    }


    componentDidMount() {
       let dataObject = localStorage.getItem('data')
       dataObject = JSON.parse(dataObject) || {}

        dataObject ? 

       this.setState({
        id: "",
        name : "",
        email:'',
        role:'',


    }) : this.setState({
        id: dataObject.id,
        name : dataObject.name,
        email: dataObject.email,
        role: dataObject.role,

      })
    }


      componentDidUpdate() {
        let temp={
            id: this.state.id,
            name :this.state.name,
            email:this.state.email,
            role:this.state.role
        }
       localStorage.setItem('data',JSON.stringify(temp))
       console.log(this.state.data)
      }


      handleChange =(e)=>{
          this.setState({
              [e.target.name]:e.target.value
          })
      }


    handleSubmit =(e)=>{
        e.preventDefault()
        let temp={
            name :this.state.name,
            email:this.state.email,
            role:this.state.role}
            console.log(temp)
        this.setState({
            data: [...this.state.data, temp]
          });
    }
      render(){
          return (
              <div>
                  <label>
                    ID: {this.state.id} 
                  </label><br/>
              <label>
                 Name: <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
              </label><br/>
              <label>
                Email: <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
              </label><br/>
             Role: <select onChange={this.handleChange}>
                  <option value="FullStack Developer">FullStack Developer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Android Developer">Android Developer</option>
              </select>
              <input type="submit" value="SUBMIT" onSubmit={this.handleSubmit}/>
              </div>
          )
      }
}