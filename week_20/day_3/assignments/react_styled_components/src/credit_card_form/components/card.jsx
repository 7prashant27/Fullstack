import React from "react";

import Style from "./card.module.css";

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  margin-top:60px;
`;


const Circle = styled.div`
  width: 4px;
  height: 4px;
  background: rgba(225, 225, 225, 0.2);
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top : ${props => props.top};
  left : ${props => props.left};
`;

const LeftTrangle = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid rgba(225, 225, 225, 0.2);
  border-bottom: 50px solid transparent;
  z-index: -1;
  position: absolute;
  left: 20%;
  top: 20%;
`;

const RightTrangle = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid rgba(225, 225, 225, 0.2);
  border-bottom: 50px solid transparent;
  z-index: -1;
  position: absolute;
  left: 52%;
  top: 20%;
`;

const CardArea = styled.div`
  width: 350px;
  height: 200px;
  font-family: "Courier New", Courier, monospace;
  border-radius: 7px;
  position:relative;
  z-index: -2;
  color: white;
  box-shadow: 53px 53px 0px 0px rgba(235,232,234,1);
  margin:auto;
  margin-top:100px;
`;


const FormArea = styled.div`
position:relative;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const InputGroup = styled.div`
display:inline-block;
> div {
  float:left;
  width:120px;
  margin-right:15px;
};
 span {
  font-size:12px;
}
`;

const Button = styled.button`
  padding: 10px 70px 10px 70px;
  font-size: 1.1em;  
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: #f6425b;
  color:white;
  margin-left: 100px;
`;


const Amount = styled.h2`
  color:#f6425b;
  display:inline-block;
  margin-left:10px;
`;

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardno: "",
      month: null,
      year: null,
      name: "",
      cvv: null,
      cardType: "",
    };
  }

  

  getCreditCardType = (accountNumber) => {
    var result = "unknown";

    if (/^5[1-5]/.test(accountNumber)) {
      result = "mastercard";
    }

    else if (/^4/.test(accountNumber)) {
      result = "visa";
    }

    else if (/^3[47]/.test(accountNumber)) {
      result = "amex";
    } else {
      result = "rupay";
    }

    this.state.cardType = result;
  };

  componentDidUpdate() {
    if (this.state.cardno.length === 4) {
      this.getCreditCardType(Number(this.state.cardno));
      console.log(Number(this.state.cardno));
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if(name == "cardno"){
      if(this.state.cardno.length > 16){
        this.setState({
          [name]: value.slice(0,16),
        });
        return
      }
    }

    if(name == "month"){
      if(this.state.cardno.length > 2){
        this.setState({
          [name]: value.slice(0,2),
        });
        return
      }
    }

    if(name == "year"){
      if(this.state.cardno.length > 2){
        this.setState({
          [name]: value.slice(0,2),
        });
        return
      }
    }

    if(name == "cvv"){
      if(this.state.cardno.length > 3){
        this.setState({
          [name]: value.slice(0,3),
        });
        return
      }
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <CardContainer>
        {/* Card Area */}
        <div>
          {/* card */}

          <CardArea
            className={
              this.state.cardType === "mastercard"
                ? Style.mastercard
                : this.state.cardType === "visa"
                ? Style.visa
                : this.state.cardType === "amex"
                ? Style.amex
                : Style.unknown
            }
          >


            <Circle left="25%" top="2px"/>
            <Circle left="25%" top="10px"/>
            <Circle left="25%" top="20px"/>
            <Circle left="25%" top="30px"/>
            <Circle left="25%" top="40px"/>
            <Circle left="25%" top="50px"/>
            <Circle left="25%" top="60px"/>


            <Circle left="28%" top="2px"/>
            <Circle left="28%" top="10px"/>
            <Circle left="28%" top="20px"/>
            <Circle left="28%" top="30px"/>
            <Circle left="28%" top="40px"/>


            <Circle left="31%" top="2px"/>
            <Circle left="31%" top="10px"/>
            <Circle left="31%" top="20px"/>
            <Circle left="31%" top="30px"/>
            <Circle left="31%" top="40px"/>
            <Circle left="31%" top="50px"/>
            <Circle left="31%" top="60px"/>
            <Circle left="31%" top="70px"/>
            <Circle left="31%" top="80px"/>


            <Circle left="75%" top="120px"/>
            <Circle left="75%" top="130px"/>
            <Circle left="75%" top="140px"/>
            <Circle left="75%" top="150px"/>
            <Circle left="75%" top="160px"/>
            <Circle left="75%" top="170px"/>
            <Circle left="75%" top="180px"/>
            <Circle left="75%" top="190px"/>
            <Circle left="75%" top="198px"/>

            <Circle left="78%" top="160px"/>
            <Circle left="78%" top="170px"/>
            <Circle left="78%" top="180px"/>
            <Circle left="78%" top="190px"/>
            <Circle left="78%" top="198px"/>

            <Circle left="81%" top="140px"/>
            <Circle left="81%" top="150px"/>
            <Circle left="81%" top="160px"/>
            <Circle left="81%" top="170px"/>
            <Circle left="81%" top="180px"/>
            <Circle left="81%" top="190px"/>
            <Circle left="81%" top="198px"/>

            <LeftTrangle/>
            <RightTrangle/>
            <div className={Style.imgContainer}>
              <img
                className={Style.chip}
                src="chip.png"
                alt="chip"
                style={{ width: "50px" }}
              />
              {this.state.cardType === "mastercard"
                    ? <img
                    className={Style.type}
                    src="master_logo.png"
                    alt="Company"
                  />
                    : this.state.cardType === "visa"
                    ? <img
                    className={Style.type}
                    src="visa_logo.png"
                    alt="Company"
                  />
                    : this.state.cardType === "amex"
                    ? <img
                    className={Style.type}
                    src="amex_logo.png"
                    alt="Company"
                  />
                     : this.state.cardType === "rupay" ?  <img
                     className={Style.type}
                     src="rupay_logo.jpg"
                     alt="Company"
                   />: null}
            </div>

            <div className={Style.cardNo}>
              <p>{this.state.cardno.toString().slice(0, 4)}</p>
              <p>{this.state.cardno.toString().slice(4, 8)}</p>
              <p>{this.state.cardno.toString().slice(8, 12)}</p>
              <p>{this.state.cardno.toString().slice(12, 16)}</p>
            </div>

            <div className={Style.details}>
              <small>NAME</small>
              <small>VALID</small>
              <small>CVV</small>
            </div>

            <div className={Style.details}>
              <div>
                <p>{this.state.name}</p>
              </div>

              <div className={Style.valid}>
                <p>{this.state.month}</p>{" "}
                {this.state.month ? <p> / </p> : <p> </p>}{" "}
                <p>{this.state.year}</p>
              </div>

              <div>
                <p>{this.state.cvv}</p>
              </div>
            </div>
          </CardArea>
        </div>

        {/* end */}

        {/* Card Input */}

        <FormArea>
          <div>
          <h2 style={{margin:"10px 0px 10px 0px"}}>Payment details</h2>
          </div>
          
          <div className={Style.from}>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <label><img className={Style.icon} src="contact.svg"/><span className={Style.input_lable}>CARDHOLDER NAME</span ></label>
          </div>

          <div className={Style.from}>
            <input
              type="text"
              value={this.state.cardno}
              name="cardno"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <label><img className={Style.icon} src="pay.svg"/><span className={Style.input_lable}>CARD NUMBER</span ></label>
          </div>

          <InputGroup>
            <div className={Style.from}>
            <input
              type="text"
              value={this.state.month}
              name="month"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <label><img className={Style.icon} src="calendar.svg"/><span className={Style.input_lable}>EXPIRY MONTH</span ></label>
            </div>

            <div className={Style.from}>
            <input
              type="text"
              value={this.state.year}
              name="year"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <label><img className={Style.icon} src="calendar.svg"/><span className={Style.input_lable}>EXPIRY YEAR</span ></label>
            </div>

            <div className={Style.from}>
            <input
              type="text"
              value={this.state.cvv}
              name="cvv"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <label><img className={Style.icon} src="password.svg"/><span className={Style.input_lable}>CVV</span ></label>
            </div>

          </InputGroup>

          <div style={{margin:"30px 0px 30px 55px", display:"flex"}}>
            <h3 style={{paddingTop:"5px"}}>Payment amount :</h3>
            <Amount>12 300 ₹</Amount>
          </div>

          <div>      
          <Button type="button" value="SUBMIT" onClick={this.handleSubmit}>PAY</Button>
          </div>
          
        </FormArea>
      </CardContainer>
    );
  }
}
