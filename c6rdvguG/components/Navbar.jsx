import React from "react";
import globe from "../images/globe.png"

export default function Navbar(){
    return(
        <nav>
        <img src="../images/globe.png" alt="globe-logo" className="nav--logo"/>
        <h1 className="nav--header">My travel journal.</h1>
        </nav>
    )
}