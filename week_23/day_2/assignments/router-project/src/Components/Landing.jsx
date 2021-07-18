import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "../Context/AppContextProvider";
import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'




export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value : ""
    }

  }




  render() {
    return (

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cover1.jpg"
              alt="First slide"
              style={{ height: "300px", width: "100%" }}
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cover2.jpg"
              alt="Third slide"
              style={{ height: "300px", width: "100%" }}
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cover3.jpg"
              alt="Third slide"
              style={{ height: "300px", width: "100%" }}
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <br/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-5">
              <input type="text" 
              class="form-control"
               placeholder="search"
               value={this.state.value} 
               onChange={(e) => this.setState({value: e.target.value})}
               />
            </div>
            <div class="col-1">
              <button className="btn btn-danger" style={{ color: "white" }} onClick={()=> this.context.landingSearch(this.state.value)}>Search</button>
            </div>
          </div>

        </div>
        <h3>Browse by Category</h3>

        {/* <div className="container">
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
             
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              
            </Nav.Item>
            
          </Nav>
        </div> */}

      </div>

    )
  }

}

Landing.contextType = AppContext;
