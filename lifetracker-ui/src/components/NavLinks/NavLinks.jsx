import React from "react";
import Navbar from "components/Navbar/Navbar";
import { Link } from "react-router-dom"
import "./NavLinks.css"



export default function NavLinks(){
    return (
        <div className="nav-links">
        <Link to="/Activity">Activity</Link>
        <Link to="/Nutrition">Nutrition</Link>
        <Link to="/Sleep">Sleep</Link>
        <Link to="/Excercise">Excercise</Link>
        <Link to ="/login">
                <button className="btn ghost">Login</button>
            </Link><Link to ="/register">
                <button className="btn primary">Sign Up</button>
            </Link>



        </div>
       
        
    )
}