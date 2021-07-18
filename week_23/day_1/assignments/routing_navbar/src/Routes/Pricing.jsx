import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Pricing(){
    return(
        <div class="container-fliud">
            <div class="row">
                <div class="col-12">
                    <h1>Pricing</h1>
                    <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <img src="pricing-eq.svg" alt=""/>
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div class="col-4">
                    <img src="other-trades.svg" alt=""/>
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>

                <div class="col-4">
                    <img src="pricing-eq.svg" alt=""/>
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            
        </div>
    )
}
export default Pricing