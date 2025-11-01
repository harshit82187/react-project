import React from "react";
import {Link} from "react-router-dom";
import "../style/Header.css";

function Header(){
    return (
        <header className="header">
            <div className="header-left">
                <h1>Welcome to my website</h1>
            </div>
            <div className="header-right">
                <Link to="/login" className="header-btn">Login</Link>
                <Link to="/register" className="header-btn">Register</Link>
            </div>

        </header>
    )
}

export default Header;