import React from "react"


function About() {
    return (
        <div style={{ margin: "auto", width: "80%", padding: "30px" }}>
            <hr />
            <h1>We pioneered the discount broking model in India.
                <br />
                Now, we are breaking ground with our technology.
            </h1>
            <hr />
            <div>
                <div>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that
                    traders and investors face in India in terms of cost, support,
                    and technology. We named the company Zerodha, a combination of Zero and "Rodha",
                    the Sanskrit word for barrier.
                </p>
                    <p>
                        oday, our disruptive pricing models and in-house technology have
                        made us the biggest stock broker in India in terms of active retail clients.
                </p>
                    <p>
                        Over 3+ million clients place millions of orders every day through our
                        powerful ecosystem of investment platforms,
                        contributing over 15% of all Indian retail trading volumes.
                </p>
                </div>
                <div>
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives
                        to empower retail traders and investors
                </p>
                    <p>
                        Rainmatter, our fintech fund and incubator, has invested in several
                        fintech startups with the goal of growing the Indian capital markets.
                </p>
                    <p>
                        And yet, we are always up to something new every day.
                        Catch up on the latest updates on our blog or see what the media is saying about us.
                </p>
                </div>
            </div>
            <hr />
            <div>
                <div style={{ float: "left", padding: "20px" }}>
                    <img src="https://zerodha.com/static/images/nithin-kamath.jpg" style={{ borderRadius: "50%", height: "100px", width: "100px" }}></img>
                    <h4>Nitin kamath</h4>
                    <p>Founder, CEO</p>
                </div>
                <div>
                    <h3>People</h3>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles <br />
                    he faced during his decade long stint as a trader. <br />
                    Today, Zerodha has changed the landscape of the Indian broking industry.

                    </p>
                    <p>
                        He was named one of the “Top 10 Businessmen to Watch Out for in 2016 in India”<br />
                     by The Economic Times for pioneering and scaling discount broking in India.

                    </p>
                </div>
                <hr />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* <img src="https://zerodha.com/static/images/nithin-kamath.jpg" style={{ borderRadius: "50%", height: "100px", width: "100px" }}></img>
                <img src="https://zerodha.com/static/images/nithin-kamath.jpg" style={{ borderRadius: "50%", height: "100px", width: "100px" }}></img>
                <img src="https://zerodha.com/static/images/nithin-kamath.jpg" style={{ borderRadius: "50%", height: "100px", width: "100px" }}></img> */}

            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <img src="https://zerodha.com/static/images/Austin.jpg" style={{ borderRadius: "50%", height: "100px", width: "100px" }}></img>
                    <h4>Austin Prakesh</h4>
                    <p>Director - Strategy</p>
                </div>
                <div>
                    <img src="https://zerodha.com/static/images/Nikhil.jpg" style={{ borderRadius: "50%", height: "100px", width: "100px" }}></img>
                    <h4>Nikhil Kamath</h4>
                    <p>Co-founder & CIO</p>
                </div>
                <div>
                    <img src="https://zerodha.com/static/images/Kailash.jpg" style={{ borderRadius: "50%", height: "100px", width: "100px" }}></img>
                    <h4>Dr. Kailash Nadh</h4>
                    <p>CTO</p>
                </div>
            </div>
            <hr />
        </div>

    )
}
export default About