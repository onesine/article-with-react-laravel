import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
            <a className="navbar-brand" href="/">
                Geek-Actuality
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/articles">Article <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;