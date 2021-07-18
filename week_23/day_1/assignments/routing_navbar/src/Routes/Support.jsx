import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Support(){
    return(
        <div class="container-fluid">
            <div class="row" style={{backgroundColor:"blue", color:"white"}}>
                <div class="col-6">
                    <p>Support Portal</p>
                    <p>Search for an answer or browse help topics to create a ticket</p>
                </div>
                <div class="col-6">
                <p>Login with Kite</p>
                <p>Featured</p>
                    <p>You can submit your IPO application on Console. 
The UPI mandate for your application can be delayed by the bank. Click here to 
check the reasons why you may not receive a mandate request. </p>
                </div>
            </div>
        </div>
    )
}
export default Support