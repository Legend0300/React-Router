import React from "react";
import "./App.css";
import {Link} from "react-router-dom";


export default function Nav() {
    return (
        <div className="nav">
        <ul>
            <Link to={"/shop"}>
            <li>Shop</li>
            </Link>
            
            <Link to={"/about"}>
            <li>About</li>
            </Link>

            <Link to={"/"}>
            <li>Home</li>
            </Link>
     
           
        </ul>


        </div>
    );
    }
