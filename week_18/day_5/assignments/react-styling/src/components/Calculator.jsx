import React from "react"

const Button = props =>(
    <>
       <button onClick={props.click}>{props.label}</button>
    </>
);


class Calculator extends React.Component{
   constructor(props){
       super(props);
       this.state={
           count:0


       }
   }

   handleAdd=()=>{
    this.setState(prev =>({
        count: prev.count + this.props.addByAmount
    }))
}

   handleReduce=()=>{
       this.setState(prev =>({
           count: prev.count - this.props.addByAmount
       }))
   }
  

   render(){
       return(
           <>
             <div>Count is : {this.state.count}</div>
             <Button label="ADD" click={this.handleAdd}/>
             <Button label="REDUCE" click={this.handleReduce}/>
           </>
       )
   }

}

export default Calculator