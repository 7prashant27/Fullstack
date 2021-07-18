import React from "react";
import Styles from "./ReactUpdate.module.css"

export default class HiringForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: "001",
          title: "Buy bread",
          status: true 
        },
        {
          id: "002",
          title: "Buy Milk",
          status: false 
        },
        {
          id: "003",
          title: "Laundry",
          status: false 
        },
        {
          id: "004",
          title: "Fix Motor",
          status: false 
        },
        {
          id: "005",
          title: "Laundry",
          status: false 
        },
        {
          id: "006",
          title: "Fix Motor",
          status: false 
        },
      ],
    };
  }

  handleClick=(id,event)=>{
        
    this.setState({
        status: this.state.data.map((elem) => {
            if(elem.id == id){
                return elem.status = !elem.status 
            }
        })
    })
  }

  render() {
    return (
        <div className={Styles.container}> 
          {this.state.data.map(item=> 
          <div className={item.status ? Styles.item+" "+Styles.done : Styles.item} key={item.id}j onClick={(e)=> this.handleClick(item.id,e)}>{item.title}</div>
          )}
        </div>
    );
  }
}
