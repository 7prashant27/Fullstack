import React from "react"
import { Link } from "react-router-dom"



const link = [
    {
        to: '/',
        title:<img src ="https://zerodha.com/static/images/logo.svg" style={{height:"50px",width:"100px"}}/>
    },
    {
        to: '/about',
        title: "About"
    },
    {
        to: '/products',
        title: "Products"
    },
    {
        to: '/pricing',
        title: "Pricing"
    },
    {
        to: '/support',
        title: "Support"
    },
    {
        to: '/sign-up',
        title: "Sign up"
    }
]


function Navbar() {
    return (
        <>
            <div style={{ display: "flex",justifyContent:"space-around"}}>
                {link.map(({ to, title }) => {
                    return (
                        <Link key={to} style={{ padding: 10 }} to={to}>
                            {title}
                        </Link>
                    )
                })
                }
            </div>
        </>
    );
}

export default Navbar