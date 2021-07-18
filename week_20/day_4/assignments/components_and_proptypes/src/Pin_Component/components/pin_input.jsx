import React from "react";
import PropTypes from "prop-types";

export default class InputBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.values = new Array(this.props.length).fill("");
    this.elements = [];
  }

  componentDidMount(){
    console.log(this.elements)
      this.elements[0].focus()
  }


  handleChange = (e, i) => {
    console.log(e.keyCode)

    this.values[i] = e.target.value;
    // this.props.onChange(this.values.join(""));

    if(e.target.value !== "" && i == this.elements.length-1){

        if(this.values.join("") === "U3H2L"){
        this.elements.forEach((elem) => {elem.style.border="1px solid green"; elem.style.outline = "green" ; elem.style.background = "lightgreen"; elem.style.color = "green"}) 
        }
        else{
            this.elements.forEach((elem) => {elem.style.border="1px solid red"; elem.style.outline = "red" ;elem.style.background = "lightcoral" ;elem.style.color = "black"; })
            return
        }

    }

    else if(e.target.value === "" && i != 0){
        this.elements[i-1].focus()
        this.elements.forEach((elem) => {elem.style.border="1px solid red"; elem.style.outline = "red" ;elem.style.background = "white" ;elem.style.color = "black"})
    }
    else if(e.target.value !== "" && i < this.elements.length-1){
        this.elements[i+1].focus()
    }
    else if(this.elements[i] == "" && i < this.elements.length-1){
        this.elements[i+1].focus()
    }
  };

    handlePaste = (e) => {
       let x = e.clipboardData.getData("Text").split("")
        console.log(x)
            for(let i = 0  ; i < x.length ; i++){
                if(i > 4){
                    break
                }
             this.elements[i].focus()
             this.elements[i].value = x[i] 
            }
    }  


  render() {
    const { label } = this.props;
    return (
      <div style={{padding: "20px" , background: "#e8ecef" , width:"600px" , margin: "auto", marginTop:"40px"}}>
        <div>{label}</div>
        {this.values.map((item, i) => (
          <input 
          onPaste={this.handlePaste}
          maxLength="1"
            style={{ width: 40, height : 40 , padding: 20, margin: 10, fontSize: "40px" , textAlign:"center", borderRadius:"5px", border:"none" , outline:"blue"}}
            onChange={(e) => this.handleChange(e, i)}
            key={i}
            ref={(n) => (this.elements[i] = n)}
          />
        ))}
      </div>
    );
  }
}

InputBoxes.propTypes = {
  length: PropTypes.number.isRequired,
  label: PropTypes.string,
};

InputBoxes.defaultProps = {
  label: "",
};
