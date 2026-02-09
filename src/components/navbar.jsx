import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src="./Images/logo.png" className="logo" alt="logo" />
            <img src="./Images/IIT_R_logo.png" className="logo" alt="logo" />
            <div className="navLinks">
                <span className="navLink"><a href="#Home">Home</a></span>
                <span className="navLink"><a href="#About">About</a></span>
                <span className="navLink"><a href="#Facilities">Facilities</a></span>
                <span className="navLink"><a href="#Team">Team</a></span>
                <span className="navLink"><a href="#Gallery">Gallery</a></span>
                <span className="navLink"><a href="#ContactUs">Contact Us</a></span>
            </div>
        </nav>
    )
}