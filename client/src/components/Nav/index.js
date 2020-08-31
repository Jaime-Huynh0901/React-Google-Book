import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    return (
        <div className="bg-dark text-white">
            <ul className="nav nav-tabs">
                <li className="navbar-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Google Books
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/books" className={location.pathname === "/books" ? "nav-link active" : "nav-link"}>
                        Saved
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;