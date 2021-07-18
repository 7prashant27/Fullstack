import React from "react";
import data from "./data";
import RestaurentCard from "./RestaurentsCard";

export default class Restaurent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRating: 0,
      paymentMethod: "all",
      sortMethod: null,
      activePage:1,
      perPage:5,

    };
  }

  handleRating = (rating) => {
    this.setState({
      filterRating: rating,
    })
  }

  handlePayment = (method) => {
    this.setState({
      paymentMethod :method
    })
  }

  handleSort = (order) => {
    // console.log(order)
    this.setState({
      sortMethod : order
    })
  }

  handlePageChange = (page) => {
     this.setState({
         activePage:page
     })
  }


  render() {

    const { filterRating , paymentMethod,sortMethod,activePage,perPage} = this.state
    const totalPages=Math.ceil(data.length/perPage)
  
    return (
      <div>
        <div>
        {
          new Array(totalPages).fill(0).map((a,i)=><button key={i} onClick= {()=> this.handlePageChange(i+1)} style={{backgroundColor:"#4aec68", padding:"10px",margin:"2px",borderRadius:"20px"}}>{i+1}</button>)
        }
        <div>
          {
            [4, 3, 2, 1, 0].map((rating) => {
              return (
                <>
                  <button key={rating} onClick={() => this.handleRating(rating)} style={{padding:"5px",color:"white",
                  backgroundColor:"#0039e6" , margin : " 2px" , borderRadius:"10px"}}>{
                    rating === 0 ? "ALL" : rating + " and above"}</button>
                </>
              )
            })

          }
        </div>
        <div>
        {
            ["cash","card","all"].map((method) => {
              return (
                <>
                  <button key={method} onClick={() => this.handlePayment(method)} style={{padding:"5px",
                  backgroundColor:"#ffff00" , margin : " 2px" , borderRadius:"10px"}}>
                    {
                      method 
                    }
                  </button>

                </>
              )
            })

          }
        </div>
        <div>
        {
            ["asc","desc"].map((order) => {
              return (
                <>
                  <button key={order} onClick={() => this.handleSort(order)} style={{padding:"5px", color:"white",
                  backgroundColor:"#ff407b" , margin : " 2px" , borderRadius:"10px"}}>
                    {
                       order
                    }
                  </button>

                </>
              )
            })

          }
        </div>
        </div>
        <h1>List Of Restaurents</h1>
        <div>
          {data &&
            data.filter(({aggregate_rating,payment_methods},index)=> {
              const {cash,card}=payment_methods
              let paymentCondition=true
              if(paymentMethod === "cash"){
                paymentCondition = cash ? true :false
              }
              else if(paymentMethod === "card"){
                paymentCondition =card ? true :false
              }
              //pagination
              const offset=(activePage -1)*perPage
              const pageCondition =index >=offset  && index <offset +perPage



              return aggregate_rating >= filterRating && paymentCondition && pageCondition
            }).sort((a,b) => {
              // console.log(sortMethod)
              if(sortMethod == null) {
                return 0
              }
              if(sortMethod === "asc"){
                return a.average_Cost_for_two - b.average_Cost_for_two
              }
              else if (sortMethod === "desc"){
                return b.average_Cost_for_two -a.average_Cost_for_two
              }
            })
            .map((items) => <RestaurentCard data={items} key={items.id} />)}
        </div>
      </div>
    );
  }
}
