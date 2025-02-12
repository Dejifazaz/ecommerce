import React from "react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Music Store Logo" className="logo"/>
            </div>

            {/* Centered Search Bar */}
            <div className="search-container">
                <SearchBar/>
            </div>

            {/* Navigation Links */}
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            {/* Cart & Register Icons */}
            <div className="icon-container">
                <a href="/cart" className="icon-link">
                    <FaShoppingCart className="icon" title="Cart"/>
                </a>
                <a href="/register" className="icon-link">
                    <FaUserPlus className="icon" title="Register"/>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
