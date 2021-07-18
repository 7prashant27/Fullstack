import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home(){
    return(
        <div class="container-fluid">
            <div class="row my-5">
                <div class="col-12">
                    <img src="landing.png" alt="landing img"/>
                </div>
                <div class="col-12">
                <h1>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button class="btn btn-primary">Sign up now</button>
                </div>
            </div>

            <div class="row my-5">
                <div class="col-6">
                    <img src="largest-broker.svg" alt="landing img"/>
                </div>
                <div class="col-6">
                    <h2>Largest stock broker in India</h2>
                    <p>3+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <p>
                        <ul>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </ul>
                    </p>
                    <img src="press-logos.png" alt="press-logos"/>
                </div>
            </div>
            
        </div>
    )
}
export default Home