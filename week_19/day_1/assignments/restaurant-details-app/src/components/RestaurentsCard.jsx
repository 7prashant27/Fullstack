import React from "react";

const RestaurentCard = ({ data }) => {
  const {
    restaurant_name,
    restaurant_images,
    payment_methods: { card, cash },
    Address,
    Cuisines,
    average_Cost_for_two,
    aggregate_rating,
    reviews,
    Votes,
    restaurant_id
  } = data;

  return (
    <>
      {

      }
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddng: 15,
          border: "1px solid black",width:"700px"
        }}
      >
        <img
          src={restaurant_images}
          alt={restaurant_name}
          style={{ width: "200px", margin: "10px" }}
        />

        <div>
          <h2 style={{color:"red",fontWeight:"bold"}}>{restaurant_name}</h2>
          <p>ID : {restaurant_id}</p>
          <p>Address: {Address}</p>
          <p>Category : {Cuisines}</p>
          <p> Cost for two: {average_Cost_for_two}</p>
          <p>Accepts : 
              {
                cash &&  card ? " Cash  and Card " : card ? " Card" : " Cash"
              }
          </p>
        </div>

        
        <h4
          style={{
            border: "1px solid black",
            height: 20,
            color: "white",
            backgroundColor: "green",
            margin: "2px",
            textAlign:"right",
            
          }}
        >
          {aggregate_rating}
         
        </h4>
        <br/>
        <p
          style={{
           
            height: 20,
          
            margin: "2px",
            textAlign:"right",
            
          }}
        >
           Votes: {Votes}
           <br/>
           Reviews : {reviews}
         
        </p>
       


      </div>
      <div style={{border:"1px solid black" , width :"700px"}}>
         <p style={{textAlign:"right"}}> order online </p>
       </div>
    </>
  );
};

export default RestaurentCard;
