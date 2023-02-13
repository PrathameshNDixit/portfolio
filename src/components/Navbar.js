import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-body-tertiary"
                data-bs-theme="dark"
            >
                <div className="container-md">
                    <a href="" className="navbar-brand">
                        <span className="my-name">Prathamesh</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav ms-auto lead">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href="#"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href="#"
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    href="#"
                                    to="/projects"
                                >
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
