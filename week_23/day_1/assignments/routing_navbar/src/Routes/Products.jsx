import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Products(){
    return(
        <div class="container-fliud">
            <div class="row">
                <div class="col-12">
                    <h1>Technology – Investments</h1>
                    <p>Sleek, modern, and intuitive trading platforms</p>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <img src="products-kite.png" alt="kite"/>
                </div>
                <div class="col-6">
                    <h1>Kite</h1>
                    <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts,
                         an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                     
                </div>
            </div>
        </div>
    )
}
export default Products