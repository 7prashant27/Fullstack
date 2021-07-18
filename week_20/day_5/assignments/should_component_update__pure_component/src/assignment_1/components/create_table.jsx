import React from "react";

import CreateRow from "./create_row";

import Styles from "./component.module.css" 

export default class CraeteTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (


      <div className={Styles.table}>

        <div className={Styles.table_head}>
          {this.props.data[0] &&
            Object.keys(this.props.data[0]).map((element, index) => {
              if(element === "edit_mode" || element === "id"){
                return null
              }
              else{
               return <div key={index}><p>{element}</p></div> 
              }
            })}
        </div>

        {this.props.data.map((elem) => ( 
          <CreateRow
            key={elem.id}
            data={elem}
            del={() => this.props.del(elem.id)}
            edit={() => this.props.edit(elem.id)}
            handleChange={this.props.handleChange}
          />
        ))}

      </div>
    );
  }
}
